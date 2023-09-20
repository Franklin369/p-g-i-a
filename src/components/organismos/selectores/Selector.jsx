import styled from "styled-components";
import { v } from "../../../index";
export function Selector({ color, state, setState, funcion, data1, data2 }) {
  return (
    <Container onClick={funcion} color={color}>
      <div>
         <span>{data1}</span>
      <span>{data2}</span>
      </div>

     
      <span className={state ? "open" : "close"}>{<v.iconoFlechabajo />}</span>
    </Container>
  );
}
const Container = styled.div`
  gap: 10px;
  width: 350px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid ${(props) => props.color};
  transition: 0.3s;
  font-weight: 600;
  position:relative;
  .open {
    transition: 0.3s;
    transform: rotate(0deg);
  }
  .close {
    transition: 0.3s;
    transform: rotate(180deg);
  }
  &:hover {
    background-color: ${(props) => props.color};
    color: #000;
  }
`;
