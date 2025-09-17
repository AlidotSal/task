"use client";

import { CryptoTable } from "@/components/crypto/CryptoTable";
import Pagination from "@/components/ui/Pagination";
import Popup from "@/components/ui/Popup";
import { useCryptoData } from "@/hooks";

export default function HomePage() {
  const { data: coins, isLoading, isError, error, page, addPage, setPage, isPending } = useCryptoData();

  if (isError) {
    return <div className="text-red-500 text-center p-8">Error: {error.message}</div>;
  }

  return (
    <main className="relative container mx-auto p-1 md:p-8">
      <Popup />
      <h1 className="text-3xl font-bold mb-12">Cryptocurrency Prices</h1>

      <CryptoTable coins={coins || []} isLoading={isLoading} />

      <Pagination page={page} addPage={addPage} setPage={setPage} isPending={isPending} />
    </main>
  );
}
