import { useState } from "react";
import styled from "styled-components";
import { Header, Tabs,CalendarioLineal } from "../../index";
import dayjs from "dayjs";
export function InformesTemplate() {
  const [openDesplegableUser, setOpenDesplegableUser] = useState(false);
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");
  return (
    <Container>
      <header className="header">
        <Header
          openDesplegableUser={openDesplegableUser}
          setOpenDesplegableUser={setOpenDesplegableUser}
        />
      </header>
      <section className="area1">
        <h1>Informes</h1>
      </section>
      <section className="area2">
      <CalendarioLineal
          value={value}
          setValue={setValue}
          formatofecha={formatoFecha}
          setFormatoFecha={setFormatoFecha}
        />
      </section>
      <main className="main">
         <Tabs />
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
    "area1" 100px
    "area2" 70px
    "main" auto;

  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    background-color: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
    justify-content:center;
    padding-bottom:20px;
  }

  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
    display: flex;
    align-items: center;
  }
`;
