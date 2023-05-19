import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Offers = () => {
  return (
    <div className="container" id="offers">
      <div className="heading-">
        <h1>Scegli il tuo SIRE</h1>
        <hr className="about-hr" />
      </div>
      <div className="offers">
        <div className="offer">
          <img src="/images/post-1.png" alt="post-1" />
          <div className="textt">
            <h1 className="sire title">S.I.R.E Direct</h1>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Sistema Plugin
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Struttura meccanizzata in poliuera e sensoristica
              intelligente
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Pannelli alta efficienza da 1KW
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Inverter e conne ssione aII'impianto domestico
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; App di controllo e gesti one
            </p>
            <h3>CONSIGLIATO PER:</h3>
            <div className=" options">
              <div>
                <img
                  className="icon"
                  src="/images/Detrazione-icon.svg"
                  alt="Device"
                />
                <p>Devices</p>
              </div>
              <div>
                <img
                  className="icon"
                  src="/images/Families-icn.svg"
                  alt="Families"
                />
                <p>Families</p>
              </div>
            </div>
          </div>
        </div>
        <div className="offer">
          <img src="/images/post-2.png" alt="post-2" />
          <div className="textt">
            <h1 className="sire title">S.I.R.E Direct</h1>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Sistema Plugin
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Struttura meccanizzata in poliuera e sensoristica
              intelligente
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Pannelli alta efficienza da 1KW
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; Inverter e conne ssione aII'impianto domestico
            </p>
            <p>
              <MdArrowForwardIos className="sire" />
              &nbsp; App di controllo e gesti one
            </p>
            <h3>CONSIGLIATO PER:</h3>
            <div className=" options">
              <div>
                <img
                  className="icon"
                  src="/images/Detrazione-icon.svg"
                  alt="Device"
                />
                <p>Devices</p>
              </div>
              <div>
                <img
                  className="icon"
                  src="/images/Families-icn.svg"
                  alt="Families"
                />
                <p>Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
