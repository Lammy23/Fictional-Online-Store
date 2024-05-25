import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AppStore from "./svg/AppStore";
import PlayStore from "./svg/PlayStore";

const styles = {
  brand: {
    backgroundColor: "black",
    color: "white",
  },
};

function Footer() {
  return (
    <div style={{ paddingTop: "25px" }}>
      <div className="bg-colored" style={{ height: "250px" }}>
        <div className="row" style={{ justifyContent: "space-around" }}>
          <div className="row">
            <a>Terms of Use</a>
            <div style={{ width: "15px" }} />
            <a>Privacy Policy</a>
            <div style={{ width: "15px" }} />
            <a>Contact Us</a>
          </div>
          <div className="column" style={{ width: "350px" }}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="icon-button" style={styles.brand}>
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="icon-button" style={styles.brand}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="icon-button" style={styles.brand}>
                <FontAwesomeIcon icon={faDiscord} />
              </div>
              <div className="icon-button" style={styles.brand}>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="icon-button" style={styles.brand}>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="icon-button" style={styles.brand}>
                <FontAwesomeIcon icon={faTwitch} />
              </div>
            </div>
            <div className="row" style={{ justifyContent: "space-between " }}>
              <div className="normal-button">
                <AppStore />
              </div>
              <div className="normal-button">
                <PlayStore />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
