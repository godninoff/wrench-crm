import Link from "next/link";
import Image from "next/image";
import news from "../public/images/ic_news.svg";
import search from "../public/images/search.svg";
import table from "../public/images/table.svg";
import calendar from "../public/images/calendar.svg";
import maps from "../public/images/maps.svg";
import widgets from "../public/images/widgets.svg";
import settings from "../public/images/settings.svg";
import triangle from "../public/images/triangle-top.svg";
import profileSettings from "../public/images/profile-settings.svg";
import financeControl from "../public/images/finance-control.svg";
import exit from "../public/images/exit.svg";
import React from "react";

const Menu = () => {
  const [dropMenu, setDropMenu] = React.useState(false);

  const toggleMenu = () => setDropMenu(!dropMenu);

  return (
    <div className="menu-main">
      <h3 className="menu-title">Меню</h3>
      <div className="menu-container">
        <div className="menu-list-container">
          <Image className="menu-icon" src={news} alt="главная" />
          <Link className="menu-name" href="/">
            Главная
          </Link>
        </div>
        <div className="menu-list-container">
          <Image className="menu-icon" src={search} alt="поиск" />
          <Link className="menu-name" href="/address">
            Поиск адресов
          </Link>
        </div>
        <div className="menu-list-container">
          <Image className="menu-icon" src={table} alt="таблицы" />
          <a className="menu-name">Таблицы</a>
        </div>
        <div className="menu-list-container">
          <Image className="menu-icon" src={calendar} alt="календарь" />
          <a className="menu-name">Календарь</a>
        </div>
        <div className="menu-list-container">
          <Image className="menu-icon" src={maps} alt="карты" />
          <a className="menu-name">Карты</a>
        </div>
        <div className="menu-list-container">
          <Image className="menu-icon" src={widgets} alt="виджеты" />
          <a className="menu-name">Виджеты</a>
        </div>
        <div className="menu-list-container">
          <Image className="menu-icon" src={settings} alt="настройки" />
          <a className="menu-name">Настройки</a>
          <Image
            style={{ marginRight: "10px" }}
            className={`menu-triangle ${!dropMenu ? "rotate" : ""}`}
            onClick={toggleMenu}
            src={triangle}
            alt="иконка сортировки вверх"
          />
        </div>
        <div className={`menu-settings-container ${!dropMenu ? "none" : ""}`}>
          <div className="menu-settings">
            <Image
              className="menu-icon"
              src={profileSettings}
              alt="настройки профиля"
            />
            <a className="menu-name">Настройки профиля</a>
          </div>
          <div className="menu-settings">
            <Image
              className="menu-icon"
              src={financeControl}
              alt="управление финансами"
            />
            <a className="menu-name">Управление финансами</a>
          </div>
        </div>

        <div className="menu-list-container">
          <Image className="menu-icon" src={exit} alt="настройки" />
          <a className="menu-name">Выход</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
