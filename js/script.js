/**
 * SaaS Pricing Page - Dynamic Billing Toggle & DOM Interaction
 */
document.addEventListener('DOMContentLoaded', () => {
  // DOM Element Selectors
  const billingCheckbox = document.getElementById('billing-checkbox');
  const priceElements = document.querySelectorAll('.card-price');
  const billingPeriodTexts = document.querySelectorAll('.billing-period-text');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual = document.getElementById('label-annual');

  if (!billingCheckbox || priceElements.length === 0) return;

  /**
   * Updates pricing values and billing period text based on toggle state
   * @param {boolean} isAnnual - True if annual billing selected
   */
  const updatePricing = (isAnnual) => {
    // Update active visual state for toggle labels
    if (labelMonthly && labelAnnual) {
      if (isAnnual) {
        labelMonthly.classList.remove('active');
        labelAnnual.classList.add('active');
      } else {
        labelMonthly.classList.add('active');
        labelAnnual.classList.remove('active');
      }
    }

    // Update billing period text indicators ("monthly" vs "annually")
    billingPeriodTexts.forEach(el => {
      el.textContent = isAnnual ? 'annually' : 'monthly';
    });

    // Iterate through all card price containers and update numerical amounts
    priceElements.forEach(priceContainer => {
      const amountDisplay = priceContainer.querySelector('.amount');
      if (!amountDisplay) return;

      const monthlyPrice = priceContainer.getAttribute('data-monthly');
      const annualPrice = priceContainer.getAttribute('data-annual');
      const targetPrice = isAnnual ? annualPrice : monthlyPrice;

      // Smooth opacity transition out -> update text -> transition in
      amountDisplay.style.opacity = '0';

      setTimeout(() => {
        amountDisplay.textContent = targetPrice;
        amountDisplay.style.opacity = '1';
      }, 150);
    });
  };

  // Attach change listener to the billing toggle checkbox
  billingCheckbox.addEventListener('change', (e) => {
    updatePricing(e.target.checked);
  });

  // Initial state check on load
  updatePricing(billingCheckbox.checked);
});
