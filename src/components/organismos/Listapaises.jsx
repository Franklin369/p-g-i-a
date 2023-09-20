import styled from "styled-components";
import iso from "iso-country-currency";
import { useState } from "react";
import { ConvertirCapitalize, InputBuscadorLista,v } from "../../index";
export function Listapaises({  setSelect, setState }) {
  const isocodigos = iso.getAllISOCodes();
  const [dataPaises, setDatapaises] = useState(isocodigos);
  const [dataresult, setDataresult] = useState([]);
  function seleccionar(p) {
   
    setSelect(p);
    setState();
  }
  function buscar(e) {
   
    var filtrado = dataPaises.filter((item) => {
      return item.countryName == ConvertirCapitalize(e.target.value);
    });
    setDataresult(filtrado);
  }
  return (
    <Container>
      <header className="header">
        <span>busca tu país</span>
        <span className="cerrar" onClick={setState}>{<v.iconocerrar/>}</span>
      </header>
      
      
      <InputBuscadorLista onChange={buscar} placeholder="..." />
      {dataresult.length > 0 &&
        dataresult?.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => seleccionar(item)}>
              <span>{item.countryName}</span>
              <span>💰{item.symbol}</span>
            </ItemContainer>
          );
        })}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 10px;
  position: absolute;
  top:88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: #fff;
  z-index: 1;
  transition: all 0.3s;
  span {
    text-align: start;
  }
  .header{
    display:flex;
    background-color:inherit;
    justify-content:space-between;
    align-items:center;
.cerrar{
  cursor: pointer;
  font-size:25px;
  transition:all 0.2s;
  &:hover{
    color:#BF94FF;
    transform:scale(1.2);
  }
}
    
  }
`;
const ItemContainer = styled.section`
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
