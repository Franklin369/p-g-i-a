import styled from "styled-components";
import { MdOutlineNavigateNext, MdArrowBackIos } from "react-icons/md";
import { useEffect } from "react";
import { useOperaciones } from "../../index";
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
export function CalendarioLineal({
  value,
  setValue,
  setFormatoFecha
 
}) {
  const { colorCategoria,setMes ,setAño} = useOperaciones();
  function IniciarCalendario() {
    setValue(months[currMonth] + currYear);
    let mes = "";
    if (currMonth + 1 < 10) {
      mes = "0" + (currMonth + 1);
    } else {
      mes = currMonth + 1;
    }
    let formatofecha = mes + "/" + currYear;
    setMes(mes);
    setAño(currYear);
    setFormatoFecha(formatofecha);
  }
  function adelante() {
    currMonth += 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    IniciarCalendario();
  }
  function atras() {
    currMonth -= 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    IniciarCalendario();
  }

  useEffect(() => {
    IniciarCalendario();
  }, []);
  return (
    <Container className="wrapper" colortext={colorCategoria}>
      <header>
       
        <div className="subcontainer">
          <span onClick={atras} className="atras">
            <MdArrowBackIos />
          </span>
          <section className="contentValue">
            <p>{value.toString()}</p>
          </section>

          <span onClick={adelante} className="adelante">
            <MdOutlineNavigateNext />
          </span>
        </div>
      </header>
    </Container>
  );
}
const Container = styled.div`
  width: 450px;
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  header {
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
    height: 100%;

    .subcontainer {
      display: flex;
      color: ${(props) => props.colortext};
      align-items: center;
      justify-content: center;
     
      .contentValue {
        border: 2px solid ${(props) => props.colortext};
        border-radius: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        padding: 10px;
      }
      .atras {
        margin-left: 20px;
        svg {
          width: 30px;
          height: 30px;
        }
      }
      .adelante {
          margin-right:20px;
        svg {
          width: 45px;
          height: 45px;
        }
      }
    }
    .current-date {
      font-size: 1.45rem;
      font-weight: 500;
    }
  }
`;

// import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
// import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { useState } from "react";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import styled from "styled-components";
// import { useRef } from "react";
// import { ConstructionOutlined } from "@mui/icons-material";
// import { useEffect } from "react";

// export function CalendarioLineal({ value, setValue }) {
//   const  texto  = useRef(null);
//   const divref = useState(null);
//   const [textovalue, setTextovalue] = useState("");
//   const inputProps = {
//     step: 300,
//   };
//   function Selectfecha(data) {
//     setTextovalue(data);
//     console.log("propsss", "sdas");
//     texto.current.innerHTML=divref.current.id;
//   }
// useEffect(()=>{
//   texto.current.innerHTML=divref.current.className;
// },[value])
//   return (
//     <Container>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <StaticDatePicker
//           orientation="landscape"
//           openTo="day"
//           value={value}

//           inputProps={(newValue) => setValue(newValue) }
//           onChange={(newValue) => {
//            setValue(newValue)
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
//       <div ref={divref}  className="MuiPickersCalendarHeader-labelContainer">
//      {value.toString()}
//       </div>
//       <Textsalid ref={texto}>Holass</Textsalid>
//     </Container>
//   );
// }
// const Textsalid = styled.h1`
//   content: "hola";
//   color:white;
// `;
// const Container = styled.div`
//   .MuiCalendarPicker-root {
//     .MuiPickersCalendarHeader-labelContainer {
//       background-color: #2ecf41;
//       position: absolute;
//       transform: translateX(30%);
//       display: flex;
//       width: 200px;
//       border-radius: 10px;
//       justify-content: center;
//       border-width: 5px;
//       border-color: red;
//       border-style: solid;

//       button {
//         display: none;
//       }
//     }
//     .MuiPickersCalendarHeader-root {
//       padding: 0;
//       background-color: red;
//       .MuiPickersArrowSwitcher-root {
//         background-color: yellow;
//         width: 100vw;
//         display: flex;
//         justify-content: space-between;

//         .MuiPickersArrowSwitcher-spacer {
//           background-color: blue;
//         }
//       }
//     }
//   }
//   .MuiDayPicker-header {
//     display: none;
//   }
//   .MuiPickersToolbar-root {
//     display: none;
//   }
//   .PrivatePickersSlideTransition-root {
//     display: none;
//   }
//   .MuiDialogActions-root {
//     display: none;
//   }
//   .MuiDayPicker-monthContainer {
//     background-color: red;
//     display: none;
//   }
// `;
