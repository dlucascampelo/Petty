import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Sidebar from "../components/Sidebar/Sidebar";
import lucasimg from "../images/LucasC.jpg";
import '../styles/pages/about.css';



const About = () => {
  return (
    <div id="page-about">
      <Sidebar />

      <main>
        <div className="about-content-wrapper">
          <img src={lucasimg} alt="LucasCampelo" />
          <h2>Desenvolvido por Lucas Campelo</h2>
          <p>Contato: dvlucascampelo@gmail.com</p>

          <div id="profilelinks">
            <a href="https://github.com/dlucascampelo" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} color="#000" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-campelo-858562186/"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin size={50} color="#0e76a8" />
            </a>
            <a href="https://www.instagram.com/dlucascampelo/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} color="rgba(225,48, 108)" />
            </a>
          </div>

          <div id="site-info">
            <span>
              <hr />
              Petty é um projeto de estudo e foi desenvolvido com a ideia de ajudar a facilitar a
              localização de abrigos de animais para adoção e contato. O design
              original desse site foi criado por Tiago Luchtenberg, e apenas
              levemente modificado por mim. Creditos e agradecimentos a
              Rocketseat.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;
