## 工作流: 基于 Feature Branching

### 开发
1. 基于 dev 分支新建具体的 feature 分支，命名规范为 `fb/some-task_username_date`，如 `fb/home-talent_zeroyu_0312`。在自己的 feature分支上进行开发。
2. 开发时进行合理地 commit，功能完成完成后进行 push
3. 在 github 上对 dev 分支进行 pull request，code review 通过后代码会被 merge，否则进入步骤2

### fix bug
流程同上，不同的是分支名命名前缀不同，如 `fix/search-rmd_zeroyu_0403`

## 运行时后台配置
1. 新建 `src/config/config.dev.js`
2. 将 `src/config/config.dev.js.example` 内容拷贝进来
3. 修改 `API_ORIGIN` 参数

可用的公网 api url 如下:
`API_ORIGIN: 'http://xuliugen.vicp.io:8089/api/', // 415`

## 编辑器相关
编辑器推荐使用 Visual Studio Code

### 编辑器插件
- EditorConfig
- ESLint (Optional)

> 详细配置参考插件文档

## 杂项
### vscode下对 `*.jsx` 文件进行代码格式化
> 前提: 安装 ESLint 插件

**Plan A**: 设置格式化快捷键

keybindings.json 中添加
``` js
{
  "key": "cmd+alt+space",
  "command": "eslint.executeAutofix",
  "when": "editorTextFocus"
}
```

**Plan B**: 开启保存时自动格式化

用户的 settings.json 中添加 `"eslint.autoFixOnSave": true`
