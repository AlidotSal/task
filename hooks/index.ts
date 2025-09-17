import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchCryptos } from "@/lib/api";
import { getCoinsFromDB, saveCoinsToDB } from "@/lib/indexedDB";
import type { Theme } from "@/types";

export function useTheme(): {
  theme: Theme;
  toggleTheme: (newTheme: "light" | "dark") => Promise<void>;
} {
  const [theme, setTheme] = useState<Theme>(undefined);

  useEffect(() => {
    if (document === undefined) return;
    const pageTheme = document.documentElement.className as Theme;
    setTheme(pageTheme);
  }, []);

  const toggleTheme = async (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    await cookieStore.set({
      name: "theme",
      value: newTheme,
      expires: Date.now() + 7 * 24 * 60 * 60,
      domain: "localhost",
    });
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return { theme, toggleTheme };
}

export const useCryptoData = () => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const [isLoadingFromDB, setIsLoadingFromDB] = useState(true);

  useEffect(() => {
    const loadFromDB = async () => {
      setIsLoadingFromDB(true);
      try {
        const limit = page === 0 ? 10 : 50;
        const dbData = await getCoinsFromDB(page, limit);
        if (dbData && Array.isArray(dbData) && dbData.length === limit) {
          queryClient.setQueryData(["cryptocurrencies", page], dbData);
        }
      } catch (error) {
        console.error("Error loading from DB:", error);
      } finally {
        setIsLoadingFromDB(false);
      }
    };
    loadFromDB();
  }, [page, queryClient]);

  const query = useQuery({
    queryKey: ["cryptocurrencies", page],
    queryFn: async () => {
      const limit = page === 0 ? 10 : 50;
      const start = page < 2 ? 1 : 50 + (page - 2) * 50 + 1;

      const newCoins = await fetchCryptos(start, limit);

      if (page === 0) await saveCoinsToDB(newCoins);

      return newCoins;
    },
    enabled: !isLoadingFromDB,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const addPage = () => {
    setPage((prev) => prev + 1);
  };

  return { ...query, page, addPage, setPage };
};
