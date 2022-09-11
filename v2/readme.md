# Vefforritun 1, 2022: Verkefni 2, HTML #2

[Kynning í fyrirlestri](https://www.youtube.com/watch?v=fZ13SnZGTFE).

## Markmið

* Vinna með HTML element.
* Nota HTML validator og huga að því hvernig HTML er skrifað.
* Huga að aðgengi og nota aXe tólið.

## Lýsing

Setja skal upp fjórar síður, aðgengilegar af internetinu:

* Forsíða með yfirliti.
* Um síða með lengri texta.
* Könnunar síða með formi.
* Bóka síða með töflu af bókum.

## Efni

Allar síður skulu innihalda valmynd sem vísar á allar aðrar síður og merkja valda síðu á einhvern hátt. Athugið að allar síður fyrir utan forsíðu verða að vera undir `sidur/` möppu. Efni í textaskrám hefur tengla innan sviga t.d. `(tengill á um síðu)`. Efni innan hornklofa gefur upplýsingar um hvernig efni sé að ræða, t.d. `[fyrirsögn]`.

### Forsíða

`index.html`, forsíða með texta tilgreindum í `gogn/index.txt`

Inniheldur inngangstexta og yfirlit með vísunum í aðrar síður.

Birta skal mynd `myndir/tolva.jpg` á forsíðu ([mynd eftir James Harrison, frá Unsplash](https://unsplash.com/@jstrippa)).

### Um síða

Síðan skal eiga heima undir `sidur/um.html`, með texta tilgreindum í `gogn/um.txt`.

### Könnunar síða

Síða með könnun um forritun, undir `sidur/konnun.html`, setja skal upp eftirtalin svæði og reiti:

* Svæðið „Reynsla af forritun“
  * Val um forritunarmál úr listanum í `gogn/forritunarmal.txt` með textanum „Forritunarmál sem ég kann best“, verður að velja.
  * Stika merkt með „Hversu vel kanntu forritunarmálið á skalanum 0 til 10?“ sem leyfir að merkja hversu vel forritunarmálið er þekkt, frá 0 til 10.
  * Textabox merkt með „Hvað finnst þér best við forritunarmálið?“, verður að fylla inn í.
  * Textabox merkt með „Hvað finnst þér verst við forritunarmálið?“, verður að fylla inn í.
  * Reitur sem leyfir að velja skrá, merktur með „Dæmi um forrit“.
* Svæðið „Forritunarmál sem mig langar að læra“
  * Val um forritunarmál úr listanum í `gogn/forritunarmal.txt` með textanum „Forritunarmál sem mig langar að læra“, verður að velja.
  * Val um þrjú gildi með textanum „Hvers vegna langar þig að læra þetta forritunarmál“
    * `-Veldu úr listanum-` (sjálfgefið)
    * `Vegna vinnu`
    * `Fyrir akademísk störf`
    * `Forvitni`
  * Textasvæði (fleiri en ein lína) merkt með „Annað“, verður ekki að fylla út í.
* Svæðið „Hafa samband“
  * Gátreitur (e. checkbox) með textanum „Það má hafa samband við mig“
  * Netfang, texti sem lítur út fyrir að vera netfang, þarf ekki að fylla út í.
  * Símanúmer, texti sem lítur út fyrir að vera símanúmer (`000-0000`), þarf ekki að fylla út í.

### Bóka síða

Síða með lista af bókum sem á heima á `sidur/baekur.html`, gögn í [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) skjalinu `gogn/baekur.csv`. 

Tafla skal vera uppsett með tveim dálkum: heiti og höfun. Heiti bókar skal vera tengill á gefin tengil í gögnum. Athugið að nota rétt HTML element fyrir „haus“ töflu og meginmál.

## Útlit

Ekki er gefin forskrift að útliti, þar sem verkefnið snýst um að setja upp merkingarfræðilegt HTML.

Ekki þarf að gera neitt með CSS. Verkefni 3 mun snúast um að útfæra útlit fyrir þessar síður.

## Almennt

* **Nýta skal merkingarfræðilega viðeigandi element**.
* Valmynd skal útfæra með því að afrita og breyta milli síðna, ekki er krafa um neina „forritun“ til að útbúa valmynd.
* Allar síður skulu hafa fyrisögn og „beint í efni“ hlekk á eftir fyrirsögn, en á undan valmynd.
* Síður skulu nota `utf-8` stafasett.
* Passa skal upp á að hafa snyrtilega uppsettan kóða þar sem inndráttur er samræmdur.
* Allar síður skulu vera villulausar ef prófaðar með [HTML validator](https://validator.w3.org/).
* Allar síður skulu vera án aðgengisvillna ef prófaðar með [aXe](https://www.deque.com/axe/), setjið upp viðbót í vafra.
* Allar síður nema forsíða skulu hafa tengil á forsíðu í fæti með textanum „Aftur á forsíðu“.

## Netlify

Setja skal upp verkefni á Netlify með því að tengja GitHub repo.

## Mat

* 20% – Snyrtilega uppsettur kóði með merkingarfræðilegum elementum fyrir hverja síðu.
* 20% – Síður án villna frá HTML validator og aXe validator.
* 20% – Form uppsett eftir forskrift.
* 20% – Tafla uppsett eftir forskrift.
* 20% – Forsíða og um síða uppsettar eftir forskrift.

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 29. ágúst 2021.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags þriðjudaginn 13. september 2022.

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

> Útgáfa 0.3 (lýsing á formi bætt, lýsing á töflu bætt)
