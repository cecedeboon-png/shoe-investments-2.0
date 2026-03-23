# Shoe Investments 2.0

## Wat is gebouwd

De homepage (index.html), CSS design system (css/style.css), en JS (js/main.js) zijn volledig gebouwd met:
- Instrument Serif + DM Sans typografie
- Near-black (#060608) achtergrond met warm goud (#c9a96e) accent
- NL/EN taalwisselaar (werkend via localStorage)
- Scroll-reveal animaties
- Portfolio filter tabs
- Responsive layout

## Wat jij (Claude Code) nog moet bouwen

Gebruik het design system uit css/style.css en de patronen uit index.html om deze pagina's te maken:

### 1. portfolio.html — Volledige investeringenpagina

Drie tabs: "Direct Portfolio" / "Via Funds & SPVs" / "Fund Partners"

**Direct Portfolio** — gebruik portfolio-card component voor:
- Aquablu (duurzame wateroplossingen)
- Brainial (AI-software voor aanbestedingen)
- Carv (AI recruitment platform)
- Colect (B2B e-commerce platform)
- Creative Clicks (digital performance marketing, €80M+ revenue)
- Creditchecken (kredietwaardigheid inzicht)
- Dealroom (startup/VC data platform)
- Equalture (game-based assessment)
- Focus (AI patent intelligence)
- Grantific (subsidieplatform)
- IXXI (modulaire wanddecoratie, 30+ landen)
- Loop (biologisch afbreekbare doodskisten)
- Mama's Maaltijden (marktleider koelverse maaltijden)
- Swishfund (MKB-financiering)
- Zkr. (kredietoplossingen)
- Bright Bird (educatief platform)
- Liquido d'Oro (premium olijfolie)
- Apollo Lane (investeringsvehikel Pieter Schoen)
- Mega (retail)

**Via Funds & SPVs** — grotere kaarten voor:
- Anthropic (AI safety, via SPV)
- Revolut (fintech, via SPV)
- Airwallex (payments, via fund)
- Replit (AI coding, via fund)
- Leasy (auto-lease, via SPV)

**Fund Partners** — kaarten met regio tags:
- Insiders Ventures (Europe, AI/Tech)
- Sky9 Capital MVP Fund II & Fund V (Asia, AI/Tech)
- Slingshot Ventures II & III (Europe, Tech)
- Greyhound Capital Partners & Technology (Europe, Tech)
- Forbion Growth Fund & Capital IV/V (Europe, Life Sciences)
- Archipelago Asia Focus Fund I & II (Asia, Growth)
- Integra I & II (Europe, Buyout)
- ALS I-VI (Europe, Mixed)
- WMP Global Secondaries & PE Pool I/II (Global, Secondaries)

### 2. team.html — Team pagina

Gebruik een clean grid van team kaarten. Haal foto's van Webflow CDN (bestaande URLs uit de originele repo).

**Kernteam:**
- Pieter Schoen — Founder. "Entrepreneur with a family legacy dating back to 1722. Founded NLE, the 4th largest energy company in the Netherlands. Now investing in the next generation of builders."
- Lodewijk van der Heyden — CFO. "15 years at Siemens across Europe. Former CFO of Swishfund. Erasmus University."
- Tim Engels — Investment Manager. "Former PwC Corporate Finance. VU Amsterdam & Erasmus University."
- Koen de Vrij — Investment Manager. "Tax Law (Leiden) & Econometrics (Erasmus). Since 2021."
- Pepijn van der Leije — Investment Manager. "Responsible for dealflow. Econometrics (Erasmus). Former data scientist."
- Laurens van Hillegersberg — Investment Analyst. "Law & Business Administration, Master Financial Economics (Erasmus)."
- Ronald van der Heide — Venture Partner. "20 years in PE & M&A. Former Nordian Capital, Rabo Capital, KPMG CF London."
- Claris Kuik — Liquidity & Asset Management. "Former NLE. Business Economics (Hogeschool Rotterdam)."
- Vincent van der Stap — Finance & Control. "30+ years experience. Former PolyGram, IKEA, Raet. CFO at Colect and IXXI."
- Wilma van Altena — Financial Controller. "20+ years financial services. Certified Compliance Officer."
- Lisette Barendregt — Office Manager
- Diana Smit — Personal Assistant to Pieter

**Advisors:**
- Erik Schmit — "25+ years international SaaS executive. Operating partner for portfolio SaaS companies."
- Matthijs Metzemaekers — "Co-founder of Carv.com. Former exits with Harver and Gapstars. Advisor for SaaS portfolio."

### 3. about.html — Over Ons

Drie secties:
1. Heritage — Pieter Schoen verhaal (1722, NLE, Erasmus)
2. Strategy — Drie pijlers uitgelegd
3. Evergreen — Geen exit druk, lange termijn partner

### 4. contact.html — Contact

Twee kolommen:
- Links: "For Fund Managers — Discuss LP commitments" + "For Entrepreneurs — Pitch your company"
- Rechts: contactformulier (naam, email, bericht) of directe contactinfo

Contactgegevens: info@shoeinvestments.nl, +31 6 11210386, Rotterdam

### 5. Overige pagina's (lagere prioriteit)

- esg.html — kort, modern
- stage.html → careers.html — stage-informatie

## Design regels

- Gebruik ALTIJD de CSS variabelen uit style.css
- Elke tekst krijgt data-en en data-nl attributen
- Gebruik de .reveal class voor scroll animaties
- Gebruik de .section en .container classes voor layout
- Portfolio kaarten gebruiken de Webflow CDN URLs voor bestaande bedrijfslogo's
- Nav en footer zijn identiek aan index.html (kopieer ze)

## Foto URLs (van de originele site, nog steeds actief op Webflow CDN)

Team foto's:
- Pieter: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/652e1d2bc2b0e3f907078295__DSC0101.JPG
- Lodewijk: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/67d1a5dd310a10b00ccc6ae1_lodewijk_banner-min.png
- Tim: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/65cf53b7a95d53752a8dc175_Tim%20Engels%20(1).jpg
- Laurens: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/67a72b72aa234d97b18ad443_Group%20143.png
- Koen: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae75af56923ad344ca06_Koen_juist-min.jpeg
- Pepijn: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae77844666e48afe69d1_Rectangle_67.png
- Ronald: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae7649c81f6a0d4348a4_Ronald_juist.jpeg
- Claris: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae75dd76f8f1a8327af3_Claris_juist-min.jpeg
- Vincent: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae75777565cf46f102e2_vincent_juist-min.jpeg
- Wilma: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae7657c50e9f4c570eb7_Wilma_juist_juist-min.jpeg
- Diana: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae7549c81f6a0d43476a_Diana_juist-min.jpeg
- Lisette: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae74ad9b3bdd8df87632_Lisette_juist-min.jpeg
- Erik: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/66cdb6ec228b746915ce31b1_SCHMIT.png
- Matthijs: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/658c2941d3207b2ef97bf459_Matthijs.jpg

Portfolio logo's:
- Aquablu: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/684ff440d3f2613701f63c3e_Aquablue%20portfolio.png
- Brainial: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/67e4567a6b24aa0a940cb63f_branial.jpg
- Carv: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/68e4f666d54bd090810713b0_carv.png
- Colect: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae75959448b...
- Creative Clicks: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/652d019f192ba076b04cb88c_Rectangle%2034.png
- Dealroom: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/652d01a0c5dd1735ccb7cd17_Rectangle%2035.png
- Equalture: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/6555ae7436161867d2702cae_Image_(8).png
- Revolut: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/69894376c89284fcd9f59bd8_Revolut-02-business-appicon-FINAL.png
- Airwallex: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/69893e2522f2f82b48f964b3_f45b90acb1ec4000af3f827696a89359.png
- Replit: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/68e4ed206fdc64594470c869_replit.png
- Leasy: https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/69893f8f856055bb422f22c2_DSC_6189.webp
