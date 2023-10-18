export function formatPriceInReais(valueInCents: number) {
  const formattedvalue = (valueInCents / 100)
    .toFixed(2)
    .toString()
    .split('.')
    .join(',')
  return formattedvalue
}
