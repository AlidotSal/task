import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const start = searchParams.get("start") || "1";
    const limit = searchParams.get("limit") || "10";

    const response = await axios.get(
      `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${start}&limit=${limit}&sortBy=rank&sortType=desc&convert=USD,BTC,ETH&cryptoType=all&tagType=all&audited=false&aux=ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap`,
    );

    const data = response.data.data.cryptoCurrencyList;
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
