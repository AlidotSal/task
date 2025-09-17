import { DB_NAME, getCoinsFromDB, getDB, STORE_NAME, saveCoinsToDB } from "@/lib/indexedDB"; // Adjust path as needed
import type { CryptoCurrency } from "@/types";

interface MockCryptoCurrency extends CryptoCurrency {
  id: number;
  cmcRank: number;
  name: string;
}

export const bitcoin = {
  id: 1,
  name: "Bitcoin",
  symbol: "BTC",
  slug: "bitcoin",
  cmcRank: 1,
  quotes: [
    {
      name: "BTC",
      price: 1,
      volume24h: 370922,
      volume7d: 2845054,
      volume30d: 13742329,
      marketCap: 19921818,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
    },
    {
      name: "ETH",
      price: 26,
      volume24h: 9652143,
      volume7d: 74033982,
      volume30d: 357602769,
      marketCap: 518405364,
      percentChange1h: 0.16,
      percentChange24h: 1.56,
      percentChange7d: 0.35,
    },
    {
      name: "USD",
      price: 116481,
      volume24h: 43205499062,
      volume7d: 331395316298,
      volume30d: 1600722793078,
      marketCap: 2320516938668,
      percentChange1h: -0.1,
      percentChange24h: 0.95,
      percentChange7d: 4.77,
    },
  ],
};
export const etherium = {
  id: 1027,
  name: "Ethereum",
  symbol: "ETH",
  slug: "ethereum",
  cmcRank: 2,
  quotes: [
    {
      name: "BTC",
      price: 0.038,
      volume24h: 271305,
      volume7d: 1624888,
      volume30d: 9063156,
      marketCap: 4638554,
      percentChange1h: -0.16,
      percentChange24h: -1.54,
      percentChange7d: -0.35,
    },
    {
      name: "ETH",
      price: 1,
      volume24h: 7059916,
      volume7d: 42282828,
      volume30d: 235841376,
      marketCap: 120704430,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
    },
    {
      name: "USD",
      price: 4476,
      volume24h: 31602016474,
      volume7d: 189268914283,
      volume30d: 1055687200349,
      marketCap: 540304352696,
      percentChange1h: -0.27,
      percentChange24h: -0.6,
      percentChange7d: 4.41,
    },
  ],
};

describe("Crypto DB", () => {
  beforeEach(async () => {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    await tx.store.clear();
    await tx.done;
  });

  afterAll(async () => {
    const db = await getDB();
    db.close();
    indexedDB.deleteDatabase(DB_NAME);
  });

  it("initializes the DB and creates the store and index", async () => {
    const db = await getDB();
    expect(db.objectStoreNames.contains(STORE_NAME)).toBe(true);

    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.store;
    expect(store.indexNames.contains("by-rank")).toBe(true);
  });

  it("saves coins to the DB", async () => {
    const coins: MockCryptoCurrency[] = [bitcoin, etherium];

    await saveCoinsToDB(coins);

    const db = await getDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const [savedCoin1, savedCoin2] = await tx.store.getAll();
    await tx.done;

    expect(savedCoin1).toEqual(coins[0]);
    expect(savedCoin2).toEqual(coins[1]);
  });

  it("retrieves coins from DB with pagination (page 1)", async () => {
    const coins: MockCryptoCurrency[] = Array.from({ length: 15 }, (_, index) => ({
      ...bitcoin,
      id: index + 1,
      cmcRank: index + 1,
      name: `Coin ${index + 1}`,
      symbol: ``,
    }));

    await saveCoinsToDB(coins);

    const page1 = await getCoinsFromDB(1, 10);
    expect(page1).toHaveLength(10);
    expect(page1[0].id).toBe(1);
    expect(page1[9].id).toBe(10);
  });

  it("sorts retrieved coins by cmcRank (ascending)", async () => {
    const coins: MockCryptoCurrency[] = [
      {
        ...bitcoin,
        id: 3,
        cmcRank: 3,
        name: "Coin 3",
        symbol: "symb 3",
      },
      {
        ...bitcoin,
        id: 1,
        cmcRank: 1,
        name: "Coin 1",
        symbol: "symb 1",
      },
      {
        ...etherium,
        id: 2,
        cmcRank: 2,
        name: "Coin 2",
        symbol: "symb 2",
      },
    ];

    await saveCoinsToDB(coins);

    const retrieved = await getCoinsFromDB(1, 10);
    expect(retrieved).toHaveLength(3);
    expect(retrieved[0].cmcRank).toBe(1);
    expect(retrieved[1].cmcRank).toBe(2);
    expect(retrieved[2].cmcRank).toBe(3);
  });

  it("handles invalid page (e.g., page <= 0) by starting from offset 0", async () => {
    const coins: MockCryptoCurrency[] = Array.from({ length: 5 }, (_, index) => ({
      ...bitcoin,
      id: index + 1,
      cmcRank: index + 1,
      name: "",
      symbol: "",
    }));

    await saveCoinsToDB(coins);

    const page0 = await getCoinsFromDB(0, 3);
    expect(page0).toHaveLength(3);
    expect(page0[0].id).toBe(1);

    const pageNegative = await getCoinsFromDB(-1, 3);
    expect(pageNegative).toHaveLength(3);
    expect(pageNegative[0].id).toBe(1);
  });

  it("returns empty array if no coins in DB", async () => {
    const retrieved = await getCoinsFromDB(1, 10);
    expect(retrieved).toEqual([]);
  });

  it("handles limit larger than available coins", async () => {
    const coins: MockCryptoCurrency[] = Array.from({ length: 5 }, (_, index) => ({
      ...etherium,
      id: index + 1,
      cmcRank: index + 1,
      name: "",
      symbol: "",
    }));

    await saveCoinsToDB(coins);

    const retrieved = await getCoinsFromDB(1, 10);
    expect(retrieved).toHaveLength(5);
  });
});
