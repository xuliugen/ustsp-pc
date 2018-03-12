## 编辑器相关
编辑器推荐使用 Visual Studio Code

### 编辑器插件
- EditorConfig
- Flow Language Support
- ESLint (Optional)

> 详细配置参考插件文档

## 工作流: 基于 Feature Branching
1. 基于 dev 分支新建具体的 feature 分支，命名规范为 `fb/some-task_username_date`，如 `fb/home-talent_zeroyu_0312`。在自己的 feature分支上进行开发。
2. 开发时进行合理地 commit，功能完成完成后进行 push
3. 在 github 上对 dev 分支进行 pull request，code review 通过后代码会被 merge，否则进入步骤2

## 杂项
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
