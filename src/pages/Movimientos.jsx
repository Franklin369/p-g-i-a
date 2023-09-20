import styled from "styled-components";
import { RegistrarIngreSalida, CalendarioLineal, CardTotales, Spinner } from "../index";
import {
  useEstadosModal,
  TablaMovimientos,
  useMovimientosStore,
} from "../index";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dayjs from "dayjs";
export function Movimientos() {
  function obtenerMesActual() {
    const hoy = new Date();
    const mes = hoy.getMonth();
    return mes;
  }
  function obtenerAñoActual() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    return año;
  }
  const [mes, setMes] = useState(obtenerMesActual());
  const [año, setAño] = useState(obtenerAñoActual());
  const { open, close, state } = useEstadosModal();
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");

  const {
    datamovimientos,
    mostrarMovimientos,
    totalMesAño,
    totalMesAñoPagados,
    totalMesAñoPendientes,
  } = useMovimientosStore();
  const { data, status,isError,isLoading,error } =  useQuery(["mostrar movimientos", { año: año, mes: mes }], () =>
    mostrarMovimientos({ año: año, mes: mes })
  );
  if (isLoading) {
    return (<Spinner/>)
  }
  if (error) {
    return <p>Error</p>;
  }

 
  return (
    <Container>
      <h1>Registro salida ingres</h1>
      <span>
        {mes} - {año}
      </span>

      <RegistrarIngreSalida close={close} state={state} />

      <button onClick={open}>Registrar</button>
      <ContentTotales>
        <CardTotales title="Gastos pendientes" total={totalMesAñoPendientes} />
        <CardTotales title="Gastos pagados" total={totalMesAñoPagados} />
        <CardTotales title="Total" total={totalMesAño} />
      </ContentTotales>

      <CalendarioLineal
        value={value}
        setValue={setValue}
        formatofecha={formatoFecha}
        setFormatoFecha={setFormatoFecha}
        setAño={setAño}
        setMes={setMes}
      />
      <TablaMovimientos rows={datamovimientos} mes={mes} año={año} />
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  height: 100vh;
  color: #fff;
  button {
    color: #fff;
  }
`;
const ContentTotales = styled.div`
  min-height: 100px;
  background-color: #c2bebe;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
`;
