import styled from "styled-components";
import { Fade } from "react-reveal";
import Shake from "react-reveal/Shake";
export function InputNumber({
  style,
  onChange,
  defaultValue,
  placeholder,
  register,
  errors,icono
}) {
  return (
    <Container>
      <Shake spy={errors}>
        <ContainerTextoicono>
           <span>{icono}</span>
        <input
          step="0.01"
          style={style}
          onChange={onChange}
          type="number"
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register("monto", { required: true, Number: true })}
        ></input>
        </ContainerTextoicono>
       
      </Shake>

      {errors.valor?.type === "required" && (
        <Fade>
          <p>Campo requerido</p>
        </Fade>
      )}
      {errors.valor?.type === "Number" && (
        <Shake>
          <p>Ingrese un número valido</p>
        </Shake>
      )}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display:flex;
  align-items:start;
  flex-direction:column;
  justify-content:start;
  input {
    background: ${({ theme }) => theme.bgtotal};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: solid 1px grey;
    color: ${({ theme }) => theme.text};
    outline: none;
    &:focus {
      border-bottom: none;
    }
    &::placeholder {
      color: #c8c8c8;
    }
  }
  p {
    color: #ff6d00;
    font-size: 12px;
  }
`;
const ContainerTextoicono=styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  text-align:center;
`