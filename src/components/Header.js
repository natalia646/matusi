import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "./redux/slices/activeSlice";
import line from "../components/assets/line.svg";
import logo from "../components/assets/logo.svg";
import style from "../scss/Header.module.scss";
import Download from "./Download";


const links = ["/", "/", "/terms", "/contact"];
const nameLink = ["Про додаток", "Відгуки", "Умови користування", "Контакти"];


const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { activeIndex } = useSelector((state) => state.activeIndex);

  useEffect(() => {
    if (location.pathname) {
      const url = links.find((link) => link === location.pathname);
      dispatch(setActiveIndex(links.indexOf(url)));
    }
  });


  return (
    <header className={style.header_container}>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <div className={style.links}>
        {links.map((item, i) => {
          return (
            <Link
              to={item}
              key={i}
              onClick={() => dispatch(setActiveIndex(i))}
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
        <Download className={style.button_download} />
      </div>
    </header>
  );
};

export default Header;