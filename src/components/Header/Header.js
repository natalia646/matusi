import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import Download from "../ButtonDownload/Download";

const Header = () => {
  const links = ["/", "/", "/", "/contact"];
  const nameLink = ["Про додаток", "Відгуки", "Умови користування", "Контакти"];

  const [activeLink, setActiveLink] = useState(0);

  return (
    <header className={style.header_container}>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <div className={style.links}>
        {links.map((item, i) => {
          return (
            <Link
              key={i}
              onClick={() => setActiveLink(i)}
              className={`${style.link} ${
                i === activeLink ? style.active : ""
              } `}
              to={item}
            >
              {nameLink[i]}
            </Link>
          );
        })}
        <Download className={style.button_download} />
      </div>
    </header>
  );
};

export default Header;
