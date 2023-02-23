import replace from "@rollup/plugin-replace"

const defaultConfig = {
  "el-": "tsl-vite-",
  exclude: ["./src/*"],
}

export default (options = {}) => {
  const config = {
    ...defaultConfig,
    ...options,
  }
  return {
    ...replace(config),
    enforce: "pre",
  }
}
