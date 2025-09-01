import Link from "next/link";
import PaginationControls from "@/components/PaginationControls";
import ProductCard from "@/components/ProductCard";
import type { ApiResponse } from "@/types";

const PAGE_LIMIT = 12;

async function fetchProducts(page: number): Promise<ApiResponse> {
  const skip = (page - 1) * PAGE_LIMIT;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${PAGE_LIMIT}&skip=${skip}`,
    { cache: "reload" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;
  const page = parseInt(String(params.page || "1"), 10);
  const data = await fetchProducts(page);

  const hasNextPage = data.total > page * PAGE_LIMIT;
  const hasPrevPage = page > 1;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}?fromPage=${page}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <PaginationControls
        currentPage={page}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </main>
  );
}
