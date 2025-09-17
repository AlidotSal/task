export async function fetchCryptos(start: number, limit: number) {
  const params = new URLSearchParams({
    start: start.toString(),
    limit: limit.toString(),
  });
  const resp = await fetch(`/api/crypto?${params}`);
  if (!resp.ok) {
    throw new Error("Failed to fetch cryptos");
  }
  const data = await resp.json();
  return data;
}
