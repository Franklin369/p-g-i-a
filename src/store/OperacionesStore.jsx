import { create } from "zustand";
import { v } from "../styles/variables";
import { useLocation } from "react-router-dom";

export const useOperaciones = create((set, get) => ({
  rutaActual: null,
  tipo: "i",
  año: null,
  mes: null,
 

  setMes: (p) => {
    set({ mes: p });
  },
  setAño: (p) => {
    set({ año: p });
  },
  verRutaActual: () => {
    const { pathname } = useLocation();
    set({ rutaActual: pathname });
  },

  // obtenerMesActual:()=>{
  //   const hoy = new Date();
  //      const mes = hoy.getMonth();
  //     set({mes:mes})
  // },
  // obtenerAñoActual:()=>{
  //   const hoy = new Date();
  //      const año = hoy.getFullYear();
  //      set({año:año})
  // },
  tituloBtnDes: "Categorias ingresos",
  colorCategoria: v.colorIngresos,
  bgCategoria: v.colorbgingresos,

  setTipo: (p) => {
    set({ tipo: p });
    const { tipo } = get();
    set({
      tituloBtnDes: tipo == "i" ? "Categorias ingresos" : "Categorias gastos",
    });
    set({
      colorCategoria: tipo == "i" ? v.colorIngresos : v.colorGastos,
    });
    set({
      bgCategoria: tipo == "i" ? v.colorbgingresos : v.colorbgGastos,
    });
  },
}));

// function obtenerMesActual() {
//   const hoy = new Date();
//   const mes = hoy.getMonth();
//   return mes;
// }
// function obtenerAñoActual() {
//   const hoy = new Date();
//   const año = hoy.getFullYear();
//   return año;
// }
