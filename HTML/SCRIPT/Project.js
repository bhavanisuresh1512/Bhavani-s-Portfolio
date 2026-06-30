/* ============================================================
   PROJECTS PAGE — STANDALONE SCRIPT
   Edit the PROJECTS array below to add/update your projects.
   image: path or URL to a screenshot. Leave "" for a placeholder icon.
   ============================================================ */

function initTheme() {
    const stored = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", stored);
}

const PROJECTS = [
  {
    name: "ATM Machine Operation",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/ATM-Machine-Operation",
    image: "IMAGES/P12.jpeg"
  },
  {
    name: "Simple MCQ Question System",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Simple-MCQ-Question-System",
    image: "IMAGES/P11.jpeg"
  },
  {
    name: "Number Guessing Game",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Number-Guessing-Game",
    image: "IMAGES/P13.jpeg"
  },
  {
    name: "Password Strength Checker",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Password-Strength-Checker",
    image: "IMAGES/P14.jpeg"
  },
  {
    name: "Library Management App",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Mini-Library-Management-System",
    image: "IMAGES/P15.jpeg"
  },
  {
    name: "Rock - Paper - Scissors",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Rock-Paper-Scissors-Game-Project",
    image: "IMAGES/P16.jpeg"
  },
  {
    name: "Mini Library Management",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%201",
    image: "IMAGES/O11.png"
  },
  {
    name: "Mobile Recharge App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%201",
    image: "IMAGES/O12.png"
  },
  {
    name: "Student management App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%201",
    image: "IMAGES/O13.png"
  },
  {
    name: "Bank Management App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%202",
    image: "IMAGES/O14.png"
  },
  {
    name: "Course Management App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%202",
    image: "IMAGES/O15.png"
  },
  {
    name: "Employee Management App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%202",
    image: "IMAGES/O16.png"
  },
  {
    name: "Data Processing",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Data-Processing-Using-Student",
    image: "IMAGES/P17.png"
  },
  {
    name: "File-Based Notes Saver",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/File-Based-Notes-Saver",
    image: "IMAGES/P18.png"
  },
  {
    name: "Hangman Game",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Hangman-Game",
    image: "IMAGES/P19.png"
  },
  {
    name: "Dice Game",
    tech: ["Python"],
    link: "https://github.com/bhavanisuresh1512/Dice-Game-",
    image: "IMAGES/P20.png"
  },
  {
    name: "Bank System App",
    tech: ["OOPS"],
    link: "hhttps://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%203",
    image: "IMAGES/O17.png"
  },
  {
    name: "Hospital management App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%203",
    image: "IMAGES/O18.png"
  },
  {
    name: "Mini App Project",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%203",
    image: "IMAGES/O19.png"
  },
  {
    name: "Vehicle Hierarchy",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%203",
    image: "IMAGES/O20.png"
  },
  {
    name: "Contact Management App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%204",
    image: "IMAGES/O21.png"
  },
  {
    name: "Inventory Management App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%204",
    image: "IMAGES/O22.png"
  },
  {
    name: "Movie Booking App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%204",
    image: "IMAGES/O23.png"
  },
  {
    name: "File Manager App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%205",
    image: "IMAGES/O24.png"
  },
  {
    name: "Food Delievery App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%205",
    image: "IMAGES/O25.png"
  },
  {
    name: "Vehicle Rental App",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%205",
    image: "IMAGES/O26.png"
  },
  {
    name: "Vehicle Rental System",
    tech: ["OOPS"],
    link: "https://github.com/bhavanisuresh1512/Oops---Projects/tree/main/Oops%20Project/UNIT%205",
    image: "IMAGES/O27.png"
  },
  {
    name: "Nocturne - Moon Between Lines",
    tech: ["Web Technology"],
    link: "https://nocturne-tawny.vercel.app/",
    image: "IMAGES/W1.png"
  }
];

// ---------- Icons (inline SVG, no external deps) ----------
const ICON_MEDAL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 14.5 7 22l5-3 5 3-2-7.5"/></svg>`;
const ICON_CALENDAR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`;
const ICON_EXTERNAL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>`;
const ICON_IMAGE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4.35-4.35a2 2 0 0 0-2.83 0L3 21"/></svg>`;

// ---------- Build one project card ----------
function projectCardHTML(p) {
  const mediaInner = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : ICON_IMAGE;
  const mediaClass = p.image ? "showcase-media" : "showcase-media placeholder";

  return `
    <article class="showcase-card">
      <div class="${mediaClass}">
        ${mediaInner}
      </div>
      <div class="showcase-body">
        <div class="showcase-kicker">${ICON_MEDAL}<span class="showcase-title">${p.name}</span></div>
        <div class="showcase-badges">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <a class="showcase-btn" href="${p.link}" target="_blank" rel="noopener">
          ${ICON_EXTERNAL} View Project
        </a>
      </div>
    </article>
  `;
}

// ---------- Render projects (with optional category filter bar) ----------
function renderProjects(containerId, filterBarId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  function draw(list) {
    if (list.length === 0) {
      el.innerHTML = `<div class="empty-state">No projects in this category yet — check back soon.</div>`;
    } else {
      el.innerHTML = list.map(projectCardHTML).join("");
    }
    initReveal();
  }

  const filterBar = filterBarId ? document.getElementById(filterBarId) : null;

  if (filterBar) {
    // Create filter buttons from tech values
const technologies = ["All", ...new Set(PROJECTS.flatMap(p => p.tech))];

filterBar.innerHTML = technologies.map((tech, i) =>
  `<button class="filter-btn ${i === 0 ? "active" : ""}" data-tech="${tech}">${tech}</button>`
).join("");

filterBar.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tech = btn.dataset.tech;

    draw(
      tech === "All"
        ? PROJECTS
        : PROJECTS.filter(project => project.tech.includes(tech))
    );
  });
});
  }

  draw(PROJECTS);
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

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {

    initTheme();

    initNavBurger();

    renderProjects("projectGrid", "filterBar");

});
