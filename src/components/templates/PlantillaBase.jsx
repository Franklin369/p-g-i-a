import { useState } from "react";
import styled from "styled-components";
import {Header} from "../../index"
export function PlantillaBase() {
  const [openDesplegableUser, setOpenDesplegableUser] = useState(false);
  return (
    <Container>
       <header className="header">
       <Header
          openDesplegableUser={openDesplegableUser}
          setOpenDesplegableUser={setOpenDesplegableUser}
        />

       </header>
      <section className="area1"></section>
      <section className="area2"></section>
      <main className="main"></main>
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
    "area2" 50px
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
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
  }

  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
