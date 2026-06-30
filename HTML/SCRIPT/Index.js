/* ============================================================
   SHARED SITE BEHAVIOR
   ============================================================ */

// ---------- Theme toggle ----------
function initTheme() {

    const stored = localStorage.getItem("theme") || "dark";

    document.documentElement.setAttribute("data-theme", stored);

    updateToggleIcon(stored);

}

function updateToggleIcon(theme) {
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    // Show moon in light mode, sun in dark mode
    btn.textContent = theme === "dark" ? "☀" : "☾";
    btn.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode"
    );
  });
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

function initHeroIntro() {

    const items = document.querySelectorAll(
        ".hero .eyebrow, .hero h1, .hero .tagline, .hero .hero-ctas, .hero .avatar-wrap"
    );

    items.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition =
            `all .8s cubic-bezier(.22,1,.36,1) ${index * 0.15}s`;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            });
        });

    });

}
function initWelcomeScreen() {

    const greetings = [
        "⋆ Hello !",
        "⋆ வணக்கம் !",
        "⋆ नमस्ते !",
        "⋆ నమస్కారం !",
        "⋆ ನಮಸ್ಕಾರ !",
        "⋆ നമസ്കാരം !",
        "⋆ Bonjour !",
        "⋆ Hola !",
        "⋆ Hallo !",
        "⋆ 안녕하세요 !",
        "⋆ مرحبا !"
    ];

    const greeting = document.getElementById("greeting");
    const welcome = document.getElementById("welcome-screen");
    const content = document.getElementById("main-content");

    if (!greeting || !welcome || !content) return;

    // Don't show welcome screen again during this session
if (sessionStorage.getItem("welcomeShown")) {

    welcome.style.display = "none";
    content.style.display = "block";

    initHeroIntro();

    return;

}

    let i = 0;

    function animate() {

        greeting.style.opacity = "0";

        setTimeout(() => {

            greeting.textContent = greetings[i];

            greeting.style.opacity = "1";

            i++;

            if (i < greetings.length) {

                setTimeout(animate, 450);

            } else {

                setTimeout(() => {

                    welcome.style.opacity = "0";

                    setTimeout(() => {

                        welcome.style.display = "none";
                        content.style.display = "block";

                        // Remember that the welcome screen has already been shown
                        sessionStorage.setItem("welcomeShown", "true");

                        initHeroIntro();

                    }, 800);

                }, 800);

            }

        }, 200);

    }

    animate();

}

// ---------- Mobile Navigation ----------
function initNavBurger() {

    const burger = document.querySelector(".nav-burger");
    const links = document.querySelector(".nav-links");

    if (!burger || !links) return;

    burger.addEventListener("click", () => {
        links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("open");
        });
    });

}

// ---------- Scroll reveal ----------
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach(i => i.classList.add("in-view"));
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
  items.forEach(i => obs.observe(i));
}

// ---------- Skill bars (animate on view) ----------
function initSkillBars() {
  const fills = document.querySelectorAll(".skill-fill");
  if (fills.length === 0) return;
  if (!("IntersectionObserver" in window)) {
    fills.forEach(f => { f.style.width = f.dataset.target + "%"; });
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.target + "%";
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  fills.forEach(f => obs.observe(f));
}

// ---------- Card builders (use PROJECTS / CERTIFICATES from data.js) ----------
function projectCardHTML(p, index) {
  return `
    <article class="card reveal">
      <div class="card-top">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>${p.name}</h3>
      <p class="desc">${p.description}</p>
      <div class="badges">
        ${p.tech.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>
      <a class="card-cta" href="${p.link}" target="_blank" rel="noopener">
        View on GitHub
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </a>
    </article>
  `;
}

function renderProjectPreview(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const slice = PROJECTS.slice(0, count);
  el.innerHTML = slice.map((p, i) => projectCardHTML(p, i)).join("");
  initReveal();
}

function renderProjectsPage(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const categories = ["All", ...new Set(PROJECTS.map(p => p.category))];
  const filterBar = document.getElementById("filterBar");

  function draw(list) {
    if (list.length === 0) {
      el.innerHTML = `<div class="empty-state">No projects in this category yet — check back soon.</div>`;
    } else {
      el.innerHTML = list.map((p, i) => projectCardHTML(p, i)).join("");
    }
    initReveal();
  }

  if (filterBar) {
    filterBar.innerHTML = categories.map((c, i) =>
      `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`
    ).join("");

    filterBar.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.cat;
        const filtered = cat === "All" ? PROJECTS : PROJECTS.filter(p => p.category === cat);
        draw(filtered);
      });
    });
  }

  draw(PROJECTS);
}

function certCardHTML(c) {
  const initials = c.issuer.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return `
    <article class="cert-card reveal">
      <div class="cert-icon">${initials}</div>
      <div>
        <h3>${c.title}</h3>
        <div class="issuer">${c.issuer}</div>
        <div class="date">${c.date}</div>
      </div>
      <a class="cert-link" href="${c.link}" target="_blank" rel="noopener">View credential →</a>
    </article>
  `;
}

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

// ---------- Contact form validation ----------
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const fields = {
    name: { el: form.querySelector("#name"), group: form.querySelector("#name-group") },
    email: { el: form.querySelector("#email"), group: form.querySelector("#email-group") },
    message: { el: form.querySelector("#message"), group: form.querySelector("#message-group") }
  };
  const successBox = document.getElementById("formSuccess");

  function showError(key, msg) {
    fields[key].group.classList.add("invalid");
    fields[key].group.querySelector(".error-msg").textContent = msg;
  }
  function clearError(key) {
    fields[key].group.classList.remove("invalid");
  }

  function validEmail(value) {
    return value.includes("@") && value.includes(".") && value.indexOf("@") < value.lastIndexOf(".");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    if (!fields.name.el.value.trim()) {
      showError("name", "Please enter your name.");
      ok = false;
    } else clearError("name");

    if (!fields.email.el.value.trim()) {
      showError("email", "Please enter your email.");
      ok = false;
    } else if (!validEmail(fields.email.el.value.trim())) {
      showError("email", "Please enter a valid email address.");
      ok = false;
    } else clearError("email");

    if (!fields.message.el.value.trim()) {
      showError("message", "Please write a short message.");
      ok = false;
    } else clearError("message");

    if (ok) {
      successBox.classList.add("show");
      form.reset();
      setTimeout(() => successBox.classList.remove("show"), 5000);
    } else {
      successBox.classList.remove("show");
    }
  });
}

// ---------- Init on load ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavBurger();
  initReveal();
  initSkillBars();
  initContactForm();
  initWelcomeScreen();

  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });

  // Highlight active nav link based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if (a.dataset.page === path) a.classList.add("active");
  });
});
