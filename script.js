const hammer = document.querySelector(".cursor-hammer");
const fxLayer = document.querySelector(".fx-layer");
const propCards = document.querySelectorAll(".prop-card");
const languageButtons = document.querySelectorAll(".language-option");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
const translations = {
  zh: {
    skip: "跳到主要内容",
    "home-label": "回到首页",
    "language-label": "选择语言",
    topbar: '<span class="online-dot"></span> ONLINE <span class="topbar-divider">/</span> 欢迎来到我的世界',
    "nav-label": "游戏场景导航",
    "menu-caption": '<span class="tiny-blink">▶</span> 选择一个入口',
    resume: "简历",
    "resume-small": "ABOUT / PROFILE",
    "projects-nav": "我的项目",
    "projects-small": "PROJECTS / QUESTS",
    "personal-nav": "个人项目",
    "personal-small": "PERSONAL / SIDE QUESTS",
    "menu-hint": "<span>↑</span> 点击道具，传送到新场景",
    "hero-title": '你好，<br>欢迎来到<br><span class="title-highlight">我的游戏世界<span class="title-cursor">_</span></span>',
    "hero-description": "这里存放着我的故事、正在制作的作品，<br class=\"desktop-break\">还有一些还没被发现的小彩蛋。",
    start: "开始探索",
    ready: '<span class="pixel-heart">♥</span> PLAYER 1 READY <span class="footer-divider">•</span> PRESS START',
    "character-label": "根据本人照片创作的原创卡通形象",
    "portrait-label": "高峥的像素风卡通肖像",
    speech: "嗨！<br>你来啦 <span>✦</span>",
    "scene-01": "SCENE 01",
    "profile-tag": "PLAYER PROFILE",
    "profile-unlocked": "PLAYER DATA // UNLOCKED",
    "about-title": "关于<span>高峥</span>",
    "about-lead": "马来亚大学传播学硕士在读，关注 AI 生成内容与算法推荐。",
    "profile-label": "PLAYER PROFILE / 001",
    "profile-title": "你好，我是 <span>高峥</span>",
    "profile-copy": "拥有医疗器械外贸与教育 SaaS 两年 B 端业务经验，擅长从客户问题出发，设计、验证并推进 AI 解决方案落地。",
    "target-role": "求职方向 <b>市场营销 / 产品运营 / 项目管理</b>",
    location: "现居 <b>吉隆坡</b>",
    "experience-label": "CAREER LOG // 2 STAGES",
    "experience-title": "工作<span>经历</span>",
    "experience-1-date": "2024.09 — 2025.11",
    "experience-1-company": "扬州若曼医疗器械有限公司",
    "experience-1-title": "国际站运营 · 医疗器械外贸",
    "experience-1-copy": "负责 1,355 款产品、覆盖 12 个国家的国际站运营；年跟进订单 160+ 笔、订单总额约 210 万美元。通过数据复盘与 AI 辅助优化，整体曝光提升 42%、有效询盘提升 35%。",
    "experience-2-date": "2023.09 — 2024.09",
    "experience-2-company": "厦门卡伦特科技有限公司",
    "experience-2-title": "区域市场运营 · 教育 SaaS",
    "experience-2-copy": "负责厦门区域 AI 智慧教学平台在 25 所高校的推广落地，覆盖数万师生；协同推进高校 AI 项目交付及华为云合作方案，累计合同成交额人民币 200 万元。",
    "education-label": "EDUCATION // 03",
    "education-title": "教育<span>背景</span>",
    "education-1": "马来亚大学 · 传播学硕士（在读）",
    "education-2": "LSBF · English for Academic Purposes",
    "education-3": "华侨大学 · 会展经济与管理本科",
    "skills-label": "SKILLS & CERTS",
    "skills-title": "技能与<span>认证</span>",
    "skills-copy": "ChatGPT、Gemini、Codex、Coze、Dify、ModelScope-Agent；提示词工程、AI 工作流、RAG 知识库、智能体工具调用、用户访谈与数据分析。",
    "language-note": "中文母语 · 英语 PTE 61（CEFR B2）",
    "certificates-label": "CERTIFIED // VERIFIED",
    "certificates-title": "个人<span>技能</span>",
    "certificate-gemini": "Google Gemini Certified Faculty",
    "certificate-agent": "Datawhale Agent Engineer",
    "certificate-prompt": "Datawhale Prompt Engineer",
    "back-home": "↑ 返回游戏入口",
    "scene-02": "SCENE 02",
    "pixels-tag": "MADE WITH PIXELS",
    "quest-log": "QUEST LOG // 03 NEW ITEMS",
    "projects-title": "我的<span>项目成果</span>",
    "projects-lead": "用客户洞察、数据和 AI，把业务问题推进到实际结果。",
    "quest-1": "医疗器械外贸 / 2024–25",
    "project-1": "国际站增长与转化",
    "project-desc-1": "优化 28 款产品标题，建立曝光—点击—询盘复盘机制：整体曝光 +42%、有效询盘 +35%，推荐渠道流量占比从 18% 提升至 37%。",
    "quest-2": "AI 业务运营 / 2024–25",
    "project-2": "AI 询盘工作流",
    "project-desc-2": "设计“归类—草稿—人工确认”流程及提示词模板库，将平均回复时间从 45 分钟缩短至 8 分钟；产品上架效率提升 60%。",
    "quest-3": "教育 SaaS / 2023–24",
    "project-3": "AI 智慧教学平台落地",
    "project-desc-3": "作为厦门区域负责人，推动平台进入 25 所高校、覆盖数万师生，访谈教师并协同产品团队验证 AI 批改与智能题库需求。",
    details: "进入副本 <b>↗</b>",
    "scene-03": "SCENE 03",
    "personal-tag": "PERSONAL PROJECTS",
    "prototype-label": "AI 原型 // 个人探索",
    "personal-title": "AI 原型<span>实验室</span>",
    "personal-lead": "把真实业务问题变成可以动手验证的 AI 原型。",
    "personal-project-1": "RAG 产品知识库",
    "personal-project-desc-1": "整理产品参数与询盘案例，探索检索增强生成在产品问答和业务知识沉淀中的应用。",
    "personal-project-2": "智能体工作流原型",
    "personal-project-desc-2": "使用 Codex、Coze、Dify 与 ModelScope-Agent 探索智能体工具调用及 AI 工作流设计。",
    "scene-04": "SCENE 04",
    "secret-level": "SECRET LEVEL",
    "new-player": "A NEW PLAYER HAS ENTERED",
    "contact-title": "期待和你<br><span>一起创造价值</span>",
    "contact-copy": "对市场营销、产品运营或 AI 项目合作感兴趣，欢迎联系我。",
    "send-email": "发送邮件",
    "contact-location": "现居吉隆坡 · 中文 / English",
    "footer-line": "用一点像素，搭建自己的小世界。",
    description: "欢迎来到我的像素游戏世界。这里有我的故事、作品和联系方式。",
    title: "高峥 · 个人主页"
  },
  en: {
    skip: "Skip to content",
    "home-label": "Back to home",
    "language-label": "Choose language",
    topbar: '<span class="online-dot"></span> ONLINE <span class="topbar-divider">/</span> Welcome to my world',
    "nav-label": "Game scene navigation",
    "menu-caption": '<span class="tiny-blink">▶</span> CHOOSE YOUR PORTAL',
    resume: "Resume",
    "resume-small": "ABOUT / PROFILE",
    "projects-nav": "My Projects",
    "projects-small": "PROJECTS / QUESTS",
    "personal-nav": "Personal Projects",
    "personal-small": "PERSONAL / SIDE QUESTS",
    "menu-hint": "<span>↑</span> Pick an item to enter a new scene",
    "hero-title": 'Hey there,<br>welcome to<br><span class="title-highlight">my game world<span class="title-cursor">_</span></span>',
    "hero-description": "This is where I share my story, works in progress,<br class=\"desktop-break\">and a few hidden easter eggs.",
    start: "Start exploring",
    ready: '<span class="pixel-heart">♥</span> PLAYER 1 READY <span class="footer-divider">•</span> PRESS START',
    "character-label": "Original cartoon portrait inspired by my photo",
    "portrait-label": "Pixel-art cartoon portrait of Gao Zheng",
    speech: "Hey!<br>Glad you're here <span>✦</span>",
    "scene-01": "SCENE 01",
    "profile-tag": "PLAYER PROFILE",
    "profile-unlocked": "PLAYER DATA // UNLOCKED",
    "about-title": "About <span>Gao Zheng</span>",
    "about-lead": "M.A. candidate in Communication at the University of Malaya, researching AI-generated content and algorithmic recommendation.",
    "profile-label": "PLAYER PROFILE / 001",
    "profile-title": "Hi, I'm <span>Gao Zheng</span>",
    "profile-copy": "Two years of B2B experience across medical-device export operations and education SaaS. I turn customer needs into AI solutions, then validate and deliver them with teams.",
    "target-role": "SEEKING <b>Marketing / Product Ops / Project Management</b>",
    location: "BASED IN <b>Kuala Lumpur</b>",
    "experience-label": "CAREER LOG // 2 STAGES",
    "experience-title": "Work <span>Experience</span>",
    "experience-1-date": "SEP 2024 — NOV 2025",
    "experience-1-company": "YANGZHOU RUOMAN MEDICAL DEVICE CO., LTD.",
    "experience-1-title": "International E-commerce Operations · Medical Devices",
    "experience-1-copy": "Managed marketplace operations for 1,355 products across 12 countries; followed 160+ orders annually, totaling about US$2.1M. Data reviews and AI-assisted optimization increased impressions by 42% and qualified inquiries by 35%.",
    "experience-2-date": "SEP 2023 — SEP 2024",
    "experience-2-company": "XIAMEN CURRENT TECHNOLOGY CO., LTD.",
    "experience-2-title": "Regional Marketing Operations · Education SaaS",
    "experience-2-copy": "Led the rollout of an AI teaching platform across 25 universities in Xiamen, reaching tens of thousands of students and faculty. Coordinated university AI delivery and a Huawei Cloud solution, contributing to RMB 2M in signed contracts.",
    "education-label": "EDUCATION // 03",
    "education-title": "Education<span>Background</span>",
    "education-1": "University of Malaya · M.A. Communication (in progress)",
    "education-2": "LSBF · English for Academic Purposes",
    "education-3": "Huaqiao University · B.A. Exhibition Economics & Management",
    "skills-label": "SKILLS & CERTIFICATIONS",
    "skills-title": "Skills & <span>Certifications</span>",
    "skills-copy": "ChatGPT, Gemini, Codex, Coze, Dify, and ModelScope-Agent; prompt engineering, AI workflows, RAG knowledge bases, agent tool calling, user interviews, and data analysis.",
    "language-note": "Native Chinese · English PTE 61 (CEFR B2)",
    "certificates-label": "CERTIFIED // VERIFIED",
    "certificates-title": "Personal <span>Skills</span>",
    "certificate-gemini": "Google Gemini Certified Faculty",
    "certificate-agent": "Datawhale Agent Engineer",
    "certificate-prompt": "Datawhale Prompt Engineer",
    "back-home": "↑ Back to game entrance",
    "scene-02": "SCENE 02",
    "pixels-tag": "MADE WITH PIXELS",
    "quest-log": "QUEST LOG // 03 NEW ITEMS",
    "projects-title": "Selected <span>Projects</span>",
    "projects-lead": "Turning customer insight, data, and AI into measurable business outcomes.",
    "quest-1": "MEDICAL DEVICE EXPORT / 2024–25",
    "project-1": "Marketplace Growth & Conversion",
    "project-desc-1": "Optimized titles for 28 products and built an impressions-to-inquiries review loop: impressions rose 42%, qualified inquiries 35%, and recommendation-channel traffic grew from 18% to 37%.",
    "quest-2": "AI BUSINESS OPERATIONS / 2024–25",
    "project-2": "AI Inquiry Response Workflow",
    "project-desc-2": "Designed a classify–draft–human-review workflow and prompt library, reducing average response time from 45 to 8 minutes and improving product-listing efficiency by 60%.",
    "quest-3": "EDUCATION SAAS / 2023–24",
    "project-3": "AI Teaching Platform Rollout",
    "project-desc-3": "Led regional rollout across 25 universities, reaching tens of thousands of students and faculty. Interviewed instructors and partnered with product teams to validate AI grading and question-bank needs.",
    details: "Enter the level <b>↗</b>",
    "scene-03": "SCENE 03",
    "personal-tag": "PERSONAL PROJECTS",
    "prototype-label": "AI PROTOTYPES // EXPERIMENTS",
    "personal-title": "AI Prototype <span>Lab</span>",
    "personal-lead": "Exploring practical AI prototypes grounded in real business needs.",
    "personal-project-1": "RAG Product Knowledge Base",
    "personal-project-desc-1": "Organized product specifications and inquiry examples to explore retrieval-augmented generation for product Q&A and reusable business knowledge.",
    "personal-project-2": "Agent Workflow Prototype",
    "personal-project-desc-2": "Explored agent tool calling and AI workflow design with Codex, Coze, Dify, and ModelScope-Agent.",
    "scene-04": "SCENE 04",
    "secret-level": "SECRET LEVEL",
    "new-player": "A NEW PLAYER HAS ENTERED",
    "contact-title": "Let's build<br><span>something valuable</span>",
    "contact-copy": "Open to conversations about marketing, product operations, and AI project collaboration.",
    "send-email": "Email me",
    "contact-location": "Based in Kuala Lumpur · 中文 / English",
    "footer-line": "A little pixel magic for my own corner of the world.",
    description: "Welcome to my pixel game world. Find my story, projects, and contact details here.",
    title: "Gao Zheng · Personal Website"
  }
};

function setLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').content = dictionary.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  try {
    localStorage.setItem("preferred-language", language);
  } catch {
    // Language switching still works when storage is unavailable.
  }
}

for (const button of languageButtons) {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
}

let preferredLanguage = "zh";
try {
  const storedLanguage = localStorage.getItem("preferred-language");
  if (storedLanguage === "zh" || storedLanguage === "en") preferredLanguage = storedLanguage;
} catch {
  // Use Chinese when storage is unavailable.
}
setLanguage(preferredLanguage);

if (hasFinePointer && hammer) {
  document.addEventListener("pointermove", (event) => {
    hammer.style.left = `${event.clientX}px`;
    hammer.style.top = `${event.clientY}px`;
    hammer.classList.add("is-visible");
    for (const pupil of document.querySelectorAll(".eye-pupil")) {
      const bounds = pupil.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - (bounds.left + bounds.width / 2)) / 65)) * 4.5;
      const y = Math.max(-1, Math.min(1, (event.clientY - (bounds.top + bounds.height / 2)) / 45)) * 4;
      pupil.style.setProperty("--gaze-x", `${x}px`);
      pupil.style.setProperty("--gaze-y", `${y}px`);
    }
  });

  document.addEventListener("pointerleave", () => {
    hammer.classList.remove("is-visible");
    document.querySelectorAll(".eye-pupil").forEach((pupil) => {
      pupil.style.setProperty("--gaze-x", "0px");
      pupil.style.setProperty("--gaze-y", "0px");
    });
  });
  document.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    hammer.classList.remove("is-swing");
    void hammer.offsetWidth;
    hammer.classList.add("is-swing");
    makeSparks(event.clientX, event.clientY);
    if (event.target instanceof Element && event.target.closest(".game-screen") && !reducedMotion) {
      const screen = document.querySelector(".game-screen");
      screen.classList.remove("screen-shake");
      void screen.offsetWidth;
      screen.classList.add("screen-shake");
      window.setTimeout(() => screen.classList.remove("screen-shake"), 280);
    }
  });
}

function makeSparks(x, y) {
  if (!fxLayer || reducedMotion) return;
  const count = 8;
  for (let index = 0; index < count; index += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * index) / count;
    const distance = 24 + Math.random() * 28;
    spark.className = "hit-spark";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    fxLayer.append(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
  }
}

function syncActiveProp() {
  const activeSection = window.location.hash;
  for (const card of propCards) {
    card.classList.toggle("is-active", card.getAttribute("href") === activeSection || ((!activeSection || activeSection === "#home") && card.getAttribute("href") === "#about"));
  }
}

window.addEventListener("hashchange", syncActiveProp);
syncActiveProp();

for (const card of propCards) {
  card.addEventListener("click", (event) => {
    const target = document.querySelector(card.getAttribute("href"));
    if (!target) {
      event.preventDefault();
      return;
    }

    if (!reducedMotion) {
      target.classList.remove("glitch-hit");
      void target.offsetWidth;
      target.classList.add("glitch-hit");
      window.setTimeout(() => target.classList.remove("glitch-hit"), 320);
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
