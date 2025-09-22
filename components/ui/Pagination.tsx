import { memo } from "react";

interface Props {
  page: number;
  addPage: () => void;
  setPage: (p: number) => void;
  isPending: boolean;
}
export const Pagination = memo(({ page, addPage, setPage, isPending }: Props) => {
  const showPageNumbers = page > 0;

  const pages = [];
  let startPage = Math.max(1, page - Math.floor(5 / 2));
  const endPage = Math.min(100, startPage + 5 - 1);
  if (endPage - startPage + 1 < 5) {
    startPage = Math.max(1, endPage - 5 + 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {showPageNumbers ? (
        <div className="flex items-center gap-2">
          {pages.map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => setPage(pageNum)}
              disabled={isPending}
              className={`px-4 py-2 rounded-lg shadow-md font-semibold transition-colors ${
                pageNum === page ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {pageNum}
            </button>
          ))}
        </div>
      ) : (
        page === 0 &&
        !isPending && (
          <button
            type="button"
            onClick={addPage}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Show More
          </button>
        )
      )}
    </div>
  );
});
