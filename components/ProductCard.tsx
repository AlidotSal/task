import Image from "next/image";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-900 shadow-md hover:shadow-xl hover:scale-101 dark:shadow-black transition-all duration-200 group">
      <div className="relative w-full h-72">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
          className="cursor-pointer object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-8">
          <p className="text-xl font-semibold text-blue-600">
            ${product.price}
          </p>
          <div className="flex items-center text-yellow-500">
            <span className="mr-1">⭐</span>
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
