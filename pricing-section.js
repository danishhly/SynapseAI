// Pricing Section JavaScript - Add to your script.js

// Initialize Pricing Section
function initPricingSection() {
    const billingToggle = document.getElementById('billingToggle');
    const priceAmounts = document.querySelectorAll('.price-amount');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', (e) => {
            const isAnnual = e.target.checked;
            
            priceAmounts.forEach(amount => {
                const monthlyPrice = amount.getAttribute('data-monthly');
                const annualPrice = amount.getAttribute('data-annual');
                
                if (isAnnual) {
                    amount.textContent = `$${annualPrice}`;
                    // Add animation
                    amount.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        amount.style.transform = 'scale(1)';
                    }, 200);
                } else {
                    amount.textContent = `$${monthlyPrice}`;
                    // Add animation
                    amount.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        amount.style.transform = 'scale(1)';
                    }, 200);
                }
            });
        });
    }
    
    // Pricing card interactions
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        const ctaButton = card.querySelector('.pricing-cta');
        
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                // Add click animation
                ctaButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    ctaButton.style.transform = '';
                }, 150);
                
                // Here you would typically redirect to signup or open a modal
                console.log('Pricing CTA clicked:', card.querySelector('h3').textContent);
            });
        }
        
        // Add hover effect for featured card
        if (card.classList.contains('featured')) {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 25px 50px -12px rgba(99, 102, 241, 0.25)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = 'var(--shadow-lg)';
            });
        }
    });
    
    // Animate pricing cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    pricingCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Add this to your DOMContentLoaded event listener
// initPricingSection();

