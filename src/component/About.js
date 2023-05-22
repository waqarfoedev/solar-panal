import React from "react";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="about-heading">
        <h1>Chi Siamo</h1>
        <hr className="about-hr" />
        <p>
          Solar Innovatio è una PMI innovativa italiana specializzata nella
          progettazione e realizzazione di sistemi fotovoltaici intelligenti.
          <br /> Solar Innovatio unisce alla decennale esperienza maturata nel
          panorama italiano nell'ambito delle soluzioni fotovoltaiche un
          <br /> approccio ingegneristico, innovativo, digitale alla principale
          fonte di energia rinnovabile.
        </p>
        <div className="frame-top-left">
          <img src="/images/frame-top-left.svg" alt="Frame" />
        </div>
      </div>
      <div className="container-1">
        <div className="box">
          <img
            src="/images/Testoni Cristian c-1.png"
            className="box-img"
            alt="Testoni Cristian"
          />
          <h3>Cristian Testoni</h3>
          <p>
            Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e
            progettista in aziende meccaniche. Ho avviato come imprenditore
            svariate iniziative in ambito Automotive e mobilità elettrica.
          </p>
        </div>
        <div className="box">
          <img
            src="/images/Gavioli c-2.png"
            className="box-img"
            alt="Gavioli"
          />
          <h3>Francesco Gavioli</h3>
          <p>
            Nel corso degli anni ho maturato una profonda conoscenza nella
            progettazione e realizzazione di impianti elettrici e di energia
            rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda
            all avanguardia nell installazione di impianti fotovoltaici
          </p>
        </div>
        <div className="box">
          <img
            src="/images/Massimo c-3.png"
            className="box-img"
            alt="Massimo"
          />
          <h3>Massimo Fabi</h3>
          <p>
            Laurato in Economia e Commercio mi sono occupato per anni di
            Business Development sia in multinazionali che PMI italiane in
            differenti settori
          </p>
        </div>
      </div>
      <div className="about-qute">
        <div className="qute">
          <img src="/images/text-cteation-left.svg" alt="left" />
        </div>

        <h3 className="qute-h3">
          Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
          componente di una soluzione ingegneristica più completa che comprende
          sensoristiche avanzate e l'integrazione con i sistemi domotici di
          casa.
        </h3>
        <div className="qute qute-bottom">
          <img src="/images/text-cteation-right.svg" alt="right" />
        </div>
      </div>
      <p className="about-end">- Cristian Testoni -</p>
    </div>
  );
};

export default About;
