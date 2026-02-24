export function separate3digits(num: number | string) {
  if (!num) return num;
  let str = num.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
}

export const formatCash = (number: number, toFixed = 1) => {
  let n;
  let isMinus = number < 0;
  if (number < 0) {
    n = -1 * number;
  } else {
    n = number;
  }

  if (n < 1e3) return isMinus ? -1 * +n.toFixed(toFixed) : +n.toFixed(toFixed);
  if (n >= 1e3 && n < 1e6)
    return isMinus
      ? -1 * +(n / 1e3).toFixed(toFixed) + "K"
      : +(n / 1e3).toFixed(toFixed) + "K";
  if (n >= 1e6 && n < 1e9)
    return isMinus
      ? -1 * +(n / 1e6).toFixed(toFixed) + "M"
      : +(n / 1e6).toFixed(toFixed) + "M";
  if (n >= 1e9 && n < 1e12)
    return isMinus
      ? -1 * +(n / 1e9).toFixed(toFixed) + "B"
      : +(n / 1e9).toFixed(toFixed) + "B";
  if (n >= 1e12)
    return isMinus
      ? -1 * +(n / 1e12).toFixed(toFixed) + "T"
      : +(n / 1e12).toFixed(toFixed) + "T";
};

const SUBSCRIPT_MAP: Record<string, string> = {
  "0": "₀","1": "₁","2": "₂","3": "₃","4": "₄",
  "5": "₅","6": "₆","7": "₇","8": "₈","9": "₉",
};

function toSubscript(num: number): string {
  return num
    .toString()
    .split("")
    .map((d) => SUBSCRIPT_MAP[d] ?? "")
    .join("");
}

export function formatChart(
  value: number,
  significantDigits: number = 3
): string {
  if (!isFinite(value)) return "–";

  if (value === 0) return "0";

  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);

  if (abs >= 1) {
    return sign + abs.toLocaleString("en-US", {
      maximumFractionDigits: 8,
    });
  }

  // جلوگیری از scientific notation
  const normalized = abs.toFixed(18).replace(/0+$/, "");

  const match = normalized.match(/^0\.(0+)(\d+)/);

  if (!match) {
    return sign + normalized;
  }

  const zeroCount = match[1].length;
  const significantPart = match[2].slice(0, significantDigits);

  return `${sign}0.0${zeroCount > 1 ? toSubscript(zeroCount) : ""}${significantPart}`;
}