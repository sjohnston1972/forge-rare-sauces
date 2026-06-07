const SAUCES = [
  {
    id: "scottiglia",
    name: "Salsa di Scottiglia",
    sub: "The Hunter's Many-Meat Ragù",
    origin: "Casentino & Val di Chiana",
    province: "Arezzo",
    century: "16th century",
    rarity: 4,
    pairs: "Pappardelle or thick maccheroni",
    blurb: "A boisterous five-meat ragù born in the wooded hills of the Casentino, where each hunter's household added whatever the day had given them. Rarely written down, it survives mostly in the memory of the oldest cooks.",
    story: "Scottiglia takes its name from 'scottare' — to scald or sear. Traditionally a communal dish, every family who came to a hunt would contribute a different meat to the pot. The result was never the same twice, which is precisely why it resists standardisation and remains a hyper-local curiosity. In its sauce form, the long-braised meats are shredded back into the wine-dark gravy.",
    ingredients: [
      "Mixed meats: rabbit, guinea fowl, pork, veal, a little lamb",
      "Soffritto of onion, carrot, celery",
      "A whole head of garlic, peeled",
      "Chianti or Sangiovese red wine",
      "Peeled tomatoes & a spoon of concentrate",
      "Sage, rosemary, a dried chilli",
      "Toasted country bread to serve"
    ],
    steps: [
      "Sear each meat separately in olive oil until deeply browned, then set aside.",
      "Soften the soffritto and garlic slowly in the same pan.",
      "Return all the meat, season, and douse generously with red wine; let it evaporate.",
      "Add tomato, herbs and chilli, cover with a little broth.",
      "Braise gently for 2½–3 hours until the meats collapse.",
      "Lift the bones, shred the meat back into the sauce, and rest before tossing with pasta."
    ]
  },
  {
    id: "briganti",
    name: "Sugo alla Brigante",
    sub: "The Brigand's Wild Boar & Juniper",
    origin: "Maremma",
    province: "Grosseto",
    century: "19th century",
    rarity: 3,
    pairs: "Pici or tortelli maremmani",
    blurb: "From the marshy, malarial Maremma where outlaws once hid, this dark sauce of wild boar perfumed with juniper and bay tastes of the macchia — the dense coastal scrubland.",
    story: "The Maremma was Tuscany's wild frontier, a land of cowboys (butteri) and brigands. Wild boar was abundant and free, juniper grew on every slope, and the sauce that emerged is unmistakably of its place — gamey, resinous and unrefined in the best way. It is still cooked in agriturismi but seldom found in city restaurants.",
    ingredients: [
      "Wild boar shoulder, diced",
      "Red wine & a splash of vinegar for marinating",
      "Crushed juniper berries & bay leaves",
      "Onion, carrot, celery, garlic",
      "Tomato passata",
      "Black pepper, a little orange zest"
    ],
    steps: [
      "Marinate the boar overnight in red wine, vinegar, juniper and bay to tame the gameyness.",
      "Drain, pat dry, and brown the meat hard in olive oil.",
      "Add the soffritto and cook until golden.",
      "Pour in fresh wine, reduce, then add passata and the strained juniper.",
      "Simmer very gently for 3 hours, adding water as needed.",
      "Finish with a whisper of orange zest and cracked pepper."
    ]
  },
  {
    id: "renaiola",
    name: "Salsa Renaiola",
    sub: "The Sand-Dredger's River Eel",
    origin: "Banks of the Arno",
    province: "Florence / Pisa",
    century: "Pre-industrial",
    rarity: 5,
    pairs: "Maccheroni or spaghetti alla chitarra",
    blurb: "Named for the renaioli, the men who dredged sand from the Arno, this near-extinct sauce of river eel, garlic and wild fennel is one of Tuscany's most forgotten flavours.",
    story: "Before the Arno was dammed and polluted, eel was a staple protein for the river workers who hauled sand from its bed. The renaiola sauce used the catch of the day, stewed with wild fennel that grew on the embankments. As the trade vanished, so did the dish — today it is virtually a museum piece, kept alive by a handful of riverside families.",
    ingredients: [
      "Freshwater eel, cleaned and cut into pieces",
      "Wild fennel fronds (or fennel seed)",
      "Garlic & a little dried chilli",
      "White wine — a dry Trebbiano",
      "A few peeled tomatoes",
      "Olive oil, parsley"
    ],
    steps: [
      "Gently fry garlic and chilli in olive oil until fragrant.",
      "Add the eel pieces and let them colour lightly.",
      "Deglaze with white wine and let it evaporate.",
      "Add tomato and a generous handful of wild fennel.",
      "Simmer 25–30 minutes until the eel is tender and the sauce silky.",
      "Bone the eel if you wish, fold it back, and finish with parsley."
    ]
  },
  {
    id: "garmugia",
    name: "Sugo di Garmugia",
    sub: "The Springtime Lucchese Sauce",
    origin: "Lucca",
    province: "Lucca",
    century: "17th century",
    rarity: 3,
    pairs: "Short pasta — penne or maltagliati",
    blurb: "A jewel-green sauce of the first vegetables of spring — broad beans, peas, artichokes and asparagus — bound with a little minced veal. Once a nobleman's tonic, now a Lucchese rarity.",
    story: "Garmugia is usually served as a soup, but its denser cousin makes a luminous pasta sauce. Documented in 17th-century Lucca as a restorative for the recovering and the elderly, it celebrates the fleeting glut of spring vegetables. Outside Lucca it is almost unheard of.",
    ingredients: [
      "Young broad beans & fresh peas",
      "Baby artichokes, trimmed and sliced",
      "Asparagus tips",
      "A little minced veal & pancetta",
      "Spring onions",
      "Vegetable broth, olive oil"
    ],
    steps: [
      "Render the pancetta, then brown the veal and soften the spring onions.",
      "Add the artichokes first, then the harder vegetables.",
      "Moisten with a ladle of broth and stew until tender but still vivid.",
      "Add the peas, beans and asparagus near the end to keep them green.",
      "Loosen with broth to a sauce, season, and toss with hot pasta.",
      "Finish with raw olive oil and, if liked, a little pecorino."
    ]
  },
  {
    id: "francesina",
    name: "Sugo di Francesina",
    sub: "The Thrifty Boiled-Beef & Onion Sauce",
    origin: "Florence",
    province: "Florence",
    century: "19th century",
    rarity: 2,
    pairs: "Rigatoni or pappardelle",
    blurb: "The genius of Florentine frugality: leftover boiled beef from making broth, melted into a vast quantity of slow-stewed onions until it becomes a soft, sweet, savoury sauce.",
    story: "Lampredotto and bollito left Florentine kitchens with plenty of spent boiled beef. Rather than waste it, cooks shredded it into mountains of onions stewed to a jam. The name 'francesina' nods playfully at French influence, though the dish is pure Tuscan thrift. It's a sauce that tastes of patience.",
    ingredients: [
      "Leftover boiled beef, shredded",
      "A great many onions, thinly sliced",
      "A splash of red wine vinegar & red wine",
      "A few peeled tomatoes (optional)",
      "Bay leaf, salt, pepper",
      "Olive oil"
    ],
    steps: [
      "Sweat the onions in olive oil over low heat, with patience, until collapsing and sweet.",
      "Add the shredded beef and bay leaf.",
      "Splash in vinegar and wine; let it cook away.",
      "Add a little tomato if you like, and a ladle of water.",
      "Stew very gently for 45 minutes until jammy and unctuous.",
      "Adjust seasoning and toss through ridged pasta to catch the onions."
    ]
  },
  {
    id: "peposo",
    name: "Sugo di Peposo",
    sub: "The Kiln-Maker's Peppered Beef",
    origin: "Impruneta",
    province: "Florence",
    century: "15th century",
    rarity: 3,
    pairs: "Pappardelle or wide ribbons",
    blurb: "Legend says Brunelleschi's terracotta-kiln workers slow-cooked beef shins in Chianti and a fistful of black peppercorns beside the furnace. Reduced down, it makes a fiery, fragrant sauce.",
    story: "Peposo all'imprunetina is tied to the kilns of Impruneta that fired the tiles for the Duomo's dome. The fornacini left pots of beef, wine and pepper by the kiln mouths all day. Usually a stew, its concentrated braising liquor and shredded meat become an extraordinary pasta sauce — bold with pepper and dark with wine.",
    ingredients: [
      "Beef shin, cut into chunks",
      "A whole bottle of Chianti",
      "A heaped tablespoon of black peppercorns",
      "Many cloves of garlic",
      "Sage, a little tomato concentrate",
      "Salt"
    ],
    steps: [
      "Place beef, garlic, peppercorns and sage in a heavy pot.",
      "Cover completely with Chianti and a spoon of concentrate.",
      "Cook very low, barely bubbling, for 3 hours, never letting it dry out.",
      "When the meat is meltingly soft, raise the heat and reduce the wine to a glossy sauce.",
      "Break the beef into the sauce.",
      "Toss with pappardelle and a final grind of pepper."
    ]
  }
];

const RARITY = {
  1: "Common in its homeland",
  2: "Local everyday dish",
  3: "Uncommon — sought out",
  4: "Rare — kept by tradition",
  5: "Near-extinct — endangered"
};

function rarityDots(n) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += `<span class="dot ${i <= n ? "on" : ""}"></span>`;
  }
  return s;
}

const STYLE = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --ink:#2b2118;--paper:#f4ece0;--paper2:#efe4d3;--wine:#7a2b1d;--wine2:#9a3a26;
  --olive:#6b6336;--gold:#b3893f;--line:#d8c9b2;
}
body{background:var(--paper);color:var(--ink);font-family:Georgia,'Times New Roman',serif;line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:0 24px}
header.site{background:linear-gradient(160deg,#3a1810,#7a2b1d 60%,#9a3a26);color:#f4ece0;padding:54px 0 46px;border-bottom:6px double #b3893f;text-align:center}
header.site .kicker{letter-spacing:.42em;text-transform:uppercase;font-size:12px;color:#e9c98e}
header.site h1{font-size:clamp(34px,6vw,60px);margin:14px 0 8px;font-weight:normal;letter-spacing:.02em}
header.site p.lead{max-width:620px;margin:10px auto 0;color:#f0dcc2;font-style:italic;font-size:18px}
.ornament{color:#e9c98e;font-size:22px;margin:18px 0 0;letter-spacing:.3em}
.intro{padding:40px 0 8px;text-align:center}
.intro p{max-width:680px;margin:0 auto;font-size:18px;color:#4a3b2b}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:26px;padding:34px 0 60px}
.card{background:var(--paper2);border:1px solid var(--line);border-radius:4px;padding:26px 24px;display:flex;flex-direction:column;transition:transform .18s,box-shadow .18s;box-shadow:0 1px 0 #fff inset}
.card:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(60,30,15,.16)}
.card .prov{font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:var(--olive)}
.card h2{font-size:25px;font-weight:normal;margin:8px 0 2px;color:var(--wine)}
.card .sub{font-style:italic;color:#6a5640;font-size:15px;margin-bottom:12px}
.card .blurb{font-size:15px;color:#473727;flex:1}
.meta{display:flex;justify-content:space-between;align-items:center;margin-top:18px;padding-top:14px;border-top:1px dashed var(--line)}
.rar{display:flex;align-items:center;gap:6px}
.dot{width:9px;height:9px;border-radius:50%;border:1px solid var(--wine);display:inline-block}
.dot.on{background:var(--wine)}
.rlabel{font-size:11px;color:var(--olive);text-transform:uppercase;letter-spacing:.12em;margin-left:4px}
.read{font-size:13px;color:var(--gold);letter-spacing:.12em;text-transform:uppercase}
footer{border-top:6px double #b3893f;background:#2b2118;color:#cdb79b;text-align:center;padding:30px 0;font-size:14px}
footer em{color:#e9c98e}
/* detail */
.back{display:inline-block;margin:30px 0 6px;color:var(--wine);letter-spacing:.1em;text-transform:uppercase;font-size:13px}
.dhead{padding:14px 0 26px;border-bottom:1px solid var(--line);margin-bottom:30px}
.dhead .prov{font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:var(--olive)}
.dhead h1{font-size:clamp(30px,5vw,48px);font-weight:normal;color:var(--wine);margin:10px 0 4px}
.dhead .sub{font-style:italic;font-size:20px;color:#6a5640}
.facts{display:flex;flex-wrap:wrap;gap:14px;margin-top:20px}
.fact{background:var(--paper2);border:1px solid var(--line);border-radius:3px;padding:10px 16px;font-size:14px}
.fact b{display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--olive);font-weight:normal;margin-bottom:3px}
.cols{display:grid;grid-template-columns:1fr 1.2fr;gap:46px;padding-bottom:50px}
@media(max-width:760px){.cols{grid-template-columns:1fr;gap:30px}}
.story{font-size:17px;color:#41331f}
.story h3,.recipe h3{font-size:14px;letter-spacing:.2em;text-transform:uppercase;color:var(--wine);margin:0 0 14px;font-weight:normal}
.story p{margin-bottom:14px}
.recipe ul{list-style:none;margin-bottom:30px}
.recipe ul li{padding:8px 0 8px 26px;position:relative;border-bottom:1px dashed var(--line);font-size:15px}
.recipe ul li:before{content:"❧";position:absolute;left:0;color:var(--gold)}
.recipe ol{counter-reset:s;list-style:none}
.recipe ol li{counter-increment:s;padding:10px 0 10px 44px;position:relative;font-size:15px;border-bottom:1px dashed var(--line)}
.recipe ol li:before{content:counter(s);position:absolute;left:0;top:8px;width:28px;height:28px;background:var(--wine);color:#f4ece0;border-radius:50%;text-align:center;line-height:28px;font-size:14px}
.pairbox{margin-top:8px;background:var(--paper2);border-left:4px solid var(--gold);padding:14px 18px;font-style:italic;color:#5a4631}
`;

function page(body, title) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title><style>${STYLE}</style></head><body>${body}
<footer><div class="wrap"><em>La Cucina Dimenticata</em> — A Catalogue of Tuscany's Forgotten Pasta Sauces<br>Recipes gathered from kitchens of Arezzo, Lucca, Grosseto &amp; Firenze.</div></footer>
</body></html>`;
}

function homePage() {
  const cards = SAUCES.map(s => `
    <a class="card" href="/sauce/${s.id}">
      <div class="prov">${s.origin} · ${s.province}</div>
      <h2>${s.name}</h2>
      <div class="sub">${s.sub}</div>
      <div class="blurb">${s.blurb}</div>
      <div class="meta">
        <div class="rar">${rarityDots(s.rarity)}<span class="rlabel">Rarity</span></div>
        <div class="read">Recipe →</div>
      </div>
    </a>`).join("");
  const body = `
  <header class="site"><div class="wrap">
    <div class="kicker">Cucina Toscana</div>
    <h1>La Cucina Dimenticata</h1>
    <p class="lead">A catalogue of Tuscany's lesser-known pasta sauces — their recipes, their origins, and how close each has drifted to oblivion.</p>
    <div class="ornament">✦ ❧ ✦</div>
  </div></header>
  <div class="wrap">
    <div class="intro"><p>Beyond ragù and pomodoro lies a quieter Tuscany — sauces born of hunters, river-dredgers, kiln-workers and thrifty grandmothers. Here are six worth saving from forgetting.</p></div>
    <div class="grid">${cards}</div>
  </div>`;
  return page(body, "La Cucina Dimenticata — Forgotten Tuscan Pasta Sauces");
}

function saucePage(s) {
  const body = `
  <div class="wrap">
    <a class="back" href="/">← Back to the catalogue</a>
    <div class="dhead">
      <div class="prov">${s.origin} · ${s.province} · ${s.century}</div>
      <h1>${s.name}</h1>
      <div class="sub">${s.sub}</div>
      <div class="facts">
        <div class="fact"><b>Origin</b>${s.origin}</div>
        <div class="fact"><b>First seen</b>${s.century}</div>
        <div class="fact"><b>Rarity</b><div class="rar" style="margin-top:2px">${rarityDots(s.rarity)}</div></div>
        <div class="fact"><b>Status</b>${RARITY[s.rarity]}</div>
      </div>
    </div>
    <div class="cols">
      <div class="story">
        <h3>The Origin</h3>
        <p>${s.story}</p>
        <div class="pairbox">Traditionally served with <strong>${s.pairs}</strong>.</div>
      </div>
      <div class="recipe">
        <h3>Ingredients</h3>
        <ul>${s.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <h3>The Method</h3>
        <ol>${s.steps.map(st => `<li>${st}</li>`).join("")}</ol>
      </div>
    </div>
  </div>`;
  return page(body, `${s.name} — La Cucina Dimenticata`);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/sauce\/([\w-]+)\/?$/);
    if (m) {
      const s = SAUCES.find(x => x.id === m[1]);
      if (s) return new Response(saucePage(s), { headers: { "content-type": "text/html;charset=utf-8" } });
      return new Response("Not found", { status: 404 });
    }
    return new Response(homePage(), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
};