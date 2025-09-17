import { type DBSchema, type IDBPDatabase, openDB } from "idb";
import type { CryptoCurrency } from "@/types";

interface CryptoDB extends DBSchema {
  cryptocurrencies: {
    key: number;
    value: CryptoCurrency;
    indexes: { "by-rank": number };
  };
}

let dbPromise: Promise<IDBPDatabase<CryptoDB>> | null = null;

export const DB_NAME = "crypto-db";
export const STORE_NAME = "cryptocurrencies";

export const getDB = () => {
  if (!dbPromise) {
    dbPromise = openDB<CryptoDB>(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
          store.createIndex("by-rank", "cmcRank");
        }
      },
    });
  }
  return dbPromise;
};

export const saveCoinsToDB = async (coins: CryptoCurrency[]) => {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await Promise.all(coins.map((coin) => tx.store.put(coin)));
  await tx.done;
};

export const getCoinsFromDB = async (page: number, limit: number): Promise<CryptoCurrency[]> => {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const index = tx.store.index("by-rank");

  const coins: CryptoCurrency[] = [];
  const offset = Math.max(0, page - 1) * limit;

  let i = 0;
  for await (const cursor of index.iterate()) {
    if (offset > 0 && i === 0) cursor.advance(offset);
    if (i === limit) break;
    coins.push(cursor.value);
    i++;
  }

  return coins;
};
