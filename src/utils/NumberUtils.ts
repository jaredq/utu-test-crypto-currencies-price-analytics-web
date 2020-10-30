export function toLocaleString(num?: number) {
  return num?.toLocaleString(undefined, { maximumFractionDigits: 2 });
}
