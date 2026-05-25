// Micro-interactions and scroll effects
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("py-2");
    header.classList.remove("h-20");
    header.classList.add("h-16");
  } else {
    header.classList.remove("py-2");
    header.classList.add("h-20");
    header.classList.remove("h-16");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-[fadeIn_1s_ease-out_forwards]");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll("section h2, section p, .group").forEach((el) => {
  // Initially transparent for JS observer to kick in
  el.style.opacity = "0";
  observer.observe(el);
});

// Add custom fadeIn animation to tailwind config via style tag
const style = document.createElement("style");
style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
document.head.appendChild(style);
