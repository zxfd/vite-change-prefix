import replace from "@rollup/plugin-replace"
import { getUpper } from "./utils"

export const replaceComponentName = (replaced = "Mf") => {
  const value1 = `'${replaced}`
  const value2 = `"${replaced}`

  return {
    ...replace({
      "'El": value1,
      '"El': value2,
      delimiters: ["", ""],
    }),
  }
}

export const replacePrefix = (replaced = "mf-") => {
  return {
    ...replace({
      "el-": replaced,
    }),
  }
}

export const changePrefixAll = (replaceStr = "mf") => {
  const upperStr = getUpper(replaceStr)
  const prefixStr = replaceStr + "-"
  const replaceComponentNameConfig = replaceComponentName(upperStr)
  const replacePrefixConfig = replacePrefix(prefixStr)
  return [replacePrefixConfig, replaceComponentNameConfig]
}
