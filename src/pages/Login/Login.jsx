import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Google from "../../assets/google2.svg";
import "./login.css";
import { Box, useToast } from "@chakra-ui/react";

const Login = () => {
  const Navigate = useHistory();
  const Dispatch = useDispatch();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    encryptedPassword: "",
  });
  const { email, encryptedPassword } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user data ==> ", userData);
    toast({
      position: "bottom-left",
      status: "success",
      duration: 3000,
      isClosable: true,
      render: () => (
        <div className="bg bg-green p-2 h-24 rounded-xl w-80">
          <p className="text-md text-white">Hello World</p>

          <p className="text-white text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus
          </p>
        </div>
      ),
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="login-container">
      <Header />
      <div className="wrapper">
        <div className="login-sections">
          <div className="login-left">
            <h1 className="text-4xl font-extrabold text-secondary">
              The Leading Web Intelligence Platform
            </h1>
            <p className="text-muted-text mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              est iure iusto. Distinctio expedita alias dolorem commodi
              accusantium voluptatum, quo aspernatur iure nihil ab.
              Voluptatibus, dicta repudiandae nisi praesentium unde placeat
              expedita accusamus soluta facilis velit ab culpa, debitis, fugiat
              provident in.
            </p>
          </div>
          <div className="login-right">
            <div className="auth-wrapper">
              <div className="auth-head text-center">
                <h1 className="text-3xl font-black">Login</h1>
                <p className="text-muted-text text-sm">
                  Lorem ipsum dolor sit amet consectetur agrdhu <br />{" "}
                  adipisicing elit. Ratione, cumque.
                </p>
              </div>

              <div className="flex flex-col mt-10 px-8">
                <button className="social-btn ">
                  <span className="mr-2">
                    <img src={Google} alt="" />
                  </span>{" "}
                  Sign in with Google
                </button>
              </div>

              <div className="flex mt-10 px-8 items-center justify-evenly">
                <span className="line"></span> <span>or</span>{" "}
                <span className="line"></span>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="">
                  <div className="flex flex-col mt-8 px-8">
                    <label className="text-sm" htmlFor="name">
                      Email{" "}
                      <span className="text-primary text-xs -mt-2">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter your password"
                      className="px-3 outline-none text-sm mt-1 inp-auth"
                    />
                  </div>
                  <div className="flex flex-col mt-6 px-8">
                    <label className="text-sm" htmlFor="name">
                      Password{" "}
                      <span className="text-primary text-xs -mt-2">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      type="password"
                      name="encryptedPassword"
                      value={encryptedPassword}
                      placeholder="Enter your password"
                      className="px-3 outline-none text-sm mt-1 inp-auth"
                    />
                  </div>
                  <div className="mt-2 px-8 text-right">
                    <span
                      onClick={() =>
                        Navigate.push({
                          pathname: "/forgotpassword",
                          // state: email,
                        })
                      }
                      className="text-primary text-xs cursor-pointer"
                    >
                      Forgot password?
                    </span>
                  </div>
                  <div className="flex flex-col mt-10 px-8">
                    <button type="submit" className="auth-btn w-full">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
