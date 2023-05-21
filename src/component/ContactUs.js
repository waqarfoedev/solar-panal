import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container" id="contact_us">
        <div className="heading-">
          <h1>CONTATTACI</h1>
          <hr className="about-hr" />
        </div>

        <div className="contactus">
          <div className="contactdetail">
            <div className="short_detaail ans contct">
              <img src="/images/location-icon.svg" alt="location-icon" />
              <p>
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci
              </p>
            </div>
            <div className="short_detaail ans contct">
              <img src="/images/mail-icon.svg" alt="mail-icon" />
              <p>
                email@email.com <br />
                support@email.com
              </p>
            </div>
            <div className="short_detaail ans contct">
              <img src="/images/phone-icon.svg" alt="phone-icon" />
              <p>+29 98595 8998</p>
            </div>
            <div className="contect">
              <hr />
              <p>We Will get back to you within 24 hours. Or Call us Now</p>
            </div>
          </div>
          <div className="contactdetail flex2">
            <div className="contactus_form">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <input placeholder="Email" />
            <textarea placeholder="Message" />
            <div className="btn">
              <button className="btn-green">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="elicp_left">
        <img src="/images/elicp_right.svg" alt="eclipe" />
      </div>
    </>
  );
};

export default ContactUs;
