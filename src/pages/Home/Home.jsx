import React from "react";
import "./home.css";
import "../../components/Header/header.css";
import Header from "../../components/Header/Header";
import Dash from "../../assets/dash.svg";
import Hero from "../../assets/imghero.png";
import Paypal from "../../assets/paypal.svg";
import Google from "../../assets/google.svg";
import Dropbox from "../../assets/Dropbox.svg";
import Browser1 from "../../assets/Browser1.png";
import F1 from "../../assets/f1.svg";
import F2 from "../../assets/f2.svg";
import F3 from "../../assets/f3.svg";
import CF1 from "../../assets/CF1.svg";
import CF2 from "../../assets/CF2.svg";
import Integration from "../../assets/Integration.svg";
import Tick from "../../assets/tick.svg";
import StatsImg from "../../assets/stats.svg";
import Pattern from "../../assets/Pattern.svg";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
import Presence from "../../assets/Presence.svg";
import { BiCaretDown } from "react-icons/bi";
import { IoIosOptions, IoIosClose } from "react-icons/io";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <FeatureSection />
      <CoreFeature />
      <Integrations />
      <Stats />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
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
            <h1 className="lnd-head text-secondary">
              Create Your <span className="coloured">Digital Presence </span>{" "}
              That Get’s You{" "}
              <span className="relative w-10">
                {" "}
                Hired{" "}
                <img
                  src={Dash}
                  className="absolute bottom-1 right-0 w-40"
                  alt=""
                />{" "}
              </span>{" "}
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

const FeatureSection = () => {
  return (
    <div className="feature-container flex items-center justify-center py-20">
      <div className="wrapper-container flex flex-col justify-center items-center ">
        <div className="feature-head flex flex-col items-center">
          <p className="feature-sub  text-primary">QUALITY FEATURES</p>
          <h1 className="text-4xl mt-3 font-bold">
            Meet exciting feature of app
          </h1>
        </div>
        <div className="feature-btm flex justify-evenly w-full mt-20">
          <div className="feature-card flex flex-col items-center">
            <div className="h-24 w-24 fe-img-bg1 fe-bg">
              <img className="" src={F1} alt="" />
            </div>
            <h2 className="text-xl font-bold text-secondary mt-6">
              Vector Editing
            </h2>
            <p className="mt-5 leading-7  text-sm text-center text-muted-text">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>

          <div className="feature-card flex flex-col items-center">
            <div className="h-24 w-24 fe-img-bg2 fe-bg">
              <img className="" src={F2} alt="" />
            </div>
            <h2 className="text-xl font-bold text-secondary mt-6">
              Quality & short-period
            </h2>
            <p className="mt-5 leading-7  text-sm text-center text-muted-text">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>

          <div className="feature-card flex flex-col items-center">
            <div className="h-24 w-24 fe-img-bg3 fe-bg">
              <img className="" src={F3} alt="" />
            </div>
            <h2 className="text-xl font-bold text-secondary mt-6">
              Vector Editing
            </h2>
            <p className="mt-5 leading-7  text-sm text-center text-muted-text">
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreFeature = () => {
  return (
    <div className="core-feature flex items-center justify-center">
      <div className="core-inner flex mx-36 items-center justify-center">
        <div className="core-img flex justify-center items-center my-auto">
          <img src={Browser1} className="" alt="" />
        </div>
        <div className="core-content">
          <div className="feature-head flex flex-col">
            <p className="feature-sub  text-primary">CORE FEATURES</p>
            <h1 className="text-4xl mt-3 line-14 font-bold break-words ">
              Smart Jackpots that you may love this
            </h1>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.5,
            }}
            className="cf-card w-full flex px-4 py-6 mt-8 items-center rounded-3xl"
          >
            <img src={CF1} alt="" />
            <div className="cf-card-content ml-5 mr-4">
              <p className="font-medium text-lg">Smart Features</p>
              <p className="text-sm font-light text-muted-text">
                Get your blood tests delivered at let home collect sample from
                the victory of the managments your blood tests.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.5,
            }}
            className="cf-card w-full flex px-4 py-6 mt-4 items-center rounded-3xl"
          >
            <img src={CF2} alt="" />
            <div className="cf-card-content ml-5 mr-4">
              <p className="font-medium text-lg">Secure Content</p>
              <p className="text-sm font-light text-muted-text">
                Get your blood tests delivered at let home collect sample from
                the victory of the managments your blood tests.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Integrations = () => {
  return (
    <div className="flex intgretion-container ">
      <div className="flex inte-inner">
        <div className="inte-left ml-20">
          <p className="feature-sub  text-primary">BEHIND THE DESIGNS</p>
          <h1 className="text-4xl mt-3 line-14 font-bold break-words text-secondary ">
            Smart Jackpots that you may love this
          </h1>
          <p className="text-secondary mt-8">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <button className="primary-btn explore-btn mt-10">Explore</button>
        </div>
        <div className="inte-right">
          <img src={Integration} alt="" />
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-inner">
        <div className="stats-img-cont">
          <img src={StatsImg} alt="" className="stats-img" />
        </div>
        <div className="stats-content">
          <p className="feature-sub  text-primary">BEHIND THE DESIGNS</p>
          <h1 className="text-4xl mt-3 line-14 font-bold break-words text-secondary ">
            Smart Jackpots that you may love this
          </h1>
          <p className="text-muted-text mt-8 leading-7">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <p className="flex mt-6">
            <img src={Tick} alt="" className="tick mr-3" /> Unlimited design
            possibility
          </p>
          <p className="mt-6 flex">
            <img src={Tick} alt="" className="tick mr-3" /> Unlimited design
            possibility
          </p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.5,
            }}
            className="mt-12 text-secondary flex items-center exp-stats cursor-pointer"
          >
            Explore Details{" "}
            <motion.span
              animate={{
                x: [0, 10, 0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
              }}
            >
              {" "}
              <MdDoubleArrow className=" ml-2" />{" "}
            </motion.span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="test-container">
      <div className="test-inner">
        <div className="test-head">
          <h1 className="text-4xl line-14 font-bold break-words text-secondary ">
            What{" "}
            <span className="relative w-10 text-primary">
              {" "}
              Clients{" "}
              <img
                src={Dash}
                className="absolute -bottom-1 right-0 w-40"
                alt=""
              />{" "}
            </span>{" "}
            Say About Us ?
          </h1>
          <p className="feature-sub mt-3  text-muted-text">
            BEHIND THE DESIGNS
          </p>
        </div>

        <div className="test-holder">
          <div className="test-upper">
            <motion.div
              className="test-card box"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-secondary font-light">
                I would like to take this oppertunity to thank SA Places for the
                great service rendered to us and in particular Estelle. You got
                me the best place ever in just a few moments after I spoke to
                you.
              </p>
              <div className="test-ico">
                <div className="test-img">
                  <img src="https://mihir-verma.com/assets/img/me.jpg" alt="" />
                </div>
                <div className="test-info ml-3">
                  <p className="text-primary text-lg font-semibold">
                    Mihir Verma
                  </p>
                  <p className="text-muted-text text-sm">
                    SDE-1 @GYTWORKZ Technologies
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="test-card box"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-secondary font-light">
                I would like to take this oppertunity to thank SA Places for the
                great service rendered to us and in particular Estelle. You got
                me the best place ever in just a few moments after I spoke to
                you.
              </p>
              <div className="test-ico">
                <div className="test-img">
                  <img
                    src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                </div>
                <div className="test-info ml-3">
                  <p className="text-primary text-lg font-semibold">
                    Kristin Keller
                  </p>
                  <p className="text-muted-text text-sm">
                    SDE-1 @Pava Solutions.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="test-card box"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-secondary font-light">
                I would like to take this oppertunity to thank SA Places for the
                great service rendered to us and in particular Estelle. You got
                me the best place ever in just a few moments after I spoke to
                you.
              </p>
              <div className="test-ico">
                <div className="test-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlKfpPCrEvq1KXafhoXcwGeONzl_yjG3W1wCvhiBceOPHYIyt1OMXsCqYq1oakn41mwo&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="test-info ml-3">
                  <p className="text-primary text-lg font-semibold">
                    Easan Miller
                  </p>
                  <p className="text-muted-text text-sm">
                    SDE-1 @Dodge Architects
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="test-upper">
            <motion.div
              className="test-card box"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-secondary font-light">
                I would like to take this oppertunity to thank SA Places for the
                great service rendered to us and in particular Estelle. You got
                me the best place ever in just a few moments after I spoke to
                you.
              </p>
              <div className="test-ico">
                <div className="test-img">
                  <img
                    src="https://media.istockphoto.com/id/870079404/photo/i-cant-be-bothered.jpg?s=612x612&w=0&k=20&c=xU4s8Z_mCmtqcT10thNLH3EBvH9SNMANpa1Rp6UaOp8="
                    alt=""
                  />
                </div>
                <div className="test-info ml-3">
                  <p className="text-primary text-lg font-semibold">
                    Ajay Sharma
                  </p>
                  <p className="text-muted-text text-sm">SDE-1 @PLASMA INV</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="test-card box"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-secondary font-light">
                I would like to take this oppertunity to thank SA Places for the
                great service rendered to us and in particular Estelle. You got
                me the best place ever in just a few moments after I spoke to
                you.
              </p>
              <div className="test-ico">
                <div className="test-img">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
                    alt=""
                  />
                </div>
                <div className="test-info ml-3">
                  <p className="text-primary text-lg font-semibold">
                    Jhon Lavander
                  </p>
                  <p className="text-muted-text text-sm">SDE-1 @Futtle</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="test-card box"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-secondary font-light">
                I would like to take this oppertunity to thank SA Places for the
                great service rendered to us and in particular Estelle. You got
                me the best place ever in just a few moments after I spoke to
                you.
              </p>
              <div className="test-ico">
                <div className="test-img">
                  <img
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/photo-of-woman-wearing-yellow.jpg"
                    alt=""
                  />
                </div>
                <div className="test-info ml-3">
                  <p className="text-primary text-lg font-semibold">
                    Alexa Aaamad
                  </p>
                  <p className="text-muted-text text-sm">SDE-1 @Testost</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="pricing-container">
      {/* <div className="pricing-bg">
        <img src={Pattern} alt="" />
      </div> */}
      <div className="pricing-inner">
        <div className="test-head mt-10">
          <p className="feature-sub mb-4">PRICING PLAN</p>
          <h1 className="text-4xl line-14 font-bold break-words ">
            What{" "}
            <span className="relative w-10 text-primary">
              {" "}
              Deal{" "}
              <img
                src={Dash}
                className="absolute -bottom-1 right-0 w-40"
                alt=""
              />{" "}
            </span>{" "}
            Suits The Perfect
          </h1>
        </div>

        <div className="pricing-card-container">
          <div className="pricing-card pc1">
            <p className="text-xl font-bold">Free Plan</p>
            <p className="text-sm mt-3">For Small teams or office</p>
            <div className="text-sm mt-14">
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Ultimate access
                to all course, exercises and assessments
              </p>
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Free acess for
                all kind of exercise corrections with downloads.
              </p>
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Total assessment
                corrections with free download access system.
              </p>
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Unlimited
                download of courses on the mobile app contents.
              </p>
            </div>
            <button className="primary-btn mt-20">Start Now</button>
          </div>

          <div className="pricing-card pc2 relative">
            <p className="text-xs absolute top-7 p-1.5 bg-green rounded-lg">
              Recommended
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">Premium</p>
                <p className="text-sm mt-3">For startup Enterprises</p>
              </div>
              <div>
                <p className="text-sm text-muted-text">Start from</p>
                <p className="text-xl font-bold text-primary">$49.99/mo</p>
              </div>
            </div>
            <div className="text-sm mt-14">
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Ultimate access
                to all course, exercises and assessments
              </p>
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Free acess for
                all kind of exercise corrections with downloads.
              </p>
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Total assessment
                corrections with free download access system.
              </p>
              <p className="flex mt-6">
                <img src={Tick} alt="" className="tick mr-3" /> Unlimited
                download of courses on the mobile app contents.
              </p>
            </div>
            <button className="primary-btn sec-col mt-20">Start Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="faq-container pb-14">
      <div className="faq-inner">
        <div className="test-head mt-10">
          <p className="feature-sub mb-4 text-muted-text">SUPPORT</p>
          <h1 className="text-4xl line-14 font-bold break-words ">
            Do you have any
            <span className="relative w-10 text-primary">
              {" "}
              questions{" "}
              <img
                src={Dash}
                className="absolute -bottom-1 right-0 w-40"
                alt=""
              />{" "}
            </span>{" "}
            ?
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-evenly -mt-10 faq-cc">
          <div className="flex flex-col faq-card p-4 mt-10">
            <p className="flex text-xl">
              {" "}
              <img src={Tick} alt="" className="mr-3" /> How to contact with
              riders emergency ?{" "}
            </p>
            <p className="text-muted-text ml-8 mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quod delectus deleniti ex, beatae dicta quidem ad
              dolores exercitationem quod delectus deleniti ex, beatae dicta
              quidem ad dolores exercitationem!
            </p>
          </div>

          <div className="flex flex-col faq-card p-4 mt-10">
            <p className="flex text-xl">
              {" "}
              <img src={Tick} alt="" className="mr-3" /> How to contact with
              riders emergency ?{" "}
            </p>
            <p className="text-muted-text ml-8 mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quod delectus deleniti ex, beatae dicta quidem ad
              dolores exercitationem quod delectus deleniti ex, beatae dicta
              quidem ad dolores exercitationem!
            </p>
          </div>

          <div className="flex flex-col faq-card p-4 mt-10">
            <p className="flex text-xl">
              {" "}
              <img src={Tick} alt="" className="mr-3" /> How to contact with
              riders emergency ?{" "}
            </p>
            <p className="text-muted-text ml-8 mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quod delectus deleniti ex, beatae dicta quidem ad
              dolores exercitationem quod delectus deleniti ex, beatae dicta
              quidem ad dolores exercitationem!
            </p>
          </div>

          <div className="flex flex-col faq-card p-4 mt-10">
            <p className="flex text-xl">
              {" "}
              <img src={Tick} alt="" className="mr-3" /> How to contact with
              riders emergency ?{" "}
            </p>
            <p className="text-muted-text ml-8 mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quod delectus deleniti ex, beatae dicta quidem ad
              dolores exercitationem quod delectus deleniti ex, beatae dicta
              quidem ad dolores exercitationem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="test-head mt-10 footer-head">
        <p className="feature-sub mb-4">NEWSLETTER</p>
        <h1 className="text-4xl line-14 font-bold break-words ">
          Subscribe to our{" "}
          <span className="relative w-10 text-primary">
            {" "}
            Blog
            <img
              src={Dash}
              className="absolute -bottom-1 right-0 w-40"
              alt=""
            />{" "}
          </span>{" "}
        </h1>

        <div className="inp-div f-inp mt-14">
          <input
            className="input  footer-inp"
            placeholder="Your Email"
            type="text"
          />{" "}
          <button className="primary-btn inp-btn ml-2 footer-btn">
            Subscribe
          </button>
        </div>

        <div className="mx-40 mt-20 flex justify-between flex-wrap items-center fl-container footer-lower-container">
          <div className="header-logo">
            <span className="header-icon">
              <img src={Presence} alt="presence" />
            </span>{" "}
            <span className="icon-text f-text">Presence</span>
          </div>

          <div className="flex flex-wrap fuld-cont">
            <ul className="flex flex-wrap f-ul-cont">
              <li className="">Resume</li>
              <li className="ml-4">Integrations </li>
              <li className="ml-4">Profile Hosting </li>
              <li className="ml-4">FAQ's</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
