import { create } from "zustand";
import {
  InsertarMovimientos,
  MostrarMovimientosPorMesAño,
  MostrarTotalMesAño,
  MostrarTotalMesAñoPorEstado,
  EliminarMovimientos,EliminarMovimientosTodos,
  ReporteMovimientosMesAño
} from "../supabase/crudMovimientos";

import {useUsuariosStore} from "../index"

export const useMovimientosStore = create((set, get) => ({
  datamovimientos: [],
  dataRptMovimientosAñoMes: [],
  totalMesAño: 0,
  totalMesAñoPagados: 0,
  totalMesAñoPendientes: 0,
  mostrarMovimientos: async (p) => {
    const response = await MostrarMovimientosPorMesAño(p);

    const { calcularTotales } = get();
    calcularTotales(response);
    set({ datamovimientos: response });
    return response;
  },
  calcularTotales: (response) => {
    const dtPagados = response.filter((item) => item.estado == 1);
    const dtPendientes = response.filter((item) => item.estado == 0);

    let total = 0;
    let tpagados = 0;
    let tpendientes = 0;

    response.forEach((item) => {
      const array = Object.values(item);
      total += array[2];
    });

    dtPagados.forEach((item) => {
      const array = Object.values(item);
      tpagados += array[2];
    });
    dtPendientes.forEach((item) => {
      const array = Object.values(item);
      tpendientes += array[2];
    });
    set({ totalMesAño: total });
    set({ totalMesAñoPagados: tpagados });
    set({ totalMesAñoPendientes: tpendientes });
  },
  rptMovimientosAñoMes: async (p) => {
    const response = await ReporteMovimientosMesAño(p);
    set({ dataRptMovimientosAñoMes: response });
    return response;
  },
  insertarMovimientos: async (p) => {
    await InsertarMovimientos(p);
     const { mostrarCategorias } = get();
      set(mostrarCategorias(p));
  },

  eliminarMovimientos: async (p) => {
    await EliminarMovimientos(p);
    const response = await MostrarMovimientosPorMesAño(p);
    const { calcularTotales } = get();
    calcularTotales(response);
    set({ datamovimientos: response });
    // const { mostrarMovimientos } = get();
    // set(mostrarMovimientos);
  },
  eliminarMovimientosTodos: async (p) => {
    await EliminarMovimientosTodos(p);
    // const response = await MostrarMovimientosPorMesAño(p);
    // const { calcularTotales } = get();
    // calcularTotales(response);
    // set({ datamovimientos: response });
    // const { mostrarMovimientos } = get();
    // set(mostrarMovimientos);
  },

  // editarCategoria: async (p) => {
  //   await EditarCategorias(p);
  //   const { mostrarCategorias } = get();
  //   set(mostrarCategorias);
  // },
}));
