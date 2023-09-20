import styled from "styled-components";
export function Textoflotante({texto}) {
  return (<Container>
<h1>{texto}</h1>
  </Container>);
}
const Container =styled.div`
  position:absolute;
  display:flex;
  width:50px;
  height:80px;
  background-color:red;
  z-index:1000000000;
`