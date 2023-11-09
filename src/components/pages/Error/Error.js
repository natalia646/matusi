import React from "react";
import error from "../../assets/pages/error.svg";
// import style from "./Error.module.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorStyled>
      <img src={error} alt="error"></img>
      <Link to="/">
        <button>Головна</button>
      </Link>
    </ErrorStyled>
  );
};

export default Error;

const ErrorStyled = styled.main`
  @import "../../scss/variable";
  img {
    display: block;
    margin: -1.5rem auto;
    width: 52.9rem;
    height: 31.4rem;
  }
  button {
    position: relative;
    left: 45%;
    font-size: 1.5rem;
    padding: 1rem 3rem;
    background-color: var(--root-color);
    color: var(--white-color);
    border-radius: 20rem;
    border: none;
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    cursor: pointer;
    border: 2px solid white;
  }
  @include table {
    button {
      font-size: 2rem;
      left: 40%;
      padding: 1.5rem 4rem;
    }
  }
`;
