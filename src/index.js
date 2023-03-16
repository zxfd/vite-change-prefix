import replace from "@rollup/plugin-replace"
export { changePrefixAll } from "./all"

const defaultConfig = {
  "el-": "z-vite-",
  exclude: ["./src/*"],
}

export const changePrefix = (replaceStr = "mf") => {
  const prefixStr = replaceStr + "-"
  return {
    ...replace({
      "el-": prefixStr,
      exclude: ["./src/*"],
    }),
    enforce: "pre",
  }
}
