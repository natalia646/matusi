import React, { useContext } from "react";
import { Context } from "../../../context";
import Download from "../../Home_components/Download/Download";
import google from "../../assets/icons/google_play.svg";
import style from "./Main.module.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
          <button className='more' onClick={() => setDetails(true)}>
            Дивитися більше
          </button>
        </Buttons>
      </Description>
      {/* </div> */}


      <div className={style.images}>
        <Link
          className={style.google_play}
          target="_blank"
          to="https://play.google.com/store/apps/details?id=tech.baza_trainee.mama_ne_vdoma"
        >
          <img src={google} alt="Google Play"></img>
          <div className={style.text}>
            <p>Get it on</p>
            <p>
              <b>Google Play</b>
            </p>
          </div>
        </Link>
        
        <img
          className={style.phone1}
          src="https://i.ibb.co/n8dgy4d/img1.webp"
          alt="img1"
        ></img>
        <img
          className={style.phone2}
          src="https://i.ibb.co/rmvsZb1/img01.webp"
          alt="phone2"
        ></img>
      </div>
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
  margin: 1rem 0rem 11rem 6.25rem;
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  .h5 {
    display: none;
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
  border: 2px solid var(--orange-color);
  background: var(--white-color);
  color: var(--orange-color);
  &:hover {
    border: 2px solid #f46600;
    color: #f46600;
  }
  &:active {
    border: 2px solid #CE4A00;
    color: #CE4A00;
  }
}
`;
