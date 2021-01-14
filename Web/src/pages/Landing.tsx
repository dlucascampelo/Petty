import React from "react";
import { FiArrowRight, FiInfo} from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/pages/page-landing.css";
import logoimg from "../images/logo.svg";

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt="Petty logo" />

        <main>
          <h1>As vezes, o amor vem em quatro patinhas.</h1>
          <p>Visite abrigos e encontre seu novo amigo.</p>
        </main>

        
        <div className="location">
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </div>
      
        <Link to="/about" className="enter-about">
          < FiInfo  size={30} color="rgba{51,51,51,0.6}"/>
        </Link>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba{51,51,51,0.6}" />
        </Link>
      </div>
    </div>
  );
};
export default Landing;
