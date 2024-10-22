export function formatNumber(value: number) {
  const parts = value.toString().split(".");
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const decimalPart = parts[1] || "00";
  return `${intPart},${decimalPart}`;
}
