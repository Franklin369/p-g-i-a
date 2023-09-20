import { create } from "zustand";
import { MostrarUsuarios, EditarTemaMonedaUser } from "../index";

export const useUsuariosStore = create((set, get) => ({
  datausuarios: [],
  temaUser: null,
  idusuario:null,
 
  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set({ datausuarios: response });
    const { datausuarios } = get();
    set({ temaUser: datausuarios.tema });
    set({ idusuario: datausuarios.id })
    return response;
  },
  editartemamonedauser: async (p) => {
    await EditarTemaMonedaUser(p);
    const { mostrarUsuarios } = get();
    set(mostrarUsuarios);
  },
}));
