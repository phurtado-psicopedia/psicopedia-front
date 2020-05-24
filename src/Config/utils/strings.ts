export const formatMoneyValue = (value: string | number) => {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}