import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../redux/slices/activeSlice";
import line from "../assets/icons/line.svg";
import logo from "../assets/logo/logo.svg";
import open from "../assets/icons/open-menu.svg";
import close from "../assets/icons/close.svg";
import style from "./Header.module.scss";
import Download from "../Home_components/Download/Download";


const links = ["/", "/", "/terms", "/contact"];
const nameLink = ["Про застосунок", "Відгуки", "Умови користування", "Контакти"];
const linksMobile = [
  {
    link: "/refusal",
    label: "Відмова від відповідальності",
  },
  {
    link: "/privacy",
    label: "Політика конфіденційності",
  },
];

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
    dispatch(setActiveIndex(i));
    setIsMobile(true);
  };

  return (
    <header>
      <div className={style.container}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="logo"></img>
        </Link>
        <img
          onClick={() => setIsMobile(!isMobile)}
          className={style.menu}
          src={isMobile ? open : close}
          alt="menu"
        ></img>

        <div
          className={`${isMobile ? style.open : style.close}`}
        >
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
          
          <span className={style.download}>
            <Download />
          </span>
          <span className={style.menu_mobile}>
            
            {linksMobile.map((item, i) => (
              <Link key={i} className={style.contact} to={item.link}onClick={()=>{setIsMobile(true);}} >
                {item.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
