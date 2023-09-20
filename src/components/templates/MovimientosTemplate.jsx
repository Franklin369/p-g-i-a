import styled from "styled-components";
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
  DeviceMin,
  TablaMovimientos,
  CalendarioLineal,
  useEstadosModal,
  RegistrarIngreSalida,
  TotalesCard,
  useMovimientosStore,
  useCategoriasStore,
  useCuentaStore,useQueryMostrarMovimientosMesAño,useUsuariosStore
} from "../../index";
import { useState } from "react";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";

export function MovimientosTemplate({
  datadesplegable,
  bgCategoria,
  children,
  tituloBtnDes,
  color,
}) {
  // function obtenerMesActual() {
  //   const hoy = new Date();
  //   const mes = hoy.getMonth();
  //   return mes;
  // }
  // function obtenerAñoActual() {
  //   const hoy = new Date();
  //   const año = hoy.getFullYear();
  //   return año;
  // }
  // const [mes, setMes] = useState(obtenerMesActual());
  // const [año, setAño] = useState(obtenerAñoActual());
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");

  const [openDesplegableUser, setOpenDesplegableUser] = useState(false);
  const [openDesplegable, setOpenDesplegable] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const { setTipo, tipo, año, mes } = useOperaciones();
  const [openRegistro, SetopenRegistro] = useState(false);
  const { open, close, state } = useEstadosModal();
  const {
    datamovimientos,
    mostrarMovimientos,
    totalMesAño,
    totalMesAñoPagados,
    totalMesAñoPendientes,
    useQueryMostrarMovimientos,
  } = useMovimientosStore();
  const {
    mostrarCategorias,
    datacategoria,
    categoriaItemSelect,
    selectCategoria,
  } = useCategoriasStore();
  const {datausuarios} = useUsuariosStore();
  const { mostrarCuentas, datacuentas, cuentaItemSelect } = useCuentaStore();
  // const { data, status, isError, isLoading, error } = useQuery(
  //   ["mostrar movimientos", { año: año, mes: mes, tipocategoria: tipo }],
  //   () => mostrarMovimientos({ año: año, mes: mes, tipocategoria: tipo })
  // );
  const { data, status, isError, isLoading, error } = useQueryMostrarMovimientosMesAño({ año: año, mes: mes, tipocategoria: tipo });
  useQuery(["categorias", { tipo: tipo }], () =>
    mostrarCategorias({ tipo: tipo })
  );
  useQuery(["cuentas"], () => mostrarCuentas());
  function cambiarTipo(tipo) {
    console.log("tipo", tipo);
    setTipo(tipo);
    setOpenDesplegable(!openDesplegable);
  }
  function nuevoRegistro() {
    SetopenRegistro(true);
    setAccion("Nuevo");
    setdataSelect([]);
  }
// if(isLoading){
//   return(<Spinner/>)
// }
  return (
    <Container>
      <RegistrarIngreSalida
        close={close}
        state={state}
        dataSelect={dataSelect}
      />
      <header className="header">
        <Header
          openDesplegableUser={openDesplegableUser}
          setOpenDesplegableUser={setOpenDesplegableUser}
        />
      </header>
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
        <ContentFiltro>
          <Buttonfiltro
            inputColor={bgCategoria}
            icono={v.agregar}
            textcolor={color}
            funcion={open}
          />
        </ContentFiltro>
      </section>
      <section className="totales">
        <TotalesCard
          title={tipo == "g" ? "Gastos pendientes" : "Ingresos pendientes"}
          total={totalMesAñoPendientes}
          color={color}
          icono={<v.flechaarribalarga />}
        />
        <TotalesCard
          title={tipo == "g" ? "Gastos pagados" : "Ingresos pagados"}
          total={totalMesAñoPagados}
          color={color}
          icono={<v.flechaabajolarga />}
        />
        <TotalesCard
          title="Total"
          total={totalMesAño}
          color={color}
          icono={<v.balance />}
        />
      </section>
      <section className="calendario">
        <CalendarioLineal
          value={value}
          setValue={setValue}
          formatofecha={formatoFecha}
          setFormatoFecha={setFormatoFecha}
        />
      </section>
      <main className="main">
        <TablaMovimientos rows={datamovimientos} mes={mes} año={año} moneda={datausuarios.moneda}/>
      </main>
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
    "header" 100px
    "tipo" 100px
    "totales" 360px
    "calendario" 100px
    "main" auto;

  @media ${DeviceMin.tablet} {
    grid-template:
      "header" 100px
      "tipo" 100px
      "totales" 130px
      "calendario" 100px
      "main" auto;
  }
  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .tipo {
    grid-area: tipo;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .totales {
    grid-area: totales;
    /* background-color: rgba(26, 243, 210, 0.14); */
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    @media ${DeviceMin.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .calendario {
    grid-area: calendario;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .main {
    grid-area: main;
    /* background-color: rgba(250, 10, 238, 0.14); */
  }
`;
export const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
