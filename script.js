// script.js
// loader failsafe
setTimeout(() => document.getElementById("loader")?.classList.add("hidden"), 1800);
window.addEventListener("load", () => document.getElementById("loader")?.classList.add("hidden"));

// theme toggle
(() => {
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);

    const btn = document.getElementById("themeToggle");
    btn.addEventListener("click", () => {
        const curr = document.documentElement.getAttribute("data-theme");
        const next = curr === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });
})();

// year
document.getElementById("year").textContent = new Date().getFullYear();

// form validation
document.querySelector(".feedback-form").addEventListener("submit", (e) => {
    const msg = document.getElementById("message");
    if (!msg.value.trim() || msg.value.trim().length < 5) {
        e.preventDefault();
        msg.focus();
        alert("Please enter a clear message (5+ characters).");
    }
});

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// put this at the VERY bottom of script.js (after everything)
(() => {
    const root = document.documentElement;
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    // load saved theme
    const saved = localStorage.getItem("theme") || "dark";
    root.setAttribute("data-theme", saved);

    btn.addEventListener("click", () => {
        const curr = root.getAttribute("data-theme") || "dark";
        const next = curr === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });
})();
