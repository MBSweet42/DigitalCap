# DigitalCap AI Development Instructions

These guardrails apply to AI-assisted development in this repository. They are designed to preserve working behavior, protect production, and maintain code quality.

---

## Primary Rule

**Preserve working behavior. Make the smallest change necessary to complete the explicit task.**

Do not refactor, reorganize, optimize, or redesign adjacent code unless explicitly asked.

---

## Before Any Edit

Always:

1. **Inspect the existing code** that controls the requested behavior
2. **Run `git status`** to understand current working-tree state
3. **Understand which files** currently implement the feature
4. **Identify pre-existing changes** (staged, unstaged, untracked)
5. **Distinguish task changes from unrelated changes**

Never:

- Assume a file is obsolete based only on its name
- Delete a file without searching for all references (HTML, JavaScript, CSS, config, imports)
- Treat silent failures or legacy code as permission to redesign

---

## Scope Discipline

Keep changes focused.

Do not:

- Modify unrelated files
- Refactor adjacent code without being asked
- Rename files, functions, or classes merely for cleanliness
- Rewrite working code unnecessarily
- Alter copy outside the requested scope
- Change CSS beyond the requested component
- Add dependencies unless necessary and approved
- Create unnecessary documentation files or backups
- Rearrange script tags or resource loading without justification

If a task says "only modify this file," treat that as a hard boundary.

---

## Uncertainty

If the outcome is ambiguous AND different approaches would affect behavior, architecture, data, accessibility, or content:

**Ask before implementing.**

If the implementation is clear from the existing code and the task is explicit:

**Proceed without extra questions.**

Never guess about destructive changes (deletions, schema changes, Firebase modifications).

---

## Production Protection

DigitalCap is a live production resource serving real users.

Do not:

- Modify production data during testing
- Alter Firestore collections or schema casually
- Alter Firebase rules or configuration unless explicitly requested
- Deploy automatically
- Push automatically
- Commit automatically (unless the task explicitly authorizes it)

Treat commit, push, and deploy as separate actions requiring explicit authorization.

---

## App Check & App Data

Current verified architecture:

**Firestore `appsPublished` collection is the authoritative published App Check data source.**

Do not:

- Create or reintroduce a static app database (e.g., JavaScript array of apps)
- Silently introduce a second source of truth
- Replicate published app data into static files for convenience

If app data architecture changes, update this guideline.

---

## Content Safety & Tone

Preserve DigitalCap's editorial principles:

- **Inclusive**: Content should be useful across ages, abilities, backgrounds, family structures
- **Practical**: Real situations and concrete next steps
- **Non-alarmist**: Honest risks without sensationalism
- **Plain language**: Clear explanations, define unfamiliar terms
- **Nuance**: Different people make different reasonable choices
- **Supportive**: Support after harm without blame or "should have known"
- **Distinction**: Clear separation between education and professional services

Do not:

- Reintroduce fear-based or alarmist framing
- Use only family-focused language unless context is specifically about families
- Claim an app is "safe" or "unsafe" without using the Digital Exposure framework
- Ask users to determine, score, or assess whether a threat is "credible." When there is a threat of harm, provide practical safety-oriented guidance and appropriate support/resource options without requiring credibility scoring.
- Make medical, legal, emergency, or law-enforcement determinations for users
- Oversimplify complex or nuanced situations

---

## Accessibility

Do not remove or weaken:

- Semantic HTML structure
- Labels and aria-attributes
- Keyboard navigation
- Focus behavior and indicators
- Responsive behavior
- Alt text on images
- Heading hierarchy

When modifying interactive UI:

- Preserve keyboard support
- Test with screen-reader behavior in mind
- Avoid nested interactive controls
- Maintain logical tab order

---

## Testing

Test the behavior affected by the task.

Do not use testing as permission to change unrelated code.

If testing reveals an unrelated issue:

**STOP and report it separately.**

Do not silently fix unrelated problems.

---

## Git Safety

Before committing:

1. **Run `git status`** to see all changes
2. **Run `git diff`** to review exact changes
3. **Verify exactly which files changed**
4. **Ensure unrelated/pre-existing changes are NOT staged**

When a task requests specific files only:

**Stage only those files.**

Never use broad staging:

```
git add .
```

Unless explicitly authorized AND the working tree has been verified safe.

If insights.html is modified but not requested, do NOT stage it.

---

## Deletions

Before deleting any file:

1. **Search for all references** (grep, HTML, JavaScript, CSS, Firebase config, imports, redirects)
2. **Check if it's loaded dynamically** (module imports, script tags with variables, config-driven loading)
3. **Distinguish obsolete from dormant** (unused vs. feature flag disabled vs. legacy fallback)
4. **Document findings**

If dependency status is uncertain:

**Do not delete it.**

If a file was deleted in prior work and verified unused:

**It is safe to omit from documentation and not restore.**

---

## Reporting

After completing a task, report:

- **Files inspected** (understanding phase)
- **Files changed** (implementation)
- **Exact behavior changed** (what was different before/after)
- **Tests performed** (local? production?)
- **git status** (final working-tree state)
- **Anything unexpected** (errors, side effects, assumptions that proved wrong)
- **Whether commit/push/deploy occurred**

Distinguish clearly:

- Code inspection vs. runtime testing
- Local testing vs. production testing
- What was verified vs. what was inferred

---

## Existing Work

Never:

- Overwrite pre-existing user work merely to create clean Git status
- Restore, stage, or delete pre-existing uncommitted changes without permission
- Delete CSS or HTML files that are untracked from prior work

Report pre-existing changes (e.g., "insights.html is currently deleted, css/hotlines.css is untracked") and leave them untouched unless explicitly instructed.

---

## Firebase & Firestore

Do not:

- Deploy Firestore rules casually
- Modify schema without understanding impact on dependent code
- Create Firestore collections for convenience without architectural review
- Assume Firestore data can be freely modified for testing

If Firestore code changes:

- Verify the appsPublished collection still works
- Test app-check.html and global-search.js both load data correctly
- Confirm no 404s or silent failures in console

---

## Module Imports & Script Loading

Current setup:

- `firebase-config.js` loads as a module script (type="module")
- Modules execute asynchronously and defer before DOMContentLoaded
- Module scripts can use dynamic imports
- Classic scripts should not assume module state is ready until DOMContentLoaded fires

Do not:

- Reorder script tags without understanding load order implications
- Convert module scripts to classic scripts or vice versa without testing
- Assume synchronous loading of async resources

---

## Performance & Bundling

DigitalCap is a static HTML/CSS/JS site. There is no build step.

Do not:

- Add minification or bundling requirements
- Introduce preprocessing (SASS, TypeScript, etc.) without infrastructure
- Create unnecessary large files
- Add multiple copies of the same data

---

## Deprecated & Legacy Files

The following files have been deleted and verified unused. Do NOT reference or restore them:

- `js/apps-complete-v2.js`
- `js/app-directory.js`
- `js/apps-data-v2.js`
- `js/quiz.js`
- `js/quiz-data.js`
- `js/quizzes.js`
- `images/logo-hero-stacked.png`

If active code unexpectedly references a previously deleted legacy file:

**STOP and investigate/report the dependency. Do not automatically restore the legacy file and do not automatically remove the reference without understanding why it exists.**

---

## If Uncertain

When in doubt:

1. **Ask for clarification** rather than guessing
2. **Show your understanding** of the current code before implementing
3. **Explain trade-offs** if multiple approaches exist
4. **Verify assumptions** about what "working" means in context

Good collaboration saves rework.

---

## Final Checklist

Before reporting a task complete:

- [ ] Requested behavior works
- [ ] Unrelated code is unchanged
- [ ] No pre-existing work was staged/deleted
- [ ] `git status` shows only intended changes
- [ ] Changes are scoped to the task
- [ ] No accidental formatting or cleanup
- [ ] Commit message (if made) explains the why
- [ ] Tested on local server (not file://)
- [ ] No console errors introduced
- [ ] Accessibility preserved
- [ ] Tone/content principles preserved
- [ ] Report includes what was done and what was tested

---

**DigitalCap Development is a careful, deliberate process. These guardrails exist to keep it that way.**
