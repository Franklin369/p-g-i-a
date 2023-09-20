import styled, { keyframes } from "styled-components";
import { v } from "../../styles/variables";
import {
  AiOutlineLeft,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { useRef } from "react";
import { useState } from "react";
import { SidebarCard } from "../organismos/Sidebar/Sidebarcard";
import { Lottieanimacion, LinksArray, SecondarylinksArray } from "../../index";
import { ThemeContext } from "../../App";
import animacion from "../../assets/zorro.json";

export function Sidebar({ sidebarOpen, setSidebarOpen, alto, ancho }) {
  const [estadoMd, setEstadoMd] = useState(false);
  const linkitem = useRef();
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const CambiarTheme = async () => {
    // const tema = dataTablaUser.tema;
    // const themeStyle = tema === "light" ? "dark" : "light";
    // const p = {
    //   tema: themeStyle,
    // };
    // await EditarTema(user.uid, p);
    // setCambioTema(!cambiotema);
    // setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Main isOpen={sidebarOpen}>
      <button className="Sidebarbutton" onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </button>
      <Container isOpen={sidebarOpen} className={sidebarOpen ? "active" : ""}>
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={v.logo} />
          </div>
          <h2>Cerdys</h2>
        </div>

        {LinksArray.map(({ icon, label, to }) => (
          <div
            className={sidebarOpen ? "LinkContainer active" : "LinkContainer"}
            key={label}
            data-dynamic={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              {/* <div className="Linkicon">{icon}</div> */}
              <div className="Linkicon">{icon}</div>
              {sidebarOpen && <span>{label}</span>}
            </NavLink>
          </div>
        ))}
        <Divider />

        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div
            className={sidebarOpen ? "LinkContainer active" : "LinkContainer"}
            key={label}
            data-dynamic={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {sidebarOpen && <span>{label}</span>}
            </NavLink>
          </div>
        ))}
        <Divider />
        {sidebarOpen && <SidebarCard />}
      </Container>
    </Main>
  );
}
const Main = styled.div`
  .Sidebarbutton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    transform: ${({ isOpen }) =>
      isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};

    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
    z-index: 1000000;
  }
`;
//#region STYLED COMPONENTS
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 100;
  height: 100%;

  &:hover {
    overflow-y: auto;
    overflow-x: hidden;
  }
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(21 20 26 / 23%);
    border-radius: 10px;
  }
  &.active {
    width: 220px;
  }

  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 60px;

    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)}
        rotate(${(props) => props.theme.logorotate});

      img {
        width: 100%;
        :hover {
          animation: shadow-pop-bottom-left 0.4s linear both alternate;
          border-radius: 50%;
        }
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
      padding-right: 20px;
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
    @keyframes shadow-pop-bottom-left {
      0% {
        box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
          0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        transform: translateX(0) translateY(0);
      }
      100% {
        box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e,
          -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e,
          -8px 8px #3e3e3e;
        transform: translateX(8px) translateY(-8px);
      }
    }
  }
  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s;
    padding: 0 5%;
    position: relative;
    :hover {
      background: ${(props) => props.theme.bgAlpha};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;

      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }

      &.active {
        &::before {
          position: absolute;
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
    &.active {
      padding: 0;
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${v.lgSpacing} 0;
`;

//#endregion
