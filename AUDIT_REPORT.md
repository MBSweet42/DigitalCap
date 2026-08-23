# DigitalCap Project Structure Audit Report

**Date:** August 22, 2026  
**Status:** Awaiting User Approval — NO CHANGES MADE  
**Scope:** Full site map analysis, duplicate/legacy page identification, navigation structure conflicts, and recommended migration path

---

## A. CURRENT SITE MAP

### 1. Homepage
- **File:** `index.html`
- **Title:** "DigitalCap - Family Digital Safety & Resources"
- **Navigation:** NEW `navbar-simple` (4 items)
  - App Check → apps-v2.html
  - Something Happened? → hotlines.html
  - Conversation Guides → interactive.html
  - For Educators → teachers.html
- **Hero:** 3-door entry system ("Check an App", "Something Happened?", "Start a Conversation")
- **Tagline:** "No lies. Smart limits."
- **Content:** Refactored with primary navigation points aligned to 4-item structure
- **Status:** ✓ REFACTORED (aligned with new architecture)

### 2. App Directory / App Check
- **File:** `apps-v2.html`
- **Title:** "App Directory - Digital Safety Hub"
- **Navigation:** OLD navbar (7 items: Home, App Directory, Safety, Etiquette, Resources, Teachers, Tools)
- **Content:** App search and filtering functionality, 39 apps in standardized 5-section format
- **Status:** ⚠️ CONTENT UPDATED, NAVBAR NOT UPDATED

### 3. Crisis/Emergency Help
- **File:** `hotlines.html`
- **Title:** "Emergency Hotlines & Crisis Support - DigitalCap"
- **Navigation:** OLD navbar (7 items)
- **Content:** Emergency hotlines and crisis support resources
- **Status:** ⚠️ NAVBAR NOT UPDATED (should be integrated with "Something Happened?" flow)

### 4. Interactive Tools / Practice Challenges
- **File:** `interactive.html`
- **Title:** "Interactive Tools - Digital Safety Hub"
- **Navigation:** OLD navbar (7 items)
- **Content:** Refactored into 4 Practice Challenge categories (Spot the Scam, DM Simulator, App Safety, Family Dilemma)
- **Status:** ⚠️ CONTENT UPDATED, NAVBAR NOT UPDATED

### 5. Educator Resources
- **File:** `teachers.html`
- **Title:** (Classroom resource portal with 12 lesson plans)
- **Navigation:** Modified OLD navbar (7 items)
- **Content:** Classroom resource portal with smart filters, 12 lesson plans, downloads
- **Status:** ⚠️ CONTENT UPDATED, NAVBAR NOT UPDATED

### 6. Safety Education
- **File:** `safety-v2-fixed.html`
- **Title:** "Digital Safety - Digital Safety Hub"
- **Navigation:** OLD navbar (7 items)
- **Content:** Safety articles and resources
- **Status:** ⚠️ NAVBAR NOT UPDATED

### 7. Digital Etiquette
- **File:** `etiquette-v2-fixed.html`
- **Title:** "Digital Etiquette - Digital Safety Hub"
- **Navigation:** OLD navbar (7 items)
- **Content:** Etiquette articles and resources
- **Status:** ⚠️ NAVBAR NOT UPDATED

### 8. General Resources
- **File:** `resources.html`
- **Title:** "Resources & Guides - DigitalCap"
- **Navigation:** OLD navbar (7 items)
- **Content:** General resources and guides
- **Status:** ⚠️ NAVBAR NOT UPDATED

### 9. Curated Expert Links
- **File:** `resources-links.html`
- **Title:** "Curated Resources & Expert Links - DigitalCap"
- **Navigation:** OLD navbar (7 items)
- **Content:** Links to expert resources (Common Sense Media, NCMEC, FTC, etc.)
- **Status:** ⚠️ NAVBAR NOT UPDATED (POTENTIAL DUPLICATE with resources.html)

### 10. About / Project Info
- **File:** `about.html`
- **Title:** "About - Digital Safety Hub"
- **Navigation:** OLD navbar (7 items)
- **Content:** Project information, sources, credits
- **Status:** ⚠️ NAVBAR NOT UPDATED

### 11. Community & Q&A
- **File:** `community.html`
- **Title:** "Community & Q&A - DigitalCap"
- **Navigation:** OLD navbar (7 items)
- **Content:** Community features (status unknown)
- **Status:** ⚠️ NOT INTEGRATED INTO NEW ARCHITECTURE

### 12. Gaming Safety Guide
- **File:** `gaming-guide.html`
- **Title:** "Gaming Safety Guide - DigitalCap"
- **Navigation:** OLD navbar (7 items)
- **Content:** Specialized safety guide for gaming platforms
- **Status:** ⚠️ NAVBAR NOT UPDATED (POTENTIAL ORPHAN - no links in new nav structure)

### 13. Parent Guides / Downloadables
- **File:** `parent-guides.html`
- **Title:** "Parent Guides - DigitalCap"
- **Navigation:** OLD navbar (7 items)
- **Content:** Downloadable parent guides
- **Status:** ⚠️ NAVBAR NOT UPDATED (POTENTIAL ORPHAN - no links in new nav structure)

### 14. Insights & Safety Stats
- **File:** `insights.html`
- **Title:** "Insights & Safety Stats - DigitalCap"
- **Navigation:** Modified OLD navbar (6 items: Home, App Directory, Safety, Resources, Teachers, Insights)
  - Notable: Missing "Etiquette", includes "Insights" instead
- **Content:** Safety statistics and insights
- **Status:** ⚠️ NAVBAR NOT UPDATED (INCONSISTENT - custom navbar structure)

---

## B. DUPLICATE / CONFLICTING PAGES

### Clear Duplicates / Conflicts

| Issue | Files | Details |
|-------|-------|---------|
| **Dual Resource Pages** | `resources.html` vs `resources-links.html` | Both appear to serve "Resources" function. Need clarification on scope/distinction. |
| **Gaming Content** | `gaming-guide.html` | Specialized guide not linked in new navbar; unclear if should be: (a) integrated into Safety section, (b) kept as separate guide, or (c) removed as out-of-scope |
| **Parent Guides** | `parent-guides.html` | Unclear purpose — appears to be downloadable guides. Should integrate into Resources or Educators section or remove. |
| **Community Feature** | `community.html` | Explicitly removed from new navigation ("Community" was hidden in Phase 1). Status unclear: is this deprecated, archived, or to be re-added later? |
| **Insights Page** | `insights.html` | Custom navbar with 6 items (not 4, not full 7). Unclear fit in new structure. |
| **Orphaned Pages** | `gaming-guide.html`, `parent-guides.html`, `community.html`, `insights.html` | Not linked in new 4-item navbar on index.html. No clear path for users to discover these. |

### Partial Duplicates / Overlaps

| Potential Overlap | Pages | Details |
|---------|-------|---------|
| **Safety Resources** | `safety-v2-fixed.html` + `etiquette-v2-fixed.html` | Clear purpose, but may have some content overlap with general resources |
| **Educator Content** | `teachers.html` + `parent-guides.html` | Teachers page has lesson plans; parent-guides page has downloadables. May be redundant. |

---

## C. OLD VS NEW NAVIGATION COMPARISON

### OLD Navigation Structure (7 items)
Used in: `apps-v2.html`, `about.html`, `community.html`, `etiquette-v2-fixed.html`, `gaming-guide.html`, `hotlines.html`, `interactive.html`, `parent-guides.html`, `resources-links.html`, `resources.html`, `safety-v2-fixed.html`

```
Home → [index.html]
App Directory → [apps-v2.html]
Safety → [safety-v2-fixed.html]
Etiquette → [etiquette-v2-fixed.html]
Resources → [resources.html]
Teachers → [teachers.html]
Tools → [interactive.html]
```

**Issues:**
- ❌ Hierarchy is flat, not task-oriented
- ❌ Generic labels ("Resources", "Tools") don't convey user benefit
- ❌ No clear "in crisis/need help" path
- ❌ Educator content buried as "Teachers" (not discoverable to parent audience)

### NEW Navigation Structure (4 items)
Used in: `index.html` only

```
App Check → [apps-v2.html]
Something Happened? → [hotlines.html]
Conversation Guides → [interactive.html]
For Educators → [teachers.html]
```

**Advantages:**
- ✓ Task-oriented ("Check an App", "Something Happened?")
- ✓ Clear user intent at each step
- ✓ Crisis path explicitly available
- ✓ Educator content clearly labeled
- ✓ Aligned with 3-door homepage entry system

**Current Problem:**
- 🚩 Only index.html uses this structure
- 🚩 All other pages still load old 7-item navbar
- 🚩 Users navigating away from homepage hit old navigation
- 🚩 Inconsistent user experience

### Navigation Inconsistencies

| File | Current Nav | Expected Nav | Status |
|------|-----------|------------|--------|
| index.html | NEW (4 items) | NEW (4 items) | ✓ Correct |
| apps-v2.html | OLD (7 items) | NEW (4 items) | ❌ MISMATCH |
| hotlines.html | OLD (7 items) | NEW (4 items) | ❌ MISMATCH |
| interactive.html | OLD (7 items) | NEW (4 items) | ❌ MISMATCH |
| teachers.html | OLD (7 items) | NEW (4 items) | ❌ MISMATCH |
| safety-v2-fixed.html | OLD (7 items) | ??? | ❌ ORPHANED |
| etiquette-v2-fixed.html | OLD (7 items) | ??? | ❌ ORPHANED |
| resources.html | OLD (7 items) | ??? | ❌ ORPHANED |
| resources-links.html | OLD (7 items) | ??? | ❌ ORPHANED |
| about.html | OLD (7 items) | ??? | ❌ ORPHANED |
| community.html | OLD (7 items) | ??? | ❌ ORPHANED (removed) |
| gaming-guide.html | OLD (7 items) | ??? | ❌ ORPHANED |
| parent-guides.html | OLD (7 items) | ??? | ❌ ORPHANED |
| insights.html | CUSTOM (6 items) | ??? | ❌ INCONSISTENT |

---

## D. RECOMMENDED SITE MAP

### Option 1: Strict 4-Item Navigation (Recommended)
**Principle:** All user-facing pages use the new 4-item navbar. Secondary pages accessible via footer or sub-navigation within primary sections.

```
PRIMARY (4-Item Navbar)
├── App Check (apps-v2.html)
├── Something Happened? (hotlines.html)
├── Conversation Guides (interactive.html)
└── For Educators (teachers.html)

SECONDARY (Accessible via Footer or Within Primary Pages)
├── Digital Safety (safety-v2-fixed.html) → Linked from App Check or footer
├── Digital Etiquette (etiquette-v2-fixed.html) → Linked from Conversation Guides or footer
├── Resources (resources.html) → Consolidated, linked from footer
├── About (about.html) → Linked from footer
└── [DEPRECATED/ARCHIVED]
    ├── community.html → Remove or archive
    ├── gaming-guide.html → Fold into safety-v2-fixed.html or archive
    ├── parent-guides.html → Fold into resources.html or archive
    ├── resources-links.html → Merge with resources.html
    └── insights.html → Remove or archive

INTERNAL PAGES (No navbar, accessible via footer/links)
├── Skip-to-main-content links
├── 404 page (if hosted)
└── Print-friendly versions (via print styles)
```

**Navigation Implementation:**
- All pages use `navbar-simple` (NEW 4-item structure)
- Footer includes links to secondary pages (Safety, Etiquette, Resources, About)
- Primary pages may have internal sub-navigation (e.g., App filters, Challenge categories)

### Option 2: Expanded Secondary Navigation
**Principle:** Keep 4-item navbar but add clearly-labeled secondary navigation below primary.

```
PRIMARY (4-item navbar)
├── App Check
├── Something Happened?
├── Conversation Guides
└── For Educators

SECONDARY NAVIGATION (beneath primary nav)
├── Digital Safety
├── Digital Etiquette
├── More Resources
└── About
```

**Pros:** All pages are 1 click away  
**Cons:** Adds visual complexity; may clutter interface

---

## E. FILE ACTION PLAN

### Phase 1: Update Primary Pages (4-Item Navbar)
These pages are core to the new architecture and need navbar updates.

| File | Current Nav | Action | Estimated Effort |
|------|-----------|--------|------------------|
| `apps-v2.html` | OLD (7 items) | Replace with `navbar-simple` (4 items) | Low |
| `hotlines.html` | OLD (7 items) | Replace with `navbar-simple` (4 items) | Low |
| `interactive.html` | OLD (7 items) | Replace with `navbar-simple` (4 items) | Low |
| `teachers.html` | OLD (7 items) | Replace with `navbar-simple` (4 items) | Low |

**Details:**
- Copy navbar structure from `index.html` → apply to all 4 pages
- Verify internal links still work after navbar update
- Test mobile menu toggle
- No content changes needed

---

### Phase 2: Integrate Secondary Pages (Footer Links)
These pages should remain accessible but via footer or secondary navigation, not primary navbar.

| File | Current Nav | Action | Purpose | Estimated Effort |
|------|-----------|--------|---------|------------------|
| `safety-v2-fixed.html` | OLD (7 items) | Keep OLD navbar OR update to NEW (4 items) + note in footer | Digital Safety deep-dive | Low |
| `etiquette-v2-fixed.html` | OLD (7 items) | Keep OLD navbar OR update to NEW (4 items) + note in footer | Digital Etiquette deep-dive | Low |
| `resources.html` | OLD (7 items) | Keep OLD navbar OR update to NEW (4 items) | General resources hub | Low |
| `about.html` | OLD (7 items) | Keep OLD navbar OR update to NEW (4 items) | Project info & credits | Low |

**Decision Needed from User:**
1. Should these secondary pages use the NEW 4-item navbar (for consistency)?  
2. Or keep OLD navbar and add a footer link back to them?

---

### Phase 3: Review & Consolidate Orphaned / Duplicate Pages

| File | Current Status | Recommendation | Action | Decision Needed |
|------|---|---|---|---|
| `resources-links.html` | Curated expert links | **CONSOLIDATE** with `resources.html` | Merge content into `resources.html`, delete file | Should we merge or keep separate? |
| `community.html` | Community & Q&A | **DEPRECATED** (removed in Phase 1) | Decide: Archive or Delete? | Keep archived for reference or delete? |
| `gaming-guide.html` | Gaming safety guide | **FOLD or ARCHIVE** | Option A: Integrate content into `safety-v2-fixed.html`. Option B: Archive and remove. | Which approach? |
| `parent-guides.html` | Downloadable guides | **FOLD or ARCHIVE** | Option A: Integrate into `resources.html`. Option B: Integrate into `teachers.html`. Option C: Archive and remove. | Which section? |
| `insights.html` | Safety stats | **DEPRECATED** (custom/inconsistent navbar) | Review content. If valuable, merge into main pages. If not, delete. | Keep or delete? |

---

## F. IMPLEMENTATION ROADMAP

### Step 1: Clarify Navigation Strategy (User Input)
**User to decide:**
1. Do ALL secondary pages (safety, etiquette, resources, about) use the NEW 4-item navbar for consistency?  
   **OR** keep secondary pages with OLD navbar?

2. How should orphaned pages be handled?
   - `resources-links.html`: Merge with `resources.html` or keep separate?
   - `gaming-guide.html`: Fold into safety OR archive?
   - `parent-guides.html`: Fold into resources OR educators OR archive?
   - `community.html`: Archive for reference OR delete?
   - `insights.html`: Integrate into main content OR delete?

---

### Step 2: Update All Page Navbars (Once decision made)
**Files to update:**
- `apps-v2.html` → navbar-simple (DEFINITE)
- `hotlines.html` → navbar-simple (DEFINITE)
- `interactive.html` → navbar-simple (DEFINITE)
- `teachers.html` → navbar-simple (DEFINITE)
- `safety-v2-fixed.html` → ??? (depends on strategy)
- `etiquette-v2-fixed.html` → ??? (depends on strategy)
- `resources.html` → ??? (depends on strategy)
- `about.html` → ??? (depends on strategy)

---

### Step 3: Consolidate Duplicate Pages
**Files to merge/delete:**
- `resources-links.html` → consolidate into `resources.html` (if decided)
- `gaming-guide.html` → fold into safety OR delete
- `parent-guides.html` → fold into resources/educators OR delete
- `community.html` → archive or delete
- `insights.html` → integrate or delete

---

### Step 4: Testing & Verification
Once changes are made:
- [ ] Load `index.html` — verify NEW navbar with 4 items
- [ ] Click each navbar link and confirm consistent navigation on destination pages
- [ ] Test mobile menu toggle on all pages
- [ ] Verify no broken links (internal or external)
- [ ] Test footer links to secondary pages (if implemented)
- [ ] Verify dark mode doesn't break navbar styling
- [ ] Check responsive design on 375px, 768px, 1024px widths

---

## G. SUMMARY: What Changed vs. What Didn't

### What's Been Updated ✓
- `index.html` — Homepage refactored with NEW navbar-simple (4 items) and 3-door entry system
- `apps-v2.html` — Content standardized to 5-section format across 39 apps
- `interactive.html` — Refactored into 4 Practice Challenge categories
- `teachers.html` — Transformed into classroom resource portal with 12 lesson plans
- `css/style.css` → `css/style-polished.css` — New color palette, responsive design, accessibility improvements

### What Needs Updating ⚠️
- All pages except `index.html` still use OLD 7-item navbar
- Secondary pages (`safety`, `etiquette`, `resources`, `about`) not integrated into new navigation strategy
- Orphaned pages (`gaming-guide`, `parent-guides`, `community`, `insights`) not accessible from primary navbar
- Potential duplicates not consolidated (`resources.html` vs `resources-links.html`)

### What's Unchanged ❓
- File names (no renames yet)
- Page content (no deletions yet)
- Visual design (not applied to secondary pages yet)

---

## Questions for User

1. **Navigation Strategy:** Should ALL secondary pages (safety, etiquette, resources, about) use the NEW 4-item navbar for consistency, or keep them on OLD navbar?

2. **Orphaned Pages:** 
   - Delete `community.html`? (It was hidden in Phase 1)
   - Archive vs. delete `gaming-guide.html`, `parent-guides.html`, `insights.html`?

3. **Duplicate Resources:** Consolidate `resources-links.html` into `resources.html`?

4. **File Names:** Should we rename files for clarity? e.g., `safety-v2-fixed.html` → `safety.html`, `etiquette-v2-fixed.html` → `etiquette.html`?

5. **Priority:** What's most important to tackle first? (Navbar updates likely highest impact)

---

## NO CHANGES MADE
This report documents findings only. All analysis is based on reading HTML titles, navigation structures, and CSS file contents. **No files have been modified, deleted, or created.** Awaiting user approval and decision on questions above before proceeding.

---

**Next Steps:** User reviews this report, answers clarification questions in Section G, and approves an implementation plan before any changes are made.
