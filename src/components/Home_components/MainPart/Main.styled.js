import styled from "styled-components";
import { device, colors, margin } from "../../../variables";
import background from "../../assets/background/background-top.svg";
import backgroundM from "../../assets/background/background-mobile.svg";

export const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  @media ${device.laptopL} {
    grid-template-columns: 1.4fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    background-image: none;
    .back-mobile {
      background-image: url(${backgroundM});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      /* margin-bottom: -1rem; */
    }
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    background-image: none;
    .back-mobile {
      background-image: url(${backgroundM});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      margin-bottom: -1rem;
    }
    .images {
      background-color: ${colors.root};
      height: 40rem;
    }
  }
`;
export const Description = styled.article`
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
    margin-left: ${margin.laptopL};
    h1 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.1rem;
      width: 34rem;
    }
  }
  @media ${device.laptop} {
    margin-left: ${margin.laptop};
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
      width: 30rem;
    }
    .h4 {
      font-size: 1.1rem;
    }
  }
  @media ${device.tablet} {
    margin: 1rem 0rem 6rem ${margin.tablet};
    h1 {
      font-size: 2.75rem;
    }
  }
`;
export const Buttons = styled.div`
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
    button {
      width: 14rem;
      font-size: 1.2rem;
    }
  }
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    button {
      align-self: center;
      width: 23rem;
      font-size: 1.2rem;
      margin-top: 0.7rem;
      padding: 0.7rem 2rem;
    }
  }
  @media ${device.tablet} {
    display: flex;
    button {
      width: 16rem;
    }
  }
`;
export const Phone1 = styled.img`
  right: 19.69rem;
  top: 7.2rem;
  width: 13rem;
  position: absolute;
  @media ${device.laptopL} {
    width: 12rem;
    top: 7.5rem;
    right: 15.44rem;
  }
  @media ${device.laptop} {
    width: 10rem;
    top: 7.5rem;
    right: 13rem;
  }
  @media ${device.laptopS} {
    display: none;
  }
`;
export const Phone2 = styled.img`
  right: 6.31rem;
  top: 9.45rem;
  width: 16rem;
  position: absolute;
  @media ${device.laptopL} {
    width: 15rem;
    right: 3rem;
  }
  @media ${device.laptop} {
    width: 13rem;
    right: 2rem;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
export const GooglePlay = styled.div`
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
  @media ${device.laptop} {
    .google-play {
      right: 16rem;
      top: 30rem;
    }
  }
  @media ${device.laptopS} {
    .google-play {
      width: 9rem;
      right: 12.5rem;
      top: 30.5rem;
    }
  }
  @media ${device.tablet} {
    .google-play {
      display: none;
    }
  }
`;
