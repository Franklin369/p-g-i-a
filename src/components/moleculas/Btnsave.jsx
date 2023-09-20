import styled from "styled-components";
import { v } from "../../index";
export function Btnsave({ funcion, titulo, bgcolor, icono }) {
  return (
    <Container bgcolor={bgcolor} type="submit">
      
      <span className="icono">{icono}</span>

      <span  className="btn" onClick={funcion}>
        {titulo}
      </span>
    </Container>
  );
}
const Container = styled.button`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color:initial;
  .btn {
    background: ${(props) => props.bgcolor};
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    cursor: pointer;
    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }

  &:hover,&:focus {
    border: 0px solid black;
    outline: none;
  }

  &:active {
  }
  .icono{
    color: ${(props)=>props.theme.text};
  }
`;
