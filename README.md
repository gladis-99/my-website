# 像素游戏风个人主页

使用原生 HTML、CSS 和 JavaScript 制作的静态个人主页。界面采用原创街机像素视觉语言，包含可点击场景入口、锤子光标反馈、点击粒子、中英文切换和自绘角色插画。

## 个性化

- 在 `index.html` 中将“玩家一号”“你的名字”替换为个人名称，并更新简介。
- 将 `hello@example.com` 替换成你的邮箱。
- 编辑作品卡片标题与说明；场景入口对应 `#about`、`#projects` 和 `#contact`。
- 项目卡片通过 `project-detail.html?id=...` 在新标签页打开独立详情；项目内容维护在 `project-detail.js`。
- 替换 `assets/character-portrait.svg` 可自定义封面人物和简历头像；眼睛瞳孔由页面脚本控制，可跟随鼠标移动。其他 SVG 文件用于电视、木桶和彩蛋贴图。
- 简历经历、教育和证书图片分别在 `index.html` 与 `assets/` 中维护；医疗器械经历的菲律宾医疗展照片为 `assets/medical-expo-2025.jpg`，卡伦特经历的团队照片为 `assets/current-technology-team.jpg`。
- 医疗产品设计副本的产品套装照片为 `assets/negative-pressure-dressing-kit.jpg`；项目详情和介绍文案维护在 `project-detail.js`。
- AI 询盘工作流副本的流程截图为 `assets/ai-inquiry-workflow.png`。
- 在 `styles.css` 的 `:root` 中调整颜色。

不需要安装依赖或构建。直接打开 `index.html`，或使用任意静态文件服务器预览。
