import React, { useContext } from "react";
import { Context } from "../../../context";
import Download from "../../Home_components/Download/Download";
import google from "../../assets/icons/google_play.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device, colors, margin } from "../../../variables";
import background from "../../assets/background/background-top.svg";

const MainPart = () => {
  const { setDetails } = useContext(Context);

  return (
    <Container>
      {/* <div className={style.back_mobile}> */}
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
          Ми допоможемо тобі знайти поруч мам, з якими можна разом доглядати за
          вашими дітьми. Об’єднайте дітей у дитячі групи та доглядайте за ними
          по черзі у вільний час.
        </p>
        <Buttons>
          <Download />
          <button className="more" onClick={() => setDetails(true)}>
            Дивитися більше
          </button>
        </Buttons>
      </Description>
      {/* </div> */}
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
    </Container>
  );
};

export default MainPart;

const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
`;
const Description = styled.article`
  margin: 1rem 0rem 11rem ${margin.desktop};
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  .h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    width: 40rem;
  }
  .h5 {
    display: none;
  }
  @media ${device.laptopL} {
    margin-left: ${margin.laptop};
    h1 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.1rem;
      width: 34rem;
    }
  }
`;
const Buttons = styled.div`
  button {
    margin-top: 2.3rem;
    margin-right: 1.5rem;
    width: 16rem;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    text-align: center;
    border-radius: 30px;
    font-family: Nunito Sans;
    cursor: pointer;
  }
  .more {
    border: 2px solid ${colors.orange};
    background: ${colors.white};
    color: ${colors.orange};
    &:hover {
      border: 2px solid #f46600;
      color: #f46600;
    }
    &:active {
      border: 2px solid #ce4a00;
      color: #ce4a00;
    }
  }
  @media ${device.laptopL} {
  }
`;
const Phone1 = styled.img`
  right: 19.69rem;
  top: 7.2rem;
  width: 13rem;
  position: absolute;
  @media ${device.laptopL} {
    width: 12rem;
    top: 7.5rem;
    right: 15.44rem;
  }
`;
const Phone2 = styled.img`
  right: 6.31rem;
  top: 9.45rem;
  width: 16rem;
  position: absolute;
  @media ${device.laptopL} {
    width: 15rem;
    right: 3rem;
  }
`;
const GooglePlay = styled.div`
  .google-play {
    width: 10rem;
    background-color: ${colors.white};
    display: flex;
    position: absolute;
    top: 35.26rem;
    right: 24.19rem;
    border-radius: 1rem;
    padding-left: 1rem;
    box-shadow: 2px 8px 13px 2px rgba(0, 0, 0, 0.282);
    z-index: 1;
    cursor: pointer;
    text-decoration: none;
  }
  .text {
    margin: 0.4rem;
    p {
      margin: 0rem;
      color: black;
    }
  }
  @media ${device.laptopL} {
    .google-play {
      right: 19rem;
      top: 34rem;
    }
  }
`;
