import { Dona } from "../index";
import styled from "styled-components";
import { useState } from "react";
import { useMovimientosStore } from "../index";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import "./informes.module.css";
export function Informes() {
    const { rptMovimientosAñoMes, dataRptMovimientosAñoMes } =
      useMovimientosStore();
    const [userData, setUserData] = useState({});
    const datagrafica = {
      type:"line",
      labels: dataRptMovimientosAñoMes?.map((data) => data.descripcion),
      datasets: [
        {
          label: "Total",
          data: dataRptMovimientosAñoMes?.map((data) => data.total),
          backgroundColor: [
            "rgba(246, 26, 74, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 2,
        },
      ],
     
    };
    // useEffect(() => {
    //   setUserData(datagrafica);
    // }, []);

    const { data, status, isError, isLoading, error } = useQuery(
      ["mostrar movimientos", { año: 2023, mes: 9 }],
      () => rptMovimientosAñoMes({ año: 2023, mes: 9 })
    );

    if (isLoading) {
      return <h1>Cargando data</h1>;
    }
    if (error) {
      return <h1>horror</h1>;
    }
 
  return (
        <Container>
          <h1>Informes</h1>
      <section className="contentLeyenda">
            {dataRptMovimientosAñoMes?.map((item) => {
              return (
              <div>
                 <h2>{item.descripcion}</h2>
                  <h3>{item.total}</h3>
              </div>

              );
            })}
          </section>
          <Dona data={datagrafica} />
        </Container>
  
  );
}
const Container = styled.div`
  height: 100vh;
  background-color: #1a1a1a;
  padding: 20px;
  color: #fff;
`;
