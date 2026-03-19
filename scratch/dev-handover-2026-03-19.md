# Dev Handover - March 19, 2026 (Evening)

## Scope

This handover covers work done on **March 19, 2026**, continuing from the previous handover (March 18 morning) and preparing for seamless continuation by Codex, Claude, and OpenWork.

---

## Current Repo State

| Item | Status |
|------|--------|
| **Branch** | `main` (deployed to GitHub Pages) |
| **Current HEAD** | `3510aeb` |
| **Last commit** | "Fix: Add 2026.03.19 release to changelog index" |
| **Live URL** | https://jpagali.github.io/KFCAtlas-Wiki/ |

### GitHub Actions Status
- ✅ Auto-deploys on push to `main`
- ✅ Node.js 24 configured
- ✅ @docusaurus/theme-mermaid package installed (was missing)

---

## What Shipped Today (March 19)

### 1. Atlas Peek Light Mode Fixes
- Added light mode styles for `.journey-shell-chip` (Pickup/ASAP chips)
- Added light mode styles for `.journey-shell-bar` (white background)
- Added light mode styles for `.topbar` and `.web-nav` (white background)
- Added light mode styles for `.pill` buttons in action sheets

### 2. Sidebar Navigation Cleanup
- Renamed duplicate nested category labels to avoid translation conflicts:
  - "Stores" → "Store Tasks"
  - "Menus" → "Menu Tasks"
  - "Products" → "Product Tasks"
  - "Promotions" → "Promotion Tasks"
  - "Bundles" → "Bundle Tasks"
  - "Store Groups" → "Store Group Tasks"

### 3. Navbar Responsive Behavior
- Search bar now shrinks progressively based on viewport width (zoom levels)
- Breakpoints: 1500px → 1400px → 1300px → 1200px → 1100px → 1000px
- Theme toggle hides at 1500px
- Contribute button was removed entirely

### 4. Search Enhancements
- Placeholder changed to "What's on your mind?" (EN)
- Japanese placeholder: "気になることは？"
- Hero search bar max-width reduced to 600px

### 5. Byte Capabilities Docs
- New section added with credits linking to Confluence
- Search indexes updated to include Byte Capabilities content

### 6. Prototype Consolidation
- Sneak-peek iframe now uses `rna-sneak-peek-prototype.html`
- Deprecated `sneak-peek-prototype.html` deleted

### 7. Release Notes
- Release 2026.03.19 created and linked in changelog index
- All changes documented

---

## Release Notes Location

**Changelog index:** `/docs/release-notes/index.md`

**Release entry:** `/docs/release-notes/2026-03-19.md`

The changelog now includes all releases from 2026-03-12 through 2026-03-19.

---

## Important Naming Conventions

| Old Name | Current Name |
|----------|--------------|
| Atlas Knowledge Center | **Atlas Wiki** |
| RNA sneak peek | **Atlas Peek** |
| sneak-peek-prototype.html | **rna-sneak-peek-prototype.html** |

---

## Release Process (Reminders)

1. **Always update release notes before pushing to main**
2. **Follow this format in release notes:**
   ```markdown
   ## [Date]
   
   ### Changes
   - [Brief description of each change]
   ```
3. **Build locally first** (`npm run build`) to verify
4. **Commit and push** - GitHub Actions auto-deploys

---

## Uncommitted Local Artifacts

These remain uncommitted and should be handled with care:

| File | Size | Purpose |
|------|------|---------|
| `scratch/previews/kfc-app-shell-revision.html` | 192KB | Next-gen prototype exploration |
| `scratch/previews/kfc-prototype-pwa-toggle-brainstorm.html` | 32KB | PWA behavior brainstorm |
| `scratch/previews/rna-sneak-peek-shell-preview.html` | 129KB | Shell preview exploration |
| `static/fonts/kfc/*` | 4 font files | KFC brand fonts for prototypes |

**Decision needed:** Whether to commit these or keep them as local exploration.

---

## Key Files to Know

| File | Why It Matters |
|------|----------------|
| `src/css/custom.css` | All styling decisions, responsive breakpoints |
| `src/pages/sneak-peek/index.js` | Atlas Peek iframe configuration |
| `static/rna-sneak-peek-prototype.html` | Committed prototype (the canonical one) |
| `docusaurus.config.js` | Navbar structure, theme settings |
| `sidebars.js` | Sidebar category configuration |
| `docs/release-notes/index.md` | Changelog entry point |

---

## What Needs Attention

### High Priority
1. **Verify light mode renders correctly** - Check Atlas Peek chips/bar in light mode
2. **Confirm prototype iframe loads** - `/sneak-peek` should show `rna-sneak-peek-prototype.html`

### Medium Priority
1. **Prototype direction decision** - `kfc-app-shell-revision.html` vs current committed prototype
2. **Font assets** - KFC fonts are uncommitted, needed for future prototypes

### Low Priority
1. **Clean up scratch folder** - Add README explaining which preview is latest
2. **Japanese locale** - Verify all new content has ja-JP translations

---

## Workflow Reminders

### Before Every Push to Main
```bash
# 1. Update release notes
# 2. Build locally
npm run build

# 3. Commit with clear message
git add .
git commit -m "Description of changes"

# 4. Push - auto-deploys
git push origin main
```

### Checking Deployment Status
https://github.com/jpagali/KFCAtlas-Wiki/actions

---

## Confidence Check

**Top 5 files to know:**

1. `src/css/custom.css` - All visual changes happen here
2. `static/rna-sneak-peek-prototype.html` - The committed prototype
3. `src/pages/sneak-peek/index.js` - Where prototype is embedded
4. `docs/release-notes/index.md` - Entry point for changelog
5. `docusaurus.config.js` - Global site configuration

---

## Contact

For questions about this handover:
- OpenWork (big-pickle model) - this session
- Claude - previous session (handover in `scratch/claude-handover-2026-03-18.md`)
- Codex - original work (handover reference)

---

## Closing Note

The wiki is in a stable, deployed state. All major styling work for the day is complete and documented. The prototype direction is the most active discussion point if continuation is needed.

**Next logical step:** Verify the deployed site matches expectations, then decide on prototype direction.
