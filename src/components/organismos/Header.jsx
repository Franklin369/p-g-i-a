import styled from "styled-components";
import supabaseImage from "../../assets/supabasebg.jpg";
import { DatosUser, Contentheader } from "../../index";
export function Header({openDesplegableUser, setOpenDesplegableUser}) {
  return (
    <Contentheader>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DatosUser openDesplegableUser={openDesplegableUser} setOpenDesplegableUser={setOpenDesplegableUser}/>
      </div>
    </Contentheader>
  );
}
