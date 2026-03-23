(function(){
var p=location.pathname;

// ===== ESG: Replace Pieter photo with ESG-related image =====
if(p.indexOf('esg')>-1){
var esgImg='https://cdn.prod.website-files.com/64eccea52a843067f3f921f5/64f08d78d2578cea84424397_Rectangle%20(17).png';
document.querySelectorAll('.si-founder-photo').forEach(function(ph){
ph.style.cssText="background-image:url('"+esgImg+"')!important;background-size:cover!important;background-position:center!important;min-height:320px!important;border-radius:8px!important";
});
}

// ===== ACTUEEL: Add article links =====
if(p.indexOf('actueel')>-1){
var links=[
'https://www.emerce.nl/wire/pieter-schoen-investeert-vrolijk-door-miljoenen-euros-aanbestedingssoftware-brainial',
'https://www.forbes.com/sites/jenniferkitepowell/2024/02/20/this-is-how-one-company-uses-global-patent-data-to-see-the-future/',
'https://www.quotenet.nl/zakelijk/a46900696/mamas-maaltijden-vood-pieter-schoen/',
'https://www.telegraaf.nl/financieel/462116134/nederlands-techbedrijf-focus-wint-prestigieuze-ai-prijs',
'https://www.quotenet.nl/financien/investeren/a45560311/pieter-schoen-focus-vaningen-thijs-van-de-poll-investeren-startup/',
'https://www.businessinsider.nl/loop-biotech-levende-doodskist-haalt-1-miljoen-op-nieuwe-versie-kist-goedkoper/',
'https://fashionunited.nl/nieuws/business/colect-en-le-new-black-fuseren-om-samen-het-toonaangevende-digitale-wholesaleplatform-te-vormen-in-europa-en-de-vs/2023092658620',
'https://www.quotenet.nl/zakelijk/a44061539/pieter-schoen-investeert-euro1-miljoen-in-maaltijdenmaker-mijn-kinderen-worden-met-liefde-proefkonijn/',
'https://oplossinggroningen.nl/'
];
document.querySelectorAll('.si-portfolio-card').forEach(function(card,i){
if(links[i]){
card.style.cursor='pointer';
card.onclick=function(){window.open(links[i],'_blank')};
}
});
}

// ===== FONDSEN: Hover descriptions =====
if(p.indexOf('fondsen')>-1){
var fundDesc={
'Goldman Sachs':'Goldman Sachs is een van de meest prestigieuze investeringsbanken ter wereld.',
'Sky9 Capital':'Sky9 Capital is een venture capital-fonds gericht op technologiebedrijven in China en Azi\u00eb.',
'Greyhound Capital':'Greyhound Capital investeert in Europese tech-bedrijven in de groeifase.',
'Archipelago Capital Partners':'Archipelago Capital Partners is een Nederlands investeringsfonds gericht op groeikapitaal.',
'Integra Partners':'Integra Partners is een investeringsfonds gericht op healthcare en technologie in Zuidoost-Azi\u00eb.',
'ALS Investment Fund':'ALS Investment Fund richt zich op investeringen in innovatieve oplossingen voor ALS-onderzoek.',
'Forbion':'Forbion is een toonaangevend Europees venture capital-fonds in life sciences en biotechnologie.',
'Knight Capital':'Knight Capital is een Nederlands investeringsfonds gericht op small- en midcap-bedrijven.',
'Newport Capital':'Newport Capital investeert in snelgroeiende Nederlandse bedrijven.',
'Wealth Management Partners':'WMP is een Nederlands vermogensbeheerder met focus op private equity co-investeringen.',
'Waterland Private Equity':'Waterland is een onafhankelijke private equity-investeerder met een focus op groei.',
'Parcom':'Parcom Capital is een Nederlandse private equity-investeerder met meer dan 35 jaar ervaring.',
'Nordian Capital Partners':'Nordian Capital Partners investeert in winstgevende Nederlandse mkb-bedrijven.',
'Slingshot':'Slingshot Ventures is een venture capital-fonds gericht op vroege-fase technologiebedrijven.',
'Bencis Capital Partners':'Bencis Capital Partners investeert in middelgrote Benelux-bedrijven.',
'Gilde Buy Out Partners':'Gilde is een van de oudste en meest ervaren buyout-investeerders in de Benelux.',
'Marktlink Investment Partners':'Marktlink Investment Partners investeert in mkb-bedrijven met groeipotentieel.',
'CVC Capital Partners':'CVC is een van de grootste private equity-investeerders ter wereld.',
'Soci\u00e9t\u00e9 G\u00e9n\u00e9rale':'Soci\u00e9t\u00e9 G\u00e9n\u00e9rale is een van de grootste Europese financi\u00eble dienstverleners.'
};
document.querySelectorAll('.si-portfolio-card').forEach(function(card){
var h=card.querySelector('h3,h4');
if(!h)return;
var n=h.textContent.trim();
// Better logo fill
var img=card.querySelector('.si-portfolio-card-img');
if(img){
img.style.cssText+='display:flex;align-items:center;justify-content:center;padding:20px;';
}
// Add hover tooltip
for(var k in fundDesc){
if(n.indexOf(k)>-1||n.indexOf(k.split(' ')[0])>-1){
var tip=document.createElement('div');
tip.textContent=fundDesc[k];
tip.style.cssText='display:none;position:absolute;bottom:0;left:0;right:0;background:rgba(10,30,60,.92);color:#fff;padding:16px;font-size:13px;line-height:1.5;z-index:10';
card.style.position='relative';
card.style.overflow='hidden';
card.appendChild(tip);
(function(t){
card.onmouseenter=function(){t.style.display='block'};
card.onmouseleave=function(){t.style.display='none'};
})(tip);
break;
}
}
});
}

// ===== PORTFOLIO: Fix filter buttons + card metadata =====
if(p.indexOf('/portfolio')>-1&&!p.match(/\/portfolio\/.+/)){
// Fix filter buttons
var filterBtns=document.querySelectorAll('[class*="filter"],[class*="tab"]');
filterBtns.forEach(function(btn){
var t=btn.textContent.trim().toLowerCase();
if(t==='alle'||t==='huidig'||t==='exit'){
btn.style.cursor='pointer';
btn.onclick=function(){
var filter=t;
filterBtns.forEach(function(b){
var bt=b.textContent.trim().toLowerCase();
if(bt==='alle'||bt==='huidig'||bt==='exit'){
b.style.cssText=bt===filter?'background:#1a5276;color:#fff;padding:8px 20px;border-radius:4px;cursor:pointer;font-weight:600;border:none':'background:transparent;color:#1a2b4a;padding:8px 20px;border-radius:4px;cursor:pointer;font-weight:500;border:1px solid #ddd';
}
});
document.querySelectorAll('.si-portfolio-card').forEach(function(card){
var badge=card.querySelector('.si-badge-exit,.si-badge-current,[class*="badge"]');
var isExit=badge&&(badge.textContent.trim()==='Exit'||badge.className.indexOf('exit')>-1);
if(filter==='alle')card.style.display='';
else if(filter==='huidig')card.style.display=isExit?'none':'';
else if(filter==='exit')card.style.display=isExit?'':'none';
});
};
// Style initial state
if(t==='alle')btn.style.cssText='background:#1a5276;color:#fff;padding:8px 20px;border-radius:4px;cursor:pointer;font-weight:600;border:none';
else btn.style.cssText='background:transparent;color:#1a2b4a;padding:8px 20px;border-radius:4px;cursor:pointer;font-weight:500;border:1px solid #ddd';
}
});

// Fix card metadata ordering
document.querySelectorAll('.si-portfolio-card').forEach(function(card){
var metas=card.querySelectorAll('.si-portfolio-meta');
metas.forEach(function(m){
m.style.cssText='font-size:13px;color:#666;margin-top:8px;line-height:1.6';
});
// Fix Exit badge size
var exitBadge=card.querySelector('.si-badge-exit');
if(exitBadge){
exitBadge.style.cssText='background:#dc3545;color:#fff;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;display:inline-block';
}
// Fix card image sizing
var img=card.querySelector('.si-portfolio-card-img');
if(img){
img.style.cssText+='background-size:contain;background-position:center;';
}
});
}

// ===== TEAM: Advisors section =====
if(p.indexOf('team')>-1){
var advisors=['Erik Schmit','Matthijs Metzemaekers'];
var advisorCards=[];
document.querySelectorAll('.si-portfolio-card').forEach(function(card){
var h=card.querySelector('h4');
if(!h)return;
var n=h.textContent.trim();
if(advisors.indexOf(n)>-1){
advisorCards.push(card);
}
});
if(advisorCards.length>0){
// Find parent grid
var grid=advisorCards[0].parentElement;
if(grid){
// Create advisors heading
var advHeading=document.createElement('h2');
advHeading.textContent='Advisors';
advHeading.style.cssText='font-size:32px;font-weight:700;color:#0f2137;margin:60px 0 8px;width:100%';
var advSub=document.createElement('p');
advSub.textContent='Externe experts die met hun kennis en ervaring Shoe Investments versterken.';
advSub.style.cssText='font-size:16px;color:#666;margin:0 0 32px;width:100%';
// Create advisor grid
var advGrid=document.createElement('div');
advGrid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:24px;margin-bottom:40px';
advisorCards.forEach(function(card){
card.parentElement.removeChild(card);
advGrid.appendChild(card);
});
// Insert after the main grid
grid.parentNode.insertBefore(advHeading,grid.nextSibling);
grid.parentNode.insertBefore(advSub,advHeading.nextSibling);
grid.parentNode.insertBefore(advGrid,advSub.nextSibling);
}
}
}
})();
