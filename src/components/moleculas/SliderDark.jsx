import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../App";

export function SliderDark({ funcion }) {
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <Container>
      <h1>{theme}</h1>
      <label className="switch">
        <input type="checkbox" onClick={CambiarTheme}></input>
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
    background-color: #303136;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${(props) => props.theme.sizeoficon};
    width: ${(props) => props.theme.sizeoficon};
    border-radius: 20px;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: #303136;
    transition: 0.4s;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }

  input:checked + .slider {
    background-color: #fff;
  }

  input:checked + .slider:before {
    left: 0.3rem;

    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    box-shadow: none;
  }
`;
