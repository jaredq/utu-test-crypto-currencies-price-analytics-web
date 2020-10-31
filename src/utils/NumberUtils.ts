/**
 * Return number string with thousands separators and maximum 2 fraction digits
 * @param num 
 */
export function toLocaleString(num?: number) {
  return num?.toLocaleString(undefined, { maximumFractionDigits: 2 });
}
