
export const mapArrToStrings = (arr: any[]) => {
  return arr
    .filter(item => Number.isInteger(item))
    .map(String)
}