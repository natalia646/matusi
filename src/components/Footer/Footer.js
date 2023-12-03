import React from "react";
import baza from "../assets/logo/baza-logo.svg";
import facebook from "../assets/logo/facebook.svg";
import instagram from "../assets/logo/instagram.svg";
import linkedin from "../assets/logo/linkedin.svg";
import {
  FooterContainer,
  BazaLogo,
  LinksBlock,
  NavigationLink,
  NetworkIcon,
  Networks,
  HrLine
} from "./Footer.styled";

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
    <FooterContainer>
      <div className="container">
        <NavigationLink
          to="https://baza-trainee.tech/ua"
          target="_blank"
          className="bl-1"
        >
          <BazaLogo src={baza} alt="Baza Trainee" />
        </NavigationLink>

        <LinksBlock className="bl-2">
          <h3> Про нас</h3>
          {about.map((item, i) => (
            <NavigationLink key={i} to={item.link}>
              {item.label}
            </NavigationLink>
          ))}
        </LinksBlock>

        <LinksBlock className="bl-3">
          <h3>Контакти</h3>
          <NavigationLink to="/contact">
            app.mama.ne.vdoma@gmail.com
            <Networks>
              {networks.map((item, i) => (
                <NavigationLink key={i} to={item.link} target="_blank">
                  <NetworkIcon src={item.icon} alt={item.network} />
                </NavigationLink>
              ))}
            </Networks>
          </NavigationLink>
        </LinksBlock>

        <HrLine className="bl-4" />
        <p className="bl-5">
          Розробка Baza Trainee Ukraine © 2023 Всі права захищені
        </p>
        <NavigationLink to="/privacy" className="bl-6">
          Політика конфіденційності
        </NavigationLink>
      </div>
    </FooterContainer>
  );
};
export default Footer;
