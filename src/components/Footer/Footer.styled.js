import styled from "styled-components";
import { device, colors, margin } from "../../variables";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: ${colors.root};
  color: ${colors.white};
  .container {
    margin: 0 6.25rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 3fr 0.6fr 1fr;
    grid-column-gap: 10px;
    .bl-1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .bl-2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .bl-3 {
      grid-area: 1 / 3 / 2 / 4;
    }
    .bl-4 {
      grid-area: 2 / 1 / 3 / 4;
    }
    .bl-5 {
      grid-area: 3 / 1 / 4 / 3;
    }
    .bl-6 {
      grid-area: 3 / 3 / 4 / 4;
    }

    @media ${device.laptop} {
      margin: 0 ${margin.laptop};
    }
    @media ${device.tablet} {
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 2fr 2fr 0fr 0.1fr 0.3fr;
      grid-row-gap: 20px;
      .bl-1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .bl-2 {
        grid-area: 2 / 1 / 3 / 2;
      }
      .bl-3 {
        grid-area: 3 / 1 / 4 / 2;
      }
      .bl-4 {
        grid-area: 5 / 1 / 6 / 2;
      }
      .bl-5 {
        grid-area: 6 / 1 / 7 / 2;
      }
      .bl-6 {
        display: none;
      }
    }
  }
`;
export const BazaLogo = styled.img`
  width: auto;
  height: auto;
`;
export const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
    @media ${device.tablet} {
      font-size: 2.75rem;
    }
  }
`;
export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  margin: 0.3rem 0;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 1.75rem;
  }
`;

export const Networks = styled.div`
  display: flex;
`;

export const NetworkIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin: 1rem 2rem 0 0;
  @media ${device.tablet} {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
export const HrLine = styled.div`
  width: auto;
  height: 0.8px;
  background-color: #fff;
  margin: 2rem 0;
`;
