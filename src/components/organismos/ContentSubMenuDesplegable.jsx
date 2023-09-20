import styled from "styled-components";
import { v } from "../../index";
export function ContentSubMenuDesplegable({
  data,
  funcion,
  setState,
  setAdicional,scroll
}) {
  function seleccionar(p) {
    funcion(p);
    setState();
  }
  return (
    <Container scroll={scroll}>
      <div className="header">
        <span onClick={() => setState()} className="btncerrar">
          {<v.iconocerrar />}
        </span>
      </div>

      <div className="contentItems" >
        {data.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => seleccionar(item)}>
              <span>{item.icono}</span>
              <span>{item.descripcion}</span>
            </ItemContainer>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;
  position: absolute;
  
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: #fff;
  z-index: 1;
  width: 400px;
  height: 200px;
  .header {
    display:flex; 
    background-color:initial;
    align-items:center;
    text-align:center;
    .btncerrar {
      cursor: pointer;
      font-weight: 600;
      font-size: 1.5rem;
    }
  }

  .contentItems {
    overflow-y: ${(props)=>props.scroll};
    
  }
`;
const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #303030;
  }
`;
