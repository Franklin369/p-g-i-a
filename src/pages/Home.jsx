import styled from "styled-components";
import { AboutTemplate,useAuthStore } from "../index";
export function Home() {
  const {isAuth } = useAuthStore();
  return (
    <Container>
    <h1>{isAuth?"true":"false"} ss</h1>
      {/* <AboutTemplate /> */}
    </Container>
  );
}
const Container=styled.div`
  height:100vh;
`

