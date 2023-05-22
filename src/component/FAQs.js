import React from "react";

const FAQs = () => {
  const plus = <img src="/images/plus.svg" alt="plus" />;
  const minus = <img src="/images/minus.svg" alt="minus" />;

  return (
    <div className="container">
      <div className="heading-">
        <h1>Frequently Asked Questions</h1>
        <hr className="about-hr" />
      </div>
      <div className="elicp">
        <img src="/images/eclipe.svg" alt="eclipe" />
      </div>
      <div className="container offer open_qus quss">
        <div className="qus">
          <div className="dash_icon">{minus}</div>
          <h4>Dove si monta S.I.R.E.?</h4>
        </div>
        <div className="short_detaail ans">
          <p>
            S.I.R.E. può essere montato come una tenda sul balcone o come
            pensilina sulla vetrina, porta, finestra
          </p>
        </div>
      </div>
      <div className="container offer open_qus">
        <div className="qus">
          <div className="dash_icon">{plus}</div>
          <h4>Chi monta l' impianto S.I.R.E.?</h4>
        </div>
      </div>
      <div className="container offer open_qus">
        <div className="qus">
          <div className="dash_icon">{plus}</div>
          <h4>E' necessario richiedere autorizzazioni al condominio?</h4>
        </div>
      </div>
      <div className="container offer open_qus">
        <div className="qus">
          <div className="dash_icon">{plus}</div>
          <h4>E' necessario predisporre pratiche per il GSE? </h4>
        </div>
      </div>
      <div className="container offer open_qus">
        <div className="qus">
          <div className="dash_icon">{plus}</div>
          <h4>L' impianto è garantito? </h4>
        </div>
      </div>
      <div className="container offer open_qus">
        <div className="qus">
          <div className="dash_icon">{plus}</div>
          <h4>E' possibile usufruire di bonus fiscali?</h4>
        </div>
      </div>
      <div className="bttn">
        <button className="btn-green">Collegati al sole</button>
      </div>
    </div>
  );
};

export default FAQs;
