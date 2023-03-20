import React from "react";

const About = () => {
  return (
    <div>
      <h2>Om Sidan</h2>
      <p>
        Ofta när vi pratar om el pratar vi om elspotpriset, vad en kilowattimme
        kostar på elprismarknaden. Men för att ta reda på vad den totala
        konstnaden blir för slutkonsumenten behöver man räkna på både
        energiskatt, moms och elöverföringsavgift. Den här sidan är tänkt som en
        hjälp att snabbt se vad den totala kostnaden blir efter alla skatter och
        extra avgifter är inräknade. Ofta ligger det någonstans 3-4 gånger högre
        än själva elspotpriset.
      </p>
      <h3>Hur räknas totalkostnaden ut?</h3>
      <p>
        Totalkostnaden räknas ut genom att använda det aktuella elspotpriset +
        energiskatten på 0.392 kr/kWh + en elöverföringsavgift på 0.25 kr/kWh{" "}
        {"("}
        eller anpassat värde{")"}. Summan multipliceras sedan med momssatsen som
        ligger på 33%.
      </p>
      <h3>Blir kostnaden exakt?</h3>
      <p>
        Nej. Uträkningarna bygger på genomsnittliga förbrukningsvärden av olika
        apparater. Förbrukningen för just din diskmaskin eller kaffekokare kan
        mycket väl vara lägre eller högre, beroende på hur gammal den är och
        energiklass. Det är också olika om man betala för varmvatten och
        uppvärmning. Bor man i hus eller villa är det vanligt att man gör det,
        men bor man i lägenhet är det inte lika vanligt.
        <br />
        <br />
        Dessutom har kostnad för elcertifikat exkluderats för att förenkla
        beräkningar. Vad man betalar för det kan variera ganska mycket, men
        vanligt är att det bara bara utgör någon till några procent av vad man
        totalt sett betalar för sin el.
        <br />
        <br />
        Och så får man inte glömma att man ofta har fasta abonnemangsavgifter
        både hos sitt elbolag och sin elnätsleverantör. Skulle man räkna ut en
        snittkostnad för sina kilowattimmar inkluderat dessa så kommer kostnaden
        att se högre ut.
      </p>
      <h3>Vem står bakom sidan?</h3>
      <p>
        Jag som byggt sidan heter Emelie Köhler och jag är en junior
        webbutvecklare. Den här sidan är ett av mina portfolioprojekt.
        {/*         <br />
        Jag letar aktivt webbutvecklarjobb, så skulle du ha ett tips är du
        välkommen att ta kontakt på emelie.ekbk{"[at]"}gmail.com */}
      </p>
    </div>
  );
};

export default About;
