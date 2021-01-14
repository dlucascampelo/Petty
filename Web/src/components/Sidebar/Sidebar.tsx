import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logoIcon from "../../images/logoicon.svg";

import './sidebar.css'
export default function Sidebar(){
const{goBack} = useHistory();

  return (
    <aside className="app-sidebar">
    <img src={logoIcon} alt="Petty logo" />

    <footer>
      <button type="button" onClick={goBack}>
        <FiArrowLeft size={24} color="#fff" />
      </button>
    </footer>
  </aside>
  )
}