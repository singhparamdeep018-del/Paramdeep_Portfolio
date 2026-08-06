(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -----------------------------------------------------------
     Footer year
  ----------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -----------------------------------------------------------
     Toast notifications
  ----------------------------------------------------------- */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;
  function showToast(message, duration = 2600) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), duration);
  }

  /* -----------------------------------------------------------
     Mobile navigation
  ----------------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");

  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
  function openNav() {
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      isOpen ? closeNav() : openNav();
    });

    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
  }

  /* -----------------------------------------------------------
     Sticky header shadow + scroll-spy + back-to-top
  ----------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  const backToTop = document.getElementById("backToTop");
  const sections = ["home", "about", "skills", "projects", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  }

  function onScroll() {
    const scrolled = window.scrollY > 12;
    header.classList.toggle("is-scrolled", scrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 500);

    const offset = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.offsetTop <= offset) current = section.id;
    }
    if (current) setActiveLink(current);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* -----------------------------------------------------------
     Scroll-reveal animations
  ----------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* -----------------------------------------------------------
     Skills marquee: duplicate the chip set once for a seamless loop
  ----------------------------------------------------------- */
  const skillsWrapper = document.getElementById("skillsWrapper");
  if (skillsWrapper) {
    const clone = skillsWrapper.innerHTML;
    skillsWrapper.insertAdjacentHTML("beforeend", clone);
  }

  /* -----------------------------------------------------------
     Resume button — graceful placeholder until a resume is linked
  ----------------------------------------------------------- */
  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", (event) => {
      if (resumeBtn.getAttribute("href") === "#") {
        event.preventDefault();
        showToast("Resume coming soon — reach out by email in the meantime.");
      }
    });
  }

  /* -----------------------------------------------------------
     Copy email to clipboard
  ----------------------------------------------------------- */
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = "singhparamdeep018@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email address copied to clipboard.");
      } catch (err) {
        showToast(email);
      }
    });
  }

  /* -----------------------------------------------------------
     Signature element: an ambient DNA double-helix rendered on
     canvas behind the hero portrait. Pauses when off-screen and
     respects reduced-motion preference.
  ----------------------------------------------------------- */
  const canvas = document.getElementById("helixCanvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = null;
    let running = false;
    let t = 0;

    const primary = "#2563eb";
    const accent = "#3071da";
    const forest = "#14532d";

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const amplitude = width * 0.16;
      const centerX = width / 2;
      const spacing = 26;
      const strands = Math.ceil(height / spacing) + 2;

      for (let i = 0; i < strands; i++) {
        const y = i * spacing - (t % spacing);
        const phase = y * 0.045 + t * 0.012;
        const x1 = centerX + Math.sin(phase) * amplitude;
        const x2 = centerX + Math.sin(phase + Math.PI) * amplitude;
        const depth = (Math.sin(phase) + 1) / 2;

        // rung connecting the two strands
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(40,38,38,${0.06 + depth * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // back strand node (fainter)
        ctx.beginPath();
        ctx.arc(x2, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = depth > 0.5 ? primary : forest;
        ctx.globalAlpha = 0.18 + (1 - depth) * 0.18;
        ctx.fill();

        // front strand node (brighter)
        ctx.beginPath();
        ctx.arc(x1, y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = depth > 0.5 ? accent : primary;
        ctx.globalAlpha = 0.28 + depth * 0.32;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      t += 0.6;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (running || prefersReducedMotion) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    }

    resize();
    if (prefersReducedMotion) {
      draw();
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
        { threshold: 0 }
      );
      io.observe(canvas);
    }

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        draw();
      }, 150);
    });
  }
})();
