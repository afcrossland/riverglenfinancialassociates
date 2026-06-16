# Riverglen Financial Associates — Website Redesign

A static HTML/CSS redesign concept for [riverglenifa.co.uk](https://www.riverglenifa.co.uk/).

## Structure

```
riverglen/
├── index.html            # Homepage
├── meet-the-team.html    # Team page
├── css/
│   ├── style.css         # Shared styles (nav, footer, buttons, cards, badges)
│   ├── home.css          # Homepage-specific styles
│   └── team.css          # Team page-specific styles
└── README.md
```

## Getting started

No build step needed — open `index.html` directly in a browser, or serve with any static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Adding real photos

Photos slot in wherever you see initials avatars. Replace the initials `div` content with an `<img>` tag:

```html
<!-- Before -->
<div class="avatar av-blue" aria-label="Nigel Lindley initials">NL</div>

<!-- After -->
<div class="avatar av-blue" aria-label="Nigel Lindley">
  <img src="img/nigel-lindley.jpg" alt="Nigel Lindley" />
</div>
```

Recommended photo specs: square crop, minimum 200×200px, JPEG or WebP.

## Design tokens

All colours, spacing and radius values live as CSS custom properties in `css/style.css` under `:root`. Change them once to retheme the entire site.

Key tokens:

| Token | Value | Used for |
|-------|-------|----------|
| `--blue-600` | `#185FA5` | Primary brand blue |
| `--blue-800` | `#0C447C` | Dark blue (hero gradient) |
| `--blue-200` | `#85B7EB` | Light blue accents |
| `--text-primary` | `#1A1A1A` | Body text |
| `--text-secondary` | `#5F5E5A` | Muted text |
| `--border` | `rgba(0,0,0,0.1)` | Card borders |

## Pages to build next

- `services/investments.html`
- `services/retirement-planning.html`
- `services/mortgages.html`
- `services/protection.html`
- `services/care-fees.html`
- `services/pension-consolidation.html`
- `contact.html`
- `knowledge-centre.html`
- `financial-news.html`

Each service page can share the same `style.css` and follow the same hero → content → CTA band → footer structure.

## Notes

- No JavaScript dependencies — pure HTML and CSS.
- Responsive breakpoints at 768px.
- FCA disclaimer text is included in the footer on every page as required by regulation.
- The gradient hero uses `#0C447C → #185FA5` — adjust in `style.css` under `.page-hero` if the brand colour changes.
