import styled from "styled-components";
import { useAuthStore } from "../store/AuthSupabase";
import { Btnsave, v } from "../index";
import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
export function Login() {
  const { signInWithGoogle } = useAuthStore();
  const [active, setactive] = useState(false);
  const iniciar = async () => {
    setactive(!active);
    await signInWithGoogle();
  };
  return (
    <Container>
      <div className={active ? "contentCard active" : "contentCard"}>
        <span className="version">versión 1.0</span>
        <Zoom top cascade>
          <div className="contentImg">
            <img src={v.logo} className="img" />
          </div>
        </Zoom>

        <Zoom left cascade>
          <Titulo>Cerdyn</Titulo>
        </Zoom>

        <Fade bottom>
          <p className="frase">Toma el control de tus 💵gastos e 💰ingresos</p>
        </Fade>
        <ContainerBtn className="">
           <Fade left>
          <Btnsave
            funcion={iniciar}
            titulo="Iniciar con Google"
            bgcolor="#DAC1FF"
            icono={<v.iconogoogle />}
          />
        </Fade>
        </ContainerBtn>
       
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: ${({ theme }) => theme.bgtotal};
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  position: relative;
  overflow: hidden;
  background-image: url(${v.imagenfondo});
  background-repeat: no-repeat;
  background-size: cover;
.contentImg{
  animation: flotar 1.7s ease-in-out infinite alternate;
}
  .contentCard {
    gap: 30px;
    border-radius: 20px;
    background-color: #131313;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    justify-content: center;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    &.active {
      animation: blur-out-contract 0.9s linear both;
    }

    .version {
      color: #727272;
      text-align: start;
    }
    img {
      max-width: 60%;
      animation: flotar 0.7s ease-in-out infinite alternate;
    }

    .frase {
      color: #909090;
      font-size: 1.2rem;
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    button {
      color: white;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

`;
const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;
const ContainerBtn=styled.div`
 
  justify-content:center;
  display:flex;
`