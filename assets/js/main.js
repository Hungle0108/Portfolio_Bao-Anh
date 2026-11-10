/**
 * BAO ANH — EDITORIAL PORTFOLIO INTERACTION & RENDERING (site/assets/js/main.js)
 * Plain Vanilla JS · Works over file:// and GitHub Pages (zero fetch calls)
 */
(function () {
  "use strict";

  var data = window.CONTENT;
  if (!data) return;

  // 1. Draft mode & optional theme URL parameter (?draft, ?theme=light, ?theme=dark)
  var params = new URLSearchParams(window.location.search);
  var isDraftMode = params.has("draft") || params.has("review");
  if (isDraftMode) {
    document.body.classList.add("draft");
  }
  if (params.get("theme") === "light" || params.get("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", params.get("theme"));
  }

  // Reveal optional blocks if enabled in content.js
  var pullQuoteBlock = document.getElementById("pull-quote-block");
  if (pullQuoteBlock && data.about && data.about.showPullQuote) {
    pullQuoteBlock.classList.remove("todo");
  }
  var newMediaSubsection = document.getElementById("new-media-subsection");
  if (newMediaSubsection && data.showNewMediaWork) {
    newMediaSubsection.classList.remove("todo");
  }

  // Helper to escape HTML safely
  function esc(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // 2. Render Key Figures Strip (Section 01)
  var figuresMount = document.getElementById("figures-strip-mount");
  if (figuresMount && data.figures) {
    figuresMount.innerHTML = data.figures
      .map(function (f) {
        return (
          '<div class="figure-cell">' +
          '<div class="figure-label">' + esc(f.label) + "</div>" +
          '<div class="figure-num">' +
          esc(f.value) +
          (f.unit ? " <small>" + esc(f.unit) + "</small>" : "") +
          "</div>" +
          '<div class="figure-meta">' + esc(f.detail) + "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  // 2B. Render Section 03 — Experience: Magazine Case Study (TokyoLife Brand Communication Internship)
  var experienceMount = document.getElementById("experience-mount");
  if (experienceMount && data.experience) {
    var exp = data.experience;
    var stepsHtml = (exp.steps || [])
      .map(function (step, idx) {
        var arrowHtml =
          idx < exp.steps.length - 1
            ? '<span class="case-step-arrow" aria-hidden="true">→</span>'
            : "";
        return (
          '<div class="case-step-card">' +
          '<div class="case-step-header">' +
          '<span class="case-step-num">Step ' +
          esc(step.stepNum) +
          "</span>" +
          '<span class="case-step-phase">' +
          esc(step.phase) +
          "</span>" +
          "</div>" +
          '<h4 class="case-step-title">' +
          esc(step.title) +
          "</h4>" +
          '<p class="case-step-desc">' +
          esc(step.description) +
          "</p>" +
          "</div>" +
          arrowHtml
        );
      })
      .join("");

    experienceMount.innerHTML =
      '<article class="experience-case-study">' +
      '<div class="case-study-top-grid">' +
      '<div class="case-study-main">' +
      '<span class="patent-badge">Industry Case Study · ' +
      esc(exp.dates) +
      "</span>" +
      '<h3 class="patent-title">' +
      esc(exp.role) +
      " — " +
      esc(exp.company) +
      "</h3>" +
      '<div class="patent-subtitle-vi">' +
      esc(exp.department) +
      " · " +
      esc(exp.location) +
      " · Mentor: " +
      esc(exp.mentor) +
      "</div>" +
      '<div class="cnm-lens-callout">' +
      esc(exp.cnmFraming) +
      "</div>" +
      "</div>" +
      '<aside class="case-study-quote-col" aria-label="Internship reference letter endorsement">' +
      '<blockquote class="case-pull-quote">' +
      '<p class="case-pull-quote-text">' +
      esc(exp.pullQuote) +
      "</p>" +
      '<p class="case-pull-quote-sub">' +
      esc(exp.secondaryQuote) +
      "</p>" +
      '<footer class="case-pull-quote-attr">— ' +
      esc(exp.quoteAttribution) +
      "<span>" +
      esc(exp.quoteContext) +
      "</span></footer>" +
      "</blockquote>" +
      "</aside>" +
      "</div>" +
      '<div class="case-flow-section">' +
      '<div class="case-flow-kicker">Three-Stage Workflow · Listen → Visualise → Adapt</div>' +
      '<div class="case-steps-flow">' +
      stepsHtml +
      "</div>" +
      "</div>" +
      '<div class="case-tools-bar">' +
      '<div class="case-tools-item"><strong>Tools:</strong> ' +
      esc(exp.tools) +
      ' <span class="case-tools-detail">(' +
      esc(exp.toolsDetail) +
      ")</span></div>" +
      '<div class="case-tools-item"><strong>Discipline:</strong> Communication Management + Data-Driven New Media</div>' +
      "</div>" +
      "</article>";
  }

  // 3. Render Two Separate Invention Project Dossiers (Section 04)
  // Keeps only the Patent No. 4647 plates as visual previews in Section 03;
  // international awards open the lightbox via compact recognition rows.
  var inventionProjectsMount = document.getElementById("invention-projects-mount");
  if (inventionProjectsMount && data.invention && data.invention.projects) {
    inventionProjectsMount.innerHTML = data.invention.projects
      .map(function (proj) {
        var metaHtml = (proj.meta || [])
          .map(function (m) {
            return (
              "<div><dt>" +
              esc(m.label) +
              "</dt><dd>" +
              esc(m.value) +
              "</dd></div>"
            );
          })
          .join("");

        var archHtml = proj.hasArchitectureDiagram
          ? '<div class="patent-arch-box" aria-label="System architecture diagram from Patent Figure 1">' +
            '<div class="patent-arch-label">Communication Flow · Patent No. 4647 (Fig. 1 Schematic)</div>' +
            '<div class="arch-nodes">' +
            '<div class="arch-node"><strong>Teacher Terminal (10)</strong><br>Instruction &amp; Material Encoding</div>' +
            '<span class="arch-arrow" aria-hidden="true">⇄</span>' +
            '<div class="arch-node arch-node-server"><strong>Learning Server (70)</strong><br>Push Engine &amp; Automated Analytics</div>' +
            '<span class="arch-arrow" aria-hidden="true">⇄</span>' +
            '<div class="arch-node"><strong>Student (30) &amp; Parent (50)</strong><br>Progress &amp; Feedback Terminals</div>' +
            "</div></div>"
          : "";

        var patentPlatesHtml = "";
        if (proj.patentPlates && proj.patentPlates.length) {
          patentPlatesHtml =
            '<div class="patent-plates-grid">' +
            proj.patentPlates
              .map(function (plate) {
                var isLandscape = plate.width > plate.height;
                return (
                  '<div class="patent-plate-card">' +
                  '<button type="button" class="cert-zoom-btn ' +
                  (isLandscape ? "landscape" : "") +
                  '" data-cert-id="' +
                  esc(plate.certId) +
                  '" aria-label="Enlarge patent document: ' +
                  esc(plate.title) +
                  '">' +
                  '<img src="' +
                  esc(plate.img) +
                  '" width="' +
                  plate.width +
                  '" height="' +
                  plate.height +
                  '" decoding="async" alt="' +
                  esc(plate.alt) +
                  '">' +
                  '<span class="zoom-pill">Zoom +</span>' +
                  "</button>" +
                  '<div class="patent-plate-caption">' +
                  "<strong>" +
                  esc(plate.badge) +
                  "</strong>" +
                  "<span>" +
                  esc(plate.caption) +
                  "</span>" +
                  "</div>" +
                  "</div>"
                );
              })
              .join("") +
            "</div>";
        }

        var recognitionsHtml = "";
        if (proj.recognitions && proj.recognitions.length) {
          recognitionsHtml =
            '<div class="project-recognitions-box">' +
            '<div class="project-recognitions-title">Verified Recognitions &amp; Lightbox Previews · ' +
            esc(proj.title.split(" — ")[0]) +
            "</div>" +
            '<div class="project-recognitions-list">' +
            proj.recognitions
              .map(function (rec) {
                return (
                  '<div class="project-rec-row">' +
                  '<div class="project-rec-info">' +
                  '<span class="project-rec-badge">' +
                  esc(rec.badge) +
                  " · " +
                  esc(rec.year) +
                  "</span>" +
                  '<span class="project-rec-name">' +
                  esc(rec.title) +
                  "</span>" +
                  '<span class="project-rec-issuer">' +
                  esc(rec.issuer) +
                  "</span>" +
                  "</div>" +
                  '<button type="button" class="cert-inline-btn" data-cert-id="' +
                  esc(rec.certId) +
                  '" aria-label="Open certificate in lightbox: ' +
                  esc(rec.title) +
                  '">' +
                  esc(rec.btnLabel || "Preview ↗") +
                  "</button>" +
                  "</div>"
                );
              })
              .join("") +
            "</div>" +
            "</div>";
        }

        return (
          '<article id="' +
          esc(proj.id) +
          '" class="invention-project-dossier">' +
          '<div class="project-narrative-wrap">' +
          '<div class="project-narrative-main">' +
          '<span class="patent-badge">' +
          esc(proj.indexLabel) +
          "</span>" +
          '<h3 class="patent-title">' +
          esc(proj.title) +
          "</h3>" +
          '<div class="patent-subtitle-vi">' +
          esc(proj.subtitle) +
          "</div>" +
          '<div class="cnm-lens-callout">' +
          esc(proj.cnmLens) +
          "</div>" +
          '<p class="patent-desc"><strong>Project Overview:</strong> ' +
          esc(proj.description) +
          "</p>" +
          '<p class="patent-desc"><strong>Co-Inventors &amp; Recognition:</strong> ' +
          esc(proj.teamAndHonors) +
          "</p>" +
          '<div class="todo todo-badge">' +
          esc(proj.todoNote) +
          "</div>" +
          "</div>" +
          '<div class="project-narrative-side">' +
          '<dl class="patent-meta-grid">' +
          metaHtml +
          "</dl>" +
          archHtml +
          patentPlatesHtml +
          "</div>" +
          "</div>" +
          recognitionsHtml +
          "</article>"
        );
      })
      .join("");
  }

  // 4. Render Communications & Leadership Masthead (Section 04)
  // Separated into 6 consistent columns: Dates | Scope | Organisation | Role | Focus | Proof
  var leadershipMount = document.getElementById("leadership-mount");
  if (leadershipMount && data.leadership) {
    var headerHtml =
      '<div class="leadership-row header-row" role="row">' +
      '<div role="columnheader">Dates</div>' +
      '<div role="columnheader">Scope</div>' +
      '<div role="columnheader">Organisation / Project</div>' +
      '<div role="columnheader">Role</div>' +
      '<div role="columnheader">Focus</div>' +
      '<div role="columnheader">Proof</div>' +
      "</div>";

    var rowsHtml = data.leadership
      .map(function (item) {
        var proofHtml = item.certId
          ? '<button type="button" class="cert-inline-btn" data-cert-id="' +
            esc(item.certId) +
            '" aria-label="View certificate for ' +
            esc(item.org) +
            '">Certificate ↗</button>'
          : '<span class="lead-proof-empty" aria-label="No certificate attached">—</span>';

        return (
          '<div class="leadership-row" role="row">' +
          '<div class="lead-dates" role="cell" data-label="Dates">' +
          esc(item.dates) +
          (item.datesTodo
            ? '<div class="todo todo-badge">' + esc(item.datesTodo) + "</div>"
            : "") +
          "</div>" +
          '<div class="lead-level" role="cell" data-label="Scope">' +
          esc(item.level) +
          "</div>" +
          '<div class="lead-org" role="cell" data-label="Organisation">' +
          esc(item.org) +
          "</div>" +
          '<div class="lead-role" role="cell" data-label="Role">' +
          esc(item.role) +
          (item.impactTodo
            ? '<div class="todo todo-badge">' + esc(item.impactTodo) + "</div>"
            : "") +
          "</div>" +
          '<div class="lead-cat" role="cell" data-label="Focus">' +
          esc(item.category) +
          "</div>" +
          '<div class="lead-proof" role="cell" data-label="Proof">' +
          proofHtml +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    leadershipMount.innerHTML = headerHtml + rowsHtml;
  }

  // 4B. Render Sub-section: Selected New Media Work (Section 04)
  var newMediaMount = document.getElementById("new-media-work-mount");
  if (newMediaMount && data.newMediaWork) {
    newMediaMount.innerHTML = data.newMediaWork
      .map(function (piece) {
        var coverHtml = piece.coverImg
          ? '<img src="' +
            esc(piece.coverImg) +
            '" width="800" height="500" loading="lazy" decoding="async" alt="' +
            esc(piece.title) +
            '">'
          : "<span>" +
            esc(piece.index) +
            " · Visual Slot</span>" +
            '<span class="todo" style="margin-top:0.25rem;color:var(--accent)">' +
            esc(piece.coverTodo || "TODO: Add cover image in content.js") +
            "</span>";

        var linkHtml = piece.linkUrl
          ? '<a href="' +
            esc(piece.linkUrl) +
            '" target="_blank" rel="noopener noreferrer" class="cert-inline-btn">View Piece ↗</a>'
          : '<span class="cert-inline-btn todo" style="cursor:default;opacity:0.8">' +
            esc(piece.linkLabel || "TODO: External Link") +
            "</span>";

        return (
          '<article class="new-media-card' +
          (piece.isDraft ? " todo" : "") +
          '">' +
          "<div>" +
          '<div class="new-media-cover">' +
          coverHtml +
          "</div>" +
          '<div style="padding-top:1rem">' +
          '<div class="new-media-meta">' +
          esc(piece.index) +
          " · " +
          esc(piece.format) +
          "</div>" +
          '<h4 class="new-media-title">' +
          esc(piece.title) +
          "</h4>" +
          '<div class="new-media-org">' +
          esc(piece.organisation) +
          " — " +
          esc(piece.role) +
          "</div>" +
          '<p class="new-media-body">' +
          esc(piece.goalAndResult) +
          "</p>" +
          "</div>" +
          "</div>" +
          "<div>" +
          '<div class="new-media-tools"><strong>Tools:</strong> ' +
          esc(piece.tools) +
          "</div>" +
          '<div style="margin-top:0.75rem">' +
          linkHtml +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  // 5. Render Honors & Awards (Section 05)
  function renderHonorList(items) {
    return items
      .map(function (h) {
        var btn = h.certId
          ? '<button type="button" class="cert-inline-btn" data-cert-id="' +
            esc(h.certId) +
            '" aria-label="View certificate for ' +
            esc(h.title) +
            '">Preview ↗</button>'
          : "";
        return (
          '<div class="honor-item">' +
          "<div>" +
          '<div class="honor-year">' +
          esc(h.year) +
          "</div>" +
          '<h4 class="honor-title">' +
          esc(h.title) +
          "</h4>" +
          '<p class="honor-sub">' +
          esc(h.subtitle) +
          "</p>" +
          '<div class="honor-issuer">' +
          esc(h.issuer) +
          "</div>" +
          "</div>" +
          btn +
          "</div>"
        );
      })
      .join("");
  }

  var honorsInventionMount = document.getElementById("honors-invention-mount");
  var honorsAcademicMount = document.getElementById("honors-academic-mount");
  if (honorsInventionMount && data.honors) {
    honorsInventionMount.innerHTML = renderHonorList(data.honors.invention);
  }
  if (honorsAcademicMount && data.honors) {
    honorsAcademicMount.innerHTML = renderHonorList(data.honors.academic);
  }

  // 6. Render Academics (Section 06)
  var schoolsMount = document.getElementById("schools-mount");
  if (schoolsMount && data.academics) {
    schoolsMount.innerHTML = data.academics.schools
      .map(function (s) {
        return (
          '<li class="school-item">' +
          '<div class="school-period">' +
          esc(s.period) +
          " · " +
          esc(s.grades) +
          "</div>" +
          '<div class="school-name">' +
          esc(s.name) +
          "</div>" +
          '<div class="school-detail">' +
          esc(s.detail) +
          " (" +
          esc(s.location) +
          ")</div>" +
          "</li>"
        );
      })
      .join("");
  }

  var selectionsMount = document.getElementById("selections-mount");
  if (selectionsMount && data.academics && data.academics.selections) {
    selectionsMount.innerHTML = data.academics.selections
      .map(function (sel) {
        var btn = sel.certId
          ? '<div style="margin-top:0.75rem"><button type="button" class="cert-inline-btn" data-cert-id="' +
            esc(sel.certId) +
            '" aria-label="View Certificate of Participation for ' +
            esc(sel.title) +
            '">Certificate of Participation ↗</button></div>'
          : "";
        return (
          '<div class="test-card">' +
          '<div class="test-card-top">' +
          '<span class="test-name">City-Level Selection · ' +
          esc(sel.subject) +
          "</span>" +
          '<span class="test-date">' +
          esc(sel.date) +
          "</span>" +
          "</div>" +
          '<div class="school-name" style="margin-bottom:0.35rem">' +
          esc(sel.title) +
          "</div>" +
          '<div class="test-breakdown">' +
          esc(sel.detail) +
          "</div>" +
          btn +
          "</div>"
        );
      })
      .join("");
  }

  var testsMount = document.getElementById("tests-mount");
  if (testsMount && data.academics) {
    testsMount.innerHTML = data.academics.tests
      .map(function (t) {
        return (
          '<div class="test-card">' +
          '<div class="test-card-top">' +
          '<span class="test-name">' +
          esc(t.name) +
          " · " +
          esc(t.badge) +
          "</span>" +
          '<span class="test-date">' +
          esc(t.date) +
          "</span>" +
          "</div>" +
          '<div class="test-score">' +
          esc(t.score) +
          "</div>" +
          '<div class="test-breakdown">' +
          esc(t.breakdown) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  var gpaMount = document.getElementById("gpa-summary-mount");
  if (gpaMount && data.academics) {
    gpaMount.innerHTML = data.academics.gpaSummary
      .map(function (g) {
        return (
          '<div class="gpa-box">' +
          '<div class="gpa-box-title">' +
          esc(g.grade) +
          "</div>" +
          '<div class="gpa-year-num">' +
          esc(g.year) +
          ' <small style="font-size:0.55em;color:var(--ink-muted)">/ 10</small></div>' +
          '<div class="gpa-sem-row">Sem I: ' +
          esc(g.sem1) +
          " · Sem II: " +
          esc(g.sem2) +
          (g.roundedNote ? " (" + esc(g.roundedNote) + ")" : "") +
          "</div>" +
          '<div class="gpa-sem-row" style="margin-top:0.25rem;color:var(--ink-muted)">' +
          esc(g.standing) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  var subjectsMount = document.getElementById("subjects-tbody-mount");
  if (subjectsMount && data.academics) {
    subjectsMount.innerHTML = data.academics.subjects
      .map(function (sub) {
        return (
          '<tr class="' +
          (sub.highlight ? "highlight-row" : "") +
          '">' +
          "<td>" +
          esc(sub.name) +
          "</td>" +
          '<td class="num">' +
          esc(sub.g10) +
          "</td>" +
          '<td class="num">' +
          esc(sub.g11) +
          "</td>" +
          "</tr>"
        );
      })
      .join("");
  }

  // 7. Render Certificate Archive Gallery (Section 07)
  var archiveMount = document.getElementById("archive-grid-mount");
  var archiveCountEl = document.getElementById("archive-count");
  if (archiveMount && data.certificates) {
    archiveMount.innerHTML = data.certificates
      .map(function (c) {
        var isLandscape = c.width > c.height;
        return (
          '<article class="archive-card" data-category="' +
          esc(c.category) +
          '">' +
          '<button type="button" class="cert-zoom-btn ' +
          (isLandscape ? "landscape" : "") +
          '" data-cert-id="' +
          esc(c.id) +
          '" aria-label="Enlarge certificate: ' +
          esc(c.title) +
          '">' +
          '<img src="' +
          esc(c.img) +
          '" width="' +
          c.width +
          '" height="' +
          c.height +
          '" loading="lazy" decoding="async" alt="' +
          esc(c.alt) +
          '">' +
          '<span class="zoom-pill">Zoom +</span>' +
          "</button>" +
          '<div class="archive-card-caption">' +
          '<div class="archive-card-meta">' +
          esc(c.categoryLabel) +
          " · " +
          esc(c.year) +
          "</div>" +
          '<h3 class="archive-card-title">' +
          esc(c.title) +
          "</h3>" +
          '<div class="archive-card-issuer">' +
          esc(c.issuer) +
          " · " +
          esc(c.year) +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  var archiveCards = Array.prototype.slice.call(
    document.querySelectorAll(".archive-card")
  );

  // Balance last row in the 6-column Archive grid so no single/pair card is left orphaned
  function updateArchiveRowSpans() {
    var visible = [];
    archiveCards.forEach(function (card) {
      card.classList.remove("span-half", "span-full");
      if (!card.hasAttribute("hidden")) {
        visible.push(card);
      }
    });
    var n = visible.length;
    if (n % 3 === 2) {
      visible[n - 2].classList.add("span-half");
      visible[n - 1].classList.add("span-half");
    } else if (n % 3 === 1) {
      if (n >= 4) {
        visible[n - 4].classList.add("span-half");
        visible[n - 3].classList.add("span-half");
        visible[n - 2].classList.add("span-half");
        visible[n - 1].classList.add("span-half");
      } else {
        visible[n - 1].classList.add("span-full");
      }
    }
  }
  updateArchiveRowSpans();

  // Filter chips logic
  var filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var filter = chip.getAttribute("data-filter");
      filterChips.forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      var visibleCount = 0;
      archiveCards.forEach(function (card) {
        var match =
          filter === "all" || card.getAttribute("data-category") === filter;
        if (match) {
          card.removeAttribute("hidden");
          visibleCount++;
        } else {
          card.setAttribute("hidden", "");
        }
      });
      updateArchiveRowSpans();
      if (archiveCountEl) {
        archiveCountEl.textContent =
          "Showing " + visibleCount + " of " + archiveCards.length + " documents";
      }
    });
  });

  // 8. Accessible Lightbox (Modal with 2x Zoom, Pan/Drag, Open Full Size, Esc, ArrowLeft/Right)
  var lightbox = document.getElementById("lightbox");
  var lbStage = document.getElementById("lightbox-stage");
  var lbImgContainer = document.getElementById("lightbox-img-container");
  var lbImg = document.getElementById("lightbox-img");
  var lbTitle = document.getElementById("lightbox-title");
  var lbMeta = document.getElementById("lightbox-meta");
  var lbCounter = document.getElementById("lightbox-counter");
  var lbClose = document.getElementById("lightbox-close");
  var lbPrev = document.getElementById("lightbox-prev");
  var lbNext = document.getElementById("lightbox-next");
  var lbZoomBtn = document.getElementById("lightbox-zoom");
  var lbOpenRaw = document.getElementById("lightbox-open-raw");

  var certs = data.certificates || [];
  var currentCertIndex = 0;
  var lastFocusedEl = null;

  // Zoom & Pan state
  var isZoomed = false;
  var panX = 0;
  var panY = 0;
  var isDragging = false;
  var dragMoved = false;
  var startX = 0;
  var startY = 0;

  function applyZoomTransform() {
    if (!lbImg) return;
    if (isZoomed) {
      lbImg.style.transform =
        "translate3d(" + panX + "px, " + panY + "px, 0) scale(2.15)";
      lbImg.classList.add("is-zoomed");
    } else {
      lbImg.style.transform = "";
      lbImg.classList.remove("is-zoomed");
    }
    if (lbZoomBtn) {
      lbZoomBtn.setAttribute("aria-pressed", isZoomed ? "true" : "false");
      lbZoomBtn.textContent = isZoomed ? "Reset 1× −" : "Zoom 2× +";
    }
  }

  function resetZoom() {
    isZoomed = false;
    panX = 0;
    panY = 0;
    isDragging = false;
    applyZoomTransform();
  }

  function toggleZoom() {
    if (isZoomed) {
      resetZoom();
    } else {
      isZoomed = true;
      panX = 0;
      panY = 0;
      applyZoomTransform();
    }
  }

  function showLightboxAt(index) {
    if (!certs.length || !lightbox) return;
    resetZoom();
    currentCertIndex = (index + certs.length) % certs.length;
    var item = certs[currentCertIndex];
    lbImg.src = item.img;
    lbImg.alt = item.alt;
    lbImg.width = item.width;
    lbImg.height = item.height;
    if (lbOpenRaw) {
      lbOpenRaw.href = item.img;
    }
    lbTitle.textContent = item.title;
    lbMeta.textContent = item.issuer + " · " + item.year;
    lbCounter.textContent =
      "Document " + (currentCertIndex + 1) + " of " + certs.length;
  }

  function openLightboxById(certId, triggerEl) {
    var idx = certs.findIndex(function (c) {
      return c.id === certId;
    });
    if (idx === -1) idx = 0;
    lastFocusedEl = triggerEl || document.activeElement;
    showLightboxAt(idx);
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (lbClose) lbClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    resetZoom();
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
      lastFocusedEl.focus();
    }
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-cert-id]");
    if (trigger) {
      e.preventDefault();
      openLightboxById(trigger.getAttribute("data-cert-id"), trigger);
    }
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbZoomBtn) lbZoomBtn.addEventListener("click", toggleZoom);
  if (lbPrev) {
    lbPrev.addEventListener("click", function () {
      showLightboxAt(currentCertIndex - 1);
    });
  }
  if (lbNext) {
    lbNext.addEventListener("click", function () {
      showLightboxAt(currentCertIndex + 1);
    });
  }

  // Click / Drag / Wheel on Lightbox Image for 2x Zoom & Pan
  if (lbImg) {
    lbImg.addEventListener("mousedown", function (e) {
      if (!isZoomed) return;
      e.preventDefault();
      isDragging = true;
      dragMoved = false;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      lbImg.classList.add("is-dragging");
    });

    window.addEventListener("mousemove", function (e) {
      if (!isDragging || !isZoomed) return;
      var nx = e.clientX - startX;
      var ny = e.clientY - startY;
      if (Math.abs(nx - panX) > 3 || Math.abs(ny - panY) > 3) {
        dragMoved = true;
      }
      panX = Math.max(-520, Math.min(520, nx));
      panY = Math.max(-520, Math.min(520, ny));
      applyZoomTransform();
    });

    window.addEventListener("mouseup", function () {
      if (isDragging) {
        isDragging = false;
        lbImg.classList.remove("is-dragging");
      }
    });

    lbImg.addEventListener("click", function (e) {
      e.stopPropagation();
      if (dragMoved) {
        dragMoved = false;
        return;
      }
      toggleZoom();
    });
  }

  if (lbStage) {
    lbStage.addEventListener(
      "wheel",
      function (e) {
        if (!lightbox || lightbox.getAttribute("aria-hidden") !== "false") return;
        e.preventDefault();
        if (e.deltaY < 0 && !isZoomed) {
          isZoomed = true;
          applyZoomTransform();
        } else if (e.deltaY > 0 && isZoomed && Math.abs(panY) < 40) {
          resetZoom();
        } else if (isZoomed) {
          panX = Math.max(-520, Math.min(520, panX - e.deltaX));
          panY = Math.max(-520, Math.min(520, panY - e.deltaY));
          applyZoomTransform();
        }
      },
      { passive: false }
    );
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (
        e.target === lightbox ||
        e.target === lbStage ||
        e.target === lbImgContainer
      ) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox || lightbox.getAttribute("aria-hidden") !== "false") return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      showLightboxAt(currentCertIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      showLightboxAt(currentCertIndex - 1);
    } else if (e.key === "+" || e.key === "=") {
      e.preventDefault();
      if (!isZoomed) toggleZoom();
    } else if (e.key === "-") {
      e.preventDefault();
      if (isZoomed) resetZoom();
    } else if (e.key === "Tab") {
      var focusables = [lbZoomBtn, lbOpenRaw, lbPrev, lbNext, lbClose].filter(
        Boolean
      );
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // 9. Sticky Nav: Brand Visibility & Deterministic Scroll-Spy (Zero Ghost Underlines)
  var mastheadEl = document.getElementById("cover-masthead");
  if (mastheadEl && "IntersectionObserver" in window) {
    var brandObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            document.body.classList.remove("scrolled-past-hero");
          } else {
            document.body.classList.add("scrolled-past-hero");
          }
        });
      },
      { threshold: 0.1 }
    );
    brandObserver.observe(mastheadEl);
  } else {
    document.body.classList.add("scrolled-past-hero");
  }

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-links a[href^='#']")
  );
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("main section[id], footer[id]")
  );

  function setActiveNavById(activeId) {
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === activeId) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  // Deterministic scroll-spy based on viewport position
  var ticking = false;
  function updateActiveSectionOnScroll() {
    ticking = false;
    var triggerLine = window.innerHeight * 0.28;
    var activeSec = sections[0];
    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.top <= triggerLine) {
        activeSec = sections[i];
      }
    }
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 40
    ) {
      activeSec = sections[sections.length - 1];
    }
    if (activeSec && activeSec.id) {
      setActiveNavById("#" + activeSec.id);
    }
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSectionOnScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateActiveSectionOnScroll();

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var href = link.getAttribute("href");
      if (href) setActiveNavById(href);
    });
  });

  // 10. Mobile Navigation Toggle
  var navToggle = document.getElementById("nav-toggle");
  var primaryNavList = document.getElementById("primary-nav-list");
  if (navToggle && primaryNavList) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      primaryNavList.classList.toggle("is-open", !expanded);
      navToggle.textContent = expanded ? "Menu ☰" : "Close ✕";
    });
    primaryNavList.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        primaryNavList.classList.remove("is-open");
        navToggle.textContent = "Menu ☰";
      });
    });
  }

  // 11. Theme Toggle (Paper vs Night Edition)
  var themeToggle = document.getElementById("theme-toggle");
  var root = document.documentElement;
  if (themeToggle) {
    var initDark =
      root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    themeToggle.textContent = initDark
      ? "Paper Edition ☀"
      : "Night Edition ☾";

    themeToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      var isDarkSystem =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      var nextTheme;
      if (!current) {
        nextTheme = isDarkSystem ? "light" : "dark";
      } else {
        nextTheme = current === "dark" ? "light" : "dark";
      }
      root.setAttribute("data-theme", nextTheme);
      themeToggle.textContent =
        nextTheme === "dark" ? "Paper Edition ☀" : "Night Edition ☾";
    });
  }

  // 12. Anti-Scraper Email Assembly
  var emailMount = document.getElementById("email-mount");
  if (emailMount && data.meta) {
    var addr = data.meta.emailUser + "@" + data.meta.emailDomain;
    var a = document.createElement("a");
    a.href = "mailto:" + addr;
    a.className = "email-cta-link";
    a.textContent = addr + " ↗";
    emailMount.innerHTML = "";
    emailMount.appendChild(a);
  }
})();
