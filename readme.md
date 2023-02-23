## vite-change-prefix

用于更改 element-ui 前缀/命名空间的 vite 插件

## 安装

安装到开发依赖：

```shell
pnpm i vite-change-prefix -D
```

## 使用

开箱即用

```js
//  vite.config中

import changePrefix from "vite-change-prefix"

export default {
  // 省略其他配置
  plugins: [changePrefix()],
  // 省略其他配置
}
```

默认将`el-`替换为`z-vite-`,替换为其他命名空间可以按照如下格式自行配置:

```js
export default {
  // 省略其他配置
  plugins: [
    changePrefix({
      "el-": "other-prefix-",
    }),
  ],
  // 省略其他配置
}
```

## 其他配置

同[@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace)
