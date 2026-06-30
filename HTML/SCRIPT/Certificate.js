/* ============================================================
   CERTIFICATES PAGE — STANDALONE SCRIPT
   Edit the CERTIFICATES array below to add/update your credentials.
   image: path or URL to a screenshot. Leave "" for a placeholder icon.
   ============================================================ */

function updateToggleIcon(theme) {

    document.querySelectorAll(".theme-toggle").forEach(btn => {

        btn.textContent = theme === "dark" ? "☀" : "☾";

        btn.setAttribute(
            "aria-label",
            theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

    });

}

function initTheme() {

    const stored = localStorage.getItem("theme") || "dark";

    document.documentElement.setAttribute("data-theme", stored);

    updateToggleIcon(stored);

}

function toggleTheme() {

    const current =
        document.documentElement.getAttribute("data-theme") === "dark"
            ? "dark"
            : "light";

    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);

    localStorage.setItem("theme", next);

    updateToggleIcon(next);

}

const CERTIFICATES = [
  {
    title: "Secure Storage for Azure Files & Azure Blob Storage",
    issuer: "Microsoft",
    description: "Certified in securing Azure Files and Blob Storage using Microsoft Azure security and access management practices.",

    link: "IMAGES/C1.jpeg",
    image: "IMAGES/C1.jpeg"
  },
  {
    title: "Create and Manage Canvas Apps with Power Apps",
    description: "Certified in building and managing low-code business applications using Microsoft Power Apps.",
    issuer: "Microsoft",
    link: "IMAGES/C2.jpeg",
    image: "IMAGES/C2.jpeg"
  },
  {
    title: "Java Course – Mastering the Fundamentals",
    issuer:"Scaler Topics",
    description: "Learned Java fundamentals, OOP concepts, and problem-solving techniques.",
    link: "IMAGES/C3.jpeg",
    image: "IMAGES/C3.jpeg"
  },
  {
    title: "JavaScript Course",
    issuer: "Scaler Topics",
    description: "Gained practical knowledge of JavaScript programming and web development concepts.",
    link: "IMAGES/C4.jpeg",
    image: "IMAGES/C4.jpeg"
  },
  {
    title: "Communication Skills",
    issuer: "TCS iON",
    description: "Developed effective verbal, non-verbal, and professional communication skills.",
    link: "IMAGES/C5.jpeg",
    image: "IMAGES/C5.jpeg"
  },
  {
    title: "User Experience",
    issuer: "FutureLearn (Accenture)",
    description: "Learned UX principles for designing intuitive and user-friendly digital experiences.",
    link: "IMAGES/C6.jpeg",
    image: "IMAGES/C6.jpeg"
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    description: "Learned Java programming basics, OOP concepts, and core programming skills.",
    link: "IMAGES/C7.jpeg",
    image: "IMAGES/C7.jpeg"
  },
  {
    title: "Python Fundamentals",
    ISSUER: "Infosys Springboard",
    description: "Gained foundational knowledge of Python programming and problem-solving techniques.",
    link: "IMAGES/C8.jpeg",
    image: "IMAGES/C8.jpeg"
  },
  {
    title: "Legacy Responsive Web Design V8",
    issuer: "FreeCodeCamp",
    description: "Built responsive websites using HTML5 and CSS3 with modern web design principles.",
    link: "IMAGES/C9.jpeg",
    image: "IMAGES/C9.jpeg"
  },
  {
    title: "Responsive Web Design Developer Certification",
    issuer: "FreeCodeCamp",
    description: "Completed a 300-hour certification in responsive web design using HTML and CSS.",
    link: "IMAGES/C10.jpeg",
    image: "IMAGES/C10.jpeg"
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    description: "Introductory course on Claude AI fundamentals.",
    link: "IMAGES/A1.png",
    image: "IMAGES/A1.png"
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    description: "Learned the basics of Claude Code for AI-assisted coding.",
    link: "IMAGES/A2.png",
    image: "IMAGES/A2.png"
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    description: "Introduction to collaborating with Claude for productivity.",
    link: "IMAGES/A3.png",
    image: "IMAGES/A3.png"
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    description: "Applied Claude Code to practical coding workflows.",
    link: "IMAGES/A4.png",
    image: "IMAGES/A4.png"
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    description: "Built foundational knowledge of AI concepts and frameworks.",
    link: "IMAGES/A5.png",
    image: "IMAGES/A5.png"
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    description: "Learned the fundamentals of the Model Context Protocol (MCP).",
    link: "IMAGES/A6.png",
    image: "IMAGES/A6.png"
  },
  {
    title: "Claude with the Anthropic API",
    issuer: "Anthropic",
    description: "Learned to integrate Claude models using the Anthropic API for AI-powered applications.",
    link: "IMAGES/A7.png",
    image: "IMAGES/A7.png"
  },
  {
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    description: "Explored practical AI concepts and responsible AI use in education.",
    link: "IMAGES/A8.png",
    image: "IMAGES/A8.png"
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    description: "Gained foundational knowledge of AI, prompting, and ethical AI practices.",
    link: "IMAGES/A9.png",
    image: "IMAGES/A9.png"
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    description: "Learned advanced Model Context Protocol (MCP) concepts for connecting AI with external tools and data.",
    link: "IMAGES/A10.png",
    image: "IMAGES/A10.png"
  },
  {
    title: "Claude with Amazon Bedrock",
    issuer: "Anthropic",
    description: "Learned to deploy and use Claude AI models through Amazon Bedrock for generative AI applications.",
    link: "IMAGES/A11.png",
    image: "IMAGES/A11.png"
  },
  {
    title: "Claude with Google Vertex AI",
    issuer: "Anthropic",
    description: "Gained hands-on knowledge of integrating Claude models with Google Vertex AI services.",
    link: "IMAGES/A12.png",
    image: "IMAGES/A12.png"
  },
  {
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    description: "Explored AI fluency principles and effective methods for teaching AI concepts and skills.",
    link: "IMAGES/A13.png",
    image: "IMAGES/A13.png"
  },
  {
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    description: "Learned how nonprofits can use AI responsibly to improve impact, efficiency, and outreach.",
    link: "IMAGES/A14.png",
    image: "IMAGES/A14.png"
  },
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    description: "Learned the fundamentals of AI agents, including task automation, reasoning, and tool usage.",
    link: "IMAGES/A15.png",
    image: "IMAGES/A15.png"
  },
  {
    title: "Introduction to Subagents",
    issuer: "Anthropic",
    description: "Learned how subagents collaborate to break down complex tasks and improve AI workflow efficiency.",
    link: "IMAGES/A16.png",
    image: "IMAGES/A16.png"
  },
  {
    title: "AI Capabilities & Limitations",
    issuer: "Anthropic",
    description: "Explored the strengths, limitations, and responsible use of AI systems in real-world scenarios.",
    link: "IMAGES/A10.png",
    image: "IMAGES/A10.png"
  }
];

// ---------- Icons (inline SVG, no external deps) ----------
const ICON_MEDAL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 14.5 7 22l5-3 5 3-2-7.5"/></svg>`;
const ICON_CALENDAR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`;
const ICON_EXTERNAL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>`;
const ICON_IMAGE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4.35-4.35a2 2 0 0 0-2.83 0L3 21"/></svg>`;

// ---------- Build one certificate card ----------
function certCardHTML(c) {
  const mediaInner = c.image
    ? `<img src="${c.image}" alt="${c.title}" loading="lazy">`
    : ICON_IMAGE;
  const mediaClass = c.image ? "showcase-media" : "showcase-media placeholder";

  return `
    <article class="showcase-card">
      <div class="${mediaClass}">
        ${mediaInner}
      </div>
      <div class="showcase-body">
        <div class="showcase-kicker">${ICON_MEDAL}<span class="showcase-title">${c.title}</span></div>
        <div class="showcase-meta">Issued by: ${c.issuer}</div>
        <p class="showcase-desc">${c.description || ""}</p>
        <a class="showcase-btn" href="${c.link}" target="_blank" rel="noopener">
          ${ICON_EXTERNAL} View Certificate
        </a>
      </div>
    </article>
  `;
}

// ---------- Render all certificates into the grid ----------
function renderCertificates(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (CERTIFICATES.length === 0) {
    el.innerHTML = `<div class="empty-state">Certificates coming soon.</div>`;
  } else {
    el.innerHTML = CERTIFICATES.map(certCardHTML).join("");
  }
  initReveal();
}

// ---------- Scroll-in fade animation ----------
function initReveal() {
  const cards = document.querySelectorAll(".showcase-card");
  if (!("IntersectionObserver" in window) || cards.length === 0) {
    cards.forEach(c => c.classList.add("in-view"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => obs.observe(c));
}

// ---------- Mobile nav toggle ----------
function initNavBurger() {
  const burger = document.querySelector(".nav-burger");
  const links = document.querySelector(".nav-links");
  if (!burger || !links) return;
  burger.addEventListener("click", () => links.classList.toggle("open"));
}

document.addEventListener("DOMContentLoaded", () => {

    initTheme();

    initNavBurger();

    renderCertificates("certGrid");

    document.querySelectorAll(".theme-toggle").forEach(btn => {

        btn.addEventListener("click", toggleTheme);

    });

});
