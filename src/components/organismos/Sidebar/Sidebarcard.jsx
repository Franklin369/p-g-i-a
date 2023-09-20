import styled from "styled-components";
import { v } from "../../../index";
export function SidebarCard() {
  return (
    <Container >
      <span className="icon">{<v.iconoayuda />}</span>

      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>

        <h3>Centro de ayuda</h3>
       

        <button className="btn">Conectar</button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;
  &.noactive{
    display:none;
  }

  .icon {
    position: absolute;
    background: var(--HoverColor);
    border: 10px solid var(--whiteColor);
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }

  .cardContent {
    position: relative;
    padding: 1rem;
    background: ${(props)=>props.theme.bg5};
    border-radius: 10px;
    overflow: hidden;

    h3 {
      font-size: var(--h3FontSize);
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: var(--blackColor);
    }

    p {
      font-size: 12px;
      color: var(--textColor);
      padding-bottom: 1rem;
      font-weight: 500;
    }

    .btn {
      position: relative;
      color: #fff;
      z-index: 1000;
    }

    .circle1,
    .circle2 {
      position: absolute;
      background:  ${(props)=>props.theme.whiteBg};
      border-radius: 50%;
      opacity: 0.7;
    }

    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }

    .circle2 {
      height: 150px;
      width: 150px;
      bottom: -80px;
      right: -70px;
      z-index: 1;
    }
  }
`;
