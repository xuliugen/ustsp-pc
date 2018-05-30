## CSS 规范
``` css
.class {
  /* positioning */
  /* box-model */
  /* typography */
  /* visual */
  /* misc */
}
// new line
.anotherClass {}
...
```

> 注：<br />
positioning 相关属性包括：position / top / right / bottom / left / float / display / overflow 等；<br />
Box Model 相关属性包括：border / margin / padding / width / height 等；<br />
Typographic 相关属性包括：font / line-height / text-align / word-wrap 等；<br />
Visual 相关属性包括：background / color / transition / list-style 等

### class 选择器的命名
1. 遵循 BEM 命名规范，代码编写中 classname 只需要 EM，实际 classname 会将组件名作为 B 拼接上
2. 组件根元素若有 classname，使用 root 命名

## JS 规范
基于 [standard](https://standardjs.com/)，并在其基础上进行了自定义（见 `/.eslintrc.js`）
