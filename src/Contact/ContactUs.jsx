import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import phone from "./Image/phone-removebg-preview.png";
import chat from "./Image/chat.png";
import NavBar from "../Home/NavBar/index"
import SideBar from "../Home/SideBar/SideBar"
import Footer from "../Home/Build/Footer/index"



function ContactUs() {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div className="contactUs">
        <div className="contactUscontainer">
          <div className="thefirsPart">
            <div className="backGoundOpacity">
              {/* <div className="thecontent"> */}
              <div className="getInTouch">
                <h1>Get in touch</h1>
                <h4>We want to hear from you. Here is how you can reach us...</h4>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="theMainPart">
            <div className="theCard">
              <div className="theLOgoHolder">
                <img src={phone} />
              </div>
              <h3>Talk to Us</h3>
              <p>Interested in helping a child contact us now</p>
              <Link className="Link">+234 8158746613</Link>
              <Link className="Link">+234 8146231232</Link>
            </div>

            <div className="theCard">
              <div className="theLOgoHolder">
                <img src={chat} />
              </div>
              <h3>Contact Child Support</h3>
              <p>
                Sometimes you need a little help from your friends, a little touch
                of love can change a life forever
            </p>
            <a href="https://wa.me/12015548405" target="_blank" message="Hi, Just viewed your NGO Site" rel="noopener noreferrer" style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none"
            }}>
              <button>WhatsApp</button>
            </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
