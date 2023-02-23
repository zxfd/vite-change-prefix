export default {
  input: "./src/index.js",
  external: ["@rollup/plugin-replace"],
  output: {
    format: "es",
    file: "lib/index.esm.js",
    name: "bundle-name",
  },
}
