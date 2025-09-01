"use client";

export default function ErrorComponent({
  error,
}: {
  error: Error & { digest?: string; status?: number };
}) {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#e23e3e", marginBottom: "1rem" }}>
        {error.status === 404 ? "Product Not Found" : "Something went wrong!"}
      </h2>
      <p style={{ marginBottom: "1.5rem" }}>
        {error.status === 404
          ? `The product you're looking for doesn't exist.`
          : `We encountered a problem loading the product details. Please try again.`}
      </p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        style={{
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
