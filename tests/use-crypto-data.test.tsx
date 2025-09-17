import "core-js/features/structured-clone";
import "fake-indexeddb/auto";

jest.mock("@/lib/api", () => ({
  fetchCryptos: jest.fn(),
}));

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useCryptoData } from "@/hooks";
import { fetchCryptos } from "@/lib/api";
import { DB_NAME, getDB, STORE_NAME } from "@/lib/indexedDB";

const mockedFetchCryptos = fetchCryptos as jest.MockedFunction<typeof fetchCryptos>;

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useCryptoData Hook", () => {
  beforeEach(async () => {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    await tx.store.clear();
    await tx.done;
  });

  afterAll(async () => {
    const db = await getDB();
    await db.close();
    await indexedDB.deleteDatabase(DB_NAME);
  });

  it("should fetch coins and return data", async () => {
    const mockData = [{ id: 1, name: "Bitcoin", symbol: "BTC", cmcRank: 1 }];

    mockedFetchCryptos.mockResolvedValue(mockData);

    const { result } = renderHook(() => useCryptoData(), { wrapper: createWrapper() });

    expect(result.current.isPending).toBe(true);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
  });
});
