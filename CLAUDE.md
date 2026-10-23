# AseanGems design system

All projects in this folder must use the AseanGems visual style below. It was taken from the live profile dashboard (aseangems.org/profile: [page.html](page.html), [styles.css](styles.css)), which is built on Bootstrap 5 + Font Awesome. Use the tokens below. The one Bootstrap default the site keeps is the primary button blue `#0D6EFD`.

## Fonts (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500..900&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Poppins is the dashboard font**, used for nearly all text including headings. The look is light and clean, not heavy.
  - User name / page title: 32px, weight 600
  - Section title ("Top opportunities for you"): 22px, weight 700, `#202124`
  - Card title ("Scholarships"): 18px, weight 700, `#202124`
  - Card subtitle: 13px, weight 400, `#8A8F99`
  - List item title: 16px, weight 500, `#323232`. Location 14px `#6C6C6C`, date 14px
  - Body: 16px / 400 `#333438`. Small UI and labels: 12–14px
- **Montserrat** (weight 900, or 600 on buttons) only for marketing headings, the logo wordmark and taglines. Don't use it for dashboard headings.

## Colours

```css
:root {
  /* Brand blues */
  --ag-primary:      #0D6EFD; /* solid primary CTA buttons (Log Out, Save Changes, Continue) */
  --ag-blue:         #237CE5; /* primary brand: buttons, icons, menu */
  --ag-blue-bright:  #1E75F2; /* links, active states, focus borders */
  --ag-blue-link:    #2E5BD7; /* "Show All" style text links (600 weight) */
  --ag-blue-light:   #5BB4FF; /* completed / past steps */
  --ag-blue-soft:    #E6EEFB; /* tinted backgrounds behind blue */

  /* Navy (dark surfaces) */
  --ag-navy:         #1B4591; /* hero / feature section backgrounds */
  --ag-navy-dark:    #20356F; /* footer wave band, modal primary buttons */
  --ag-navy-deep:    #152A56; /* table header columns, link hover */

  /* Text */
  --ag-heading:      #202124; /* section & card titles */
  --ag-text:         #333438; /* body text */
  --ag-text-2:       #5F6368; /* secondary text */
  --ag-muted:        #8A8F99; /* card subtitles, empty states, labels */

  /* Surfaces & lines */
  --ag-surface:      #FFFFFF; /* page + cards */
  --ag-surface-2:    #F6F7F8;
  --ag-surface-3:    #E7E9EB; /* segmented tab bar + settings page background */
  --ag-input-border: #DBDFE2; /* form inputs, settings list dividers */
  --ag-error:        #E64D5B; /* inline form error text */
  --ag-warm:         #F8F8F4; /* empty-state boxes */
  --ag-footer:       #F1F1F1; /* bottom footer */
  --ag-border:       #E6E8EB; /* card borders */
  --ag-divider:      #D9DADC; /* section dividers */

  /* Callout banner ("Unlock more opportunities") */
  --ag-callout-bg:   #FDF2C8; /* soft yellow */
  --ag-callout-ink:  #441904; /* dark brown text + .btn-tertiary background */

  /* Status */
  --ag-success:      #1D6B3E;  --ag-success-bg: #E8F5EA;
  --ag-info:         #1E4DA1;  --ag-info-bg:    #E9F1FF;
  --ag-warning:      #854F0B;  --ag-warning-bg: #FAEEDA;
  --ag-danger:       #A32D2D;  --ag-danger-bg:  #FCEBEB;
}
```

## Components (as seen on the profile dashboard)

- **Page:** white background, content in a centred container with max-width 1320px and 24px side padding (on the live site it measures about 1270px at a 1920px screen). Don't narrow it, and don't add extra side margins to cards inside it. Cards come in two-column grids with a 24px gap, stacking to one column on mobile.
- **Header:** a floating white bar with 8px radius and shadow `0 6px 15px -6px rgba(30,30,30,.4)`, sitting over a full-width hero image. Logo on the left, nav links in the centre (14px, grey), search and avatar on the right.
- **Profile header:** circular avatar (110px, 2px `#ECECEC` border) overlapping the bottom of the hero. Below it, a stats row (tiny 11–12px label, number underneath) split by thin vertical dividers, then a 1px `#D9DADC` divider line.
- **Segmented tabs:** a full-width `#E7E9EB` bar with 8px radius. The active tab is a white pill with a slight shadow; inactive tabs use muted grey text.
- **Card (`.opp-card`):** white, `1px solid #E6E8EB`, radius 12px, padding 20px, no shadow.
- **List item inside a card:** white, radius 4px, shadow `0 4px 9px 2px rgba(30,30,30,.1)`, padding 10px. 62px logo on the left, then title, location and a date with a clock icon.
- **Callout banner:** `#FDF2C8` background, `#441904` text, radius 8px, padding 15px, with a close × button. CTA is a pill button (`#441904` background, `#FDF2C8` text, padding `15px 25px`, radius 30px).
- **Links:** "Show All" in blue 600 weight with a small circle icon. Logout is an underlined blue link.
- **Empty state:** muted grey 14px text ("Nothing here yet.").
- **Footer:** a curved navy (`#20356F`) wave band, then a `#F1F1F1` strip with partner logos, 12px copyright and pipe-separated policy links.

## Settings / form pages (opened from the pencil icon on the profile)

- **Layout:** the floating header, then a white strip with a back chevron `<` and the page title (Poppins 600, about 18px, `#333438`), left-aligned in the container. Below that the page turns grey (`#E7E9EB`).
- **Panel (`.setting-section`):** a white block centred at max-width 650px, with square corners and no border or shadow. Padding is about 30px top and 20px bottom, with 25px on the sides.
- **Settings menu list:** a group heading ("My Account", 600 weight), then rows with a grey outline icon on the left, a 16px label and a `>` chevron on the right. Rows have 15px vertical padding and a `1px #DBDFE2` divider (none under the last row).
- **Forms:** Bootstrap floating-label inputs. The small grey label (`rgba(33,37,41,.6)`, about 13px) sits above a 16px value. Border `1px #DBDFE2`, radius 6px, 16px gap between fields. Selects show a `⌄` chevron. The phone field adds a flag and dial-code picker with a divider. Password fields have an eye toggle.
- **Button row (`.account-btn-group`):** "Cancel" as a plain text link on the left (`#333438`, blue on hover) and the primary pill on the right. The row has 30px margin above and 50px below.
- **Primary pill button:** `#0D6EFD`, white Poppins 600 text, radius 30px, about 56px tall. The form version is about 170px wide. The Log Out version (`.setting-logout`) is a full 420px wide and centred below the panel. When disabled, the same button fades to light blue (about 45% opacity) until the form changes.
- **Error text:** 14px `#E64D5B` under the field.

## Shape & depth

- Radius: 4px (list items), 8px (header, tabs, banners, inputs), 12px (cards), 16px (record cards), 30px / 999px (pill buttons, badges), 50% (avatars).
- Shadows stay soft and low-contrast. Cards rely on borders; list items and floating bars get the shadows.

## Overall look

Airy, white and minimal. Poppins everywhere, with weight (500–700) creating the hierarchy. Blue is used only for links and actions. Colour comes from the navy footer, the hero image and the yellow callout.
