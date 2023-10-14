import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "./redux/slices/activeSlice";
import line from "../components/assets/icons/line.svg";
import logo from "../components/assets/logo/logo.svg";
import open from "./assets/icons/open-menu.svg";
import close from "./assets/icons/close.svg";
import style from "../scss/Header.module.scss";
import Download from "./Download";


const links = ["/", "/", "/terms", "/contact"];
const nameLink = ["Про додаток", "Відгуки", "Умови користування", "Контакти"];

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { activeIndex } = useSelector((state) => state.activeIndex);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (location.pathname) {
      const url = links.find((link) => link === location.pathname);
      dispatch(setActiveIndex(links.indexOf(url)));
    }
  });

  const getActiveID = (i) => {
    setIsMobile(true)
    dispatch(setActiveIndex(i));
  }

  return (
    <header className={style.container}>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <img
        onClick={() => setIsMobile(!isMobile)}
        className={style.menu}
        src={isMobile ? open : close}
        alt="menu"
      ></img>

      <div className={`${style.links} ${isMobile? style.open: style.close}`}>
        {links.map((item, i) => {
          return (
            <Link
              to={item}
              key={i}
              onClick={() => getActiveID(i)}
              className={`${style.link} ${
                i === activeIndex ? style.active : ""
              } `}
            >
              <img
                src={line}
                alt="line"
                className={i === activeIndex ? style.line : style.not_line}
              ></img>
              {nameLink[i]}
            </Link>
          );
        })}
        <span className={style.download}><Download/></span>
      </div>
    </header>
  );
};

export default Header;
