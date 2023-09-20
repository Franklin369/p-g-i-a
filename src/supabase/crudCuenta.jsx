import { supabase } from "./supabase.config";
import { MostrarIdUsuarioXIdAuthSupabase } from "../supabase/global";


export const InsertarCuenta = async (p) => {
    try {
      const { data } = await supabase.from("cuenta").insert(p).select();
      return data;
    } catch (error) {
      alert(error.error_description || error.message);
    }
};
export async function MostrarCuentas() {
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { data } = await supabase
      .from("cuenta")
      .select()
      .eq("idusuario", idusuario)
      .order("id", { ascending: false });
    return data[0];
  } catch (error) {
    // alert(error.error_description || error.message + " mostrar categorias");
  }

}
