export default {
  async fetch(request) {
    const sauces = [
      {
        name: "Sugo di Nana",
        region: "Valdichiana, Arezzo",
        rarity: 4,
        rarityLabel: "Rare",
        tagline: "Duck ragù of the Chiana valley",
        origin:
          "Born among the farmhouses of the Valdichiana, where the white Chianina cattle graze and ducks (nana in the local dialect) were raised in every aia. Traditionally served on feast days over pici, the thick hand-rolled spaghetti of southern Tuscany.",
        ingredients: [
          "1 whole farm duck, jointed",
          "Pici or pappardelle",
          "Red wine (Chianti)",
          "Soffritto: onion, carrot, celery",
          "Tomato passata",
          "Sage, rosemary, bay",
          "Duck liver, finely chopped",
        ],
        method:
          "Render the duck pieces slowly in their own fat with the soffritto. Deglaze with Chianti and reduce. Add passata and herbs, then braise for two to three hours until the meat falls from the bone. Shred, return to the pan, and finish with the chopped liver off the heat. Dress pici generously and serve without cheese.",
      },
      {
        name: "Salsa alla Lardellata",
        region: "Garfagnana, Lucca",
        rarity: 5,
        rarityLabel: "Nearly Lost",
        tagline: "Mountain sauce of cured lardo & wild herbs",
        origin:
          "From the chestnut-forest villages of the Garfagnana, where lardo di Colonnata and foraged mountain herbs replaced costly meat. A cucina povera sauce now made by only a handful of older cooks.",
        ingredients: [
          "150g lardo, diced",
          "Wild fennel & nepitella (calamint)",
          "Garlic, crushed",
          "A splash of vin santo",
          "Toasted breadcrumbs",
          "Pecorino della Garfagnana",
        ],
        method:
          "Melt the lardo gently with garlic until silky and translucent. Add chopped wild herbs and a splash of vin santo to perfume. Toss through fresh maccheroni, then finish with toasted breadcrumbs for crunch and a dusting of pecorino.",
      },
      {
        name: "Sugo di Cinghiale alla Maremmana",
        region: "Maremma, Grosseto",
        rarity: 3,
        rarityLabel: "Uncommon",
        tagline: "Wild boar ragù of the coastal scrubland",
        origin:
          "The Maremma's butteri (cowboys) and hunters tamed the gamey wild boar of the macchia with overnight marinades. A robust ragù tied to the autumn hunting season.",
        ingredients: [
          "800g wild boar shoulder, diced",
          "Marinade: red wine, juniper, cloves, bay",
          "Soffritto + pancetta",
          "Tomato passata",
          "Pappardelle",
        ],
        method:
          "Marinate the boar overnight in red wine with juniper and cloves. Drain, brown well, then build with soffritto and pancetta. Add the strained marinade and passata, and braise three hours until dark and tender. Serve over wide pappardelle.",
      },
      {
        name: "Salsa di Baccelli e Pecorino",
        region: "Florentine Hills",
        rarity: 4,
        rarityLabel: "Rare",
        tagline: "Spring fava bean & young pecorino cream",
        origin:
          "A fleeting May sauce from the hills around Florence, celebrating the brief season when fresh fava beans (baccelli) and tender marzolino pecorino arrive together — a pairing eaten raw on May Day, here turned into a delicate sauce.",
        ingredients: [
          "Fresh shelled fava beans",
          "Young marzolino pecorino",
          "Spring onion",
          "Mint & parsley",
          "Extra virgin olive oil",
        ],
        method:
          "Blanch and skin the favas. Blend half with olive oil, mint, and grated pecorino into a loose cream; keep the rest whole. Warm gently — never boil — fold the whole beans back in, and toss with garganelli. Finish with raw oil and a crack of pepper.",
      },
      {
        name: "Sugo Finto",
        region: "All of Tuscany",
        rarity: 2,
        rarityLabel: "Fading",
        tagline: "The 'fake' meatless ragù",
        origin:
          "Sugo finto — 'pretend sauce' — mimicked a meat ragù for poorer families and meatless Fridays. Once on every Tuscan table, it is slowly being forgotten as meat became affordable.",
        ingredients: [
          "Double soffritto (onion, carrot, celery)",
          "Dried porcini, soaked",
          "Tomato passata",
          "Red wine",
          "Sage & rosemary",
        ],
        method:
          "Cook a generous soffritto very slowly until sweet and jammy. Add the soaked porcini with their liquor, a splash of wine, and passata. Simmer 45 minutes until thick enough to coat a spoon. The deep savour fools the palate into expecting meat. Lovely on penne.",
      },
      {
        name: "Salsa di Zafferano di San Gimignano",
        region: "San Gimignano, Siena",
        rarity: 5,
        rarityLabel: "Nearly Lost",
        tagline: "Medieval saffron & walnut sauce",
        origin:
          "San Gimignano grew wealthy on saffron in the Middle Ages, trading it across Europe. This golden sauce echoes that era, pairing the precious crocus with walnuts in a recipe rarely cooked today.",
        ingredients: [
          "A pinch of San Gimignano saffron",
          "Walnuts, ground",
          "Cream or fresh ricotta",
          "Butter",
          "Vernaccia white wine",
          "Parmigiano",
        ],
        method:
          "Steep saffron threads in warm Vernaccia. Toast and grind the walnuts, then melt with butter and a little cream. Stir in the saffron wine until the sauce turns deep gold. Coat tagliatelle and finish with parmigiano and a few walnut shards.",
      },
    ];

    const stars = (n) =>
      "● ".repeat(n).trim() + " " + "○ ".repeat(5 - n).trim();

    const cards = sauces
      .map(
        (s) => `
      <article class="card">
        <div class="card-head">
          <h2>${s.name}</h2>
          <span class="region">${s.region}</span>
        </div>
        <p class="tagline">${s.tagline}</p>
        <div class="rarity">
          <span class="dots" aria-hidden="true">${stars(s.rarity)}</span>
          <span class="rarity-label">${s.rarityLabel}</span>
        </div>
        <h3>Origin</h3>
        <p class="origin">${s.origin}</p>
        <div class="recipe">
          <div class="ingredients">
            <h3>Ingredients</h3>
            <ul>${s.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
          </div>
          <div class="prep">
            <h3>Method</h3>
            <p>${s.method}</p>
          </div>
        </div>
      </article>`
      )
      .join("");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sughi Dimenticati — Forgotten Sauces of Tuscany</title>
<style>
  :root{
    --ink:#3a2c1e;
    --cream:#f6efe2;
    --paper:#fbf6ec;
    --wine:#7a2b2b;
    --olive:#6b6a3a;
    --gold:#b8893a;
    --line:#d8c9ad;
  }
  *{box-sizing:border-box;}
  body{
    margin:0;
    font-family:Georgia,'Times New Roman',serif;
    color:var(--ink);
    background:var(--cream);
    background-image:radial-gradient(circle at 20% 10%, rgba(184,137,58,.06), transparent 40%),
      radial-gradient(circle at 80% 90%, rgba(122,43,43,.05), transparent 45%);
  }
  header{
    text-align:center;
    padding:4.5rem 1.5rem 3rem;
    border-bottom:3px double var(--line);
    background:var(--paper);
  }
  .crest{
    font-size:.8rem;
    letter-spacing:.45em;
    text-transform:uppercase;
    color:var(--gold);
    margin-bottom:1rem;
  }
  header h1{
    font-size:clamp(2.2rem,5vw,3.6rem);
    margin:.2rem 0;
    font-weight:normal;
    letter-spacing:.02em;
  }
  header .sub{
    font-style:italic;
    color:var(--wine);
    font-size:1.15rem;
    margin-top:.4rem;
  }
  header p.lede{
    max-width:640px;
    margin:1.6rem auto 0;
    line-height:1.7;
    color:#5a4a37;
  }
  .legend{
    max-width:760px;
    margin:2rem auto 0;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:1.2rem;
    font-size:.85rem;
    color:#6a5942;
    font-style:italic;
  }
  .legend span .dots{color:var(--wine);letter-spacing:.15em;font-style:normal;}
  main{
    max-width:1080px;
    margin:0 auto;
    padding:3rem 1.5rem 4rem;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(340px,1fr));
    gap:2rem;
  }
  .card{
    background:var(--paper);
    border:1px solid var(--line);
    border-radius:4px;
    padding:2rem 1.9rem;
    box-shadow:0 8px 24px rgba(58,44,30,.08);
    position:relative;
  }
  .card::before{
    content:"";
    position:absolute;inset:8px;
    border:1px solid rgba(216,201,173,.6);
    border-radius:2px;
    pointer-events:none;
  }
  .card-head{display:flex;justify-content:space-between;align-items:baseline;gap:.6rem;flex-wrap:wrap;}
  .card h2{
    font-size:1.5rem;
    margin:0;
    color:var(--wine);
    font-weight:normal;
  }
  .region{
    font-size:.72rem;
    letter-spacing:.15em;
    text-transform:uppercase;
    color:var(--olive);
    white-space:nowrap;
  }
  .tagline{font-style:italic;color:#6a5942;margin:.4rem 0 1rem;}
  .rarity{
    display:flex;align-items:center;gap:.7rem;
    padding:.5rem 0 1rem;
    border-bottom:1px dotted var(--line);
    margin-bottom:1rem;
  }
  .dots{color:var(--wine);letter-spacing:.1em;font-size:.85rem;}
  .rarity-label{
    font-size:.72rem;
    text-transform:uppercase;
    letter-spacing:.18em;
    color:var(--gold);
  }
  .card h3{
    font-size:.78rem;
    letter-spacing:.22em;
    text-transform:uppercase;
    color:var(--olive);
    margin:1.2rem 0 .5rem;
  }
  .origin{line-height:1.7;font-size:.97rem;margin:0;}
  .recipe{margin-top:.4rem;}
  .ingredients ul{margin:.3rem 0 0;padding-left:1.1rem;line-height:1.6;font-size:.95rem;}
  .ingredients li{margin-bottom:.2rem;}
  .prep p{line-height:1.7;font-size:.95rem;margin:.3rem 0 0;}
  footer{
    text-align:center;
    padding:2.5rem 1.5rem 3rem;
    border-top:3px double var(--line);
    background:var(--paper);
    color:#7a6a52;
    font-style:italic;
    font-size:.9rem;
  }
  footer .flourish{color:var(--gold);font-size:1.4rem;margin-bottom:.5rem;letter-spacing:.4em;}
</style>
</head>
<body>
  <header>
    <div class="crest">◆ La Cucina Toscana ◆</div>
    <h1>Sughi Dimenticati</h1>
    <div class="sub">The Forgotten Sauces of Tuscany</div>
    <p class="lede">A small catalogue of lesser-known pasta sauces from the farmhouses, hill towns and mountain hamlets of Tuscany — gathered with their recipes, their origins, and a measure of how rarely they are still cooked.</p>
    <div class="legend">
      <span><span class="dots">●○○○○</span> Fading</span>
      <span><span class="dots">●●●○○</span> Uncommon</span>
      <span><span class="dots">●●●●○</span> Rare</span>
      <span><span class="dots">●●●●●</span> Nearly Lost</span>
    </div>
  </header>
  <main>
    ${cards}
  </main>
  <footer>
    <div class="flourish">❧</div>
    Raccolto con cura · A living record of Tuscany's vanishing tables
  </footer>
</body>
</html>`;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
