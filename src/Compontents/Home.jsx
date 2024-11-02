import React from "react";
import "./Home.css";
import { Banner,Logo } from "../assets/index.js";
import { BsArrowRightCircle } from "react-icons/bs";
const Home = () => {
  return (
    <div class="card">
      <div class="Menu">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Store</li>
        <li>Support</li>
      </div>
      <h1>Unleashing the Future of Technology</h1>
      <a className="view-button" href="nfb">View Products</a>
      <div class="imgBx">
        <img src={Banner} alt=""/>
      </div>
      <div class="content"><img src={Logo} alt=""/></div>
      <div class="content2"><a href="db"><BsArrowRightCircle/></a></div>
      <div class="content3"></div>
      <div class="content4"></div>
    </div>
  );
};

export default Home;
