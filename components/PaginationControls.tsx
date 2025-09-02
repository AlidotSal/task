import Link from "next/link";
import type { PaginationControlsProps } from "@/types";

export default function PaginationControls({
  currentPage,
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) {
  const buttonClasses =
    "cursor-pointer bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed";

  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <Link href={currentPage - 1 === 1 ? "/" : `/?page=${currentPage - 1}`}>
        <button type="button" className={buttonClasses} disabled={!hasPrevPage}>
          &larr; Prev
        </button>
      </Link>

      <span className="text-lg font-medium">Page {currentPage}</span>

      <Link href={`/?page=${currentPage + 1}`}>
        <button type="button" className={buttonClasses} disabled={!hasNextPage}>
          Next &rarr;
        </button>
      </Link>
    </div>
  );
}
