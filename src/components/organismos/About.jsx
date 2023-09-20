import styled from "styled-components";

import { lazy, Suspense } from "react";
import { Spinner, Btnsave, v } from "../../index";

const Carousel = lazy(() => import("../moleculas/Carousel"));

export function About() {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Spinner />}>
            <Carousel />
          </Suspense>
        </Box>
        <Box>
          <Title>
            Bienvenido a Cerdyn <br /> 🐷
          </Title>
          <SubText>
            Cerdyn nace por las pocas aplicaciones gratis que existen para
            controlar gastos e ingresos.
            <br />
            ❤️Está surgiendo como curso para lograr presupuestarlo,
            <br /> MUCHAS GRACIAS POR APOYAR ESTE PROYECTO
          </SubText>

          <ContainerAutor>
            <div className="contentImg">
              <img src="https://i.ibb.co/6Nw0B9p/yjtityutyu.png" />
            </div>

            <div className="contentDescripcion">
              <b>Ing. Franklin Bustamante</b>
              <span>"cualquiera puede programar"</span>
            </div>
          </ContainerAutor>
          <ButtonContainer>
            <Btnsave
              titulo="UNIRSE A Telegram"
              bgcolor="#BF94FF"
              icono={<v.iconoreact />}
            />
            <Btnsave
              titulo="Ver curso"
              bgcolor="#fb37b7"
              icono={<v.iconocorona />}
            />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
}
const ContainerAutor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .contentImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .contentDescripcion {
    display: flex;
    flex-direction: column;
    span {
      color: #8c8c8c;
    }
  }
`;
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #8e8c86;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: center;
  display: flex;
  gap: 20px;

  @media (max-width: 64em) {
    width: 100%;

    a {
      margin: 0 auto;
    }
  }
`;
