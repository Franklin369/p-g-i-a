import { useState } from "react";
import styled from "styled-components";
import {
  Header,
  Selector,
  ContentSubMenuDesplegable,
  ToggleTema,
  useUsuariosStore,
  Btnsave,
  CardEliminarData,
  TemasData,
  Listapaises,v
} from "../../index";
import iso from "iso-country-currency";
import emojicountry from "emoji-flags-to-country";

import { useContext } from "react";
import { ThemeContext } from "../../App";
export function ConfiguracionTemplate() {
  const [openDesplegableUser, setOpenDesplegableUser] = useState(false);
  const [openListapaises, setOpenListapaises] = useState(false);
  const [openListatemas, setOpenListatemas] = useState(false);
  const { datausuarios, editartemamonedauser } =
    useUsuariosStore();


  
  const [select, setSelect] = useState([]);
  const [selectTema, setSelecttema] = useState([]);
  const moneda = select.symbol ? select.symbol : datausuarios.moneda;
  const pais = select.symbol ? select.countryName : datausuarios.pais;

  const iconobd = datausuarios.tema === "0" ? "🌞" : "🌚";
  const descripcionbd = datausuarios.tema === "0" ? "light" : "dark";

  const iconoinicial = selectTema.icono ? selectTema.icono : iconobd;
  const temainicial = selectTema.descripcion
    ? selectTema.descripcion
    : descripcionbd;
  // setTheme(datausuarios.tema=="0"?"light":"dark")
  const paisSeleccionado = "🐷 " + moneda + " " + pais;
  const temaSeleccionado = iconoinicial + " " + temainicial;

  const editar = async () => {
    const themeElegido = selectTema.descripcion === "light" ? "0" : "1";
    const p = {
      tema: themeElegido,
      moneda: moneda,
      pais: pais,
      id: datausuarios.id,
    };
    await editartemamonedauser(p);
  };

  return (
    <Container>
      <header className="header">
        <Header
          openDesplegableUser={openDesplegableUser}
          setOpenDesplegableUser={setOpenDesplegableUser}
        />
      </header>

      <section className="area1">
        <h1>Ajustes</h1>
      </section>
      <section className="area2">
        <ContentCard>
          <span>Moneda:</span>

          <Selector
            state={openListapaises}
            color="#BF94FF"
            data1={paisSeleccionado}
            funcion={() => setOpenListapaises(!openListapaises)}
          />
          {openListapaises && (
            <Listapaises
              setState={() => setOpenListapaises(!openListapaises)}
              setSelect={(p) => setSelect(p)}
            />
          )}
        </ContentCard>
        <ContentCard>
          <span>Tema: {datausuarios.tema}</span>

          <Selector
            state={openListatemas}
            color="#BF94FF"
            data1={temaSeleccionado}
            funcion={() => setOpenListatemas(!openListatemas)}
          />
          {openListatemas && (
            <ContentSubMenuDesplegable 
              data={TemasData}
              setState={setOpenListatemas}
              funcion={setSelecttema}
            />
          )}
        </ContentCard>
        {/* <ContentCard>
          <span>Tema:</span>
          <ToggleTema />
        </ContentCard> */}
        <Btnsave titulo="Guardar" funcion={editar} bgcolor="#BF94FF" icono={<v.iconoguardar/>} />

        <CardEliminarData />
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: relative;
  display: grid;
  grid-template:
    "header  " 100px
    "area1  " 100px
    "area2  " auto;
  text-align: center;
  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
    width: 100%;
  }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
  }
`;
const ContentCard = styled.div`
  display: flex;
  text-align: star;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;
