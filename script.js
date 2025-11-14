/* -----------------------------------------------------
   GLOBAL HELPERS
----------------------------------------------------- */

// Safe selector helper
const $ = (selector, all = false) =>
    all ? document.querySelectorAll(selector) : document.querySelector(selector);

// Throttle (for scroll & resize performance)
const throttle = (fn, delay = 100) => {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
};

/* -----------------------------------------------------
   DASHBOARD TEMPLATES
----------------------------------------------------- */

const dashboardTemplates = {
    general: {
        title: "Business Dashboard",
        widgets: [
            { title: "Revenue Overview", description: "Track your business performance", stats: ["$125K", "Revenue", "+12%"] },
            { title: "Team Activity", description: "Monitor team productivity", stats: ["1,234", "Tasks", "Active"] },
            { title: "Customer Growth", description: "Watch your customer base expand", stats: ["456", "Users", "New"] }
        ]
    },
    design: {
        title: "Interior Design Studio",
        widgets: [
            { title: "Project Portfolio", description: "Manage your design projects", stats: ["24", "Projects", "Active"] },
            { title: "Client Satisfaction", description: "Track client feedback", stats: ["98%", "Rating", "Excellent"] },
            { title: "Design Assets", description: "Organize your design library", stats: ["1,234", "Assets", "Total"] }
        ]
    },
    farming: {
        title: "Urban Farming Hub",
        widgets: [
            { title: "Crop Growth", description: "Monitor plant health metrics", stats: ["85%", "Growth", "Rate"] },
            { title: "Harvest Schedule", description: "Track upcoming harvests", stats: ["12", "Days", "Next"] },
            { title: "Environmental Data", description: "Real-time sensor readings", stats: ["72°F", "Temp", "Optimal"] }
        ]
    },
    healthcare: {
        title: "Healthcare Analytics",
        widgets: [
            { title: "Patient Care", description: "Monitor patient outcomes", stats: ["234", "Patients", "Active"] },
            { title: "Appointment Schedule", description: "Manage daily appointments", stats: ["45", "Today", "Scheduled"] },
            { title: "Health Metrics", description: "Track key health indicators", stats: ["92%", "Wellness", "Score"] }
        ]
    },
    finance: {
        title: "Financial Dashboard",
        widgets: [
            { title: "Portfolio Value", description: "Track investment performance", stats: ["$2.4M", "Value", "+8.5%"] },
            { title: "Transactions", description: "Monitor financial activity", stats: ["156", "Today", "Processed"] },
            { title: "Risk Analysis", description: "Assess portfolio risk", stats: ["Low", "Risk", "Level"] }
        ]
    },
    education: {
        title: "Education Platform",
        widgets: [
            { title: "Student Progress", description: "Track learning outcomes", stats: ["1,234", "Students", "Active"] },
            { title: "Course Completion", description: "Monitor course progress", stats: ["78%", "Rate", "Average"] },
            { title: "Engagement Metrics", description: "Measure student engagement", stats: ["4.8/5", "Rating", "High"] }
        ]
    }
};


// JavaScript: Toggle dark mode on a button click and persist choice
const darkToggle = document.getElementById('darkToggle'); // e.g. a button or checkbox
darkToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
// On page load, apply saved theme:
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
});

/* -----------------------------------------------------
   DASHBOARD LOGIC
----------------------------------------------------- */

function initializeDashboard() {
    const industrySelect = $("#industrySelect");
    const teamSlider = $("#teamSizeSlider");
    const teamValue = $("#teamSizeValue");
    const toggleButtons = $(".toggle-btn", true);

    if (!industrySelect) return;

    industrySelect.addEventListener("change", updateDashboard);

    if (teamSlider) {
        teamSlider.addEventListener("input", e => {
            teamValue.textContent = e.target.value;
            updateDashboard();
        });
    }

    toggleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            toggleButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            updateDashboard();
        });
    });

    updateDashboard();
}

function updateDashboard() {
    const industry = $("#industrySelect")?.value || "general";
    const content = $("#dashboardContent");
    const template = dashboardTemplates[industry];

    if (!content) return;

    content.innerHTML = "";

    template.widgets.forEach((widget, i) => {
        const el = document.createElement("div");
        el.className = "dashboard-widget";
        el.style.animationDelay = `${i * 0.1}s`;

        el.innerHTML = `
            <h4>${widget.title}</h4>
            <p>${widget.description}</p>
            <div class="widget-grid">
                <div class="widget-stat">
                    <div class="widget-stat-value">${widget.stats[0]}</div>
                    <div class="widget-stat-label">${widget.stats[1]}</div>
                </div>

                <div class="widget-stat">
                    <div class="widget-stat-value">${widget.stats[2]}</div>
                    <div class="widget-stat-label">Trend</div>
                </div>

                <div class="widget-stat">
                    <div class="widget-stat-value">${template.title}</div>
                    <div class="widget-stat-label">Industry</div>
                </div>
            </div>
        `;

        content.appendChild(el);
    });
}

/* -----------------------------------------------------
   INTERSECTION OBSERVER (Used Everywhere)
----------------------------------------------------- */

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            fadeInObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function observeFadeIn(selector) {
    $(selector, true).forEach(el => fadeInObserver.observe(el));
}

/* -----------------------------------------------------
   FEATURE INTERACTIONS
----------------------------------------------------- */

function initFeatureInteractions() {
    // Analytics toggle
    const toggle = $("#analyticsToggle");
    const monthly = [45, 65, 55, 75, 60];
    const weekly = [60, 80, 45, 90, 70];

    if (toggle) {
        toggle.addEventListener("change", e => {
            $(".chart-bars .bar", true).forEach((bar, i) => {
                bar.style.height = `${e.target.checked ? monthly[i] : weekly[i]}%`;
            });
        });
    }

    // Hover animations
    $(".feature-card", true).forEach(card => {
        card.addEventListener("mouseenter", () => (card.style.transform = "translateY(-8px)"));
        card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
}

/* -----------------------------------------------------
   MOBILE MENU
----------------------------------------------------- */

function initMobileMenu() {
    const toggle = $("#mobileMenuToggle");
    const navLinks = $("#navLinks");
    const links = $(".nav-links a", true);

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active");
            navLinks.classList.toggle("active");
            document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
        });

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener("click", () => {
                toggle.classList.remove("active");
                navLinks.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
                toggle.classList.remove("active");
                navLinks.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
}

/* -----------------------------------------------------
   SMOOTH SCROLL
----------------------------------------------------- */

function initSmoothScroll() {
    $('a[href^="#"]', true).forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = $(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
}

/* -----------------------------------------------------
   NAVBAR SCROLL EFFECT
----------------------------------------------------- */

function initNavbarScroll() {
    const navbar = $(".navbar");
    if (!navbar) return;

    window.addEventListener(
        "scroll",
        throttle(() => {
            navbar.style.boxShadow =
                window.scrollY > 100
                    ? "0 4px 6px -1px rgba(0,0,0,0.1)"
                    : "none";
        }, 100)
    );
}

/* -----------------------------------------------------
   CTA BUTTONS
----------------------------------------------------- */

function initCTAButtons() {
    const ctas = $(".cta-primary, .cta-secondary", true);

    ctas.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => (btn.style.transform = ""), 150);
        });
    });

    const demoBtn = $("#startDemoBtn");
    if (demoBtn) {
        demoBtn.addEventListener("click", () => {
            const section = $(".hero-interactive");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });

                const wizard = $(".config-wizard");
                wizard.style.animation = "pulse 0.5s ease";
                setTimeout(() => (wizard.style.animation = ""), 500);
            }
        });
    }
}

/* -----------------------------------------------------
   PRICING SECTION
----------------------------------------------------- */

function initPricingSection() {
    const billingToggle = $("#billingToggle");
    const priceAmounts = $(".price-amount", true);

    if (billingToggle && priceAmounts.length > 0) {
        billingToggle.addEventListener("change", e => {
            const isAnnual = e.target.checked;
            priceAmounts.forEach(amount => {
                const monthlyPrice = amount.dataset.monthly;
                const annualPrice = amount.dataset.annual;
                const newPrice = isAnnual ? annualPrice : monthlyPrice;

                // Format price with Indian Rupee symbol and commas
                const formattedPrice = `₹${parseInt(newPrice).toLocaleString('en-IN')}`;
                amount.textContent = formattedPrice;

                // Add animation
                amount.style.transform = "scale(1.1)";
                setTimeout(() => (amount.style.transform = "scale(1)"), 200);
            });
        });
    }

    const pricingCards = $(".pricing-card", true);
    pricingCards.forEach((card, index) => {
        // Only hide if not already in viewport
        const rect = card.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (!isInViewport) {
            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition = "all 0.6s ease";
            fadeInObserver.observe(card);
        } else {
            // If already in viewport, make visible immediately
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

        // Fix: Get CTA button within each card, not globally
        const cta = card.querySelector(".pricing-cta");
        if (cta) {
            cta.addEventListener("click", () => {
                cta.style.transform = "scale(0.95)";
                setTimeout(() => (cta.style.transform = ""), 150);

                // Optional: Add analytics or navigation here
                const planName = card.querySelector("h3")?.textContent || "Plan";
                console.log(`Pricing CTA clicked: ${planName}`);
            });
        }
    });
}

/* -----------------------------------------------------
   INIT
----------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    initializeDashboard();
    initFeatureInteractions();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initCTAButtons();
    initPricingSection();

    // Reusable fade-in observer for various UI blocks
    observeFadeIn(".step-card");
    observeFadeIn(".feature-card");
    observeFadeIn(".testimonial-card");

    // Page fade-in on load
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});

/* -----------------------------------------------------
   Pulse Animation (Keep inside JS for flexibility)
----------------------------------------------------- */
document.head.insertAdjacentHTML(
    "beforeend",
    `
@keyframes pulse {
    0%,100% { transform: scale(1); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
    50% { transform: scale(1.02); box-shadow: 0 25px 30px -5px rgba(99,102,241,0.3); }
}`
);
