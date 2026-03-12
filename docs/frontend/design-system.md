---
title: "Design System"
sidebar_label: "Design System"
sidebar_position: 5
---

# KFC Atlas Design System
### How Our Platform Is Built — From Visual Identity to Your Screen

---

## What Is a Design System?

Think of a design system as the **single source of truth** for how KFC looks and works digitally — everywhere. It's the set of rules, reusable parts, and shared tools that ensure a button in the KFC Japan app looks and behaves the same as a button in the KFC Australia web experience. Without it, every market would rebuild the same thing from scratch, in slightly different ways. With it, every team works from the same foundation.

The KFC Atlas platform is powered by **Helium**, Yum!'s enterprise design system. Here's how it all fits together.

---

## The Three Layers

### Layer 1 — Design (What It Looks Like)

Everything starts in **Figma**, the design tool used by the Atlas UI/UX team. Inside Figma, a plugin called **Tokens Studio** manages *design tokens* — the raw values that define KFC's visual identity: brand colours, font sizes, spacing units, corner radii, and more.

From those tokens, the team assembles a **UI Kit** — a library of ready-made components (buttons, cards, navigation bars, input fields) that designers can drag and drop to build new screens. Every component in the UI Kit is wired back to the tokens, so a single colour change cascades everywhere automatically.

> **In plain terms:** Tokens Studio is the brand rulebook. The UI Kit is the box of branded Lego pieces. Designers build screens by assembling those pieces.

---

### Layer 2 — Code (How It Gets Built)

Once a design is approved, engineers translate it into working code using the same design tokens — now exported for use in software.

A **style build process** takes those tokens and generates two sets of output:

- **Native styles** — for iOS and Android apps (the KFC mobile app on your phone)
- **Web styles** — for browser-based experiences (the KFC website and web ordering flow)

Those styles feed into **Design System Components (DSC)** — the coded equivalents of the design UI Kit. These components are the actual building blocks engineers use when writing new features for Atlas. They enforce consistency so that no individual market team can accidentally introduce a mismatched font or off-brand colour.

> **In plain terms:** The design tokens get "compiled" into code. The result is a library of ready-to-use, on-brand components that engineers across all markets pull from.

---

### Layer 3 — Market Applications (What Goes Live)

At the bottom of the stack sit the actual applications that customers use:

| Application | What It Is |
|---|---|
| **KFC Web App** | The primary web ordering experience for KFC markets globally, built on Atlas |
| **Core Web App** | The shared web foundation that KFC Web App (and others) are built on top of |
| **Core Native App** | The shared mobile foundation for native iOS/Android experiences |

Each market's front-end is assembled from the Core apps and DSC Components above — meaning markets get consistency for free, and customisation is managed in a controlled, structured way.

---

## Why This Matters for Atlas Markets

For markets like **Japan, Australia, UK, Germany, and Singapore**, this architecture means:

- **Speed** — No rebuilding common elements from scratch. New features built on the design system ship faster.
- **Consistency** — The KFC brand looks right on every screen, in every market, on every device.
- **Scalability** — When Yum! updates a brand token (say, a new red), it flows through every market's app automatically.
- **Quality** — Components are tested once at the platform level and inherited by all markets.

KFC Global Enablement and Market Success helps each market take full advantage of this system — translating platform capabilities into market-ready features, and surfacing market needs back to the engineering team in a structured way.

---

## Platform Architecture Diagram

The diagram below illustrates how the Helium design system flows from design tokens in Figma — through the style build process — into platform components, and finally into the KFC market applications customers use.

<iframe
  src="/kfc-atlas-design-system-diagram.html"
  width="100%"
  height="900px"
  style={{border: 'none', borderRadius: '12px'}}
/>
---

*Document prepared by KFC Global Enablement and Market Success — KFC Global*
