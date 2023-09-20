import styled from "styled-components";
import Lottie from "react-lottie";
import { useOperaciones } from "../../index";
import vaciorojo from "../../assets/vaciorojo.json";
import vacioverde from "../../assets/vacioverde.json";
export function Lottieanimacion({ alto, ancho, animacion }) {
  const { tipo } = useOperaciones();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={`${alto}px`}
        width={`${ancho}px`}
        isClickToPauseDisabled
      />
    </Container>
  );
}
const Container = styled.div``;
