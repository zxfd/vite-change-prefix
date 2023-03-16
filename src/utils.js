export const getUpper = (str) => {
  const first = str[0]
  const upperFirst = first.toUpperCase()
  const upperStr = str.replace(first, upperFirst)
  return upperStr
}
