import styled from "styled-components";

export function SliderLight({funcion}) {
 
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" onClick={funcion}></input>
        <span className="slider"></span>
      </label>
    </Container>
  );
}
const Container = styled.div`
  .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;

    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${(props) => props.theme.sizeoficon};
    width: ${(props) => props.theme.sizeoficon};
    border-radius: 20px;
    left: ${(props) => props.theme.slideroffset};
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #303136;
  }

  input:checked + .slider:before {
    left: calc(
      100% -
        (
          ${(props) => props.theme.sizeoficon} +
            ${(props) => props.theme.slideroffset}
        )
    );
    background: #303136;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }
`;
