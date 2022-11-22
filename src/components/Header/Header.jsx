import React, { useEffect, useState } from "react";
import Presence from "../../assets/Presence.svg";
import { BiCaretDown } from "react-icons/bi";
import { IoIosOptions, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import "./header.css";

const variants = {
  open: { opacity: 0, x: "0%" },
  closed: { opacity: 1, x: ["100%", "-5%", "0%"] },
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 750)
      );
    }
  }, []);

  return (
    <nav className={`header  ${small ? "white" : ""}`}>
      <div className="wrapper-container head-wrap">
        <div className="nav">
          <div className="header-logo">
            <span className="header-icon">
              <img src={Presence} alt="presence" />
            </span>{" "}
            <span className="icon-text">Presence</span>
          </div>
          <div className="link-div">
            <ul className="header-links">
              <li className="nav-link">Resume</li>
              <li className="nav-link">
                Integrations{" "}
                <span className="drop-icon">
                  <BiCaretDown />
                </span>
              </li>
              <li className="nav-link">
                Profile Hosting{" "}
                <span className="drop-icon">
                  <BiCaretDown />
                </span>
              </li>
              <li className="nav-link">FAQ's</li>
            </ul>
          </div>
          <div className="header-btn">
            <button className="border-btn mar-10">Login</button>
            <button className="primary-btn">Signup</button>
          </div>
          <div onClick={() => setToggle(!toggle)} className="ham">
            <span className="ham-circle">
              <IoIosOptions className="ham-ico" />
            </span>
          </div>
        </div>
      </div>
      {toggle ? <Hammenu setToggle={setToggle} toggle={toggle} /> : null}
    </nav>
  );
};

export default Header;

const Hammenu = ({ setToggle, toggle }) => {
  return (
    <div className="ham-bg">
      <motion.div
        className="ham-menu"
        animate={toggle ? "closed" : "open"}
        variants={variants}
      >
        <div className="flex justify-between items-center">
          <div className="flex ml-3">
            <span className="header-icon">
              <img src={Presence} alt="presence" />
            </span>{" "}
            <span className="icon-text">Presence</span>
          </div>
          <IoIosClose
            className="cursor-pointer"
            size={40}
            onClick={() => setToggle(false)}
          />
        </div>
        <ul className="mt-4">
          <li className="nav-link ham-link">Resume</li>
          <li className="nav-link ham-link">
            Integrations{" "}
            <span className="drop-icon">
              <BiCaretDown />
            </span>
          </li>
          <li className="nav-link ham-link">
            Profile Hosting{" "}
            <span className="drop-icon">
              <BiCaretDown />
            </span>
          </li>
          <li className="nav-link ham-link">FAQ's</li>
        </ul>
        <div className="ham-btns flex flex-col">
          <button className="border-btn mar-10 w-all">Login</button>
          <button className="primary-btn w-all">Signup</button>
        </div>
      </motion.div>
    </div>
  );
};
