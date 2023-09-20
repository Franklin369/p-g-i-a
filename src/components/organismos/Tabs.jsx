import { useState } from "react";
import styled from "styled-components";
import { v, useMovimientosStore, Dona, LinealGrafica,BarrasGrafica,useOperaciones } from "../../index";
import { useQuery } from "@tanstack/react-query";
export function Tabs() {
  const [activeTab, setactiveTab] = useState(0);
  const handleClick = (index) => {
    setactiveTab(index);
  };

  const { rptMovimientosAñoMes, dataRptMovimientosAñoMes } =
    useMovimientosStore();
  const datagrafica = {
    type: "line",
    labels: dataRptMovimientosAñoMes?.map((data) => data.descripcion),
    datasets: [
      {
        fill: true,
        tension: 0.3,
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
  const { setTipo, tipo,año,mes } = useOperaciones();
  const { data, status, isError, isLoading, error } = useQuery(
    ["mostrar movimientos Here", { año: año, mes: mes }],
    () => rptMovimientosAñoMes({ año: año, mes: mes })
  );

  if (isLoading) {
    return <h1>Cargando data</h1>;
  }
  if (error) {
    return <h1>horror</h1>;
  }
  return (
    <Container className="container" activeTab={`${activeTab}00%`}>
      <ul className="tabs">
        <li
          className={activeTab == 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          {<v.iconopie />}
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          {<v.iconolineal />}
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          {<v.iconobars />}
        </li>
        <span className="glider"></span>
      </ul>

      <div className="tab-content">
        {activeTab === 0 && (
          <Dona
            dataGrafica={datagrafica}
            dataLeyenda={dataRptMovimientosAñoMes}
          />
        )}
        {activeTab === 1 && (
          <LinealGrafica
            dataGrafica={datagrafica}
            dataLeyenda={dataRptMovimientosAñoMes}
          />
        )}
        {activeTab === 2 && (
          <BarrasGrafica
            dataGrafica={datagrafica}
            dataLeyenda={dataRptMovimientosAñoMes}
          />
        )}
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  height: 100%;
  .tabs {
    list-style: none;
    display: flex;
    box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.bg};
    position: relative;
    border-radius: 100px;
    justify-content: space-between;
    top: 0;
    left: 0;
    * {
      z-index: 2;
    }
    color: ${(props) => props.theme.text};
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 54px;
      width: 150px;
      font-size: 1.25rem;
      font-weight: 500;
      border-radius: 99px; // just a high number to create pill effect
      cursor: pointer;
      transition: color 0.15s ease-in;
    }
    .glider {
      position: absolute;

      display: flex;
      height: 54px;
      width: 150px;
      background-color: ${(props) => props.theme.carouselColor};
      z-index: 1;
      border-radius: 99px;
      transition: 0.25s ease-out;
      transform: translateX(${(props) => props.activeTab});
      box-shadow: 0px 10px 20px -3px ${(props) => props.theme.carouselColor};
    }
  }

  .tab-content {
    position: relative;
    border: 1px solid red;
    border-radius: 6px;
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
