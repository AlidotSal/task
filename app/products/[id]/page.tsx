"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import type { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const fromPage = searchParams.get("fromPage") || "1";
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {(error as Error).message}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href={`/?page=${fromPage}`}
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative h-96 border border-gray-300 dark:border-gray-800">
            <Image
              src={product.images[0] || product.thumbnail}
              alt={product.title}
              fill
              style={{ objectFit: "contain" }}
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1).map((img, index) => (
              <div
                key={img}
                className="relative h-24 border border-gray-300 dark:border-gray-800"
              >
                <Image
                  src={img}
                  alt={`${product.title} image ${index + 2}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {product.description}
          </p>

          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">
              ★ {product.rating.toFixed(1)}
            </span>
            <span className="text-gray-500">
              ({product.reviews.length} reviews)
            </span>
          </div>

          <div className="mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="ml-2 text-green-500">
                {product.discountPercentage}% off
              </span>
            )}
          </div>

          <dl className="space-y-2 mb-6">
            <div className="flex">
              <dt className="font-semibold w-32">Category:</dt>
              <dd>{product.category}</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Brand:</dt>
              <dd>{product.brand}</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Stock:</dt>
              <dd>{product.stock} available</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Warranty:</dt>
              <dd>{product.warrantyInformation}</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Shipping:</dt>
              <dd>{product.shippingInformation}</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Return Policy:</dt>
              <dd>{product.returnPolicy}</dd>
            </div>
          </dl>

          <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-36">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map((review) => (
            <div
              key={review.reviewerName + review.comment}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{review.reviewerName}</span>
                <span className="text-yellow-500">★ {review.rating}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {review.comment}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
