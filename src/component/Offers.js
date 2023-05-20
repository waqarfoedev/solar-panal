import React from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";

const Offers = () => {
  const image_list_icon = (
    <img
      src="/images/arrow_list_icon.svg"
      className="image"
      alt="arrow list icon"
    />
  );
  const arrow_icon = (
    <img
      src="/images/errow-down-icon.svg"
      alt="errow-down-icon"
      className="arrow"
    />
  );
  return (
    <div className="container" id="offers">
      <div className="heading-">
        <h1>Scegli il tuo SIRE</h1>
        <hr className="about-hr" />
      </div>
      <div className="offers">
        <div className="offer">
          <img src="/images/post-1.png" alt="post-2" />
          <div className="textt">
            <h2 className="sire title">S.I.R.E Direct</h2>
            <div className="list">
              <div>
                {image_list_icon}
                <p>Sistema Plugin</p>
              </div>
              <div>
                {image_list_icon}
                <p>
                  Struttura meccanizzata in poliuera e sensoristica intelligente
                </p>
              </div>
              <div>
                {image_list_icon}
                <p>Pannelli alta efficienza da 1KW</p>
              </div>
              <div>
                {image_list_icon}
                <p>Inverter e conne ssione aII'impianto domestico</p>
              </div>
              <div>
                {image_list_icon}
                <p>App di controllo e gesti one</p>
              </div>
            </div>
          </div>
          <div className="per">
            <h4>CONSIGLIATO PER:</h4>
            <div className="icons">
              <div className="options">
                <div className=" option">
                  <img src="/images/Detrazione-icon.svg" alt="Device" />
                  <p>Devices</p>
                </div>
              </div>
              <div className="options">
                <div className=" option">
                  <img src="/images/Families-icn.svg" alt="Families" />
                  <p>Families</p>
                </div>
              </div>
            </div>
            <div className="list hea">
              <div className=" heading_with_arrow">
                <h4>Scopri le caratteristiche tecniche</h4>
                {arrow_icon}
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>Te mpo di ricarica medio in estate</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>TBD Tempo di scarica a 16A.</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>TBD Autonomia dalla rete elettrica.</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>TBD Autonomia in casa di blackout.</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>Te mpo di ricarica medio in estate.</p>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================================================= */}
        <div className="offer">
          <img src="/images/post-2.png" alt="post-2" />
          <div className="textt">
            <h2 className="sire title">S.I.R.E Full</h2>
            <div className="list">
              <div>
                {image_list_icon}
                <p>
                  Struttura meccanizzata in poliuera e sensoristica intelligente
                </p>
              </div>
              <div>
                {image_list_icon}
                <p>Pannelli alta efficienza da 1KW</p>
              </div>
              <div>
                {image_list_icon}
                <p>Inverter e conne ssione aII'impianto domestico</p>
              </div>
              <div>
                {image_list_icon}
                <p>App di controllo e gesti one</p>
              </div>
            </div>
          </div>
          <div className="per">
            <h4>CONSIGLIATO PER:</h4>
            <div className="icons">
              <div className="options">
                <div className=" option">
                  <img src="/images/Detrazione-icon.svg" alt="Device" />
                  <p>Devices</p>
                </div>
              </div>
              <div className="options">
                <div className=" option">
                  <img src="/images/Families-icn.svg" alt="Families" />
                  <p>Families</p>
                </div>
              </div>
            </div>
            <div className="list hea">
              <div className=" heading_with_arrow">
                <h4>Title here if they have othervise remove this</h4>
                {arrow_icon}
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>Siste ma 2 kW con accumuIo.</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>Tempo di ricarica medio in estate is 5 ore e 30 minuti</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>Te mpo di scarica a 16A is 8 ore.</p>
              </div>
              <div>
                <VscCircleLargeFilled className="sire image" />
                <p>Autonomia dalla rete eIettrica 62Po.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
