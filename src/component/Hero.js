import React from "react";

const Hero = () => {
  return (
    <div className="containerr">
      <img src="/images/hero-bg.png" className="img-fluid" alt="Banner" />
      <div className="centered">
        <h1>Il tuo accesso al sole</h1>
        <p>
          Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
          assenza di tetto. <br />
          La tua fonte d'energia, gratuita e sostenibile
        </p>
      </div>
    </div>
  );
};

export default Hero;
