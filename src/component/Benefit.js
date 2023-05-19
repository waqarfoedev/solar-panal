import React from "react";

const Benefit = () => {
  return (
    <>
      <div className="container" id="benefit">
        <div className=".heading- benefit">
          <h1>Perchè S.I.R.E.</h1>
          <hr className="about-hr" />
        </div>
        <div className="cards">
          <div className="card">
            <img
              src="/images/Risparmio Energetico-icon.svg"
              alt="Risparmio Energetico-icon"
            />
            <div className="contenttt">
              <h3>Risparmio Energetico</h3>
              <p>
                Risparmia da un minimo del 60% sulla bolletta fino
                all'indipendenza energetica anche grazie alla schermatura solare
                che consente una riduzione fino al 95% dei raggi UV e quindi un
                minor utilizzo del condizionatore.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/Mobilità Elettrica-icon.svg"
              alt="Mobilità Elettrica"
            />
            <div className="contenttt">
              <h3>Risparmio Energetico</h3>
              <p>
                Risparmia da un minimo del 60% sulla bolletta fino
                all'indipendenza energetica anche grazie alla schermatura solare
                che consente una riduzione fino al 95% dei raggi UV e quindi un
                minor utilizzo del condizionatore.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/Comunità Energetica-icon.svg"
              alt="Comunità Energetica"
            />
            <div className="contenttt">
              <h3>Risparmio Energetico</h3>
              <p>
                Risparmia da un minimo del 60% sulla bolletta fino
                all'indipendenza energetica anche grazie alla schermatura solare
                che consente una riduzione fino al 95% dei raggi UV e quindi un
                minor utilizzo del condizionatore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ban">
        <div className=" container banner">
          <div className="contenttt">
            <img src="/images/Superbonus-icon.svg" alt="Superbonus-icon" />
            <h3> 110%</h3>
            <p>Superbonus</p>
          </div>
          <div className="contenttt">
            <img src="/images/Detrazione-icon.svg" alt="Detrazione-icon" />
            <h3> 65%</h3>
            <p>Detrazione DOMOTICA</p>
          </div>
          <div className="contenttt">
            <img
              src="/images/Progettazione-icon.svg"
              alt="Progettazione-icon"
            />
            <h3></h3>
            <p>Progettazione personalizzata</p>
          </div>
          <div className="contenttt">
            <img src="/images/consulenza-icon.svg" alt="consulenza-icon " />
            <h3></h3>
            <p>consulenza fiscale sui bonus</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
