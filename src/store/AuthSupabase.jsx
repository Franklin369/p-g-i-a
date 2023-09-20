import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase.config";
import { create } from "zustand";
import { MostrarIdUsuarioXIdAuthSupabase } from "../index";

export const useAuthStore = create((set,get) => ({
  isAuth: undefined,
  user: null,
  idusuario: null,
  datauserGoogle: [],
  session:[],
  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      set({ isAuth: true });
      set({ datauserGoogle: data[0] });
      console.log("EXPERIMENTO AUTH DATA", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  verificarAuth: (p) => {
    set({ isAuth: p });
  },
  signout: async () => {
    const { error } = await supabase.auth.signOut();
    set({ idusuario: null });
    set({ isAuth: false });
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesión");
  },
  obtenerIdusuario: async () => {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    set({ idusuario: idusuario });
  },
  verificarSubscripcion: () => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
           set({ isAuth: false });
          
set({ session: undefined });
        } else {
          const {isAuth}=get();
          
          set({ isAuth: true });
          console.log("isAuth",isAuth)
          set({ datauserGoogle: session?.user.user_metadata });
 set({ session: session?.user.user_metadata });
          
          // insertarUsuarios(user.id, user.user_metadata);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  },
}));
