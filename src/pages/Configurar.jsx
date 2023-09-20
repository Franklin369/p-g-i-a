import styled from "styled-components";
import  {ConfiguracionTemplate} from "../index"
export function Configurar() {
  return (<Container>
     <ConfiguracionTemplate/>
  </Container>

  );
}
const Container = styled.div`
  height: 100vh;

  align-items:center;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  gap:30px;
`;
