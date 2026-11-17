/* ==========================================================================
   ANTHROPIC EDITORIAL WORKBENCH ENGINE (app.js)
   Full-featured simulation engine for PCAO-F V2 & CCAO-F Studio
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "PCAOF_STUDIO_STATE_V4";

  const DEFAULT_STATE = {
    theme: "light",
    currentId: 1,
    selected: {},
    confirmed: {},
    bookmarks: [],
    filterType: "all", // "all" | "domain" | "section"
    activeFilterValue: "ALL",
    statusFilter: "all", // "all" | "flagged" | "wrong"
    timerSeconds: 250 * 60,
    timerRunning: false
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const p = JSON.parse(raw);
      return {
        ...DEFAULT_STATE,
        ...p,
        selected: p.selected || {},
        confirmed: p.confirmed || {},
        bookmarks: Array.isArray(p.bookmarks) ? p.bookmarks : [],
        timerSeconds: (p.timerSeconds === 180 * 60 || !p.timerSeconds) ? 250 * 60 : p.timerSeconds,
        timerRunning: false
      };
    } catch {
      return { ...DEFAULT_STATE };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage limits or privacy block
    }
  }

  let state = loadState();
  let lastRenderedId = null;
  let timerInterval = null;

  const esc = (s) =>
    String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const getQuestions = () => (window.PCAOF_DATA && window.PCAOF_DATA.QUESTIONS) || [];
  const getById = (id) => getQuestions().find((q) => q.id === Number(id)) || null;

  function computeStats() {
    const qs = getQuestions();
    const total = qs.length || 203;
    const answeredKeys = Object.keys(state.confirmed);
    const answeredCount = answeredKeys.length;

    let correctCount = 0;
    answeredKeys.forEach((qid) => {
      const q = getById(qid);
      if (q && state.selected[qid] === q.correct) {
        correctCount++;
      }
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const progress = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

    return { total, answeredCount, correctCount, accuracy, progress };
  }

  function toast(message) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = message;
    container.appendChild(t);
    setTimeout(() => {
      t.remove();
    }, 3200);
  }

  /* ------------------------------------------------------------------------
     PARTICLE CELEBRATION EFFECT (Confetti on milestones & correct answers)
     ------------------------------------------------------------------------ */
  function triggerCelebration(intensity = 40) {
    const canvas = document.getElementById("celebration-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#C96442", "#E07A5F", "#2D6A4F", "#D4A373", "#1F1E1D", "#4ADE80"];
    const particles = [];

    for (let i = 0; i < intensity; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() * 200 - 100),
        y: canvas.height * 0.45 + (Math.random() * 100 - 50),
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 14 - 3,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.rSpeed;
        p.alpha -= 0.018;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }
    render();
  }

  /* ------------------------------------------------------------------------
     THEME CONTROLLER
     ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-theme-btn") === theme);
    });
    saveState();
  }

  function initTheme() {
    const saved = state.theme || "light";
    applyTheme(saved);

    document.querySelectorAll("[data-theme-toggle]").forEach((el) => {
      el.addEventListener("click", () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      });
    });

    document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyTheme(btn.getAttribute("data-theme-btn"));
      });
    });
  }

  /* ------------------------------------------------------------------------
     HOME PAGE CONTROLLER
     ------------------------------------------------------------------------ */
  function initHome() {
    const heroTitle = document.getElementById("home-hero-title");
    if (!heroTitle) return; // Not on home page

    const stats = computeStats();

    // 1. Live Metrics Ribbon Elements
    const ringFg = document.getElementById("home-ring-fg");
    const ringPct = document.getElementById("home-ring-pct");
    const statTotal = document.getElementById("home-stat-total");
    const statLive = document.getElementById("home-stat-live");
    const statConfirmed = document.getElementById("home-stat-confirmed");
    const statAccuracy = document.getElementById("home-stat-accuracy");

    if (ringFg) {
      const circ = 2 * Math.PI * 23; // r = 23 -> ~144.5
      const offset = circ - (circ * stats.progress) / 100;
      ringFg.style.strokeDashoffset = offset;
    }
    if (ringPct) ringPct.textContent = `${stats.progress}%`;
    if (statTotal) statTotal.textContent = stats.total;
    if (statLive) statLive.textContent = stats.total;
    if (statConfirmed) statConfirmed.textContent = `${stats.answeredCount}/${stats.total}`;
    if (statAccuracy) statAccuracy.textContent = `${stats.accuracy}%`;

    // 2. Render Domain Cards (4 Major Domains)
    const domainHost = document.getElementById("home-domain-grid");
    if (domainHost && window.PCAOF_DATA) {
      domainHost.innerHTML = window.PCAOF_DATA.CATEGORIES.map((cat) => {
        const catQs = getQuestions().filter((q) => q.category === cat.id);
        const answered = catQs.filter((q) => state.confirmed[q.id]).length;
        const total = catQs.length;
        const pct = total ? Math.round((answered / total) * 100) : 0;

        return `
          <article class="domain-card">
            <div>
              <div class="domain-card-top">
                <span class="domain-badge">${cat.icon} ${esc(cat.short)}</span>
                <span class="domain-progress-stat">${answered}/${total} Done (${pct}%)</span>
              </div>
              <h3 class="domain-title">${esc(cat.id)}</h3>
              <p class="domain-desc">${esc(cat.description)}</p>
              <div class="domain-bar">
                <div class="domain-bar-fill" style="width: ${pct}%;"></div>
              </div>
              <div class="domain-topics">
                ${cat.topics.map((t) => `<span class="topic-tag">${esc(t)}</span>`).join("")}
              </div>
            </div>
            <a class="btn btn-outline btn-sm" style="width:100%;" href="quiz.html?domain=${encodeURIComponent(cat.id)}">
              Practice Domain (${total} Qs) →
            </a>
          </article>
        `;
      }).join("");
    }

    // 3. Render 13 Section / Chapter Directory Cards (Sorted by Curriculum Order)
    const sectionHost = document.getElementById("home-section-grid");
    if (sectionHost) {
      const CANONICAL_SECTIONS = [
        "Claude and ChatGPT 2.0",
        "The New Way of Working",
        "Tour of the Apps",
        "Behind the Screens",
        "The Architecture",
        "Build Something",
        "Case 1: Nisha's AI Team",
        "Case 2: Nisha's First Client",
        "Case 3: Nisha's Firm",
        "Case 4: Nisha's Month-End",
        "The Five Horizons",
        "Preface: The Text Box That Became a Worker",
        "From Skills to Income"
      ];

      const sectionMap = {};
      getQuestions().forEach((q) => {
        if (!sectionMap[q.section]) {
          sectionMap[q.section] = {
            name: q.section,
            chapter: q.chapter,
            count: 0,
            firstId: q.id
          };
        }
        sectionMap[q.section].count++;
      });

      const sectionList = Object.values(sectionMap).sort((a, b) => {
        const idxA = CANONICAL_SECTIONS.indexOf(a.name);
        const idxB = CANONICAL_SECTIONS.indexOf(b.name);
        return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
      });
      sectionHost.innerHTML = sectionList.map((sec, idx) => {
        const secQs = getQuestions().filter((q) => q.section === sec.name);
        const done = secQs.filter((q) => state.confirmed[q.id]).length;

        return `
          <a class="chapter-tile" href="quiz.html?section=${encodeURIComponent(sec.name)}">
            <div class="chapter-tile-header">
              <span class="chapter-num">MOD ${String(idx + 1).padStart(2, "0")}</span>
              <span class="chapter-count">${done}/${sec.count} Done</span>
            </div>
            <div class="chapter-name">${esc(sec.name)}</div>
            <div class="chapter-tile-cta">
              <span>Practice Section (${sec.count} Qs)</span>
              <span>→</span>
            </div>
          </a>
        `;
      }).join("");
    }

    // 4. Interactive Scenario Teaser
    const teaserContainer = document.getElementById("teaser-card");
    if (teaserContainer) {
      const teaserOpts = teaserContainer.querySelectorAll("[data-teaser-opt]");
      const feedbackBox = document.getElementById("teaser-feedback");

      teaserOpts.forEach((btn) => {
        btn.addEventListener("click", () => {
          const opt = btn.getAttribute("data-teaser-opt");
          teaserOpts.forEach((b) => (b.style.borderColor = "var(--border-subtle)"));

          if (feedbackBox) {
            feedbackBox.style.display = "block";
            if (opt === "A") {
              btn.style.borderColor = "var(--status-success-border)";
              btn.style.background = "var(--status-success-bg)";
              feedbackBox.style.background = "var(--status-success-bg)";
              feedbackBox.style.color = "var(--status-success-text)";
              feedbackBox.style.border = "1px solid var(--status-success-border)";
              feedbackBox.innerHTML = `
                <strong>Correct! (Option A)</strong> Cloud work sessions execute inside isolated, temporary microVM sandboxes that are wiped clean upon session termination. To persist outputs or calculation logs, they must be committed to external storage (e.g., connected cloud drive or GitHub branch).
              `;
              triggerCelebration(25);
            } else {
              btn.style.borderColor = "var(--status-error-border)";
              btn.style.background = "var(--status-error-bg)";
              feedbackBox.style.background = "var(--status-error-bg)";
              feedbackBox.style.color = "var(--status-error-text)";
              feedbackBox.style.border = "1px solid var(--status-error-border)";
              feedbackBox.innerHTML = `
                <strong>Incorrect (Option ${opt})</strong> Sandboxes do not quarantine folders or transfer scripts to vector databases; they are purely ephemeral execution containers destroyed upon completion.
              `;
            }
          }
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     QUIZ WORKBENCH ARENA CONTROLLER
     ------------------------------------------------------------------------ */
  function formatTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function getActiveQuestionPool() {
    let pool = getQuestions();

    if (state.filterType === "domain" && state.activeFilterValue !== "ALL") {
      pool = pool.filter((q) => q.category === state.activeFilterValue);
    } else if (state.filterType === "section" && state.activeFilterValue !== "ALL") {
      pool = pool.filter((q) => q.section === state.activeFilterValue);
    }

    if (state.statusFilter === "flagged") {
      pool = pool.filter((q) => state.bookmarks.includes(q.id));
    } else if (state.statusFilter === "wrong") {
      pool = pool.filter((q) => state.confirmed[q.id] && state.selected[q.id] !== q.correct);
    }

    return pool;
  }

  function renderArena() {
    const q = getById(state.currentId);
    if (!q) return;

    // 1. Update stats bar
    const stats = computeStats();
    const confirmedLabel = document.getElementById("quiz-stat-confirmed");
    const accuracyLabel = document.getElementById("quiz-stat-accuracy");

    if (confirmedLabel) {
      confirmedLabel.textContent = `${stats.answeredCount} / ${stats.total} Confirmed`;
    }
    if (accuracyLabel) {
      accuracyLabel.textContent = `${stats.accuracy}% Accuracy`;
    }

    // 2. Breadcrumbs & Meta
    const bcDomain = document.getElementById("breadcrumb-domain");
    const bcSection = document.getElementById("breadcrumb-section");
    const bcId = document.getElementById("breadcrumb-id");
    const bookmarkBtn = document.getElementById("bookmark-btn");

    if (bcDomain) bcDomain.textContent = q.category || q.chapter;
    if (bcSection) bcSection.textContent = q.section;
    if (bcId) bcId.textContent = `Scenario #${q.id} of ${stats.total}`;

    const isBookmarked = state.bookmarks.includes(q.id);
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
      bookmarkBtn.innerHTML = isBookmarked ? "★ Bookmarked" : "☆ Bookmark";
    }

    // 3. Question Stem
    const stemEl = document.getElementById("question-stem");
    if (stemEl) {
      stemEl.textContent = q.question;
    }

    // 4. Options List
    const optionsHost = document.getElementById("options-list");
    const isConfirmed = Boolean(state.confirmed[q.id]);
    const userSelected = state.selected[q.id];

    if (optionsHost) {
      const keys = ["A", "B", "C", "D"];
      optionsHost.innerHTML = keys
        .map((k) => {
          let extraClass = "";
          if (userSelected === k) extraClass += " selected";

          if (isConfirmed) {
            if (k === q.correct) {
              extraClass += " correct-revealed";
            } else if (userSelected === k && userSelected !== q.correct) {
              extraClass += " incorrect-revealed";
            }
          }

          return `
            <div class="option-item${extraClass}" data-option-key="${k}">
              <div class="option-badge">${k}</div>
              <div class="option-text">${esc(q.options[k])}</div>
            </div>
          `;
        })
        .join("");

      // Bind option clicks
      optionsHost.querySelectorAll("[data-option-key]").forEach((item) => {
        item.addEventListener("click", () => {
          if (isConfirmed) return; // Locked once confirmed
          const chosen = item.getAttribute("data-option-key");
          state.selected[q.id] = chosen;
          saveState();
          renderArena();
        });
      });
    }

    // 5. Action Buttons State
    const confirmBtn = document.getElementById("confirm-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (confirmBtn) {
      if (isConfirmed) {
        confirmBtn.textContent = "Answer Confirmed ✓";
        confirmBtn.disabled = true;
        confirmBtn.classList.add("btn-outline");
        confirmBtn.classList.remove("btn-primary");
      } else {
        confirmBtn.textContent = "Confirm Answer ↵";
        confirmBtn.disabled = !userSelected;
        confirmBtn.classList.add("btn-primary");
        confirmBtn.classList.remove("btn-outline");
      }
    }

    const pool = getActiveQuestionPool();
    const currIdx = pool.findIndex((item) => item.id === q.id);

    if (prevBtn) prevBtn.disabled = currIdx <= 0;
    if (nextBtn) nextBtn.disabled = currIdx < 0 || currIdx >= pool.length - 1;

    // 6. Verification Feedback Drawer
    const drawer = document.getElementById("feedback-drawer");
    if (drawer) {
      if (isConfirmed) {
        drawer.style.display = "block";
        const isRight = userSelected === q.correct;

        const ref = q.source_reference || {};
        const dissect = q.why_incorrect || q.distractors || {};

        drawer.innerHTML = `
          <div class="feedback-header ${isRight ? "is-correct" : "is-incorrect"}">
            <span>${isRight ? "✓ Correct Verification" : "✕ Flawed Architectural Choice"}</span>
            <span class="mono" style="font-size:0.9rem;">Correct Key: [${q.correct}]</span>
          </div>

          <div class="feedback-body">
            <!-- Source Reference Card -->
            <div class="audit-reference-card">
              <div class="audit-reference-title">
                <span>🔍 Auditable Primary Source Reference</span>
              </div>
              <div class="audit-meta-grid">
                <div class="audit-meta-cell">
                  <span class="audit-meta-k">Curriculum Chapter</span>
                  <span class="audit-meta-v">${esc(ref.chapter || q.chapter)}</span>
                </div>
                <div class="audit-meta-cell">
                  <span class="audit-meta-k">Module Section</span>
                  <span class="audit-meta-v">${esc(ref.sub_section || q.section)}</span>
                </div>
                <div class="audit-meta-cell">
                  <span class="audit-meta-k">Primary Source File</span>
                  <span class="audit-meta-v mono">${esc(ref.source_file || q.sourceFile || "Official Document")}</span>
                </div>
                <div class="audit-meta-cell">
                  <span class="audit-meta-k">Core Exam Concept</span>
                  <span class="audit-meta-v">${esc(ref.core_concept || q.concept)}</span>
                </div>
              </div>
            </div>

            <!-- Mechanism of Success -->
            <div>
              <h4 style="font-size:0.98rem; font-weight:700; margin-bottom:8px; color:var(--ink-primary);">Mechanism of Success</h4>
              <p style="font-size:0.95rem; color:var(--ink-secondary); line-height:1.68;">
                ${esc(q.explanation || q.whyCorrect)}
              </p>
            </div>

            <!-- Surgical Distractor Dissection -->
            <div class="dissection-block">
              <h4 class="dissection-heading">Surgical Distractor Dissection</h4>
              <div class="dissection-list">
                ${["A", "B", "C", "D"]
                  .filter((k) => k !== q.correct)
                  .map((k) => `
                    <div class="dissection-item">
                      <strong>Option [${k}]:</strong> ${esc(dissect[k] || "Flawed architectural choice in this operational context.")}
                    </div>
                  `)
                  .join("")}
              </div>
            </div>
          </div>
        `;
      } else {
        drawer.style.display = "none";
        drawer.innerHTML = "";
      }
    }

    // 7. Render Jump Navigator Matrix
    renderMatrix();
  }

  function renderMatrix() {
    const matrixHost = document.getElementById("matrix-grid");
    if (!matrixHost) return;

    const pool = getActiveQuestionPool();

    const matrixTitle = document.getElementById("matrix-header-title");
    if (matrixTitle) {
      if (state.filterType === "section") {
        matrixTitle.textContent = `Topic Matrix: ${state.activeFilterValue} (${pool.length} Qs)`;
      } else if (state.filterType === "domain") {
        matrixTitle.textContent = `Domain Matrix: ${state.activeFilterValue} (${pool.length} Qs)`;
      } else {
        matrixTitle.textContent = `Scenario Navigation Matrix (Random Order - ${pool.length} Qs)`;
      }
    }

    matrixHost.innerHTML = pool
      .map((item) => {
        let cls = "matrix-btn";
        if (item.id === state.currentId) cls += " active";
        if (state.bookmarks.includes(item.id)) cls += " bookmarked";

        if (state.confirmed[item.id]) {
          if (state.selected[item.id] === item.correct) {
            cls += " answered-correct";
          } else {
            cls += " answered-incorrect";
          }
        }

        return `<button type="button" class="${cls}" data-goto-id="${item.id}">${item.id}</button>`;
      })
      .join("");

    matrixHost.querySelectorAll("[data-goto-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = Number(btn.getAttribute("data-goto-id"));
        state.currentId = targetId;
        saveState();
        renderArena();
      });
    });
  }

  function initQuiz() {
    const wb = document.getElementById("quiz-workbench");
    if (!wb) return;

    // Parse URL params for domain or section filters
    const params = new URLSearchParams(window.location.search);
    const domainParam = params.get("domain") || params.get("filter");
    const sectionParam = params.get("section");
    const qParam = params.get("q");

    if (sectionParam) {
      state.filterType = "section";
      state.activeFilterValue = sectionParam;
      const target = getQuestions().find((q) => q.section === sectionParam);
      if (target) state.currentId = target.id;
    } else if (domainParam && domainParam !== "ALL") {
      state.filterType = "domain";
      state.activeFilterValue = domainParam;
      const target = getQuestions().find((q) => q.category === domainParam);
      if (target) state.currentId = target.id;
    } else {
      state.filterType = "all";
      state.activeFilterValue = "ALL";
    }

    if (qParam && Number(qParam) >= 1 && Number(qParam) <= getQuestions().length) {
      state.currentId = Number(qParam);
    }

    const CANONICAL_SECTIONS = [
      "Claude and ChatGPT 2.0",
      "The New Way of Working",
      "Tour of the Apps",
      "Behind the Screens",
      "The Architecture",
      "Build Something",
      "Case 1: Nisha's AI Team",
      "Case 2: Nisha's First Client",
      "Case 3: Nisha's Firm",
      "Case 4: Nisha's Month-End",
      "The Five Horizons",
      "Preface: The Text Box That Became a Worker",
      "From Skills to Income"
    ];

    // Populate and wire direct Topic / Module Dropdown Filter
    const topicSelect = document.getElementById("topic-select-filter");
    if (topicSelect && window.PCAOF_DATA) {
      const sectionCounts = {};
      getQuestions().forEach((q) => {
        sectionCounts[q.section] = (sectionCounts[q.section] || 0) + 1;
      });

      let optionsHtml = '<option value="ALL">📚 Filter by Topic: All Topics (Random)</option>';
      CANONICAL_SECTIONS.forEach((sec, idx) => {
        const count = sectionCounts[sec] || 0;
        optionsHtml += `<option value="${esc(sec)}">MOD ${String(idx + 1).padStart(2, "0")}: ${esc(sec)} (${count} Qs)</option>`;
      });
      topicSelect.innerHTML = optionsHtml;

      if (state.filterType === "section") {
        topicSelect.value = state.activeFilterValue;
      } else {
        topicSelect.value = "ALL";
      }

      topicSelect.addEventListener("change", () => {
        const selectedVal = topicSelect.value;
        if (selectedVal === "ALL") {
          state.filterType = "all";
          state.activeFilterValue = "ALL";
          toast("Showing all 203 scenarios in randomized order");
        } else {
          state.filterType = "section";
          state.activeFilterValue = selectedVal;
          toast(`Filtered to topic: ${selectedVal}`);
        }

        const pool = getActiveQuestionPool();
        if (pool.length > 0) {
          state.currentId = pool[0].id;
        }

        saveState();
        initQuizFiltersUI();
        renderArena();
      });
    }

    // Build filter chips
    const filterContainer = document.getElementById("filter-chips-container");
    if (filterContainer && window.PCAOF_DATA) {
      const chips = [
        { type: "all", val: "ALL", label: `🎲 All MCQs (Random)` },
        ...window.PCAOF_DATA.CATEGORIES.map((c) => ({ type: "domain", val: c.id, label: c.short }))
      ];

      filterContainer.innerHTML = chips
        .map(
          (c) =>
            `<button type="button" class="filter-chip ${
              state.filterType === c.type && state.activeFilterValue === c.val ? "active" : ""
            }" data-filter-type="${c.type}" data-filter-val="${esc(c.val)}">${esc(c.label)}</button>`
        )
        .join("");

      filterContainer.querySelectorAll("[data-filter-val]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.filterType = btn.getAttribute("data-filter-type");
          state.activeFilterValue = btn.getAttribute("data-filter-val");

          if (topicSelect) {
            topicSelect.value = state.filterType === "section" ? state.activeFilterValue : "ALL";
          }

          const pool = getActiveQuestionPool();
          if (pool.length > 0 && !pool.some((q) => q.id === state.currentId)) {
            state.currentId = pool[0].id;
          }

          saveState();
          initQuizFiltersUI();
          renderArena();
        });
      });
    }

    function initQuizFiltersUI() {
      if (filterContainer) {
        filterContainer.querySelectorAll("[data-filter-val]").forEach((btn) => {
          const t = btn.getAttribute("data-filter-type");
          const v = btn.getAttribute("data-filter-val");
          btn.classList.toggle("active", state.filterType === t && state.activeFilterValue === v);
        });
      }
      if (topicSelect) {
        topicSelect.value = state.filterType === "section" ? state.activeFilterValue : "ALL";
      }
    }

    // Status filter buttons (All | Flagged | Wrong)
    document.querySelectorAll("[data-status-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.statusFilter = btn.getAttribute("data-status-filter");
        document.querySelectorAll("[data-status-filter]").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
        const pool = getActiveQuestionPool();
        if (pool.length > 0 && !pool.some((q) => q.id === state.currentId)) {
          state.currentId = pool[0].id;
        }
        saveState();
        renderArena();
      });
    });

    // Navigation buttons
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const confirmBtn = document.getElementById("confirm-btn");
    const bookmarkBtn = document.getElementById("bookmark-btn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const pool = getActiveQuestionPool();
        const currIdx = pool.findIndex((item) => item.id === state.currentId);
        if (currIdx > 0) {
          state.currentId = pool[currIdx - 1].id;
          saveState();
          renderArena();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const pool = getActiveQuestionPool();
        const currIdx = pool.findIndex((item) => item.id === state.currentId);
        if (currIdx >= 0 && currIdx < pool.length - 1) {
          state.currentId = pool[currIdx + 1].id;
          saveState();
          renderArena();
        }
      });
    }

    if (bookmarkBtn) {
      bookmarkBtn.addEventListener("click", () => {
        const id = state.currentId;
        if (state.bookmarks.includes(id)) {
          state.bookmarks = state.bookmarks.filter((b) => b !== id);
          toast(`Removed bookmark on Scenario #${id}`);
        } else {
          state.bookmarks.push(id);
          toast(`★ Bookmarked Scenario #${id}`);
        }
        saveState();
        renderArena();
      });
    }

    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        const id = state.currentId;
        const q = getById(id);
        if (!q || !state.selected[id] || state.confirmed[id]) return;

        state.confirmed[id] = true;
        saveState();

        if (state.selected[id] === q.correct) {
          toast("✓ Verified Correct!");
          triggerCelebration(35);
        } else {
          toast(`✕ Incorrect. Correct key is [${q.correct}]`);
        }

        renderArena();

        // Check milestone celebrations
        const confirmedTotal = Object.keys(state.confirmed).length;
        if ([25, 50, 100, 150, 200, 203].includes(confirmedTotal)) {
          toast(`🎉 Milestone: ${confirmedTotal} Scenarios Confirmed!`);
          triggerCelebration(70);
        }
      });
    }

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      // Don't intercept if user is typing in an input
      if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

      const q = getById(state.currentId);
      if (!q) return;

      const key = e.key.toUpperCase();

      if (["A", "B", "C", "D"].includes(key) && !state.confirmed[q.id]) {
        state.selected[q.id] = key;
        saveState();
        renderArena();
      } else if (["1", "2", "3", "4"].includes(key) && !state.confirmed[q.id]) {
        const map = { "1": "A", "2": "B", "3": "C", "4": "D" };
        state.selected[q.id] = map[key];
        saveState();
        renderArena();
      } else if (e.key === "Enter" && !state.confirmed[q.id] && state.selected[q.id]) {
        if (confirmBtn) confirmBtn.click();
      } else if (e.key === "ArrowLeft") {
        if (prevBtn && !prevBtn.disabled) prevBtn.click();
      } else if (e.key === "ArrowRight") {
        if (nextBtn && !nextBtn.disabled) nextBtn.click();
      } else if (key === "B") {
        if (bookmarkBtn) bookmarkBtn.click();
      }
    });

    // Timer Controls
    const timerDisplay = document.getElementById("timer-display");
    const timerToggle = document.getElementById("timer-toggle");
    const timerReset = document.getElementById("timer-reset");

    const syncTimer = () => {
      if (timerDisplay) timerDisplay.textContent = formatTimer(state.timerSeconds);
      if (timerToggle) timerToggle.textContent = state.timerRunning ? "Pause" : "Start";
    };

    if (timerToggle) {
      timerToggle.addEventListener("click", () => {
        state.timerRunning = !state.timerRunning;
        if (state.timerRunning) {
          timerInterval = setInterval(() => {
            if (state.timerSeconds > 0) {
              state.timerSeconds--;
              syncTimer();
              if (state.timerSeconds % 5 === 0) saveState();
            } else {
              clearInterval(timerInterval);
              state.timerRunning = false;
              syncTimer();
              toast("⏱ Time expired for exam!");
            }
          }, 1000);
        } else {
          clearInterval(timerInterval);
        }
        syncTimer();
        saveState();
      });
    }

    if (timerReset) {
      timerReset.addEventListener("click", () => {
        clearInterval(timerInterval);
        state.timerRunning = false;
        state.timerSeconds = 250 * 60;
        syncTimer();
        saveState();
        toast("Timer reset to 250:00");
      });
    }

    syncTimer();

    // Reset Progress Modal
    const resetModal = document.getElementById("reset-modal");
    const openResetBtn = document.getElementById("open-reset-btn");
    const cancelResetBtn = document.getElementById("cancel-reset-btn");
    const confirmResetBtn = document.getElementById("confirm-reset-btn");

    if (openResetBtn && resetModal) {
      openResetBtn.addEventListener("click", () => {
        resetModal.style.display = "flex";
      });
    }
    if (cancelResetBtn && resetModal) {
      cancelResetBtn.addEventListener("click", () => {
        resetModal.style.display = "none";
      });
    }
    if (confirmResetBtn && resetModal) {
      confirmResetBtn.addEventListener("click", () => {
        state.selected = {};
        state.confirmed = {};
        state.bookmarks = [];
        state.timerSeconds = 250 * 60;
        state.timerRunning = false;
        saveState();
        resetModal.style.display = "none";
        toast("Progress reset to factory state.");
        renderArena();
      });
    }

    renderArena();
  }

  // DOM Content Loaded Handler
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initHome();
    initQuiz();
  });
})();
