import { Perfil } from "../Perfil";
import { UserAuth } from "../../context/AuthContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {
  Header,
  Tabla,
  Btnnuevo,
  Registro,
  supabase,
  Spinner,
  ContentFiltros,
  BtnDesplegable,
  ContentMenuDesplegable,
  useOperaciones,
  Contentheader,
  DatosUser,
  Buttonfiltro,
  v,
  Device
} from "../../index";
import { useState } from "react";
import { useEffect } from "react";
import { useCategoriasStore } from "../../store/CategoriasStore";
import { shallow } from "zustand/shallow";
// import {MostrarCategorias} from "../supabase/crudCategorias"
export function CategoriasTemplate({
  bgCategoria,
  children,
  tituloBtnDes,
  color,
  datadesplegable,
}) {
  const [openDesplegable, setOpenDesplegable] = useState(false);
  const { mostrarCategorias, datacategoria } = useCategoriasStore();
  const [titleForm, setTitleform] = useState("");
  const { dataTablaUser, idAuthSupabase } = UserAuth();
  const [openRegistro, SetopenRegistro] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const { setTipo, tipo } = useOperaciones();
  const [openDesplegableUser, setOpenDesplegableUser] = useState(false);

  const { data, status, isError, isLoading, error } = useQuery(
    ["categorias", { tipo: tipo }],
    () => mostrarCategorias({ tipo: tipo })
  );
  //  const { data, status, isError, isLoading, error } = useQueryMostrarCategorias({tipo:tipo})
  
  function nuevoRegistro() {
    SetopenRegistro(true);
    setAccion("Nuevo");
     setdataSelect([]);
  }
  function cambiarTipo(tipo) {
    console.log("tipo", tipo);
    setTipo(tipo);
    setOpenDesplegable(!openDesplegable);
  }
  function cerrarDesplegables() {
    setOpenDesplegable(false);
    setOpenDesplegableUser(false);
  }
  // if (isLoading) {
  //   return <Spinner />;
  // }
  // if (error) {
  //   return <p>Erro g</p>;
  // }

  return (
    <Container onClick={cerrarDesplegables}>
   
      <header className="header">
        <Header
          openDesplegableUser={openDesplegableUser}
          setOpenDesplegableUser={setOpenDesplegableUser}
        />
      </header>
      {openRegistro && (
        <Registro
          dataSelect={dataSelect}
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
        />
      )}
      <section className="tipo">
        <ContentFiltros>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <BtnDesplegable
              inputColor={color}
              text={tituloBtnDes}
              textcolor="#fff"
              tipo="nuevo"
              funcion={() => setOpenDesplegable(!openDesplegable)}
            />
          </div>
          {openDesplegable && (
            <ContentMenuDesplegable
              alto="12px"
              ancho="12px"
              funcion={(p) => cambiarTipo(p)}
              datadesplegable={datadesplegable}
              displayIcono="none"
              top="112%"
            />
          )}
        </ContentFiltros>
      </section>
      <section className="buttons">
        <ContentFiltro>
          <Buttonfiltro
            inputColor={bgCategoria}
            icono={v.agregar}
            textcolor={color}
            funcion={nuevoRegistro}
          />
        </ContentFiltro>
      </section>

      <main className="main">
      <Tabla
        setdataSelect={setdataSelect}
        rows={datacategoria}
        SetopenRegistro={SetopenRegistro}
        setAccion={setAccion}
      />

      </main>
      {children}
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
padding:15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: relative;
  /* display: flex;
  flex-direction: column; */
  > * {
   
  
  }
  display: grid;

  grid-template:
    "header" 100px
    "tipo" 100px
    "buttons" 50px
    "main" auto;

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.1); */
    display: flex;
    align-items: center;
  }
  .tipo {
    grid-area: tipo;
    /* background-color: rgba(229, 67, 26, 0.1); */
    display: flex;
    align-items: center;
  }
  .buttons {
    grid-area: buttons;
    /* background-color: rgba(77, 237, 106, 0.1); */
    display:flex;
    flex-direction:row-reverse;
  }

  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.1); */
  }
`;
export const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
