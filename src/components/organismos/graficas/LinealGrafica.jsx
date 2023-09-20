import React from "react";

import styled from "styled-components";
import { useState } from "react";

import {
  useMovimientosStore,
  UserData,
  CalendarioLineal,
  useUsuariosStore,
  useOperaciones,
  DeviceMin,
} from "../../../index";

import { useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export function LinealGrafica({ dataGrafica, dataLeyenda }) {

  const { datausuarios } = useUsuariosStore();
  const { colorCategoria } = useOperaciones();
 
  return (
    <Container>
     
      <section className="contentGrafica">
        <div className="grafica">
          <Line data={dataGrafica} />
        </div>

        <section className="contentLeyenda">
          <h2>Gastos por categoria</h2>

          {dataLeyenda.map((item, index) => {
            return (
              <ContentCars key={index} colortext={colorCategoria}>
                <div className="contentDescripcion">
                  <span>{item.icono}</span>
                  <span className="descripcion">{item.descripcion}</span>
                </div>

                <span className="total">
                  {datausuarios.moneda} {item.total}
                </span>
              </ContentCars>
            );
          })}
        </section>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  .contentGrafica {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    @media ${DeviceMin.tablet} {
      flex-direction: row;
      .contentLeyenda {
        padding-top: 20vh;
      }
      .grafica{
        min-width:500px;
      }
    }
    .contentLeyenda {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
`;
const ContentCars = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  .contentDescripcion {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    .descripcion {
      color: ${(props) => props.theme.text};
      font-weight: 500;
    }
  }
  .total {
    font-size: 17px;
    font-weight: 650;
    color: ${(props) => props.colortext};
  }
`;
