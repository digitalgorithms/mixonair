# MIXONAIR WordPress + Etch + GitHub Workflow

This repo started as a static prototype. Your active build is in WordPress (MAMP + Etch + ACSS), so use this workflow to keep changes tracked in GitHub.

## What goes in GitHub

Track these items after each work session:

1. Etch exports (components/templates/pattern JSON)
2. ACSS custom CSS and variables overrides
3. Any custom JS added in Etch/theme
4. Child theme files (if you edit PHP/templates/functions)
5. Build notes (what changed and where)

## Repo folders

- `wordpress/exports/etch/` -> Etch JSON exports
- `wordpress/exports/acss/` -> ACSS custom CSS and notes
- `wordpress/exports/theme/` -> custom theme snippets/files

## Session routine (every time)

1. Build in WordPress (`https://MIXONAIR.local/wp-admin/`)
2. Export changes from Etch/ACSS to files in this repo
3. Commit and push

```bash
cd "/Users/digitalgorithms/Documents/New project"
git add .
git commit -m "feat: update MIXONAIR header in Etch + ACSS"
git push
```

## Recommended export checklist

### Etch

- Export changed components/templates as JSON
- Save files under `wordpress/exports/etch/`
- Use clear names, for example:
  - `header-alpha-2026-02-07.json`
  - `events-template-2026-02-07.json`

### ACSS

- Copy custom CSS into `wordpress/exports/acss/custom.css`
- If you maintain tokens/variables separately, document them in:
  - `wordpress/exports/acss/tokens.md`

### Theme-level code

If you edit child theme files locally, copy/track them in:
- `wordpress/exports/theme/`

Examples:
- `wordpress/exports/theme/functions.php`
- `wordpress/exports/theme/header.php`
- `wordpress/exports/theme/assets/custom.js`

## Commit message format (recommended)

- `feat: ...` for new sections/components
- `fix: ...` for bug/layout fixes
- `style: ...` for visual-only updates
- `chore: ...` for cleanup, placeholder content, docs

Examples:
- `feat: build MIXONAIR events hero and tabs in Etch`
- `style: refine MIXONAIR header nav spacing and CTA states`
- `chore: export Etch component JSON snapshots`

## Important notes

- WordPress DB content is not automatically versioned by git.
- Etch builder state lives in WordPress unless exported.
- Always export JSON/CSS after major edits so you have recovery points.
