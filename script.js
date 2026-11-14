// Add a real professional email here when you are ready.
const CONTACT_EMAIL = "saniayaqub982@gmail.com";

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
});
navItems.forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open navigation menu");
}));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav?.classList.contains("open")) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

const emailLink = document.querySelector("#email-link");
const emailNote = document.querySelector("#email-note");
if (CONTACT_EMAIL.trim()) {
  emailLink.href = `mailto:${CONTACT_EMAIL.trim()}`;
  emailNote.textContent = `Prefer email? Reach out at ${CONTACT_EMAIL.trim()}.`;
} else {
  emailLink.addEventListener("click", event => {
    event.preventDefault();
    emailNote.textContent = "Email not configured yet. Add your address to CONTACT_EMAIL at the top of script.js.";
  });
}

const roles = ["Aspiring Data Analyst", "Mathematics Student"];
const typed = document.querySelector(".typed");
if (typed && !reducedMotion) {
  let role = 0, index = roles[0].length, deleting = true;
  const tick = () => {
    if (deleting) {
      typed.textContent = roles[role].slice(0, --index);
      if (index <= 0) { deleting = false; role = (role + 1) % roles.length; setTimeout(tick, 450); return; }
      setTimeout(tick, 48);
    } else {
      typed.textContent = roles[role].slice(0, ++index);
      if (index >= roles[role].length) { deleting = true; setTimeout(tick, 1700); return; }
      setTimeout(tick, 75);
    }
  };
  setTimeout(tick, 1800);
}

const revealItems = document.querySelectorAll(".heading,.about-text,.about-grid aside,.skill,.project,.education,.contact");
if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), {threshold: .12});
  revealItems.forEach(item => { item.classList.add("reveal"); observer.observe(item); });
} else revealItems.forEach(item => item.classList.add("visible"));

const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) navItems.forEach(a => a.classList.toggle("active", a.hash === `#${entry.target.id}`));
  }), {rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section => sectionObserver.observe(section));
}
