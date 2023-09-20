import styled from "styled-components";
import { Colorcontent } from "../atomos/Colorcontent";
import { v } from "../../styles/variables";
import { Icon } from "@rsuite/icons";
export function ItemsDesplegable({
  color,
  text,
  funcion,
  icono,
  displayIcono,displayColor
}) {
  return (
    <Container displayColor={displayColor}
      className="subcontainer"
      onClick={funcion}
      displayIcono={displayIcono}
    >
      <Icon as={icono} className="icono" />

      <Colorcontent color={color} alto="12px" ancho="12px" className="colorcontent"/>

      <span>{text}</span>
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.bg4};
  }
  .icono {
    display: ${(props) => props.displayIcono};
  }
  .colorcontent{
    display: ${(props) => props.displayColor};
  }
  svg{
    font-size:28px;
  }
`;
