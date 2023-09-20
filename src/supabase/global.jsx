import { supabase } from "./supabase.config";

export async function ObtenerIdAuthSupabase() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session != null) {
    const { user } = session;
    const idAuthSupabase = user.id;
    return idAuthSupabase;
  }
}
export const MostrarIdUsuarioXIdAuthSupabase = async () => {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const { error, data } = await supabase
      .from("usuarios")
      .select("id,nombres,foto,idauth_supabase,correo")
      .eq("idauth_supabase", idAuthSupabase);
    const idusuario = data[0].id;
    return idusuario;
  } catch (error) {
    //alert(error.error_description || error.message);
  }
};
export const MostrarUsuarioXIdAuthSupabase = async () => {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const { error, data } = await supabase
      .from("usuarios")
      .select("id,nombres,foto,idauth_supabase,correo")
      .eq("idauth_supabase", idAuthSupabase);

    return data;
  } catch (error) {
    //alert(error.error_description || error.message);
  }
};
