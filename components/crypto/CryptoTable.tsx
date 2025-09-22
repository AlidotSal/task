import Image from "next/image";
import { memo } from "react";
import type { CryptoCurrency } from "@/types";
import { SkeletonRow } from "../ui/Skeleton";

interface CryptoTableProps {
  coins: CryptoCurrency[];
  isLoading: boolean;
}

export const CryptoTable = memo(({ coins, isLoading }: CryptoTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="">
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="w-16 p-4 text-left">#</th>
            <th className="w-96 p-4 text-left">Name</th>
            <th className="w-32 p-4 text-left">Price</th>
            <th className="w-32 p-4 text-left hidden md:table-cell">1h %</th>
            <th className="w-32 p-4 text-left hidden md:table-cell">24h %</th>
            <th className="w-32 p-4 text-left hidden md:table-cell">7d %</th>
            <th className="w-64 p-4 text-left">24h Volume</th>
            <th className="w-64 p-4 text-left hidden md:table-cell">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array.from({ length: 50 }).map((_, i) => <SkeletonRow key={i} />)
            : coins?.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-b border-gray-200 hover:bg-gray-200 dark:border-gray-800 dark:hover:bg-gray-900"
                >
                  <td className="p-4">{coin.cmcRank}</td>
                  <td className="p-4 text-gray-700 dark:text-gray-200 text-sm font-semibold">
                    <Image
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                      alt={`${coin.name} logo`}
                      width={36}
                      height={36}
                      decoding="async"
                      loading="lazy"
                      className="inline-block rounded-full mr-2 p-1"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-coin.png";
                      }}
                    />
                    {coin.name}{" "}
                    <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">{coin.symbol}</span>
                  </td>
                  <td className="p-4">${coin.quotes[2].price.toFixed(2)}</td>
                  <td
                    className={`hidden md:table-cell ${coin.quotes[2].percentChange1h > 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {coin.quotes[2].percentChange1h.toFixed(2)}%
                  </td>
                  <td
                    className={`hidden md:table-cell ${coin.quotes[2].percentChange24h > 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {coin.quotes[2].percentChange24h.toFixed(2)}%
                  </td>
                  <td
                    className={`hidden md:table-cell ${coin.quotes[2].percentChange7d > 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {coin.quotes[2].percentChange7d.toFixed(2)}%
                  </td>
                  <td className="p-4">${Math.round(coin.quotes[2].volume24h).toLocaleString()}</td>
                  <td className="p-4 hidden md:table-cell">${Math.round(coin.quotes[2].marketCap).toLocaleString()}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
});
