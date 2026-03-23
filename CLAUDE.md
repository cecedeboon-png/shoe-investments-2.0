# Shoe Investments 2.0 — Website Redesign

## Project overview

Dit is de herpositionering van de Shoe Investments website. De originele versie (v1) staat op `cecedeboon-png/shoe-investments-website`. Deze repo (v2.0) is de nieuwe versie met een fundamenteel andere positionering.

## Tech stack

- Statische HTML/CSS/JS site (geen framework)
- Gehost via GitHub Pages
- CSS in `css/style.css`
- JS in `js/` directory
- Portfolio detailpagina's in `portfolio/`

## De shift: wat verandert

### Positionering
- **Was:** "De meest ondernemende investeringsmaatschappij van Nederland"
- **Wordt:** "A Dutch family office with global venture reach"
- **Taal:** Engels als primaire taal, Nederlands als optie (NL/EN toggle bestaat al in de nav)

### Kernboodschap (drie pijlers)
1. **Direct Investments** — €2-10M in Nederlandse tech scale-ups, hands-on als medeondernemer
2. **Fund-to-Fund** — Via selecte fondsen in pre-seed en seed AI-technologie wereldwijd
3. **SPV Follow-on** — Doorinvesteren in breakout ventures via dedicated SPV's, snel en besluitvaardig

### Waarom fondsen met Shoe willen werken
- Snelheid: beslissingen in dagen, niet kwartalen
- Smart capital: operationele ervaring + breed Europees netwerk
- Long-term partner: evergreen fund, geen exit-druk

## Design richting — Moderne VC uitstraling

### Design referenties (bestudeer deze sites voor inspiratie)

1. **sequoiacap.com** — De gouden standaard. Kenmerken:
   - Extreem clean navigatie: Our Founders, Our Companies, Our Team, Stories
   - Portfolio als hero content met grote visuele kaarten
   - Filterable company grid met metadata (stage, partner, year)
   - Donkere achtergrond, minimale decoratie
   - Typografie doet al het werk

2. **a16z.com** — Content-first approach:
   - Blog/artikelen prominent, toont thought leadership
   - Portfolio met sector-filtering
   - Team pagina met duidelijke hiërarchie

3. **atomico.com** — Europese VC:
   - State of European Tech rapport als content highlight
   - Clean portfolio grid
   - Strak en professioneel maar benaderbaar

4. **insiders.vc** — Relevant als partner:
   - Founder-fueled messaging
   - "From hype to value" positionering
   - Donker design, moderne fonts

### Kleurenpalet

```css
:root {
  /* Primair */
  --bg-primary: #0a0a0a;         /* Near-black achtergrond (à la Sequoia) */
  --bg-secondary: #111111;       /* Iets lichter voor kaarten/secties */
  --bg-elevated: #1a1a1a;        /* Elevated surfaces, hover states */
  
  /* Lichte secties (voor afwisseling) */
  --bg-light: #fafafa;           /* Bijna wit */
  --bg-light-alt: #f4f4f5;      /* Licht grijs */
  
  /* Accenten */
  --accent-primary: #c4a265;     /* Warm goud — voor CTA's en highlights */
  --accent-hover: #d4b275;       /* Goud hover */
  --accent-subtle: rgba(196, 162, 101, 0.15); /* Goud achtergrond subtiel */
  
  /* Tekst */
  --text-primary: #ffffff;       /* Wit op donker */
  --text-secondary: #a1a1aa;     /* Gedempte tekst */
  --text-muted: #71717a;         /* Zeer gedempte tekst */
  --text-dark: #18181b;          /* Tekst op lichte achtergrond */
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);  /* Subtiele scheidingslijnen */
  --border-hover: rgba(255, 255, 255, 0.15);
}
```

### Typografie

```css
/* Gebruik Inter (zelfde font als Sequoia/Linear) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1 { font-size: 3.5rem; font-weight: 600; letter-spacing: -0.03em; line-height: 1.1; }
h2 { font-size: 2.25rem; font-weight: 600; letter-spacing: -0.02em; line-height: 1.2; }
h3 { font-size: 1.5rem; font-weight: 500; letter-spacing: -0.01em; }

/* Labels/tags in uppercase */
.label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
```

### Design principes

1. **Content doet het werk, niet decoratie.** Geen geometrische vormen, geen kleurrijke illustraties, geen animatiekruiken. De portfolio namen (Anthropic, Revolut) spreken voor zich.

2. **Donkere achtergrond als default.** Net als Sequoia. Witruimte wordt "zwartruimte" — het voelt premium en serieus.

3. **Grote, zelfverzekerde typografie.** Headlines zijn groot (3.5rem+), korte zinnen, veel ruimte.

4. **Subtiele hover-effecten.** Kaarten krijgen een lichte border of glow bij hover, geen dramatische transitions.

5. **Logo grid als social proof.** De portfolio logo's (Anthropic, Revolut, etc.) worden in een clean grid getoond, wit/grijs op donkere achtergrond, á la Sequoia's "Our Companies".

6. **Geen stock imagery.** Gebruik de bestaande Rotterdam foto's met een zware donkere overlay (80-90% opacity) zodat ze sfeer geven zonder af te leiden.

### Interactie-patronen (à la Sequoia)

- **Smooth scroll** tussen secties
- **Fade-in animaties** bij scrollen (subtle, 200-300ms, opacity + slight translateY)
- **Hover states** op kaarten: subtiele border-glow, niet kleurverandering
- **Sticky navigation** die transparant start en solid wordt bij scroll
- **Filter tabs** op de portfolio pagina (Direct / Funds / Notable Exposure)

## Taal: Engels primair, Nederlands als optie

### Implementatie NL/EN toggle

De navigatie heeft al een NL/EN toggle. Implementeer dit als volgt:

1. **Standaard taal: Engels.** Alle content is primair in het Engels geschreven.

2. **Data-attributen voor vertalingen:**
```html
<h1 data-en="A Dutch family office with global venture reach" 
    data-nl="Een Nederlandse family office met wereldwijd bereik">
  A Dutch family office with global venture reach
</h1>
```

3. **JS toggle logica:**
```javascript
// Bewaar taalvoorkeur in localStorage
const lang = localStorage.getItem('lang') || 'en';
document.documentElement.setAttribute('data-lang', lang);

function toggleLanguage(newLang) {
  localStorage.setItem('lang', newLang);
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${newLang}`);
  });
  // Update active state van toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === newLang);
  });
}
```

4. **Toggle UI in de nav:**
```html
<div class="lang-switcher">
  <button class="lang-toggle" data-lang="en" onclick="toggleLanguage('en')">EN</button>
  <span class="lang-divider">|</span>
  <button class="lang-toggle" data-lang="nl" onclick="toggleLanguage('nl')">NL</button>
</div>
```

5. **Vertaal ALLE content** — niet alleen headlines maar ook body text, buttons, labels, footer, etc. Elke visible tekst krijgt een `data-en` en `data-nl` attribuut.

### Vertaalrichtlijnen

- Engels is de "brand voice" — schrijf eerst in het Engels, dan vertalen naar Nederlands
- Nederlands mag iets informeler dan het Engels
- Bedrijfsnamen, fondsnamen, en financiële termen blijven in het Engels
- "Family office", "SPV", "fund-to-fund", "evergreen" — deze termen worden NIET vertaald

## Pagina-specifieke instructies

### index.html (Homepage)

**Hero:**
- Donkere achtergrond (navy gradient of subtiele Rotterdam skyline met dark overlay)
- Tagline: "A Dutch family office with global venture reach"
- Subtitel: "Backed by one of the Netherlands' most successful entrepreneurs. Active in Anthropic, Revolut, Airwallex, and 30+ global funds."
- CTA button: "Explore our approach"

**Sectie: Notable Exposure (NIEUW — meest impactvolle sectie)**
- Logo-grid in drie rijen:
  - Rij 1 (internationaal, via funds/SPV's): Anthropic, Revolut, Airwallex, Leasy, Replit
  - Rij 2 (direct portfolio): Creative Clicks, Dealroom, Swishfund, Colect, Equalture, Carv
  - Rij 3 (fund partners): Insiders Ventures, Sky9 Capital, Slingshot Ventures, Forbion
- Subtiele labels per rij: "Via SPV & Funds" / "Direct Portfolio" / "Fund Partners"

**Sectie: Three Pillars**
- Grid van 3 kaarten met iconen:
  1. Direct Investments — ticket size, hands-on approach
  2. Fund-to-Fund — pre-seed/seed AI focus, 30+ funds, 4 continents
  3. SPV Follow-on — snel kapitaal, geen bureaucratie

**Sectie: Key Figures**
- 30+ fund investments across 4 continents
- 14 direct portfolio companies
- Active in companies valued at $100B+ combined (Anthropic, Revolut, etc.)

**Sectie: Why Partner With Us (NIEUW)**
- Drie argumenten: Speed, Smart Capital, Long-term
- Gericht op fund managers die Shoe als LP overwegen

**Verwijder:**
- "Popcornen" quote
- Alle informele quotes uit de hero
- De huidige kleurrijke animaties/vormen
- Values carousel (vervang door cleaner design)

### over-ons.html

**Herschrijf volledig naar drie blokken:**

Blok 1 — Heritage: Pieter Schoen, familiegeschiedenis sinds 1722, NLE als 4e energieleverancier, Erasmus Universiteit

Blok 2 — Strategy: Twee pijlers (direct + fund-to-fund/SPV), evergreen model, internationale scope

Blok 3 — Evergreen Advantage: Geen fundraising cycles, geen exit-druk, snel committen, stabiele langetermijnpartner

### team.html

- Behoud alle teamleden
- Pas toon aan: korter, krachtiger, meer focus op relevante ervaring
- Voeg bij Pieter toe: "Founder of NLE, the 4th largest energy company in the Netherlands" prominent in bio
- Behoud advisors sectie

### portfolio.html

**Herstructureer naar drie tabs/secties:**

Tab 1 — DIRECT PORTFOLIO: Bestaande bedrijven + Replit, Carv
Tab 2 — FUND INVESTMENTS: Van de huidige lijst naar gestructureerd overzicht met regio/focus tags
Tab 3 — NOTABLE EXPOSURE: Anthropic, Revolut, Airwallex, Leasy met korte beschrijving en via welk fonds/SPV

### fondsen.html

- Herstructureer van een simpele namenlijst naar kaarten met: fondsnaam, regio, focus, notable portfolio
- Voeg Insiders Ventures toe
- Groepeer op regio: Europe, Asia, Global, Secondaries

### esg.html

- Moderniseer maar houd beknopt
- Integreer ESG meer in portfolio company beschrijvingen

### stage.html

- Behoud, pas alleen design aan naar nieuwe stijl

### contact.html

- Voeg toe: "For fund managers: discuss LP commitments"
- Voeg toe: "For entrepreneurs: pitch your company"
- Clean design matching de nieuwe stijl

## Bestaande portfolio pagina's (portfolio/*.html)

De individuele portfolio pagina's (anthropic.html, revolut.html, etc.) bestaan al. Update hun styling naar het nieuwe design maar behoud de content structuur.

## Bestanden

- `css/style.css` — Hoofdstylesheet, moet volledig worden herwerkt voor het nieuwe kleurenpalet en design
- `js/main.js` — Basis interacties
- `js/page-fixes.js` — Pagina-specifieke fixes
- `js/si-extended.js` — Extended functionaliteit
- `js/portfolio-detail.js` — Portfolio detail pagina's
- `images/` — Hergebruik bestaande hero images maar met donkere overlays

## Workflow

1. Begin met `css/style.css` — nieuw kleurenpalet en typografie
2. Dan `index.html` — de homepage als flagship
3. Dan de overige pagina's: over-ons, team, portfolio, fondsen
4. Test op mobile responsive
5. Push naar GitHub Pages
