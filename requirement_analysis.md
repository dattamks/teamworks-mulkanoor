# Detailed Requirement Analysis

This document maps each client requirement to what the client said, what it means, and where changes are needed in the codebase.

---

## 1. "70 Years of Impact" — Homepage

### What the client said
> 70 years of Impact – to be mentioned on the Homepage

### What I understand
The homepage currently says **"69+ years"** in multiple places. The cooperative was founded in 1956, making 2026 the 70th year. All references on the homepage should be updated from "69+" to "70".

### Where it impacts in the project
| File | Line(s) | Current Text | Change To |
|------|---------|--------------|-----------|
| `src/components/home/HeroBanner.js` | L18 | "Celebrating 69+ years of services…" | "Celebrating 70 years of services…" |
| `src/components/home/Second.js` | L20 | "For 69+ years, Mulkanoor Coop…" | "For 70 years, Mulkanoor Coop…" |
| `src/page/Home.js` | L65 (meta description) | "For 69+ years…" | "For 70+ years…" |
| `public/index.html` | L11 (meta description) | "For 69+ years…" | "For 70 years…" |
| `src/page/Winning.js` | L207 | `{ number: "69+", label: "Years of Success" }` | `{ number: "70", … }` |

**Anniversary page** already says "70 Years" — no change needed there.

---

## 2. Founder Name Change

### What the client said
> Name to be changed to "AligiReddy Kasi Vishwanatha Reddy"
> Locations: Home banner, "Our Founder" heading, below "Our Impact Today"

### What I understand
The client wants the founder's name standardized to **"AligiReddy Kasi Vishwanatha Reddy"** everywhere it appears. Currently the name appears as "A.K. Vishwanatha Reddy" or "Sri A.K. Vishwanatha Reddy" in several files, but the **Anniversary page** (`Anniversary.js`) already uses the correct "AligiReddy Kasi Vishwanatha Reddy".

The client specifically calls out:
- **Home banner** — No founder name currently visible in `HeroBanner.js`. May need to add it, or the client might mean another section. Needs clarification or the name could be added.
- **"Our Founder" section** — This is in `Anniversary.js` L1264-1278. Already correct ("AligiReddy Kasi Vishwanatha Reddy").
- **Below "Our Impact Today"** — In `Anniversary.js` L1784. Already correct.

### Where it impacts in the project
Files that still use the old "A.K. Vishwanatha Reddy" format (not yet updated):

| File | Line(s) | Current Text |
|------|---------|--------------|
| `src/page/discover/Storys.js` | L33, L37, L55, L115, L119, L128 | "A.K. Vishwanatha Reddy" or "Sri A.K. Vishwanatha Reddy" |
| `src/page/discover/Leadership.js` | L95, L104, L127 | "Sri A.K. Vishwanatha Reddy" |
| `src/page/pillars/Values.js` | L218 | "A.K. Vishwanatha Reddy" |

**Anniversary.js** — already uses the correct name. No change needed.

**Decision needed:** Does the client want the name updated only in the Anniversary microsite, or across the entire website? The requirement says "Microsite changes" so likely only `Anniversary.js`, which is already correct.

---

## 3. Awards Section Revamp

### What the client said
> In the awards section, mention the Name of the award, Presenter, Description, along with the Year. Arrange them in Oldest to newest order.

The client provided 11 awards with titles, presenters, descriptions, and dates.

### What I understand
- The current awards array in `Awards.js` has 11 entries but **no year/date field** — years need to be added.
- The current order is **not chronological** — they need to be reordered oldest → newest (1981 → 2024).
- Each award card should display: **Title, Presenter, Description, Year**.
- The grid/timeline/showcase views already render `award.year` but the data doesn't supply it, so it renders as `undefined`.

### Where it impacts in the project
| File | What to change |
|------|---------------|
| `src/page/Awards.js` L82-148 | Rewrite the `awards` array: add `year`/`date` field to each entry, reorder chronologically (1981, 2004, 2005, 2015 ×2, 2019 ×2, 2020, 2021 ×2, 2024) |
| `src/page/Awards.js` L220-260 (GridView) | Already renders `award.year` and `award.presenter` — just needs valid data |

---

## 4. Burra Katha Audio Player

### What the client said
> Embed the Burra Katha link in the microsite, preferably in the "Our Founder" section.
> Need a proper audio player with play, pause, stop buttons.
> Button text: "Play Now"
> Display text: "A soulful Burra Katha that brings alive the journey, vision, and legacy of Mulkanoor Cooperative Society."

### What I understand
The Anniversary page (`Anniversary.js` L1294-1306) already has a "Vision Voice" button with an `<audio>` element pointing to `https://mcrcms.coop/1-Burra%20Katha.mp3`. However:
- It only has a `playAudio` function — **no pause or stop**.
- There is **no visible audio player UI** (progress bar, pause button, etc.).
- The button text says "Vision Voice" — should say **"Play Now"**.
- The descriptive text is missing — needs to be added.

### Where it impacts in the project
| File | Line(s) | What to change |
|------|---------|---------------|
| `src/page/Anniversary.js` | L1294-1306 | Replace the simple button + hidden audio with a full audio player component (play/pause/stop controls, progress bar, descriptive caption) |

The Google Drive link provided (`https://drive.google.com/file/d/1x08wGVax-aLIZT_wRlyiClHL2s4v2a2a/view`) is the same Burra Katha. The existing `mcrcms.coop` hosted MP3 URL is already in use and works — can continue using it, or switch to the Drive link if preferred.

---

## 5. Footer Left-Alignment

### What the client said
> Make the footer properly left-aligned.

### What I understand
The current footer in `Footer.js` uses a 4-column grid layout with `container mx-auto`. The content inside each column is left-aligned by default, but on smaller screens or due to `mx-auto` centering, the overall footer block may appear center-aligned rather than flush-left.

### Where it impacts in the project
| File | What to change |
|------|---------------|
| `src/components/Footer.js` | Adjust the container and text alignment classes. Possibly remove `mx-auto` or add `text-left` explicitly, and ensure the grid items align to the start. |

**Note:** The client may also be referring to the footer inside the Anniversary microsite (which has its own styling). Need to check if `Anniversary.js` has a separate footer section.

---

## Summary Table

| # | Requirement | Scope | Primary File(s) | Effort |
|---|------------|-------|-----------------|--------|
| 1 | 70 years of Impact | Homepage text updates | `HeroBanner.js`, `Second.js`, `Home.js`, `index.html`, `Winning.js` | Low |
| 2 | Founder name change | Text replacement | `Storys.js`, `Leadership.js`, `Values.js` (Anniversary already correct) | Low |
| 3 | Awards revamp | Data restructure + reorder | `Awards.js` | Medium |
| 4 | Burra Katha audio player | New UI component | `Anniversary.js` | Medium |
| 5 | Footer left-align | CSS/layout fix | `Footer.js` (possibly `Anniversary.js`) | Low |
