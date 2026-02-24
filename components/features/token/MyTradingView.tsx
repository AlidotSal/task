import { useEffect, useRef, useState } from "react";
import {
  ChartingLibraryWidgetOptions,
  IBasicDataFeed,
  IDatafeedQuotesApi,
  ResolutionString,
  widget as TradingViewWidget,
} from "@/public/static/charting_library";
import { IOhlcvData } from "@/types/datafeed.type";
import { usePathname } from "next/navigation";
import { formatChart } from "@/utils/numbers";

interface Props {
  chartOptions: Partial<ChartingLibraryWidgetOptions>;
  ohlcvData: IOhlcvData[];
  secondaryOhlcvData?: IOhlcvData[];
  secondarySymbol?: string;
  className?: string;
  tokenDescription: string;
  tokenExchange: string;
  theme: "dark" | "light";
  customSymbols?: Array<{
    symbol: string;
    full_name: string;
    description: string;
  }>;
}

let intervalId: NodeJS.Timeout;

const MyTradingView = ({
  chartOptions,
  ohlcvData,
  secondaryOhlcvData,
  secondarySymbol,
  theme,
  tokenDescription,
  tokenExchange,
  customSymbols = [],
}: Props) => {
  const chartContainerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const [chartIsReady, setChartIsReady] = useState(false);
  const myWidget = useRef<any>();
  const compareStudyRef = useRef<any>(null);
  const [compareSymbol, setCompareSymbol] = useState<string | null>(null);
  const pathname = usePathname();

  const dataFeed = (
    ohlcvData: IOhlcvData[],
    tokenDescription: string,
    tokenExchange: string
  ): IBasicDataFeed | (IBasicDataFeed & IDatafeedQuotesApi) => {
    return {
      onReady: (callback) => {
        setTimeout(
          () =>
            callback({
              supported_resolutions: [
                "1S",
                "10",
                "15",
                "30",
                "60",
                "240",
                "480",
                "720",
                "1440",
                "3D",
                "W",
                "M",
              ] as ResolutionString[],
              supports_marks: true,
              supports_timescale_marks: true,
              supports_time: true,
            }),
          0
        );
      },
      resolveSymbol: (symbolName, onSymbolResolvedCallback) => {
        console.log("Resolving symbol:", symbolName);
        setTimeout(() => {
          const isSecondary = symbolName === "SECONDARY";
            if (!symbolName) {
    return;
  }

  if (symbolName === "SECONDARY") {
    onSymbolResolvedCallback({
      name: "SECONDARY",
      description: isSecondary
              ? "Comparison Token"
              : tokenDescription,
      exchange: tokenExchange,
      timezone: "Etc/UTC",
      minmov: 1,
      session: "24x7",
      has_intraday: true,
      has_daily: true,
      has_weekly_and_monthly: true,
      type: "crypto",
      pricescale: 100000000,
      ticker: "SECONDARY",
      listed_exchange: "Listed exchange",
      format: "price",
      supported_resolutions: ["1", "5", "15", "60", "240", "1D"] as ResolutionString[],
    });
    return;
  }
          onSymbolResolvedCallback({
            name: symbolName,
            description: isSecondary
              ? "Comparison Token"
              : tokenDescription,
            exchange: tokenExchange,
            timezone: "Etc/UTC",
            minmov: 1,
            session: "24x7",
            has_intraday: true,
            has_daily: true,
            has_weekly_and_monthly: true,
            type: "crypto",
            supported_resolutions: [
              "1S",
              "10",
              "15",
              "30",
              "60",
              "240",
              "480",
              "720",
              "1440",
              "3D",
              "W",
              "M",
            ] as ResolutionString[],
            pricescale: 100000000,
            ticker: symbolName,
            listed_exchange: "Listed exchange",
            format: "price",
          });
        }, 0);
      },
      getBars: (symbolInfo, resolution, periodParams, onResult) => {
        setTimeout(() => {
          const sourceData =
            symbolInfo.name === "SECONDARY"
              ? secondaryOhlcvData || []
              : ohlcvData;

          const bars = sourceData
            .filter(
              (bar) =>
                bar.time >= periodParams.from &&
                bar.time <= periodParams.to
            )
            .map((bar) => ({
              time: bar.time * 1000,
              open: bar.open,
              high: bar.high,
              low: bar.low,
              close: bar.close,
              volume: bar.volume,
            }));

          if (bars.length) {
            onResult(bars, { noData: false });
          } else {
            onResult([], { noData: true });
          }
        }, 50);
      },
      subscribeBars: (symbolInfo, resolution, onRealtimeCallback) => {
        intervalId = setInterval(() => {
          const latestBar = {
            time: ohlcvData[ohlcvData.length - 1].time * 1000,
            open: ohlcvData[ohlcvData.length - 1].open,
            high: ohlcvData[ohlcvData.length - 1].high,
            low: ohlcvData[ohlcvData.length - 1].low,
            close: ohlcvData[ohlcvData.length - 1].close,
            volume: ohlcvData[ohlcvData.length - 1].volume,
          };

          if (latestBar) {
            onRealtimeCallback(latestBar);
          }
        }, 10000);
      },
      unsubscribeBars: () => {
        clearInterval(intervalId);
      },
      searchSymbols: (
        userInput,
        exchange,
        symbolType,
        onResultReadyCallback
      ) => {
        const defaultSymbols = [
          {
            symbol: "TURBO",
            full_name: "TURBO / USD",
            description: "Turbo",
          },
        ];

        const symbols = [...defaultSymbols, ...customSymbols];

        const filteredSymbols = symbols
          .filter((symbol) =>
            symbol.full_name.toLowerCase().includes(userInput.toLowerCase())
          )
          .map((symbol) => ({
            ...symbol,
            exchange: tokenExchange,
            type: "crypto",
          }));

        onResultReadyCallback(filteredSymbols);
      },
    };
  };

  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: chartOptions.symbol || "DefaultSymbol",
      datafeed: dataFeed(ohlcvData, tokenDescription, tokenExchange),
      interval:
        (chartOptions.interval as ResolutionString) ||
        ("4H" as ResolutionString),
      container: chartContainerRef.current,
      library_path: chartOptions.library_path,
      locale: "en",
      debug: true,
      disabled_features: ["use_localstorage_for_settings"],
      enabled_features: ["study_templates"],
      charts_storage_url: chartOptions.charts_storage_url,
      charts_storage_api_version: chartOptions.charts_storage_api_version,
      client_id: chartOptions.client_id,
      user_id: chartOptions.user_id,
      fullscreen: chartOptions.fullscreen,
      autosize: chartOptions.autosize,
      timezone: "Etc/UTC",
      theme: theme || "dark",
      custom_formatters: {
        priceFormatterFactory: () => ({
          format: (price: number) => formatChart(price)
        })
      },
    };

    myWidget.current = new TradingViewWidget(widgetOptions);

    return () => {
      myWidget.current.remove();
    };
  }, [pathname]);

  useEffect(() => {
    if (myWidget.current) {
      myWidget.current.onChartReady(() => {
        setChartIsReady(true);
      });
    }
  }, [myWidget]);

  useEffect(() => {
    if (chartIsReady) myWidget.current.changeTheme(theme);
  }, [theme, chartIsReady]);

  useEffect(() => {
    if (chartIsReady) {
      myWidget.current._options.datafeed = dataFeed(
        ohlcvData,
        tokenDescription,
        tokenExchange
      );
      myWidget.current.activeChart().resetData();
      }
  }, [ohlcvData, tokenDescription, tokenExchange, chartIsReady]);

useEffect(() => {
  if (!chartIsReady) return;

  const chart = myWidget.current.activeChart();

  // Remove old study
  if (compareStudyRef.current) {
    chart.removeEntity(compareStudyRef.current);
    compareStudyRef.current = null;
  }

  if (!secondaryOhlcvData?.length) return;

  chart.createStudy(
    "Compare",
    false,
    false,
    ["SECONDARY"],
    {
      "compare.mode": 0,       // 🔥 prevents percentage switch
      "plot.color": "#FF3B3B",
      "plot.linewidth": 2,
      "priceScale": "new-right",      // 🔥 separate scale
    }
  ).then((studyId: string) => {
    compareStudyRef.current = studyId;
  });

}, [secondaryOhlcvData, chartIsReady]);

  return <div ref={chartContainerRef} className={"TVChartContainer"} />;
};

export default MyTradingView;
