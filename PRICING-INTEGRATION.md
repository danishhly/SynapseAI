# Pricing Section Integration Guide

## Files Created
- `pricing-section.html` - HTML markup for the pricing section
- `pricing-section.css` - CSS styles for the pricing section
- `pricing-section.js` - JavaScript for interactive features

## Integration Steps

### 1. Add HTML to index.html

Insert the pricing section HTML **before** the "Final CTA Section" (before `<section class="cta-section">`).

Location: After the testimonials section, before the final CTA.

### 2. Add CSS to styles.css

Copy all the CSS from `pricing-section.css` and paste it into your `styles.css` file.

### 3. Add JavaScript to script.js

Copy the `initPricingSection()` function from `pricing-section.js` and add it to your `script.js` file.

Then, in your `DOMContentLoaded` event listener, add:
```javascript
initPricingSection();
```

### 4. Update Navigation

In your navigation (`<nav class="navbar">`), update the "Get Started" link or add a Pricing link:

```html
<li><a href="#pricing">Pricing</a></li>
```

## Features Included

✅ **Three Pricing Tiers**: Starter, Professional (Featured), Enterprise
✅ **Billing Toggle**: Switch between Monthly and Annual pricing
✅ **Interactive Cards**: Hover effects and animations
✅ **Featured Plan**: Professional plan highlighted as "Most Popular"
✅ **Responsive Design**: Works on all screen sizes
✅ **Smooth Animations**: Cards animate on scroll
✅ **Price Updates**: Prices change dynamically when toggling billing period

## Customization

### Change Prices
Edit the `data-monthly` and `data-annual` attributes in the HTML:
```html
<span class="price-amount" data-monthly="29" data-annual="24">$29</span>
```

### Change Features
Modify the `<li>` items in the `.pricing-features` lists.

### Change Colors
The pricing section uses your existing CSS variables:
- `--primary-color`
- `--gradient-primary`
- `--border-color`
- etc.

## Testing

1. Toggle between Monthly/Annual billing
2. Hover over pricing cards
3. Click the CTA buttons
4. Test on mobile devices
5. Scroll to see animations

## Next Steps

After integrating, you can:
- Add a FAQ section
- Add an Integrations section
- Add a Use Cases section
- Customize the pricing plans further

