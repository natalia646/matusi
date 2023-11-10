import React from "react";
import { Link } from "react-router-dom";
import baza from "../assets/logo/baza-logo.svg";
import facebook from "../assets/logo/facebook.svg";
import instagram from "../assets/logo/instagram.svg";
import linkedin from "../assets/logo/linkedin.svg";
import styled from "styled-components";
import { colors, device } from "../../variable";

const about = [
  {
    link: "/terms",
    label: "Умови користування",
  },
  {
    link: "/refusal",
    label: "Відмова від відповідальності",
  },
  {
    link: "/privacy",
    label: "Політика конфіденційності",
  },
];
const networks = [
  {
    network: "facebook",
    link: "https://www.facebook.com/profile.php?id=61553049146070",
    icon: facebook,
  },
  {
    network: "instagram",
    link: "https://www.instagram.com/mama.ne.vdoma/",
    icon: instagram,
  },
  {
    network: "linkedin",
    link: "https://www.linkedin.com/in/mama-ne-vdoma-mobileapp-1a3485299/",
    icon: linkedin,
  },
];

const Footer = () => {
  return (
    <FooterBlock>
      <div className="container">
        <Links>
          <Link to="https://baza-trainee.tech/ua" target="_blank">
            <img src={baza} alt="Baza Trainee" className="baza-logo"></img>
          </Link>
          <Description>
            <nav className="about">
              <h3> Про нас</h3>
              {about.map((item, i) => (
                <Link key={i} className="contact" to={item.link}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav>
              <h3>Контакти</h3>
              <Link className="contact" to="/contact">
                app.mama.ne.vdoma@gmail.com
              </Link>
              <Networks>
                {networks.map((item, i) => (
                  <Link key={i} to={item.link} target="_blank">
                    <img src={item.icon} alt={item.network}></img>
                  </Link>
                ))}
              </Networks>
            </nav>
          </Description>
        </Links>
        <hr />
        <Terms>
          <p>Розробка Baza Trainee Ukraine © 2023 Всі права захищені</p>
          <Link to="/privacy" className="cont">
            Політика конфіденційності
          </Link>
        </Terms>
      </div>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.footer`
  background-color: ${colors.root};
  color: ${colors.white};
  .container {
    margin: 0rem 6.25rem;
  }
  .contact {
    text-decoration: none;
    color: ${colors.white};
    cursor: pointer;
    margin-bottom: 1.4rem;
    font-size: 1rem;
  }
  @media ${device.laptop} {
    .container {
      margin: 0rem 2rem;
    }
  }
  @media ${device.tablet} {
    .contact{
      font-size: 1.5rem;
    }
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  .baza-logo {
    width: 9rem;
    height: 9rem;
  }
  .about {
    margin-right: 7rem;
  }
  @media ${device.laptop} {
    .about {
      margin-right: 3rem;
    }
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    .about{
      margin-bottom: 1.7rem;
    }
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    margin: 0 0 1.5rem 0;
    font-size: 2rem;
  }
  nav {
    display: grid;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 2rem;
    h3{
      font-size: 2.5rem;
    }
  }
`;
const Networks = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
  @media ${device.tablet} {
    justify-content: flex-start;
    img{
      width: 3rem;
    height: 3rem;
    margin-right: 2.5rem;
    }
  }
`;
const Terms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  .cont {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
  @media ${device.tablet} {
    .cont {
      display: none;
    }
  }
`;
