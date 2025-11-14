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


// Dark mode toggle with preference storage
const toggleBtn = document.getElementById("darkToggle");
const root = document.documentElement;

function setTheme(theme) {
    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    }
}

function initTheme() {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        setTheme(isDark ? "light" : "dark");
    });
}

// Initialize theme on page load
initTheme();

/* -----------------------------------------------------
   GSAP ANIMATIONS
----------------------------------------------------- */

// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for animated elements
    gsap.set('.hero-headline, .hero-subheadline, .cta-primary, .microcopy', {
        opacity: 0,
        y: 30
    });

    gsap.set('.hero-interactive', {
        opacity: 0,
        x: 50,
        scale: 0.95
    });

    gsap.set('.section-header', {
        opacity: 0,
        y: 30
    });

    gsap.set('.step-card, .feature-card, .testimonial-card, .pricing-card', {
        opacity: 0,
        y: 50
    });

    // Hero Section Animations
    function initHeroAnimations() {
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTimeline
            .to('.hero-headline', {
                opacity: 1,
                y: 0,
                duration: 0.8
            })
            .to('.hero-subheadline', {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, '-=0.4')
            .to('.cta-primary', {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4')
            .to('.microcopy', {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.3')
            .to('.hero-interactive', {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.8');
    }

    // Navbar Animation on Scroll
    function initNavbarAnimation() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            gsap.from(navbar, {
                y: -100,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            });

            // Navbar background on scroll
            ScrollTrigger.create({
                trigger: 'body',
                start: 'top -100',
                onEnter: () => {
                    gsap.to(navbar, {
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(10px)',
                        duration: 0.3
                    });
                },
                onLeaveBack: () => {
                    gsap.to(navbar, {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        duration: 0.3
                    });
                }
            });

            // Dark mode navbar
            const darkModeObserver = new MutationObserver(() => {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                gsap.to(navbar, {
                    backgroundColor: isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
                    duration: 0.3
                });
            });

            darkModeObserver.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            });
        }
    }

    // Section Header Animations
    function initSectionHeaders() {
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.to(header, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }

    // Step Cards Stagger Animation
    function initStepCards() {
        const stepCards = gsap.utils.toArray('.step-card');
        if (stepCards.length > 0) {
            gsap.to(stepCards, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.steps-container',
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }

    // Feature Cards Stagger Animation
    function initFeatureCards() {
        const featureCards = gsap.utils.toArray('.feature-card');
        if (featureCards.length > 0) {
            gsap.to(featureCards, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: {
                    amount: 0.5,
                    from: 'start'
                },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.features-grid',
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }

    // Testimonial Cards Stagger Animation
    function initTestimonialCards() {
        const testimonialCards = gsap.utils.toArray('.testimonial-card');
        if (testimonialCards.length > 0) {
            gsap.to(testimonialCards, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.testimonials-grid',
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }

    // Pricing Cards Stagger Animation
    function initPricingCards() {
        const pricingCards = gsap.utils.toArray('.pricing-card');
        if (pricingCards.length > 0) {
            gsap.to(pricingCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.pricing-grid',
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }

    // CTA Section Animation
    function initCTASection() {
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            gsap.from('.cta-content', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: ctaSection,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }

    // Trust Badges Animation
    function initTrustBadges() {
        const trustBadges = gsap.utils.toArray('.trust-badge');
        if (trustBadges.length > 0) {
            gsap.to(trustBadges, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.trust-badges',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }

    // Parallax Effect for Hero Section
    function initParallaxEffect() {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            gsap.to('.hero-interactive', {
                y: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        }
    }

    // Smooth Scroll for Anchor Links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        // Use ScrollToPlugin if available, otherwise use native smooth scroll
                        if (typeof ScrollToPlugin !== 'undefined') {
                            gsap.to(window, {
                                duration: 1,
                                scrollTo: {
                                    y: target,
                                    offsetY: 80
                                },
                                ease: 'power2.inOut'
                            });
                        } else {
                            // Fallback to native smooth scroll
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }
            });
        });
    }

    // Initialize all animations when DOM is ready
    function initGSAPAnimations() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initHeroAnimations();
                initNavbarAnimation();
                initSectionHeaders();
                initStepCards();
                initFeatureCards();
                initTestimonialCards();
                initPricingCards();
                initCTASection();
                initTrustBadges();
                initParallaxEffect();
                initSmoothScroll();
            });
        } else {
            initHeroAnimations();
            initNavbarAnimation();
            initSectionHeaders();
            initStepCards();
            initFeatureCards();
            initTestimonialCards();
            initPricingCards();
            initCTASection();
            initTrustBadges();
            initParallaxEffect();
            initSmoothScroll();
        }
    }

    // Register ScrollToPlugin if available
    if (typeof ScrollToPlugin !== 'undefined') {
        gsap.registerPlugin(ScrollToPlugin);
    }

    // Initialize animations
    initGSAPAnimations();

    // Refresh ScrollTrigger on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
}


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
   SMOOTH SCROLL (Handled by GSAP)
----------------------------------------------------- */

// Smooth scroll is now handled by GSAP ScrollToPlugin
// function initSmoothScroll() { ... } - Removed, using GSAP version

/* -----------------------------------------------------
   NAVBAR SCROLL EFFECT (Handled by GSAP)
----------------------------------------------------- */

// Navbar scroll effect is now handled by GSAP ScrollTrigger
// function initNavbarScroll() { ... } - Removed, using GSAP version

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
    // Smooth scroll and navbar scroll are handled by GSAP animations
    // initSmoothScroll(); - Handled by GSAP
    // initNavbarScroll(); - Handled by GSAP
    initCTAButtons();
    initPricingSection();

    // Note: GSAP animations handle step-card, feature-card, and testimonial-card
    // The observeFadeIn calls are disabled to avoid conflicts with GSAP
    // observeFadeIn(".step-card");
    // observeFadeIn(".feature-card");
    // observeFadeIn(".testimonial-card");

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
