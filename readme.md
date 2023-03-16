## vite-change-prefix

用于更改 element-ui 前缀/命名空间的 vite 插件

## 安装

安装到开发依赖：

```shell
pnpm i vite-change-prefix -D
```

## 使用

默认将`el`替换为`mf`

### 全部替换

```js
import { changePrefixAll } from "vite-change-prefix"

const [changeComponentName, changePrefixName] = changePrefixAll("other-prefix-")
export default {
  // 省略其他配置
  plugins: [changeComponentName, changePrefixName],
  // 省略其他配置
}
```

这种情况下，即使是在自己代码`src/`目录下面的`.el-xxx`的样式也会被替换掉

### 仅替换 element-ui 包内的前缀

```js
import { changePrefix } from "vite-change-prefix"
export default {
  // 省略其他配置
  plugins: [changePrefix("other-prefix-")],
  // 省略其他配置
}
```

不传参则默认将`el`替换为`mf`。

这种情况下不会替换你自己代码`src/`目录下面的`.el-xxx`的样式，如果需要覆盖组件样式，你需要用你自己的前缀开头来覆盖，例如默认情况下的`ml-`：

```css
.ml-button {
  color: red !important;
}
```
