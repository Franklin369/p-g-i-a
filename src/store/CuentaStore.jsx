import { create } from "zustand";
import {
  MostrarCuentas
} from "../supabase/crudCuenta";
export const useCuentaStore = create((set, get) => ({
  cuentaItemSelect:[],
  datacuentas: [],
  mostrarCuentas: async () => {
    const response = await MostrarCuentas();
    set({ datacuentas: response });
    set({ cuentaItemSelect: response });
    return response;
  },
 
  // eliminarCategoria: async (id) => {
  //   await EliminarCategorias(id);
  //   const { mostrarCategorias } = get();
  //   set(mostrarCategorias);
  // },
  // editarCategoria: async (p) => {
  //   await EditarCategorias(p);
  //   const { mostrarCategorias } = get();
  //   set(mostrarCategorias);
  // },
}));
