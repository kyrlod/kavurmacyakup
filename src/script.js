import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

/* ============================================================
   KAVURMA SCROLL ANIMATION — scroll-driven image sequence
   ============================================================ */
const FRAME_COUNT = 31;
const FRAME_PATH = '/images/kavurma/ezgif-frame-';

const heroCanvas = document.getElementById('heroCanvas');
const ctx = heroCanvas.getContext('2d');

// Pre-load all frames
const frames = [];
let loadedCount = 0;

function preloadFrames(callback) {
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    const num = String(i).padStart(3, '0');
    img.src = `${FRAME_PATH}${num}.png`;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === FRAME_COUNT && callback) callback();
    };
    img.onerror = () => {
      loadedCount++;
      if (loadedCount === FRAME_COUNT && callback) callback();
    };
    frames.push(img);
  }
}

function resizeCanvas() {
  heroCanvas.width = window.innerWidth;
  heroCanvas.height = window.innerHeight;
  drawFrame(currentFrame);
}

let currentFrame = 0;

function drawFrame(index) {
  const img = frames[index];
  if (!img || !img.complete || !img.naturalWidth) return;
  const W = heroCanvas.width;
  const H = heroCanvas.height;
  const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  const x = (W - w) / 2;
  const y = (H - h) / 2;
  ctx.clearRect(0, 0, W, H);
  ctx.drawImage(img, x, y, w, h);
}

function initKavurmaAnimation() {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Draw frame 0 immediately once loaded
  preloadFrames(() => drawFrame(0));

  // Scroll-driven: hero section scroll covers all frames
  // Hero section is 100vh, we use the first 60% of scroll to cover all frames
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: '+=200%',
    scrub: true,
    onUpdate: (self) => {
      const frame = Math.min(
        Math.floor(self.progress * (FRAME_COUNT - 1)),
        FRAME_COUNT - 1
      );
      if (frame !== currentFrame) {
        currentFrame = frame;
        drawFrame(currentFrame);
      }
    },
  });
}

/* ============================================================
   LENIS SMOOTH SCROLL
   ============================================================ */
function initLenis() {
  const lenis = new Lenis({
    lerp: isMobile ? 0.1 : 0.075,
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ({ scroll }) => {
    const nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('nav-scrolled', scroll > 80);
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}

/* ============================================================
   GSAP SCROLL ANIMATIONS
   ============================================================ */
function initGSAP() {
  gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 1, delay: 0.3, ease: 'power3.out' });
  gsap.from('.hero-title', { opacity: 0, y: 40, duration: 1.2, delay: 0.5, ease: 'power3.out' });
  gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, delay: 0.8, ease: 'power3.out' });
  gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 1, delay: 1, ease: 'power3.out' });
  gsap.from('.hero-scroll', { opacity: 0, duration: 1, delay: 1.5 });

  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    });
  });

  gsap.from('.story-text', {
    scrollTrigger: { trigger: '.story', start: 'top 70%' },
    opacity: 0, x: -40, duration: 1, ease: 'power3.out',
  });
  gsap.from('.story-visual', {
    scrollTrigger: { trigger: '.story', start: 'top 70%' },
    opacity: 0, x: 40, duration: 1, delay: 0.2, ease: 'power3.out',
  });

  gsap.from('.stat', {
    scrollTrigger: { trigger: '.story-stats', start: 'top 85%' },
    opacity: 0, y: 20, duration: 0.6, stagger: 0.15, ease: 'power3.out',
  });

  document.querySelectorAll('.menu-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      opacity: 0, y: 30, duration: 0.6, delay: (i % 4) * 0.1, ease: 'power3.out',
    });
  });

  document.querySelectorAll('.atm-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, scale: 0.95, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
    });
  });

  document.querySelectorAll('.exp-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, y: 30, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
    });
  });
}

/* ============================================================
   NAV
   ============================================================ */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle?.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle?.classList.remove('active');
    });
  });
}

/* ============================================================
   TABS
   ============================================================ */
function initTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.menu-panel');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      btns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`[data-panel="${tab}"]`)?.classList.add('active');
    });
  });
}

/* ============================================================
   MOUSE PARALLAX (hero text only, subtle)
   ============================================================ */
function initMouseParallax() {
  if (isMobile) return;
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroContent.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* ============================================================
   RESIZE
   ============================================================ */
function initResize() {
  window.addEventListener('resize', () => {
    resizeCanvas();
  });
}

/* ============================================================
   INIT
   ============================================================ */
initKavurmaAnimation();
initLenis();
initGSAP();
initNav();
initTabs();
initMouseParallax();
initResize();
