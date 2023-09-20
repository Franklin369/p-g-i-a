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

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Dona({ dataGrafica, dataLeyenda }) {
  const { datausuarios } = useUsuariosStore();
  const { colorCategoria } = useOperaciones();
  // const { rptMovimientosAñoMes, dataRptMovimientosAñoMes } =
  //   useMovimientosStore();
  // const { data, status, isError, isLoading, error } = useQuery(
  //   ["mostrar movimientos", { año: 2023, mes: 9 }],
  //   () => rptMovimientosAñoMes({ año: 2023, mes: 9 })
  // );

  // const [userData, setUserData] = useState({
  //   labels: dataRptMovimientosAñoMes.map((data) => data.descripcion),
  //   datasets: [
  //     {
  //       label: "Total",
  //       data: dataRptMovimientosAñoMes.map((data) => data.total),
  //       backgroundColor: [
  //         "rgba(246, 26, 74, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //         "rgba(153, 102, 255, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //       ],
  //       borderWidth: 2,
  //     },
  //   ],
  // });
  // if (isLoading) {
  //   return <h1>Cargando data</h1>;
  // }
  // if (error) {
  //   return <h1>horror</h1>;
  // }
  return (
    <Container>
      <section className="area1">
        <div>
            <Doughnut data={dataGrafica}  />
        </div>
      
      </section>
      <section className="area2">
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
  width: 100%;

  display: grid;
  grid-template:
    "area1 " auto
    "area2 " auto/
    auto;
  @media ${DeviceMin.tablet} {
    grid-template:
      "area1 area1 area2 " auto
      /
      1fr 1fr 1fr;
  }

  .area1 {
    grid-area: area1;
    div{
     

    }
    /* background-color: rgba(238, 15, 230, 0.2); */
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(12, 246, 20, 0.2); */
  }
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
      .grafica {
        background-color: red;
        /* width:500px; */
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
