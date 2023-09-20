import styled from "styled-components";
import { MovimientosTemplate } from "../components/templates/MovimientosTemplate";
import {
  DataDesplegableTipo,
  useOperaciones,
  useMovimientosStore,
} from "../index";

import dayjs from "dayjs";
import { useState } from "react";
export function MovimientosS() {

  const { tituloBtnDes,  colorCategoria, bgCategoria, tipo } =
    useOperaciones();

  return (
    <>
      <MovimientosTemplate
        datadesplegable={DataDesplegableTipo}
        color={colorCategoria}
        tituloBtnDes={tituloBtnDes}
        bgCategoria={bgCategoria}
      />
    
    </>
  );
}
const Container = styled.div``;
