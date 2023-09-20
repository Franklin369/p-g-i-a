import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import { v } from "../../styles/variables";
import { LinksArray } from "../../index";
export function Menuambur() {
  const [click, setClick] = useState(false);

  const navigate = useNavigate();
  return (
    <Section id="navigation">
      <NavBar>
        {/* <Logo /> */}

        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          <div className="contentLogo active">
            <img src={v.logo} />
          </div>
        </HamburgerMenu>
        <Menu click={click}>
          {LinksArray.map(({ icon, label, to }) => (
            <div key={label} className="LinkContainer" onClick={() => setClick(!click)}>
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
        </Menu>
      </NavBar>
    </Section>
  );
}
const Section = styled.div`
  /* width: ${(props) => (props.click ? "2rem" : "1.5rem")}; */
  // width: 100vw;
  background-color: ${(props) => props.theme.body};
  cursor: pointer;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  z-index: 1000;
  @media (max-width: 64em) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 10;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(3px);
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
    touch-action: none;
  }
  .LinkContainer {
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }
    .Links {
      width: 100vw;
      display: flex;
      align-items: center;
      text-decoration: none;

      color: ${(props) => props.theme.text};
      height: 100px;

      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }

      &.active {
        &::before {
          position: relative;
          content: "";
          height: 100%;
          left: 0;
          width: 4px;
          bottom: 0;
          border-radius: 10px;
          background: ${(props) => props.theme.bg5};
          transition: 0.3s ease;
        }
        .Linkicon {
          color: ${(props) => props.theme.bg5};
        }
      }
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "4rem" : "3.5rem")};
  height: ${(props) => (props.click ? "2px" : "5px")};
  border-radius: 3px;
  z-index: 11;
  position: fixed;
  top: 3rem;
  left: 0;
  transform: ${(props) => (props.click ? " rotate(90deg)" : " rotate(0)")};
  display: none;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }
  .contentLogo {
    margin-left: 12px;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
