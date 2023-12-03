import React, { useContext } from "react";
import { Context } from "../../../context";
import Download from "../../Home_components/Download/Download";
import google from "../../assets/icons/google_play.svg";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { device, colors, margin } from "../../../variables";
// import background from "../../assets/background/background-top.svg";
// import backgroundM from "../../assets/background/background-mobile.svg";

import {Container,Description, Buttons, GooglePlay,Phone1,Phone2} from './Main.styled'

const MainPart = () => {
  const { setDetails } = useContext(Context);

  return (
    <Container>
      <div className="back-mobile">
        <Description>
          <p className="h4">Долучайся до спільноти</p>
          <h1>
            Отримай можливість <br />
            працювати, в той час, як
            <span style={{ color: "#2000C1" }}>
              <br />
              діти щасливі та у безпеці!
            </span>
          </h1>
          <p className="h5">Долучайся до спільноти</p>
          <p>
            Ми допоможемо тобі знайти поруч мам, з якими можна разом доглядати
            за вашими дітьми. Об’єднайте дітей у дитячі групи та доглядайте за
            ними по черзі у вільний час.
          </p>
          <Buttons>
            <Download />
            <button className="more" onClick={() => setDetails(true)}>
              Дивитися більше
            </button>
          </Buttons>
        </Description>
      </div>

      <div className="images">
        <GooglePlay>
          <Link
            className="google-play"
            target="_blank"
            to="https://play.google.com/store/apps/details?id=tech.baza_trainee.mama_ne_vdoma"
          >
            <img src={google} alt="Google Play"></img>
            <div className="text">
              <p>
                Get it on
                <br />
                <b>Google Play</b>
              </p>
            </div>
          </Link>
        </GooglePlay>
        <Phone1 src="https://i.ibb.co/n8dgy4d/img1.webp" alt="img1" />
        <Phone2 src="https://i.ibb.co/rmvsZb1/img01.webp" alt="phone2" />
      </div>
    </Container>
  );
};

export default MainPart;

