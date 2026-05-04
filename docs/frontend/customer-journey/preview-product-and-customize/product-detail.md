---
title: Meal Size Prompt
---

# Meal Size Prompt

This screenshot shows the first PDP decision state after the customer selects a product from the PLP.

It is a **meal size prompt**, where the customer chooses the meal format before moving deeper into product customization.

<div style={{ float: 'right', margin: '0.35rem 0 1rem 1.25rem', width: '320px' }}>
  <img
    src="/mealsizeprompt.jpg"
    alt="Meal size prompt on PDP"
    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '18px' }}
  />
</div>

*Meal size prompt asking the customer how they want the meal configured before continuing.*

## Why This Step Is Designed This Way

The meal-size decision is a high-impact choice because it affects price, included items, and downstream customization. Surfacing it first keeps the decision model explicit instead of hiding it inside later modifier logic.

## What This Screen Is Doing

- It interrupts the PLP flow with a focused decision modal.
- It asks the customer to choose the meal format before deeper configuration begins.
- It compares options in a structured way so the trade-off between regular and large is obvious.
- It uses a single dominant CTA to confirm the choice and move forward.

## Why The Design Works

### 1. It Reduces Hidden Complexity

Meal structure is one of the biggest drivers of price and expectation. If the customer does not understand whether they are choosing a standalone item, a regular combo, or a large combo, every later step becomes harder to trust. This screen solves that by making the format choice explicit before anything else happens.

### 2. It Makes Trade-offs Easy To Compare

The screen presents the options side by side in a consistent visual pattern. That matters because the customer is not just choosing between labels. They are comparing value, quantity, and what feels like the right order size for the occasion.

### 3. It Protects Momentum

Although this is a modal interruption, it still feels forward-moving because it asks one clear question and provides one clear action. The customer does not have to interpret a large product page first. They simply choose the meal shape and continue.

### 4. It Creates A Better Foundation For Customization

Once meal size is selected, downstream customization can be more relevant and more predictable. That improves the coherence of the entire PDP flow.

## Why This Is PDP

- The customer is already past browse and inside a chosen item flow.
- The screen is specific to one product decision, not category exploration.
- The purpose is configuration, not product discovery.

## Design Takeaway

The purpose of this screen is not just to ask "regular or large." It is to anchor the product decision early, clarify value, and make the rest of the PDP feel easier to understand.
