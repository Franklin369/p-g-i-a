import styled from "styled-components";
import { useCategoriasStore } from "../index";
import {
  CategoriasTemplate,
  useOperaciones,
  DataDesplegableTipo,
  Lottieanimacion,
} from "../index";
import vaciorojo from "../assets/vaciorojo.json";
import vacioverde from "../assets/vacioverde.json";
export function Categorias() {
  const { datacategoria } = useCategoriasStore();
  const { tituloBtnDes, setTipo, colorCategoria, bgCategoria, tipo } =
    useOperaciones();
  return (
    <CategoriasTemplate
      datadesplegable={DataDesplegableTipo}
      color={colorCategoria}
      tituloBtnDes={tituloBtnDes}
      bgCategoria={bgCategoria}
    >
      {datacategoria.length == 0 && <Lottieanimacion alto="300" ancho="300" animacion={tipo == "i" ? vacioverde : vaciorojo}/>}
    </CategoriasTemplate>
  );
}
const Container = styled.div``;
