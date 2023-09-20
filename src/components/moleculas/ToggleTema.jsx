import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useUsuariosStore ,SliderLight,SliderDark} from "../../index";
export function ToggleTema() {
  const { datausuarios } = useUsuariosStore();
  const { setTheme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <div>
     {
      datausuarios.tema==="0"?(<SliderLight funcion={CambiarTheme}/>):(<SliderDark funcion={CambiarTheme}/>)
     }
    </div>
  );
}

