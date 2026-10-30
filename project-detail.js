const projectDetails = {
  "marketplace-growth": {
    category: {
      zh: "医疗器械外贸 / 2024–25",
      en: "MEDICAL DEVICE EXPORT / 2024–25"
    },
    title: { zh: "国际站增长与转化", en: "Marketplace Growth & Conversion" },
    description: {
      zh: "你以为我只会弄弄电脑，看看数据吗？给你看看我设计的医疗产品，从包装设计到组合配件完全独创，全中国震撼首发（自封，但是在2024年，当时中国只有我做出来这个负压套装）尼泊尔医疗市场上就在用这个产品！期待有一天和你合作把我的技能点加满！",
      en: "Think I only work with computers and data? Take a look at this medical product I designed—from the packaging to the component kit, the design is original. I called it a nationwide first (a bold claim, I know; in 2024, I was the only one in China making this negative-pressure kit). This product is already being used in Nepal's medical market. I hope we get to work together one day and level up my skills!"
    },
    back: { zh: "← 返回项目列表", en: "← Back to projects" },
    icon: "✦",
    image: {
      src: "assets/negative-pressure-dressing-kit.jpg",
      alt: {
        zh: "自主设计的负压敷料套装及包装",
        en: "Original negative-pressure dressing kit and packaging design"
      }
    }
  },
  "ai-inquiry-workflow": {
    category: {
      zh: "AI 业务运营 / 2024–25",
      en: "AI BUSINESS OPERATIONS / 2024–25"
    },
    title: { zh: "AI 询盘工作流", en: "AI Inquiry Response Workflow" },
    description: {
      zh: "设计“归类—草稿—人工确认”流程及提示词模板库，将平均回复时间从 45 分钟缩短至 8 分钟；产品上架效率提升 60%。",
      en: "Designed a classify–draft–human-review workflow and prompt library, reducing average response time from 45 to 8 minutes and improving product-listing efficiency by 60%."
    },
    back: { zh: "← 返回项目列表", en: "← Back to projects" },
    icon: "◈",
    image: {
      src: "assets/ai-inquiry-workflow.png?v=workflow-image-2",
      alt: {
        zh: "AI 询盘处理工作流界面截图",
        en: "Screenshot of the AI inquiry response workflow"
      }
    }
  },
  "engineering-graphics-platform": {
    category: {
      zh: "教育 SaaS / 2023–24",
      en: "EDUCATION SAAS / 2023–24"
    },
    title: { zh: "智能图学教学平台", en: "Intelligent Engineering Graphics Teaching Platform" },
    description: {
      zh: "基于卡伦特CAD打造图学教育一体化云服务平台，辅助教师日常教学。提供海量专业题库，配套智能组卷和自动阅卷系统，将教师从繁杂的工作中解放出来。",
      en: "Built on Current Technology's CAD platform, this integrated cloud service supports engineering graphics education and teachers' day-to-day instruction. It provides an extensive professional question bank, intelligent test assembly, and automatic grading to reduce teachers' routine workload."
    },
    back: { zh: "← 返回项目列表", en: "← Back to projects" },
    icon: "☼",
    image: {
      src: "assets/current-text-to-cad.png",
      alt: {
        zh: "文生 CAD 模型：用自然语言描述设计意图，生成三维管道模型",
        en: "Text-to-CAD model generated from a natural-language design description"
      }
    }
  },
  "mini-program-deployment": {
    category: {
      zh: "AI 产品开发 / 2026",
      en: "AI PRODUCT DEVELOPMENT / 2026"
    },
    title: { zh: "小程序自研部署", en: "Self-developed Mini Program" },
    description: {
      zh: "独立完成 AI 小程序需求梳理、功能开发、服务部署与基础上线，搭建端侧交互、大模型调用与后台管理整套链路，完成版本灰度发布。",
      en: "Independently handled AI mini program requirements, feature development, service deployment, and initial launch. Built the complete flow for client-side interactions, LLM integration, and admin management, then completed a phased rollout."
    },
    back: { zh: "← 返回项目列表", en: "← Back to projects" },
    icon: "▣",
    image: {
      src: "assets/fanzai-mini-program.jpg?v=1",
      alt: {
        zh: "饭仔识卡 AI 小程序的中英文界面截图，展示饮食识别与记录功能",
        en: "Chinese and English screenshots of the Fanzi food recognition and meal tracking mini program"
      }
    }
  }
};

const pageText = {
  zh: { missing: "未找到这个项目副本。", missingCopy: "请返回项目列表并重新选择。", back: "← 返回项目列表", title: "项目详情 · 高峥", languageLabel: "选择语言" },
  en: { missing: "This project level could not be found.", missingCopy: "Return to the project list and choose a project.", back: "← Back to projects", title: "Project Details · Gao Zheng", languageLabel: "Choose language" }
};

const params = new URLSearchParams(window.location.search);
const project = projectDetails[params.get("id")];
const title = document.querySelector("[data-detail-title]");
const category = document.querySelector("[data-detail-category]");
const description = document.querySelector("[data-detail-description]");
const label = document.querySelector("[data-detail-label]");
const image = document.querySelector("[data-detail-image]");
const art = document.querySelector("[data-detail-art]");
const backLinks = document.querySelectorAll("[data-detail-back]");
const languageButtons = document.querySelectorAll("[data-detail-language]");
const languageGroup = document.querySelector(".language-switch");

let language = "zh";
try {
  const savedLanguage = localStorage.getItem("preferred-language");
  if (savedLanguage === "zh" || savedLanguage === "en") language = savedLanguage;
} catch {
  // Keep the default language when storage is unavailable.
}

function renderDetail(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = pageText[language].title;
  languageGroup.setAttribute("aria-label", pageText[language].languageLabel);
  for (const link of backLinks) link.textContent = pageText[language].back;
  for (const button of languageButtons) {
    const active = button.dataset.detailLanguage === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }

  if (!project) {
    label.textContent = pageText[language].missing;
    title.textContent = pageText[language].missing;
    description.textContent = pageText[language].missingCopy;
    image.hidden = true;
    art.hidden = true;
    return;
  }

  category.textContent = project.category[language];
  title.textContent = project.title[language];
  description.textContent = project.description[language];
  label.textContent = language === "zh" ? "AI 项目 // 副本详情" : "AI PROJECT // QUEST DETAIL";
  art.querySelector("span").textContent = project.icon;
  image.hidden = !project.image;
  art.hidden = Boolean(project.image);
  document.querySelector(".project-detail-card").classList.toggle("has-image", Boolean(project.image));
  if (project.image) {
    const img = image.querySelector("img");
    img.src = project.image.src;
    img.alt = project.image.alt[language];
  }
}

for (const button of languageButtons) {
  button.addEventListener("click", () => renderDetail(button.dataset.detailLanguage));
}

renderDetail(language);
