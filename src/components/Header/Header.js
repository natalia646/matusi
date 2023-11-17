import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import { Link, useLocation } from "react-router-dom";
// import line from "../assets/icons/line.svg";
import logo from "../assets/logo/logo.svg";
import open from "../assets/icons/open-menu.svg";
import close from "../assets/icons/close.svg";
import style from "./Header.module.scss";
import Download from "../Home_components/Download/Download";
import styled from "styled-components";
import { device } from "../../device";

const links = [
  {
    link: "/",
    nameLink: "Про застосунок",
  },
  {
    link: "/",
    nameLink: "Відгуки",
  },
  {
    link: "/terms",
    nameLink: "Умови користування",
  },
  {
    link: "/contact",
    nameLink: "Контакти",
  },
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
    <HeaderBlock>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="logo"></Logo>
        </Link>
        <BurgerMenu
          onClick={() => setIsMobile(!isMobile)}
          src={isMobile ? open : close}
          alt="menu"
        ></BurgerMenu>

        <div className={`${isMobile ? style.open : style.close}`}>
          {links.map((item, i) => {
            return (
              <Link
                to={item.link}
                key={i}
                onClick={() => getActiveID(i)}
                className={`${style.link} ${
                  i === activeIndex ? style.active : ""
                } `}
              >
                {/* <img
                  src={line}
                  alt="line"
                  className={i === activeIndex ? style.line : style.not_line}
                ></img> */}
                {item.nameLink}
              </Link>
            );
          })}

          <span className={style.download}>
            <Download />
          </span>

          <span className={style.menu_mobile}>
            {linksMobile.map((item, i) => (
              <Link
                key={i}
                className={style.contact}
                to={item.link}
                onClick={() => {
                  setIsMobile(true);
                }}
              >
                {item.label}
              </Link>
            ))}
          </span>
        </div>
      </Container>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header`
  margin-left: 6.25rem;
  margin-right: 6.25rem;
`;
const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 2.75rem;
  height: 2.75rem;
`;
const BurgerMenu = styled.img`
  display: none;
`;

