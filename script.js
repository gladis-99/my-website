const hammer = document.querySelector(".cursor-hammer");
const fxLayer = document.querySelector(".fx-layer");
const propCards = document.querySelectorAll(".prop-card");
const languageButtons = document.querySelectorAll(".language-option");
const heroTitle = document.querySelector("#hero-title");
const projectLinks = document.querySelectorAll(".project-info a[target='_blank']");
const copyEmailButton = document.querySelector("#copy-email");
const copyEmailStatus = document.querySelector("#copy-email-status");
const characterStage = document.querySelector(".character-stage");
const characterArt = characterStage?.querySelector(".character-art");
const eyePupils = document.querySelectorAll(".eye-pupil");

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
    "projects-nav": "试炼成果",
    "projects-small": "TRIAL RESULTS",
    "personal-nav": "个人项目",
    "personal-small": "PERSONAL / SIDE QUESTS",
    "menu-hint": "<span>↑</span> 点击道具，传送到新场景",
    "hero-title": '你好，<br>欢迎来到<br><span class="title-highlight">我的世界<span class="title-cursor">_</span></span>',
    "hero-description": "这里存放着我的故事、正在制作的作品，<br class=\"desktop-break\">还有一些还没被发现的小彩蛋。",
    start: "开始探索",
    ready: '<span class="pixel-heart">♥</span> PLAYER 1 READY <span class="footer-divider">•</span> PRESS START',
    "character-label": "根据本人照片创作的原创卡通形象",
    "portrait-label": "高峥的像素风卡通肖像",
    speech: "嗨！<br>你来啦 <span>✦</span>",
    "scene-01": "SCENE 01",
    "profile-tag": "PLAYER PROFILE",
    "profile-unlocked": "PLAYER DATA // UNLOCKED",
    "about-title": "人物选择<span>---高峥</span>",
    "about-lead": "马来亚大学传播学硕士在读，关注 AI 生成内容与算法推荐。",
    "profile-label": "PLAYER PROFILE / 001",
    "profile-title": "你好，我是 <span>高峥</span>",
    "profile-copy": "拥有医疗器械外贸与教育 SaaS 两年 B 端业务经验，擅长从客户问题出发，设计、验证并推进 AI 解决方案落地。",
    "target-role": "求职方向 <b>市场营销 / 产品运营 / 项目管理</b>",
    location: "现居 <b>吉隆坡</b>",
    "experience-label": "CAREER LOG // 2 STAGES",
    "experience-title": "任务<span>经历</span>",
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
    "quest-log": "QUEST LOG // 04 NEW ITEMS",
    "projects-title": "试炼<span>成果</span>",
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
    "quest-4": "AI 产品开发 / 2026",
    "project-4": "小程序自研部署",
    "project-desc-4": "独立完成微信“饭仔识卡”小程序，独自处理需求梳理、功能开发、服务部署与基础上线，搭建端侧交互、大模型调用与后台管理整套链路，完成版本灰度发布。",
    "project-tag-4": "AI 产品开发",
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
    "contact-title": "期待和你<br><span>一起冒险</span>",
    "contact-copy": "向往市场营销、产品运营或 AI 项目的旅程，随时接受您的召唤。",
    "send-email": "发送邮件",
    "email-copied": "邮箱已复制",
    "email-copy-failed": "复制失败，请手动复制邮箱地址。",
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
    "projects-nav": "Trial Results",
    "projects-small": "TRIAL RESULTS",
    "personal-nav": "Personal Projects",
    "personal-small": "PERSONAL / SIDE QUESTS",
    "menu-hint": "<span>↑</span> Pick an item to enter a new scene",
    "hero-title": 'Hey there,<br>welcome to<br><span class="title-highlight">my world<span class="title-cursor">_</span></span>',
    "hero-description": "This is where I share my story, works in progress,<br class=\"desktop-break\">and a few hidden easter eggs.",
    start: "Start exploring",
    ready: '<span class="pixel-heart">♥</span> PLAYER 1 READY <span class="footer-divider">•</span> PRESS START',
    "character-label": "Original cartoon portrait inspired by my photo",
    "portrait-label": "Pixel-art cartoon portrait of Gao Zheng",
    speech: "Hey!<br>Glad you're here <span>✦</span>",
    "scene-01": "SCENE 01",
    "profile-tag": "PLAYER PROFILE",
    "profile-unlocked": "PLAYER DATA // UNLOCKED",
    "about-title": "Character Select <span>— Gao Zheng</span>",
    "about-lead": "M.A. candidate in Communication at the University of Malaya, researching AI-generated content and algorithmic recommendation.",
    "profile-label": "PLAYER PROFILE / 001",
    "profile-title": "Hi, I'm <span>Gao Zheng</span>",
    "profile-copy": "Two years of B2B experience across medical-device export operations and education SaaS. I turn customer needs into AI solutions, then validate and deliver them with teams.",
    "target-role": "SEEKING <b>Marketing / Product Ops / Project Management</b>",
    location: "BASED IN <b>Kuala Lumpur</b>",
    "experience-label": "CAREER LOG // 2 STAGES",
    "experience-title": "Quest <span>Experience</span>",
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
    "quest-log": "QUEST LOG // 04 NEW ITEMS",
    "projects-title": "Trial <span>Results</span>",
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
    "quest-4": "AI PRODUCT DEVELOPMENT / 2026",
    "project-4": "Self-developed Mini Program",
    "project-desc-4": "Independently delivered the WeChat mini program “饭仔识卡,” covering requirements, feature development, service deployment, and initial launch. Built the end-to-end flow for client-side interactions, LLM integration, and admin management, then completed a phased rollout.",
    "project-tag-4": "AI Product Development",
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
    "contact-title": "I can't wait to<br><span>adventure with you</span>",
    "contact-copy": "Journeying toward marketing, product operations, or AI projects—always ready to answer your call.",
    "send-email": "Email me",
    "email-copied": "Email copied",
    "email-copy-failed": "Could not copy. Please copy the email address manually.",
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
  renderPixelTitle();
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

function renderPixelTitle() {
  if (!heroTitle) return;

  let canvas = heroTitle.querySelector(".pixel-title-canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.className = "pixel-title-canvas";
    canvas.setAttribute("aria-hidden", "true");
    heroTitle.append(canvas);
  }

  const bounds = heroTitle.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;

  const padding = 24;
  const dpr = window.devicePixelRatio || 1;
  const pixelSize = 2 / dpr;
  const scale = 1 / pixelSize;
  const pixelWidth = Math.ceil((bounds.width + padding * 2) * scale);
  const pixelHeight = Math.ceil((bounds.height + padding * 2) * scale);
  const pixelCanvas = document.createElement("canvas");
  pixelCanvas.width = pixelWidth;
  pixelCanvas.height = pixelHeight;
  const context = pixelCanvas.getContext("2d");
  if (!context) return;
  context.scale(scale, scale);
  context.translate(padding, padding);

  const glyphs = [];
  const walker = document.createTreeWalker(heroTitle, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest(".title-cursor")
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    }
  });
  const segmenter = typeof Intl.Segmenter === "function"
    ? new Intl.Segmenter(document.documentElement.lang, { granularity: "grapheme" })
    : null;

  while (walker.nextNode()) {
    const textNode = walker.currentNode;
    const style = getComputedStyle(textNode.parentElement);
    const segments = segmenter
      ? [...segmenter.segment(textNode.textContent)]
      : Array.from(textNode.textContent, (segment, index, characters) => ({
          segment,
          index: characters.slice(0, index).join("").length
        }));

    for (const { segment, index } of segments) {
      if (!segment.trim()) continue;
      const range = document.createRange();
      range.setStart(textNode, index);
      range.setEnd(textNode, index + segment.length);
      const rect = range.getBoundingClientRect();
      if (!rect.width || !rect.height) continue;

      const fontSize = Number.parseFloat(style.fontSize);
      glyphs.push({
        text: segment,
        x: rect.left - bounds.left,
        y: rect.bottom - bounds.top - fontSize * 0.14,
        font: style.font,
        color: textNode.parentElement?.closest(".title-highlight") ? "#ffd45e" : "#fff5dc",
        glow: textNode.parentElement?.closest(".title-highlight")
          ? "rgb(255 184 65 / 90%)"
          : "rgb(65 205 255 / 90%)"
      });
    }
  }

  for (const glyph of glyphs) {
    context.font = glyph.font;
    context.fillStyle = "#090b1c";
    context.shadowColor = "transparent";
    context.fillText(glyph.text, glyph.x + 4, glyph.y + 4);
    context.fillText(glyph.text, glyph.x + 2, glyph.y + 2);
  }
  for (const glyph of glyphs) {
    context.font = glyph.font;
    context.fillStyle = glyph.color;
    context.shadowColor = glyph.glow;
    context.shadowBlur = 1;
    context.fillText(glyph.text, glyph.x, glyph.y);
  }
  context.shadowBlur = 0;

  canvas.width = Math.ceil((bounds.width + padding * 2) * dpr);
  canvas.height = Math.ceil((bounds.height + padding * 2) * dpr);
  canvas.style.width = `${bounds.width + padding * 2}px`;
  canvas.style.height = `${bounds.height + padding * 2}px`;
  canvas.style.left = `${-padding}px`;
  canvas.style.top = `${-padding}px`;
  const displayContext = canvas.getContext("2d");
  if (!displayContext) return;
  displayContext.imageSmoothingEnabled = false;
  displayContext.drawImage(pixelCanvas, 0, 0, canvas.width, canvas.height);
}

if (heroTitle) {
  const schedulePixelTitle = () => window.requestAnimationFrame(renderPixelTitle);
  window.addEventListener("resize", schedulePixelTitle);
  if (document.fonts?.ready) document.fonts.ready.then(schedulePixelTitle);
}

for (const button of languageButtons) {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
}

if (copyEmailButton && copyEmailStatus) {
  copyEmailButton.addEventListener("click", async () => {
    const language = document.documentElement.lang === "en" ? "en" : "zh";
    try {
      await navigator.clipboard.writeText("99gladis99@gmail.com");
      copyEmailStatus.textContent = translations[language]["email-copied"];
    } catch (error) {
      copyEmailStatus.textContent = translations[language]["email-copy-failed"];
      console.error("Could not copy email address to clipboard.", error);
    }
  });
}

for (const link of projectLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const projectWindow = window.open(link.href, "_blank");
    if (projectWindow) projectWindow.opener = null;
    else window.location.assign(link.href);
  });
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
  let hammerStolen = false;

  document.addEventListener("pointermove", (event) => {
    hammer.style.left = `${event.clientX}px`;
    hammer.style.top = `${event.clientY}px`;
    hammer.classList.add("is-visible");

    for (const pupil of eyePupils) {
      const bounds = pupil.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - (bounds.left + bounds.width / 2)) / 90)) * 1.6;
      const y = Math.max(-1, Math.min(1, (event.clientY - (bounds.top + bounds.height / 2)) / 70)) * 1.2;
      pupil.style.setProperty("--gaze-x", `${x}px`);
      pupil.style.setProperty("--gaze-y", `${y}px`);
    }

    if (!characterArt || !characterStage) return;
    const bounds = characterArt.getBoundingClientRect();
    const nearestX = Math.max(bounds.left, Math.min(event.clientX, bounds.right));
    const nearestY = Math.max(bounds.top, Math.min(event.clientY, bounds.bottom));
    const distance = Math.hypot(event.clientX - nearestX, event.clientY - nearestY);
    const shouldStealHammer = distance < 92;

    if (!shouldStealHammer) {
      if (hammerStolen) {
        characterStage.classList.remove("is-stealing");
        hammer.classList.remove("is-stolen");
        hammerStolen = false;
      }
      return;
    }

    const targetX = bounds.left + bounds.width * 0.9;
    const targetY = bounds.top + bounds.height * 0.4;
    hammer.style.setProperty("--steal-x", `${targetX - event.clientX}px`);
    hammer.style.setProperty("--steal-y", `${targetY - event.clientY}px`);
    if (!hammerStolen) {
      characterStage.classList.add("is-stealing");
      hammer.classList.add("is-stolen");
      hammerStolen = true;
      makeSparks(targetX, targetY);
    }
  });

  document.addEventListener("pointerleave", () => {
    hammer.classList.remove("is-visible");
    eyePupils.forEach((pupil) => {
      pupil.style.setProperty("--gaze-x", "0px");
      pupil.style.setProperty("--gaze-y", "0px");
    });
    characterStage?.classList.remove("is-stealing");
    hammer.classList.remove("is-stolen");
    hammerStolen = false;
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
