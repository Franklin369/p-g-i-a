import { create } from "zustand";
export const useEstadosModal = create((set, get) => ({
  state:false,
  close:()=>set(()=>({
    state:false
  })),
  open:()=>set(()=>({
    state:true
  }))
}));
