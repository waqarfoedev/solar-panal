import React from "react";

const Features = () => {
  return (
    <div className="feature" id="feature">
      <div className="heading-">
        <h1 className="heading- h1">Connesso, Intelligente, Resistente </h1>
        <hr className="about-hr" />
      </div>
      <div className="container">
        <div className="box-feature1">
          <div className="feature-one">
            <div className="image">
              <img
                src="/images/Versatile-icon.svg"
                alt="Versatile-icon"
                className="icon"
              />
            </div>
            <div className="contentt">
              <h3>Versatile</h3>
              <p>
                Installabile in qualsiasi balcone anche all'interno del
                condominio. Non richiede autorizzazioni ne opere murarie. Utile
                anche come schermatura solare
              </p>
            </div>
          </div>
          <div className="feature-one">
            <div className="image">
              <img
                src="/images/Automatizzato-icon.svg"
                alt="Automatizzato-icon"
                className="icon"
              />
            </div>
            <div className="contentt">
              <h3>Automatizzato</h3>
              <p>
                Totalmente automatico e retraibile, S.I.R.E regola la quantità
                di sole in casa in base alle necessità. Un perfetto connubio tra
                sole e ombra. I suoi sensori regolano l'esposizione in base alle
                condizioni atmosferiche.
              </p>
            </div>
          </div>
          <div className="feature-one">
            <div className="image">
              <img
                src="/images/Efficiente-icon.svg"
                alt="Efficiente-icon"
                className="icon"
              />
            </div>
            <div className="contentt">
              <h3>Efficiente</h3>
              <p>
                Il sistema di accumulo permette di conservare l'energia generata
                in eccesso e renderla disponibile quando serve, per esempio di
                sera o in giornate nuvolose.
              </p>
            </div>
          </div>
        </div>
        <div className="box-feature2">
          <div className="feature-one">
            <div className="image">
              <img
                src="/images/Indipendente e Green-icon.svg"
                alt="Indipendente e Green-icon"
                className="icon"
              />
            </div>
            <div className="contentt">
              <h3>Indipendente e Green</h3>
              <p>
                dalle fonte non rinnovabili non è più un'utopia. S.i.r.e.
                fornisce l'accesso a fonti energetiche green anche a chi non ha
                un tetto di proprietà.
              </p>
            </div>
          </div>
          <div className="feature-one">
            <div className="image">
              <img
                src="/images/Connesso-icon.svg"
                alt="Connesso-icon"
                className="icon"
              />
            </div>
            <div className="contentt">
              <h3>Connesso</h3>
              <p>
                Il sistema si connette ai dispositivi Alexa, Google,
                elettrodomestici 2.0 wi-fi. Tramite l'app accedi ai dati di
                produzione dell'energia e ricevi notifiche e suggerimenti per
                l'utilizzo ottimale dell'energia autoprodotta.
              </p>
            </div>
          </div>
          <div className="feature-one">
            <div className="image">
              <img
                src="/images/Resistente-icon.svg"
                alt="Resistente"
                className="icon"
              />
            </div>
            <div className="contentt">
              <h3>Resistente</h3>
              <p>
                Il sistema è realizzato con un rivestimento protettivo,
                impermeabile, isolante e resistente a fenomeni atmosferici
                aggressivi, all'abrasione, urti e graffi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
