import React from "react";

const SIRE = () => {
  return (
    <div className="container" id="sire">
      <div className="box-1">
        <img
          className="image-0"
          src="/images/frame-left.svg"
          alt="Frame left"
        />
        <img
          className="image-4"
          src="/images/frame-right.svg"
          alt="Frame right"
        />
        <img className="image-2" src="/images/Ellipse 1.png" alt="Ellipse 1" />
        <img className="image-1" src="/images/image-1.png" alt="imagee-1" />

        <img className="image-3" src="/images/image-2.png" alt="immage-2" />
      </div>
      <div className="box-2">
        <div className="frameCircle">
          <img
            src="/images/frame-right.svg"
            alt="frame-1"
            className="frame-1"
          />
          <img src="/images/circle.svg" alt="circle" className="circle" />
        </div>
        <div className="contentt">
          <h1 className="sire title">S.I.R.E</h1>
          <h1 className="heading-sire">Smart Integrated Renewable Energy</h1>
          <hr className="sire hr" />
          <p className="paragraph-sire">
            S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per
            la produzione, conversione e gestione dell'energia solare, studiato
            specificatamente per installazioni all'interno di condomini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SIRE;
