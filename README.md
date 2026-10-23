# AseanGems redesign

Static HTML prototypes for the ASEAN GEMS student pages. No build step: open any `.html` file in a browser.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Profile dashboard: details, bookmarks, applications, suggestions |
| `opportunities.html` | Scholarships and mobility listing with search, filters and compare |
| `opportunity.html?id=…` | A single scholarship or mobility programme |
| `compare.html` | Side-by-side scholarship comparison |
| `apply.html?id=…` | Application steps (basic info, questions, documents, review) |
| `listings.js` | Shared listing data and helpers used by the pages above |

Bookmarks, compare picks, application drafts and submitted applications are kept in the browser's `localStorage`, so they carry across pages on one browser only.

`CLAUDE.md` holds the design system (fonts, colours, components). All names, emails and phone numbers in the pages are made-up sample data.
