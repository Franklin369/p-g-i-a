import { create } from "zustand";
import {
  InsertarCategorias,
  MostrarCategorias,
  EliminarCategorias,
  EditarCategorias,
} from "../supabase/crudCategorias";

export const useCategoriasStore = create((set, get) => ({
  categoriaItemSelect: [],
  datacategoria: [],
  mostrarCategorias: async (p) => {
  
    const response = await MostrarCategorias(p);
    set({ datacategoria: response });
    set({ categoriaItemSelect: response[0] });
    return response;
  },


  selectCategoria: (p) => {
    set({ categoriaItemSelect: p });
  },
  insertarCategorias: async (p) => {
    await InsertarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  eliminarCategoria: async (p) => {
    await EliminarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  editarCategoria: async (p) => {
    await EditarCategorias(p);
 
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
}));
