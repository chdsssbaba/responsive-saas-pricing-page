# Project Workflow

This document details the user interactive sequence and technical workflow during runtime interaction.

## Interactive Billing Cycle Sequence

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Toggle as Billing Checkbox
    participant JS as Vanilla JS Listener
    participant DOM as Price Elements (.amount)
    
    User->>Toggle: Clicks Monthly / Annual Switch
    Toggle->>JS: Triggers 'change' Event
    JS->>JS: Evaluates checked state (isAnnual)
    JS->>DOM: Fades out amount opacity (0)
    JS->>DOM: Reads data-annual / data-monthly
    JS->>DOM: Updates textContent with target price
    JS->>DOM: Restores opacity (1) with 150ms transition
```

## Responsive Layout Adaptability

1. **Mobile Viewport (<= 767px)**: Parent container `.pricing-cards-container` applies `flex-direction: column`. Cards stack vertically with `align-items: center` to prevent overflow.
2. **Tablet & Desktop Viewport (>= 768px)**: Parent container switches to `flex-direction: row` with `align-items: stretch` so all three cards match height automatically.
