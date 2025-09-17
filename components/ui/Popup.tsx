import { useRef, useState } from "react";
import { useTheme } from "@/hooks";

const Popup = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const popupRef = useRef(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="absolute right-0 top-4 w-8 h-8 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-white rounded shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 m-auto fill-black dark:fill-white"
          viewBox="0 0 20 20"
        >
          <title>arrow</title>
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute absolute right-0 top-12 mt-2 p-4 w-80 h-48 text-xs font-semibold bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 rounded-md shadow-lg dark:shadow-neutral-950"
          ref={popupRef}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm">Theme</span>
            <div className="p-1 bg-gray-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-900 rounded-md">
              <button
                type="button"
                onClick={() => toggleTheme("light")}
                className={`py-2 px-4 rounded cursor-pointer ${theme === "dark" ? "bg-transparent" : "bg-white dark:bg-gray-800"}`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => toggleTheme("dark")}
                className={`py-2 px-4 rounded cursor-pointer ${theme === "dark" ? "bg-white dark:bg-gray-800" : "bg-transparent"}`}
              >
                Dark
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Currency</span>
            <div className="p-1 bg-gray-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-900 rounded-md">
              <button
                type="button"
                onClick={() => setCurrency("usd")}
                className={`py-2 px-4 rounded cursor-pointer ${currency === "usd" ? "bg-white dark:bg-gray-800" : "bg-transparent"}`}
              >
                USD
              </button>
              <button
                type="button"
                onClick={() => setCurrency("btc")}
                className={`py-2 px-4 rounded cursor-pointer ${currency === "btc" ? "bg-white dark:bg-gray-800" : "bg-transparent"}`}
              >
                BTC
              </button>
              <button
                type="button"
                onClick={() => setCurrency("eth")}
                className={`py-2 px-4 rounded cursor-pointer ${currency === "eth" ? "bg-white dark:bg-gray-800" : "bg-transparent"}`}
              >
                ETH
              </button>
            </div>
          </div>
          <svg
            data-role="arrow-icon"
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="absolute right-2 -top-4 pointer-events-none rotate-180 fill-white dark:fill-neutral-800"
          >
            <path stroke="none" d="M0,0 H16 L12,4 Q8,8 4,4 Z"></path>
            <clipPath id=":r9f:">
              <rect x="0" y="0" width="16" height="16"></rect>
            </clipPath>
          </svg>
        </div>
      )}
    </>
  );
};

export default Popup;
