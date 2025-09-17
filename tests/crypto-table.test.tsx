import { render, screen } from "@testing-library/react";
import { CryptoTable } from "@/components/crypto/CryptoTable";
import type { CryptoCurrency } from "@/types";
import { bitcoin, etherium } from "./crypto-db.test";

const mockCoins: CryptoCurrency[] = [bitcoin, etherium];

describe("CryptoTable Component", () => {
  it("should show skeleton rows when loading is true and there are no coins", () => {
    const { container } = render(<CryptoTable coins={[]} isLoading={true} />);

    const skeletonRows = container.querySelectorAll("tr.animate-pulse");
    expect(skeletonRows.length).toBeGreaterThan(0);
    expect(screen.queryByText("Bitcoin")).not.toBeInTheDocument();
  });

  it("should render coin data when loading is false", () => {
    const { container } = render(<CryptoTable coins={mockCoins} isLoading={false} />);

    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();

    expect(screen.getByText("$4476.00")).toBeInTheDocument();

    const skeletonRows = container.querySelectorAll("tr.animate-pulse");
    expect(skeletonRows.length).toBe(0);
  });
});
