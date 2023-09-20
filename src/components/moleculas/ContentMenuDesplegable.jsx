import styled from "styled-components";
import { Colorcontent } from "../atomos/Colorcontent";
import { v } from "../../styles/variables";
import { ItemsDesplegable } from "./ItemsDesplegable";

export function ContentMenuDesplegable({ datadesplegable,funcion,displayIcono,displayColor ,top}) {
  return (
    <Container top={top}>
      
      {datadesplegable.map((item, index) => {
        return (
          <ItemsDesplegable  funcion={()=>funcion(item.tipo)} key={index} text={item.text} color={item.color} icono={item.icono} displayIcono={displayIcono} displayColor={displayColor}/>
        );
      })}
     
    </Container>
  );
}
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction:column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props)=>props.top};
  box-shadow: ${v.boxshadowGray};
 z-index:1;

`;
