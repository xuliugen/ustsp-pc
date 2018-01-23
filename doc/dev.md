## 开发
> 编辑器推荐使用 Visual Studio Code

### 编辑器插件
> 详细配置参考插件文档
- EditorConfig
- ESLint (Optional)
- Flow Language Support

### 工作流
1. 基于 dev 分支新建自己的分支 feature/yourname，在自己的 feature分支上进行开发。
2. 开发一个粒度相对合理的功能点后进行 commit 并 push
3. 在 github 上对 dev 分支进行 pull request，code review 通过后代码会被 merge，否则进入步骤2

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
