export const fetchCryptos = jest.fn();
jest.mock("@/lib/api", () => ({
  fetchCryptos: jest.fn(),
}));
