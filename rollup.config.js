export default {
  input: "./src/index.js",
  external: ["@rollup/plugin-replace"],
  output: [
    {
      format: "es",
      file: "lib/es/index.mjs",
    },
    {
      format: "cjs",
      file: "lib/cjs/index.cjs",
    },
  ],
}
