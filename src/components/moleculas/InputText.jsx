import styled from "styled-components";
import { Fade } from "react-reveal";
import Shake from 'react-reveal/Shake';
export function InputText({
  style,
  onChange,
  defaultValue,
  placeholder,
  register,
  errors,
}) {
  return (
   
    <Container>
     <Shake spy={errors}>
        <input
        style={style}
        onChange={onChange}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register("descripcion", { required: true, minLength: 2 })}
      ></input>

     </Shake>
    
      {errors.descripcion?.type === "required" && (
        <Fade>
          <p>Campo requerido</p>
        </Fade>
      )}
      {errors.descripcion?.type === "minLength" && (
       <Shake>
<p>Debe tener al menos 2 caracteres</p>

       </Shake> 
      )}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
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
