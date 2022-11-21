import React from "react";
import "./home.css";
import "../../components/Header/header.css";
import Header from "../../components/Header/Header";
import Dash from "../../assets/dash.svg";
import Hero from "../../assets/imghero.png";
import Paypal from "../../assets/paypal.svg"
import Google from "../../assets/google.svg"
import Dropbox from "../../assets/Dropbox.svg"
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="wrapper-container">
        <div className="inner-hero">
          <div className="left-land">
            <h1 className="lnd-head">
              Create Your <span className="coloured">Digital Presence </span>{" "}
              That Get’s You Hired{" "}
              {/* <span>
                <img src={Dash} alt="dash" className="dash" />
              </span> */}
            </h1>
            <p className="lnd-subtext">
              We help build and manage a team of world-class developers <br />
              to bring your vision to life
            </p>
            <div className="inp-div">
              <input
                className="input w-hero"
                placeholder="Your Email"
                type="text"
              />{" "}
              <button className="primary-btn inp-btn">Get Started</button>
            </div>
            <div className="sponser">
              <span>Sponsored by:</span>{" "}
              <div className="spn-imgs">
                <img src={Paypal} alt="" className="spn-img" />
                <img src={Google} alt="" className="spn-img" />
                <img src={Dropbox} alt="" className="spn-img" />
              </div>
            </div>
          </div>
          <div className="right-land">
            {/* <span> */}

            <img src={Hero} alt="" className="hero-img" />
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
