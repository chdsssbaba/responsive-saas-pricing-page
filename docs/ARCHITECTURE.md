# System Architecture

The SaaS Pricing Comparison component uses native HTML5 semantic elements, a CSS Flexbox layout strategy with glassmorphic aesthetic tokens, and a lightweight event listener pattern in Vanilla JavaScript.

## DOM Tree Hierarchy

```mermaid
graph TD
    Body[body] --> Main[main]
    Main --> Section[section.pricing-section]
    
    Section --> Header[header.pricing-header]
    Section --> CardsContainer[div.pricing-cards-container]

    Header --> Title[h1.pricing-title]
    Header --> Subtitle[p.pricing-subtitle]
    Header --> Toggle[div.billing-toggle]

    Toggle --> LabelM[span#label-monthly]
    Toggle --> SwitchLabel[label.switch]
    Toggle --> LabelA[span#label-annual]

    SwitchLabel --> Checkbox[input#billing-checkbox]
    SwitchLabel --> Slider[span.slider]

    CardsContainer --> CardBasic[article.pricing-card#card-basic]
    CardsContainer --> CardPro[article.pricing-card.pricing-card--popular#card-pro]
    CardsContainer --> CardEnterprise[article.pricing-card#card-enterprise]

    CardPro --> Badge[div.badge]
    
    CardBasic --> PriceBasic[div.card-price data-monthly=19 data-annual=15]
    CardPro --> PricePro[div.card-price data-monthly=49 data-annual=39]
    CardEnterprise --> PriceEnt[div.card-price data-monthly=99 data-annual=79]

    CardBasic --> CTABasic[button.cta-button]
    CardPro --> CTAPro[button.cta-button.cta-button--primary]
    CardEnterprise --> CTAEnt[button.cta-button]
```

## Architectural Design Highlights

1. **Decoupled Data Attributes**: Prices are stored directly on `.card-price` elements using `data-monthly` and `data-annual`. JavaScript parses DOM attributes without hardcoding pricing numbers in script logic.
2. **Bottom-Aligned CTAs via Flexbox**: Cards use `display: flex; flex-direction: column` and `margin-top: auto` on CTA buttons to ensure perfectly uniform button alignment regardless of feature list length variations.
3. **Glassmorphism Aesthetic System**: Utilizes `backdrop-filter: blur(16px)`, radial background glow spheres, and luminous borders for a premium look with zero performance degradation.
