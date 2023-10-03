import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../redux/slices/activeSlice";
import logo from "../assets/logo.svg";
import style from "./Header.module.scss";
import Download from "../ButtonDownload/Download";
import line from "../assets/line.svg";


const Header = () => {
  const links = ["/", "/#reviews", "/terms", "/contact"];
  const nameLink = ["Про додаток", "Відгуки", "Умови користування", "Контакти"];
  const dispatch = useDispatch()
  const {activeIndex} = useSelector((state) => state.activeIndex);

  const location = useLocation();
  console.log(location.pathname)


  useEffect(()=>{
    if(location.pathname){
      links.find(link => link === location.pathname);
    }
  })

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
              className={`${style.link} ${i === activeIndex ? style.active : "" } `}>
              <img
                src={line}
                alt="line"
                className={i === activeIndex ? style.line : style.not_line}></img>
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
