export function formatNumber(number = 0, decimals = 2) {
  return number.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
