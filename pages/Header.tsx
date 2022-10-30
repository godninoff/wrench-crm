import React from "react";
import Image from "next/image";
import logo from "../public/images/wrench.svg";
import account from "../public/images/account.svg";
import * as FaIcons from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <FaIcons.FaBars className="menu-burger" />
          <Image className="header-icons" src={logo} alt="логотип" />
          <a className="header-text">Wrench CRM</a>
        </div>
        <div className="header-container">
          <Image className="header-icons" src={account} alt="аккаунт" />
          <span className="header-text">Имя Фамилия</span>
        </div>
      </div>
    </>
  );
};

export default Header;
