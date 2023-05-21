import React from "react";

const Footer = () => {
  return (
    <div className="footeer">
      <div className="container">
        <div className="foter">
          <div className="footer-column flex1">
            <div className="footer-row">
              <img src="/images/Logo-footer.png" alt="Logo-footer" />
            </div>
            <div className="footer-row">
              <h2>
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci maecenas tortor odio Leo dui fermentum tristique urna
                tellus eget amet aliquam.
              </h2>
            </div>
            <div className="footer-row">
              <div className="repeat_logo">
                <img src="/images/image 1.png" alt="image23" />
                <img src="/images/image 1.png" alt="image23" />
                <img src="/images/image 1.png" alt="image23" />
              </div>
              <div className="repeat_logo">
                <img src="/images/image 1.png" alt="image23" />
                <img src="/images/image 1.png" alt="image23" />
                <img src="/images/image 1.png" alt="image23" />
              </div>
            </div>
          </div>
          <div className="footer-column flex2">
            <h1>Quick Links</h1>
            <h2>Home</h2>
            <h2>Chi Siamo</h2>
            <h2>S.I.R.E</h2>
            <h2>SIRE Features</h2>
            <h2>Why SIRE?</h2>
            <h2>SIRE Product</h2>
            <h2>How it Works?</h2>
          </div>
          <div className="footer-column flex2">
            <h1>Useful Links</h1>
            <h2>Help Center</h2>
            <h2>Privacy Policy</h2>
            <h2>Terms & Condition</h2>
            <h2>FAQ</h2>
            <div>
              <h1>Documents</h1>
              <h2>Lindked Here</h2>
            </div>
          </div>
          <div className="footer-column flex4 footer-">
            <h2>Contact Us</h2>
            <h2>
              <div className=" ans contct">
                <img
                  src="/images/location-icon-footer.svg"
                  alt="location-icon"
                />
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci
              </div>
            </h2>
            <h2>
              <div className=" ans contct">
                <img src="/images/mail-icon-footer.svg" alt="mail-icon" />
                email@email.com <br />
                support@email.com
              </div>
            </h2>
            <h2>
              <div className=" ans contct">
                <img src="/images/phone-icon-footer.svg" alt="phone-icon" />
                +29 98595 8998
              </div>
            </h2>
          </div>
        </div>
        <hr />
        <div className="social-link">
          <div className="reserved">All Rights Reserved</div>
          <div className="socials">
            <img
              src="/images/facebook-icon-footer.svg"
              alt="facebook-icon-footer"
            />
            <img src="/images/Insta-icon-footer.svg" alt="Insta-icon-footer" />
            <img src="/images/twitter-icon-footer.svg" alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
