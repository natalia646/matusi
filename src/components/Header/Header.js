import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import { Link, useLocation } from "react-router-dom";
import line from "../assets/icons/line.svg";
import logo from "../assets/logo/logo.svg";
import open from "../assets/icons/open-menu.svg";
import close from "../assets/icons/close.svg";
import style from "./Header.module.scss";
import Download from "../Home_components/Download/Download";
import styled from "styled-components";

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
    nameLink: "Відмова від відповідальності",
  },
  {
    link: "/privacy",
    nameLink: "Політика конфіденційності",
  },
];

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(true);
  const { activeIndex, setActiveIndex } = useContext(Context);

  useEffect(() => {
    if (location.pathname) {
      const url = links.find(({ link }) => link === location.pathname);
      setActiveIndex(links.indexOf(url));
    }
  });

  const getActiveId = (index) => {
    setActiveIndex(index);
    setIsMobile(true);
  };

  return (
    <HeaderBlock>
      <Container>
        <Link to={"/"}>
          <Logo src={logo} alt="logo"></Logo>
        </Link>

        <DescLinks>
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={() => getActiveId(i)}
              className={i === activeIndex ? "activeLink" : ""}
            >
              <span className={i === activeIndex ? "activeSpan" : ""}></span>
              {item.nameLink}
            </Link>
          ))}
          <Download />
        </DescLinks>
      </Container>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header`
  margin: 2.12rem 0 2.44rem 0;
`;
const Container = styled.div`
  margin-left: 6.25rem;
  margin-right: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 2.75rem;
  height: 2.75rem;
`;
const DescLinks = styled.div`
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.25rem;
    font-weight: 400;
    margin-left: 2.63rem;
  }
  .activeLink {
    font-weight: 700;
  }
  .activeSpan {
    width: 2.5rem;
    height: 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--orange-color);
    display: inline-block;
    position: relative;
    top: 0.65rem;
    left: 2.4rem;
  }
  span {
    display: none;
  }
`;
