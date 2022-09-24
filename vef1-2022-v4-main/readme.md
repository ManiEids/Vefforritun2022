# Vefforritun 1, 2022: Verkefni 4, CSS #2

[Kynning í fyrirlestri](https://youtu.be/).

Setja skal upp viðmót fyrir gefið útlit.

Haldið verður áfram með verkefnið:

* [Verkefni 5](https://github.com/vefforritun/vef1-2022-v5/) gerir vefinn skalanlegann og setur upp grid.
* [Verkefni 6](https://github.com/vefforritun/vef1-2022-v6/) setur upp tæki og tól: Sass, Stylelint, og browser-sync. Verkefnið verður „refactorað“ til að nota þetta.

## Markmið

* Vinna með flóknara viðmót í CSS.
* Nota flexbox til að stýra layout.
* Nota CSS variables.

## Útlit

Fyrirmynd að útliti er í `fyrirmynd/` möppu. Skjáskot er tekið í `1600px` breiðum Firefox vafra.

Útlit skiptist í þrjú svæði:

* Hero svæði
  * Fyllir alveg út í vefraglugga með mynd fastri mynd í bakgrunn.
  * Þar sem texti getur lagst yfir part af mynd sem myndi gera texta illlæsilegan skal setja „protection“: 80% gegnsæan svart lit yfir mynd en undir texta
* Upplýsingasvæði
  * Tvær blokkir af mynd og texta sem skipta á milli.
  * Fyrir ofan texta er letur sett í hástafi og er `14px` (nota `rem` til að breyta!), svona texti er oft kallaður „kicker“ eða „eyebrow“.
  * Myndum er hallað um 3°.
* Cards svæði
  * Fjögur „cards“ með upplýsingum.

Að lokum er síðan fótur sem fyllir út í alla breidd vafra.

### HTML

Gefið er grunn HTML þar sem búið er að velja merkingfræðileg element m.v. efnið. Vísað er í myndir innan úr efni, fyrir utan mynd sem á að vera bakvið í hero.

Gera má ráð fyrir að það **verði** að bæta við `class` attributes og auka elementum við lausn/sýnilausn til að geta náð fram útliti.

### Almennt

Þar sem allt útlit skal útfæra í einni CSS skrá, skal huga að cascade og erfðum, þó er fullkomlega eðlilegt að endurtaka eigindi, en t.d. fyrir málsgreinar (`<p>`) þarf aðeins að taka fram einu sinni hvert margin þeirra er.

Gefið er „reset“ þ.a. allt `margin` og `padding` frá vafra sé sett í `0`, einnig er `box-sizing: border-box` sett fyrir öll element.

Gefinn er strúktúr og nokkur gildi úr sýnilausn. Ekki er krafa að nota það.

CSS skal vera án villna og **viðvarana** (sem við eiga, það gætu verið viðvaranir sem eru „eðlilegrar“) þegar keyrt í gegnum [CSS validator](https://jigsaw.w3.org/css-validator/).

Allar síður skulu vera villulausar ef prófaðar með HTML validator.

### Gildi og stærðir

* Heildar breidd efnis skal vera `1400px`, miðjað á skjánum
* Grunnletur stærð skal vera `16px` þ.a. `1rem == 16px`
* Allt bil í fyrirmynd er hálft, eitt, tvöfalt eða fjórfalt margfeldi af grunnletur stærð
* Gildi fyrir liti eru gefin sem breytur settar í `:root`
* Leturgerðir:
  * Fyrir meginmál: Nunito, Helvetica, Arial, sans-serif
  * Fyrir fyrirsagnir: Domine, Georgia, serif

Nota skal CSS variables sem gefnar eru í `:root` með `var()`.

### Takmarkanir

Aðeins skal nota flexbox til að setja upp útlit, þ.e.a.s. **aðeins** `display: flex`.

Ekki skal nota önnur gildi fyrir `display` eða `position` eigindi _nema_ til að setja upp „protection“ yfir mynd í hero svæði og í `.button` (sjá það sem gefið er í `styles.css`).

Í sýnilausn er eftirfarandi notað:

* `@font-face` til að færa inn leturgerðir og tengd eigindi til að eiga við leturgerðir
  * `src`
  * `font-display: swap`
  * `font-family`
  * `font-size`
  * `font-variation-settings`
  * `line-height`
  * `text-decoration`
* CSS breytur, sjá gefnar breytur innan `:root` og `var()` fall
* Flexbox eigindi, t.d.
  * `align-items`
  * `flex-direction`
  * `flex`
  * `justify-content`
  * `order`
  * `gap`
* Bakgrunnseigindi:
  * `background-color`
  * `background-image`
  * `background-position`
  * `background-repeat`
  * `background-size`
  * `background-attachment`
  * eða shorthand `background`
* Box model eigindi
  * `margin`
  * `border`
  * `padding`
  * `width`, með hlutfallslegum einingum
  * `height`, til að fastsetja hæðir á myndum sem síðan nota 
  * `max-width`
  * staðsetningar eigindi (`top`) til að setja „protection“
* Annað
  * `border-radius`
  * `transform`
  * `object-fit`
  * `object-position`

Ekki þarf að huga að skalanleika (síðan þarf ekki að líta vel út í undir `1400px` skjá, athugið að þar sem hámarksbreidd er `1400px` mun efnið liggja alveg utan í vafraglugga í nákvæmlega `1400px`).

## Netlify

Setja skal upp verkefni á Netlify með því að tengja GitHub repo.

## Mat

* 15% – Snyrtilega uppsett og gilt CSS
* 15% – Flexbox notað fyrir útlit og takmarkanir virtar
* 20% – Hero svæði
* 20% – Upplýsingasvæði
* 30% – Cards svæði

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 19. september 2022.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags þriðjudaginn 27. september 2022.

Skilaboð skulu innihalda:

* slóð á verkefni keyrandi á Netlify
* slóð á **private** GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  * `MarzukIngi`
  * `Stimmikex`
  * `brynjar13`
  * `ofurtumi`
  * `BjarniHaskoli`
  * `Stulli888`

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

## Myndir

Myndir frá [Unsplash](https://unsplash.com/):

* [Nico Meier](https://unsplash.com/@nicomeier)
* [Andreas Dress](https://unsplash.com/ja/@andreasdress)
* [rrvviiii](https://unsplash.com/@rrvviiii)
* [Paul Taton](https://unsplash.com/es/@paultaton)
* [Diana Serbichenko](https://unsplash.com/@diana_serbichenko)
* [Annie Spratt](https://unsplash.com/@anniespratt)
* [Josie Weiss](https://unsplash.com/es/@scarlettweiss)

> Útgáfa 0.2 (fjarlægja úreltar upplýsingar)
