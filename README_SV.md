# lg-temadag-traditioner-2017

**OBS:** Ifall du vill läsa detta dokument på engelska, klicka [här](README.md).

## Bakgrund

Projektet "Bastuns Dag" är ett koncept för ett både lokalt och nationellt evenemang som designades vid Lovisa Gymnasium under Finland 100 år-temadagarna vid skolan. I ett projektarbete med räckvidden av två dagar spenderade en grupp på drygt 20 studerande tid på att planera ett evenemang som skulle stärka folkandan i vårt land. Idén var att samla vårt annars ganska splittrade folk tillsammans kring en gemensam tradition.

I arbetet ingick mycket samarbete i form av brainstorming, idésamlande, uppläggning och sammanställande av det hela till en koherent, presentationsduglig helhet. Hela gruppen har deltagit i planerings- och designfasen, medan det tekniska utförandet (Kod, flyttbar webserver etc.) och formingen av presentationen har skötts av Linus Willner ([@LWTechGaming](https://github.com/LWTechGaming)).

## Bruk av detta projekt

Det som framställs på webbsidan är fiktivt tills vidare, men är planerat med realistiska förväntningar. Det torde inte vara helt omöjligt att utföra åtminstone vissa delar av denna plan på lokal nivå.

Allt material på denna sida (Planer, text, bilder, källkod) är licenserat under [Creative Commons Attribution 3.0](LICENSE.md), så det är fullt möjligt att använda dessa idéer och koncept för ditt eget bruk.

## Bruksanvisningar

Om du vill ta en titt på webbsidan själv, eller göra ändringar till den, gör då enligt följande.

Observera att programmet kräver vissa drivrutiner och -system för användning:

- [Git](https://git-scm.com/download) (Versionskontroll; kan skippas om du bara vill titta på sidan)
- [Node.js](https://nodejs.org/en) version 6.x.x uppåt (Serverdrift) och NPM (Följer med Node.js)

För att starta webbsidan på din egen dator, gör så här:

1. Klona denna kodbas till din dator: `git clone https://github.com/LWTechGaming/lg-temadag-traditioner-2017.git` (Eller ladda ner [ZIP-paket](https://github.com/LWTechGaming/lg-temadag-traditioner-2017/archive/master.zip))
2. Gå till foldret där kodbasen finns, och kör `npm install` med kommandotolken.
3. Ifall du vill, ändra på inställningarna i utvecklings- (`config.dev.json`) eller produktionskonfigurationen (`config.prod.json`).
4. Kör `npm start` (Utvecklingsläge) eller `npm run start:prod` (Produktionsläge) i kodbasens folder med kommandotolken.
5. Öppna `localhost:8000` (Standardinställning) i en webbläsare om den inte redan har öppnats, och surfa runt!

## Deltagarnas tack

Vi hoppas du har fått goda idéer eller annan nytta av vårt lilla projekt. Tack!

Hälsningar,

Emil, Matilda, Oskar, Fredrik, Morris, Eero, Casper, Jesper, Mikael, Hanna-Maria, Niklas, Linus, Alex, Timothy, Lasse, Lina, Algot
**Projektgruppen för lg-temadag-traditioner-2017**
