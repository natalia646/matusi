import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import { Link, useLocation } from "react-router-dom";
import line from "../assets/icons/line.svg";
import logo from "../assets/logo/logo.svg";
import open from "../assets/icons/open-menu.svg";
import close from "../assets/icons/close.svg";
import style from "./Header.module.scss";
import Download from "../Home_components/Download/Download";

const links = ["/", "/", "/terms", "/contact"];
const nameLink = [
  "Про застосунок",
  "Відгуки",
  "Умови користування",
  "Контакти",
];
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
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(true);
  const { activeIndex, setActiveIndex } = useContext(Context);

  useEffect(() => {
    if (location.pathname) {
      const url = links.find((link) => link === location.pathname);
      setActiveIndex(links.indexOf(url));
    }
  });

  const getActiveID = (i) => {
    setActiveIndex(i);
    setIsMobile(true);
  };

  return (
  <></>
  );
};


export default Header;

