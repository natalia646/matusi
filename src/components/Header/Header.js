import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import open from "../assets/icons/open-menu.svg";
import close from "../assets/icons/close.svg";
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
    nameLink: "Відмова від відповідальності",
  },
  {
    link: "/privacy",
    nameLink: "Політика конфіденційності",
  },
];

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const { activeIndex, setActiveIndex } = useContext(Context);

  useEffect(() => {
    if (location.pathname) {
      const url = links.find(({ link }) => link === location.pathname);
      setActiveIndex(links.indexOf(url));
    }
  });

  const getActiveId = (index) => {
    setActiveIndex(index);
    setIsMobile(false);
  };

  return (
    <HeaderBlock>
      <Container>
        <Link to={"/"}>
          <Logo src={logo} alt="logo"></Logo>
        </Link>
        <Burger
          src={isMobile ? close : open}
          alt="menu"
          onClick={() => setIsMobile(!isMobile)}
        />
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

        {isMobile ? <MobileLinks>
        {[...links, ...linksMobile].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={() => getActiveId(i)}
            >
              {item.nameLink}
            </Link>
          ))}
        </MobileLinks>: ''}
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


  @media ${device.laptopL} {
    margin-left: 4rem;
    margin-right: 4rem;
  }
  @media ${device.laptop} {
    margin-left: 3rem;
    margin-right: 1rem;
  }
  @media ${device.tablet} {
    margin-left: 2rem;
    margin-right: 2rem;
  }
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
  span {
    display: none;
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

  @media ${device.laptopL} {
    a {
      font-size: 1.1rem;
    }
  }
  @media ${device.laptop} {
    a {
      font-size: 1rem;
    }
    button {
      display: none;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const Burger = styled.img`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 2.75rem;
    height: 2.75rem;
  }
`;

const MobileLinks = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    position: absolute;
    list-style: none;
    background-color: #000000bc;
    left: 0;
    top: 80px;
    transition: all 0.1s;
    width: 100%;
    z-index: 4;
    height: 100%;
    margin-top: 1rem;
    a {
      text-align: end;
      color: var(--white-color);
      width: 90%;
      padding: 2rem;
      transition: all 0.3s ease;
      font-size: 2rem;
      font-weight: 600;
      text-decoration: none;
    }
    .activeSpan {
      display: none;
    }
  }
`;
