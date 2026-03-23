(function(){
var m=location.pathname.match(/^\/portfolio\/([^\/]+)/);
if(!m)return;
var s=m[1];
var C='https://cdn.prod.website-files.com/64ef52d4e63f78db8ad33967/';
var D={
'aquablu':{n:'Aquablu',f:'Marnix Stokvis & Marc van Zuylen',y:'2025',c:'Nederland',sc:'Duurzaamheid / Water',tl:'Duurzame wateroplossingen',url:'aquablu.com',img:C+'684ff440d3f2613701f63c3e_Aquablue%20portfolio.png',
d:'Aquablu werd in 2017 opgericht in Amsterdam en levert slimme waterstations die gezond, gefilterd drinkwater rechtstreeks uit de kraan aanbieden op kantoren, scholen en openbare ruimten. De systemen filteren, koelen en mineraliseren leidingwater tot drinkbaar water van hoge kwaliteit, waarmee de noodzaak voor plastic flessenwater volledig wordt ge\u00eblimineerd. Aquablu bespaart gemiddeld meer dan 90% CO2-uitstoot ten opzichte van traditioneel flessenwater en groeit snel in de Benelux en Duitsland. Met honderden ge\u00efnstalleerde locaties bij klanten als Shell, Heineken en Deloitte is Aquablu een bewezen speler in de zakelijke duurzaamheidsmarkt.'},
'brainial':{n:'Brainial',f:'Fedor Klinkenberg & Taco Hiddink',y:'2025',c:'Nederland',sc:'Software / Aanbestedingen',tl:'AI-software voor aanbestedingen',url:'brainial.com',img:C+'67e4567a6b24aa0a940cb63f_branial.jpg',
d:'Brainial is een Rotterdams AI-bedrijf opgericht in 2020 door Fedor Klinkenberg en Taco Hiddink, dat aanbestedingssoftware ontwikkelt voor bedrijven die regelmatig inschrijven op publieke en private tenders. Het platform automatiseert het schrijven van voorstellen op basis van bestaande documenten en bedrijfsinformatie, waardoor teams 60-80% minder tijd kwijt zijn aan offertes. Brainial groeide snel na een investering van Shoe Investments en telt inmiddels honderden klanten in sectoren als bouw, IT en facility management. Het bedrijf werkt actief samen met het netwerk van Shoe Investments om zijn salesstrategie te versnellen.'},
'leasy':{n:'Leasy',f:'Gregorio Gilardini & Alejandro Garay',y:'2022',c:'Spanje',sc:'Fintech / Auto Leasing',tl:'Transparante autolease voor consumenten',url:'leasy.com',img:C+'69893f8f856055bb422f22c2_DSC_6189.webp',
d:'Leasy is een Spaans fintech-platform dat autoleasen radicaal vereenvoudigt voor consumenten. Via een volledig digitale ervaring kunnen gebruikers in enkele minuten een leaseauto kiezen, configureren en direct rijden, zonder verborgen kosten, lange wachttijden of ingewikkelde contracten. Leasy richt zich op de Spaanse markt, waar autoleasing traditioneel complex en duur is, en biedt een transparant en eerlijk alternatief. Het bedrijf groeit snel dankzij sterke mond-tot-mondreclame en een schaalbare digitale propositie. Shoe Investments steunt Leasy als onderdeel van zijn internationale portefeuille in mobiliteitsinnovatie.'},
'anthropic':{n:'Anthropic',f:'Dario Amodei',y:'2021',c:'Verenigde Staten',sc:'Artificial Intelligence',tl:'AI-veiligheidsbedrijf achter Claude',url:'anthropic.com',img:'https://cecedeboon-png.github.io/shoe-investments-website/images/anthropic-icon.svg',
d:'Anthropic is een Amerikaans AI-veiligheidsbedrijf opgericht in 2021 door Dario Amodei, Daniela Amodei en voormalige OpenAI-onderzoekers. Het bedrijf ontwikkelt Claude, een van de meest geavanceerde en veilige large language models ter wereld. Anthropic combineert baanbrekend AI-onderzoek met een sterke focus op veiligheid en betrouwbaarheid. Het bedrijf heeft meer dan $7 miljard opgehaald en wordt gewaardeerd op meer dan $350 miljard, een van de hoogst gewaardeerde AI-bedrijven ter wereld. Shoe Investments participeert als LP in een fonds dat vroeg toegang bood tot Anthropic.'},
'mamas-maaltijden':{n:"Mama's Maaltijden",f:'Serdar Tolenaar, Rick Hageman & Henk Brussaard',y:'2019',c:'Nederland',sc:'Food / Maaltijden',tl:'Koelverse maaltijden',url:'mamasmaaltijden.nl',img:C+'6555ae75221ec0a6617fe6a8_Image_(10).png',
d:"Mama's Maaltijden is opgericht in 2012 en uitgegroeid tot marktleider in koelverse maaltijden in Nederland, met ruim 60.000 maaltijden die dagelijks worden bezorgd aan thuiszorgcli\u00ebnten en senioren via zorginstellingen, gemeenten en particulieren. Het bedrijf staat bekend om de hoge kwaliteit, smakelijkheid en betaalbaarheid van zijn producten. Naast de commerci\u00eble activiteiten heeft Mama's Maaltijden via de Stichting 'Iedereen verdient een Mama' een sterke sociale missie, waarbij kansen worden geboden aan kwetsbare jongeren uit de Randstad. Shoe Investments steunt zowel de ondernemerskracht als de maatschappelijke impact van het bedrijf."},
'apollo-lane':{n:'Apollo Lane',f:'Pieter Schoen & Diederik Ingen Housz',y:'2023',c:'Nederland',sc:'Investeringen',tl:'Investeringsvehikel',url:'',img:C+'698afabe07e43414ea6c41b3_appollo%20lane%20portfolio.png',
d:'Apollo Lane is een gezamenlijk investeringsvehikel van Pieter Schoen en Diederik Ingen Housz, opgericht om te investeren in snelgroeiende ondernemingen met internationaal potentieel. Via Apollo Lane combineert Shoe Investments de expertise van beide partners om kansen te identificeren die aansluiten bij hun gedeelde visie op ondernemen en groei. De samenwerking onderstreept de aanpak van Shoe Investments om niet alleen kapitaal maar ook kennis, netwerk en ondernemerservaring in te brengen bij portfoliobedrijven.'},
'carv':{n:'Carv',f:'Matthijs Metzemaekers & Barend Raaff',y:'2021',c:'Nederland',sc:'HR Tech / AI Recruitment',tl:'AI recruitment platform',url:'carv.com',img:C+'68e4f666d54bd090810713b0_carv.png',
d:'Carv is een Rotterdams HR Tech-bedrijf van Matthijs Metzemaekers en Barend Raaff. Het bedrijf positioneert zich als AI recruitment platform en helpt recruitmentteams met meerdere AI-tools binnen een platform. Daarmee ondersteunt Carv recruiters tijdens het wervingsproces, zodat repetitief werk afneemt en teams sneller en consistenter kunnen werken. Shoe Investments-medeoprichter Matthijs Metzemaekers is zelf co-founder van het bedrijf.'},
'loop':{n:'Loop',f:'Bob Hendrikx & Lonneke Westhoff',y:'2019',c:'Nederland',sc:'Duurzaamheid / Biobased',tl:'Biologisch afbreekbare doodskisten',url:'loop-biotech.com',img:C+'6555ae752666d124cef70362_Image_(9).png',
d:'Loop Biotech werd in 2020 opgericht door designer en bioloog Bob Hendrikx en Lonneke Westhoff met een duidelijke missie: de dood goed doen voor de aarde. Het bedrijf produceert volledig biologisch afbreekbare doodskisten, de Living Cocoon, gemaakt van mycelium (schimmelwortels) en organisch materiaal. De kist lost op in de grond binnen 45 dagen en verbetert tegelijkertijd de bodemkwaliteit. Loop produceert meer dan 150 kisten per maand en exporteert naar meer dan 25 landen, waaronder de VS, Duitsland en het VK. Het bedrijf won internationale prijzen en werd uitgebreid besproken in wereldmedia. De investering past in de ESG-strategie van Shoe Investments.'},
'revolut':{n:'Revolut',f:'Nik Storonsky',y:'2023',c:'Verenigd Koninkrijk',sc:'Fintech / Neo-bank',tl:'Europees fintech-platform',url:'revolut.com',img:C+'69894376c89284fcd9f59bd8_Revolut-02-business-appicon-FINAL.png',
d:'Revolut werd in 2015 opgericht in Londen door Nik Storonsky en Vlad Yatsenko en is uitgegroeid tot een van Europa\u2019s meest waardevolle fintechbedrijven met een waardering van $45 miljard (2024). Het platform biedt een alles-in-een financi\u00eble superapp met bancaire diensten, crypto, aandelenhandel, verzekeringen en internationale betalingen voor meer dan 50 miljoen klanten wereldwijd. Revolut ontving in 2024 eindelijk een Britse bankvergunning na een langdurig aanvraagproces. Shoe Investments investeerde in Revolut als onderdeel van zijn thesis rondom de digitalisering van financi\u00eble dienstverlening.'},
'ixxi':{n:'IXXI',f:'Erik-Jan Schreurs, Luc Hendriks & Thomas Beguin',y:'2018',c:'Nederland',sc:'Design / Woonaccessoires',tl:'Modulaire wanddecoratie',url:'ixxi.com',img:C+'668403b57f40406f31dd2964_Ixxi%20portfolio-min.png',
d:'IXXI is een Nederlands designmerk opgericht in 2006 dat een uniek modulair systeem van kaartjes en haakjes heeft ontwikkeld waarmee consumenten elke gewenste foto of wanddecoratie zelf kunnen samenstellen en aanpassen. De producten worden verkocht via eigen webshops, internationale retailers en B2B-partners in meer dan 30 landen. IXXI heeft een sterke merkidentiteit opgebouwd rondom persoonlijkheid en maatwerk en is populair bij zowel consumenten als bedrijven voor kantoorinterieur. Het bedrijf genereert consistente omzetgroei en heeft een solide positie in de Europese lifestyle-markt. Shoe Investments ziet groeipotentieel in verdere internationaliseringsstrategieen.'},
'grantific':{n:'Grantific',f:'Theodoor Rutgers',y:'2023',c:'Nederland',sc:'Software / Subsidies',tl:'Subsidieplatform voor ondernemers',url:'grantific.com',img:C+'698edae42df396cbe010c0df_logo%20social.png',
d:'Grantific is een innovatief Nederlands platform dat ondernemers en organisaties helpt bij het vinden, aanvragen en beheren van subsidies en overheidsfinancieringen. Het platform maakt gebruik van slimme matchingalgoritmen om de meest relevante subsidiemogelijkheden te identificeren en begeleidt gebruikers stap voor stap door het aanvraagproces. Jaarlijks gaat er in Nederland alleen al meer dan 4 miljard euro aan subsidies verloren door gebrek aan kennis of capaciteit bij ondernemers. Grantific pakt dit probleem op een schaalbare manier aan en heeft al honderden bedrijven geholpen meer financiering te realiseren.'},
'bright-bird':{n:'Bright Bird',f:'Camiel Kuik & Claris Schoen',y:'2022',c:'Nederland',sc:'EdTech / Kinderen',tl:'Educatief platform voor kinderen',url:'brightbird.app',img:C+'673c32d94a9912bc7e61c42d_bridge%20bird.png',
d:'Bright Bird is een Nederlands educatief platform opgericht in 2022 door Camiel Kuik en Claris Schoen (dochter van Pieter Schoen). Het platform richt zich op kinderen in de basisschoolleeftijd en combineert hoogwaardige educatieve content met gamification-elementen om leren leuk en effectief te maken. De content is afgestemd op de Nederlandse onderwijscurricula en biedt ouders en onderwijzers inzicht in voortgang en leerstijlen. Bright Bird past in de bredere thesis van Shoe Investments rondom EdTech en de digitalisering van leerervaring voor kinderen.'},
'airwallex':{n:'Airwallex',f:'Jack Zhang',y:'2023',c:'Australi\u00eb',sc:'Fintech / Betalingen',tl:'Grensoverschrijdende betalingen',url:'airwallex.com',img:C+'69893e2522f2f82b48f964b3_f45b90acb1ec4000af3f827696a89359.png',
d:'Airwallex werd in 2015 opgericht in Melbourne door Jack Zhang en drie medeoprichters met als doel internationale betalingen betaalbaar en snel te maken voor bedrijven. Het platform stelt ondernemingen in staat om wereldwijd te betalen, te innen en te opereren zonder de hoge kosten van traditionele banken. Airwallex bedient meer dan 100.000 bedrijven in 150+ landen en verwerkt miljarden dollars aan transacties per jaar. Met een waardering van circa $5,5 miljard (2024) en kantoren in 20 landen is Airwallex een van de snelst groeiende fintechs ter wereld. Shoe Investments nam een positie in als onderdeel van een internationale groeistrategie.'},
'liquido-doro':{n:"Liquido d'Oro",f:'Ridder Drost',y:'2018',c:'Nederland',sc:'Food & Beverage / Olijfolie',tl:'Premium Italiaanse olijfolie',url:'liquidodoro.com',img:C+'68e4f55ff11e2b0a6f20c42d_LIQUIDO.png',
d:"Liquido d'Oro is een premium olijfoliemerk opgericht door Ridder Drost dat authentieke, koudgeperste extra vierge olijfolie rechtstreeks van kleine, gecertificeerde Italiaanse familieboerderijen aanbiedt aan consumenten en de horeca. Het merk positioneert zich in het topsegment van de markt en onderscheidt zich door volledige transparantie over herkomst, oogstjaar en kwaliteitscontrole. De producten worden verkocht via een directe webshop, geselecteerde retail en restaurants. Liquido d'Oro groeit door een toenemende consumentenvraag naar authenticiteit en kwaliteit in het voedingssegment."},
'zkr':{n:'Zkr.',f:'Khalid Maatoug & Tarik Joemmanbaks',y:'2022',c:'Nederland',sc:'Fintech / Krediet',tl:'Kredietoplossingen voor consumenten',url:'zkr.nl',img:C+'658d73ecb3560907796cfa31_zkr.%20oprichters.png',
d:'Zkr. (spreek uit: zeker) is een Nederlands fintech-bedrijf opgericht in 2020 dat consumenten helpt bij het opbouwen en verbeteren van hun kredietprofiel. Via een eenvoudige app kunnen gebruikers kleine kredieten afsluiten en tijdig terugbetalen, waarmee ze een positieve kredietgeschiedenis opbouwen die toegang geeft tot betere financi\u00eble producten. Zkr. richt zich specifiek op de doelgroep die moeite heeft toegang te krijgen tot traditioneel bankproducten en biedt zo financi\u00eble inclusie via technologie. Het bedrijf is actief in Nederland en groeit snel door een combinatie van sterke retentie en mond-tot-mondreclame.'},
'replit':{n:'Replit',f:'Amjad Masad & Haya Odeh',y:'2023',c:'Verenigde Staten',sc:'Developer Tools / AI',tl:'Online coding platform met AI',url:'replit.com',img:C+'68e4ed206fdc64594470c869_replit.png',
d:'Replit werd opgericht in 2016 en is uitgegroeid tot een van de populairste online ontwikkelomgevingen ter wereld, met meer dan 35 miljoen gebruikers in 200+ landen. Het platform stelt iedereen in staat om code te schrijven, te testen en te deployen direct vanuit de browser, zonder installatie. Met de integratie van krachtige AI-functies, waaronder Ghostwriter en Replit Agent, kunnen gebruikers in minuten complete applicaties bouwen via natural language. Replit democratiseert softwareontwikkeling en verlaagt de drempel voor een nieuwe generatie makers en ondernemers. Met een waardering van ruim $1,1 miljard (2023) is Replit een van de meest invloedrijke developer-platforms van dit moment.'},
'creditchecken':{n:'Creditchecken',f:'Tarik Joemmanbaks',y:'2020',c:'Nederland',sc:'Fintech / Kredietinformatie',tl:'Inzicht in je kredietwaardigheid',url:'creditchecken.nl',img:C+'658d7d154d452c3f9c814126_oprichter.jpg',
d:'Creditchecken is een Nederlands fintech-platform opgericht door Tarik Joemmanbaks, tevens medeoprichter van portfoliobedrijf Zkr., dat consumenten en kleine ondernemers helder inzicht geeft in hun kredietwaardigheid. Via het platform kunnen gebruikers hun BKR-registratie inzien, begrijpen hoe scores worden berekend en concrete stappen ondernemen om hun kredietprofiel te verbeteren. Creditchecken is complementair aan Zkr. en versterkt de positie van Shoe Investments in de Nederlandse consumer credit stack. Het platform bereikt tienduizenden gebruikers en groeit door slimme SEO en partnerschappen met financieel adviseurs.'},
'equalture':{n:'Equalture',f:'Fleur & Charlotte Melkert',y:'2019',c:'Nederland',sc:'HR Tech / Inclusie',tl:'Eerlijker werven via gamificatie',url:'equalture.com',img:C+'6555ae7436161867d2702cae_Image_(8).png',
d:'Equalture werd in 2018 opgericht door de Rotterdamse zussen Fleur en Charlotte Melkert met als doel wervingsprocessen fundamenteel eerlijker te maken. In plaats van CV\u2019s selecteert het platform kandidaten op basis van neurowetenschappelijke games die cognitieve vaardigheden en persoonlijkheidskenmerken meten, volledig losgekoppeld van afkomst, leeftijd of geslacht. Zo kunnen bedrijven diverse teams samenstellen op basis van objectieve data. Equalture werkt voor klanten als Randstad, Ahold Delhaize en de NS en heeft meer dan 200 organisaties geholpen hun hiring te verbeteren. Het bedrijf won de Deloitte Fast 50 award en breidt uit naar internationale markten.'},
'focus':{n:'Focus',f:'Thijs van de Poll & Jard van Ingen',y:'2021',c:'Nederland',sc:'AI / Patent Intelligence',tl:'AI-gedreven patent intelligence',url:'focus.ai',img:C+'658d53041dc9c3caf9e77597_focus%20profiel.png',
d:'Focus is een Nederlands deep-tech bedrijf opgericht door Thijs van de Poll en Jard van Ingen dat wereldwijde patentdata analyseert met behulp van machine learning om de toekomst van technologische innovatie te voorspellen. Het platform helpt R&D-teams, investeerders en overheden om vroeg te signaleren welke technologie\u00ebn opkomend zijn, wie de leidende innovatoren zijn en waar de witte vlekken liggen in de competitieve landscape. Focus won de Nesta Desirable Future Prize en is actief voor klanten bij multinationals, venture capital-firma\u2019s en kennisinstellingen. De investering past bij Shoe Investments\u2019 focus op data-gedreven B2B-software.'},
'colect':{n:'Colect',f:'Nick Andriesse',y:'2018',c:'Nederland',sc:'Fashion Tech / B2B',tl:'B2B fashion platform',url:'colect.io',img:C+'6555ae75959448b5e5dcfb7d_Image_(11).png',
d:'Colect werd opgericht in 2011 door Nick Andriesse en ontwikkelde een toonaangevend B2B-platform dat modemerken helpt hun collecties digitaal te presenteren, orderprocesen te digitaliseren en inkopers wereldwijd te bereiken. Na een fusie met het Franse bedrijf Le New Black in 2021 heeft Colect zijn positie in de Europese modemarkt aanzienlijk versterkt. Het gecombineerde platform bedient honderden modieuze merken en duizenden inkopers en heeft kantoren in Amsterdam en Parijs. Colect is een voorbeeld van Shoe Investments\u2019 betrokkenheid bij digitale transformatie in traditionele sectoren.'},
'swishfund':{n:'Swishfund',f:'Pieter Schoen & Bart-Jan van Genderen',y:'2019',c:'Nederland',sc:'Fintech / MKB Financiering',tl:'Snelle financiering voor het MKB',url:'swishfund.nl',img:C+'68e4ee9a5b5c69653bcb5e36_swishfund.png',
d:'Swishfund werd in 2014 opgericht door Pieter Schoen en Bart-Jan van Genderen als reactie op de moeizame kredietverlening door banken aan het MKB na de financi\u00eble crisis. Het platform biedt werkkapitaalfinancieringen van 10.000 euro tot 250.000 euro aan kleine en middelgrote bedrijven, met een beslissing binnen 24 uur en uitbetaling binnen 48 uur. Swishfund heeft inmiddels meer dan 150 miljoen euro aan financieringen verstrekt aan duizenden Nederlandse ondernemers. Het bedrijf onderscheidt zich door een volledig digitale aanvraag, transparante prijsstelling en persoonlijke service. Als Shoe Investments eigen onderneming belichaamt Swishfund de ondernemende cultuur van de holding.'},
'dealroom':{n:'Dealroom',f:'Yoram Wijngaarde',y:'2019',c:'Nederland',sc:'Data / Startup Intelligence',tl:'Europese startup data',url:'dealroom.co',img:C+'6555ae74b5abaee0b8205708_Image_(7).png',
d:'Dealroom werd in 2013 opgericht door Yoram Wijngaarde in Amsterdam en is uitgegroeid tot het toonaangevende data- en intelligentieplatform voor het Europese startup- en venture-ecosysteem. Het platform biedt uitgebreide, actuele informatie over meer dan 1 miljoen startups, scale-ups, investeerders en fondsen wereldwijd. Dealroom wordt gebruikt door meer dan 100 overheden, honderden VC-fondsen en leading corporates om de beste investeringskansen te identificeren en ecosysteemrapportages te maken. Het platform is de standaard referentie geworden voor Europees tech-nieuws en -data, gebruikt door media als TechCrunch, Bloomberg en The Economist.'},
'creative-clicks':{n:'Creative Clicks',f:'Ramon van den Bulk & Raymond Kokken',y:'2017',c:'Nederland',sc:'Digital Marketing / Ad Tech',tl:'Performance advertising',url:'creativeclicks.com',img:C+'6555ae75d2fd263fd6eefc8a_CC.jpeg',
d:'Creative Clicks werd in 2010 opgericht door Ramon van den Bulk en Raymond Kokken en is een van de vroegste investeringen van Shoe Investments, daterend uit 2012. Het bedrijf is uitgegroeid tot een internationaal digital marketing- en performance advertising-bureau met activiteiten in Europa, Azi\u00eb, Afrika en de Amerika\u2019s. Creative Clicks specialiseert zich in app-marketing, lead generation en programmatic advertising voor klanten in sectoren als gaming, finance en e-commerce. Met teams in meerdere landen en honderden adverteerderrelaties belichaamt Creative Clicks de internationale groeistrategie die Shoe Investments vroeg in zijn portefeuille nastreefde.'},
'mega':{n:'Mega',f:'Micheal Corhay & Thomas Coune',y:'2015',c:'Nederland',sc:'Energie / Duurzaam',tl:'Groene energieleverancier',url:'',x:true,img:C+'68e4f2a55b0a2743ea89524f_MEGA%20EXIT.png',
d:'Mega was een Nederlandse energieleverancier opgericht in 2009 die zich specialiseerde in groene energie, met meer dan 70% van het stroomaanbod afkomstig uit lokale hernieuwbare bronnen. Het bedrijf groeide snel in de Nederlandse energiemarkt door een combinatie van scherpe tarieven, heldere communicatie en een duurzame propositie. Mega telde op het hoogtepunt meer dan 200.000 klanten. Shoe Investments investeerde als groeikapitaalverstrekker en realiseerde een succesvolle exit in 2025 door de verkoop van zijn belang aan een strategische partij.'},
'isolatiespecialist':{n:'Isolatiespecialist',f:'Marc & Margreet Anker',y:'2017',c:'Nederland',sc:'Bouw / Isolatie',tl:'Isolatiediensten voor woningen',url:'',x:true,img:C+'6555ae743c2f1a57748e219a_iso.png',
d:'Isolatiespecialist was een Nederlands bedrijf opgericht door Marc en Margreet Anker dat isolatiediensten aanbood aan woningeigenaren en huurders. In een periode van stijgende energieprijzen en groeiende aandacht voor verduurzaming groeide het bedrijf sterk door vraag naar spouwmuurisolatie, dakisolatie en vloerisolatie. Shoe Investments investeerde om de groei te versnellen en realiseerde een succesvolle exit in 2023 na een strategische overname door een grotere partij in de bouw- en duurzaamheidssector.'},
'charlie-temple':{n:'Charlie Temple',f:'Leon Planken',y:'2016',c:'Nederland',sc:'Retail / Brillen',tl:'Online brillenretailer',url:'',x:true,img:C+'6555ae7442459ecd41f3e492_Charlie_exit.jpeg',
d:'Charlie Temple werd opgericht door Leon Planken als een innovatieve online brillenretailer die het bestelproces voor brildragers radicaal vereenvoudigde door een unieke thuispasservice aan te bieden: klanten konden vijf frames thuis uitproberen voor ze een keuze maakten. Het bedrijf groeide snel dankzij een sterk digitaal merk, scherpe prijzen en uitstekende klanttevredenheid. Charlie Temple was een vroeg voorbeeld van direct-to-consumer brillenverkoop in Nederland. Shoe Investments begeleidde de groeifase en realiseerde een succesvolle exit in 2019.'}
};

var d=D[s];
if(!d)return;

// Set page title
document.title=d.n+' \u2014 Shoe Investments';

// Set h1 in hero
document.querySelectorAll('h1').forEach(function(h){h.textContent=d.n});

// Set tagline in hero (replace placeholder)
var st=d.x?'Exit':'Huidig';
document.querySelectorAll('*').forEach(function(e){
if(e.children.length===0){
var t=e.textContent.trim();
if(t==='Company tagline goes here'){
e.textContent=d.tl;
e.style.cssText='font-size:20px;color:rgba(255,255,255,.85);margin:8px 0 16px;display:block'
}
if(t==='This is some text inside of a div block.'){
e.style.display='none'
}
}
});

// Add badge + sector in hero area after tagline
var h1=document.querySelector('h1');
if(h1){
var heroMeta=document.createElement('div');
heroMeta.style.cssText='display:flex;align-items:center;gap:12px;margin-top:12px';
heroMeta.innerHTML='<span style="background:'+(d.x?'#dc3545':'#1a5276')+';color:#fff;padding:4px 14px;border-radius:4px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px">'+st+'</span>'
+'<span style="color:rgba(255,255,255,.7);font-size:14px;text-transform:uppercase;letter-spacing:1px">'+d.sc+'</span>';
// Find the parent section to append after existing content
var heroParent=h1.parentElement;
if(heroParent)heroParent.appendChild(heroMeta);
}

// Find the main content wrapper (first section after hero with light/white background)
// We'll create a complete white content section and inject it
var mainContent=document.createElement('div');
mainContent.style.cssText='background:#fff;padding:48px 5%;max-width:1200px;margin:0 auto;box-sizing:border-box';
mainContent.innerHTML=
// Info bar - 4 columns
'<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;padding-bottom:40px;border-bottom:1px solid #e5e7eb;margin-bottom:40px">'
+'<div><span style="display:block;color:#1a5276;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">FOUNDERS</span><span style="font-size:15px;color:#1a2b4a;font-weight:500">'+d.f+'</span></div>'
+'<div><span style="display:block;color:#1a5276;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">SECTOR</span><span style="font-size:15px;color:#1a2b4a;font-weight:500">'+d.sc+'</span></div>'
+'<div><span style="display:block;color:#1a5276;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">STATUS</span><span style="font-size:15px;color:#1a2b4a;font-weight:500">'+(d.x?'Exit':'Huidig portfolio')+'</span></div>'
+'<div><span style="display:block;color:#1a5276;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">LAND</span><span style="font-size:15px;color:#1a2b4a;font-weight:500">'+d.c+'</span></div>'
+'</div>'
// Over [Company] section with description + image
+'<div style="display:flex;gap:48px;align-items:flex-start;flex-wrap:wrap">'
+'<div style="flex:1;min-width:300px">'
+'<h3 style="color:#1a5276;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 20px">OVER '+d.n.toUpperCase()+'</h3>'
+'<p style="font-size:16px;line-height:1.8;color:#333;margin:0 0 28px">'+d.d+'</p>'
+(d.url?'<a href="https://'+d.url+'" target="_blank" style="display:inline-block;border:2px solid #1a2b4a;color:#1a2b4a;padding:12px 28px;font-size:14px;font-weight:600;text-decoration:none;text-transform:uppercase;letter-spacing:1px;transition:all .2s">BEZOEK WEBSITE &rarr;</a>':'')
+'</div>'
+(d.img?'<div style="flex:0 0 320px;max-width:100%"><img src="'+d.img+'" alt="'+d.n+'" style="width:100%;max-height:280px;border-radius:8px;object-fit:cover"></div>':'')
+'</div>';

// Find the hero section and insert the white content after it
var heroSection=null;
var sections=document.querySelectorAll('section,[class*="section"],[class*="hero"]');
sections.forEach(function(sec){
if(sec.querySelector('h1'))heroSection=sec;
});

if(heroSection&&heroSection.parentNode){
heroSection.parentNode.insertBefore(mainContent,heroSection.nextSibling);
}else if(h1){
// Fallback: insert after the h1's grandparent
var target=h1.parentElement;
if(target&&target.parentElement){
target=target.parentElement;
target.parentNode.insertBefore(mainContent,target.nextSibling);
}
}

// Hide any remaining placeholder sections below
var found=false;
document.querySelectorAll('section,[class*="section"]').forEach(function(sec){
if(sec===mainContent||sec.contains(mainContent))return;
if(found){
var txt=sec.textContent.trim();
if(txt.indexOf('This is some text')>-1||txt.indexOf('Company tagline')>-1||txt.length<50){
sec.style.display='none';
}
}
if(sec.querySelector('h1'))found=true;
});

// Style existing "Bezoek website" links if they exist in the template
document.querySelectorAll('a').forEach(function(a){
if(a.textContent.indexOf('Bezoek website')>-1&&!mainContent.contains(a)){
if(d.url){
a.href='https://'+d.url;a.target='_blank';
}
a.style.display='none'; // Hide template button, we have our own
}
});
})();
