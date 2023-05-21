import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletterr">
      <div className="flexnewsletter">
        <div className="subscribe">
          <h3>Subscribe for Newsletter</h3>
          <p>
            Leo dui fermentum tristique urna tellus eget amet aliquam.
            <br /> Id vitae orci maecenas tortor odio
          </p>
        </div>
        <div className="insert_email">
          <input placeholder="Inserisci la tua email" className="input_email" />
          <div className="mail_box">
            <img
              src="/images/email-submit-icon.svg"
              alt="email-submit-icon"
              className="email_btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
