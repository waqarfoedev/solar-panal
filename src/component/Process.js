import React from "react";

const Process = () => {
  return (
    <div id="process">
      <div className="container">
        <div className="heading-">
          <h1>Connettiti al sole anche tu</h1>
          <hr className="about-hr" />
        </div>
        <div className="bx">
          <div className="b">
            <img
              src="/images/Richiedi un Preventivo.svg"
              alt="Richiedi un Preventivo"
            />
            <div className="offer bb">
              <div className="ccard">
                <div>
                  <img
                    src="/images/Richiedi un Preventivo-icon.svg"
                    alt="Richiedi un Preventivo"
                  />
                  <div>
                    <h4>Richiedi un Preventivo</h4>
                  </div>
                </div>
                <div className="short_detaail">
                  <p>
                    Senza impegno un nostro Solar expert ti contatterâ per
                    verificare Ie tue esirenze ditilizzn
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="b">
            <img
              src="/images/Verifica la compatibilitâ.svg"
              alt="Verifica la compatibilitâ"
            />
            <div className="offer bb">
              {" "}
              <div className="ccard">
                <div>
                  <img
                    src="/images/Verifica-icon.svg"
                    alt="Verifica la compatibilitâ"
                  />
                  <div>
                    <h4>Verifica la compatibilitâ</h4>
                  </div>
                </div>
                <div className="short_detaail">
                  <p>
                    Verifica immediata della necessitâ tecniche di installazione
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="b">
            <img src="/images/Installazione.svg" alt="Installazione" />
            <div className="offer bb">
              <div className="ccard">
                <div>
                  <img
                    src="/images/Installazione-icon.svg"
                    alt="Installazione"
                  />
                  <div>
                    <h4>Installazione</h4>
                  </div>
                </div>
                <div className="short_detaail">
                  <p>
                    Un instalIatore qualificato Solar Innovatio posizionerâ il
                    SIRE in massimo 2 ore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="b ">
            <img
              src="/images/Enjoy your Sun Power.svg"
              alt="Enjoy your Sun Power"
            />
            <div className="offer bb bbb">
              {" "}
              <div className="ccard">
                <div>
                  <img src="/images/Sun-icon.svg" alt="Enjoy your Sun Power" />
                  <div>
                    <h4>Enjoy your Sun Power</h4>
                  </div>
                </div>
                <div className="short_detaail">
                  <p>Connettiti alla APP e goditi la tua energia solare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bttn">
        <button className="btn-green">Collegati al sole</button>
      </div>
    </div>
  );
};

export default Process;
