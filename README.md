# 📱 手机氛围灯形态与动效调试台 (Light Motion Bench)

这是一个专为移动端氛围灯效设计的纯前端**形态与动效实时调试台**。通过拟真的手机硬件框架与高性能的 SVG/CSS 渲染技术，帮助设计师和前端开发者直观地预览、调试和配置各种复杂的氛围灯带流动效果。

👉 **[立即在线体验](https://nancity11521-ai.github.io/ambient-light-demo/)**

---

## ✨ 核心特性

- **📱 拟真手机框架预览**：内置精致的手机金属边框与摄像头群组（Camera Cluster）视觉占位，提供极佳的沉浸式真机预览质感。
- **⚡ 高性能 SVG 渲染**：利用 SVG Vector 路径与高性能 Canvas/CSS 滤镜技术，高保真还原光晕、流光溢彩与霓虹渐变质感。
- **🎛️ 参数化实时调试**：支持对灯带的颜色渐变（Gradients）、动效周期、流动方向、呼吸频率等核心参数进行实时调整。
- **🌈 流光溢彩动效**：内置多种预设动效动效，支持彩虹渐变流光、单色呼吸、双色跑马灯等炫酷视觉形态。

---

## 🛠️ 技术栈

- **Core**: HTML5 / Semantic HTML
- **Styling**: Modern CSS3 (CSS Variables, Flexbox/Grid, Canvas Filter, Transitions & Animations)
- **Logic**: Vanilla JavaScript (高性能 DOM 操作与事件驱动)

---

## 🚀 快速开始

### 本地运行

无需任何复杂的构建工具或后端服务，双击 `index.html` 即可在任意现代浏览器中运行：

```bash
# 1. 克隆仓库
git clone https://github.com/nancity11521-ai/ambient-light-demo.git

# 2. 进入目录
cd ambient-light-demo

# 3. 直接在浏览器中打开 index.html
open index.html
```

---

## 📂 项目结构

```text
.
├── index.html     # 结构：调试台主界面与真机框容器
├── style.css      # 样式：暗黑科技感 UI 皮肤与氛围灯动效关键帧
├── script.js      # 逻辑：参数面板交互、实时动效参数控制与 SVG 渲染更新
└── README.md      # 文档：项目说明
```
