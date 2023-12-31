import styled from "styled-components";
export function CardTotales({title,total}) {
  return (
    <Container>
      <div>
        <div className="textcontainer">
            <h3>{title}</h3>
        <h2>{total}</h2> 
        </div>
       
      </div>
      {/* <Buttonfiltro></Buttonfiltro> */}
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:80px;
  padding:16px 16px 24px 16px;
  border-radius:25px;
.textcontainer{
    display:flex;
    flex-direction:column;
    gap:15px;
     h3,h2{
    text-align:start;
    font-weight:500;
     }
     h3{
        color:#ADADAD;
     }
    h2{
        font-size:25px;
        color:black;
    }
  
}
 

`;
