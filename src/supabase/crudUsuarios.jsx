import { supabase } from "./supabase.config";
import { InsertarCuenta } from "./crudCuenta";
import Swal from "sweetalert2";
export const InsertarUsuarios = async (p) => {
  const result = await MostrarUsuarioXIdAuthSupabase(p.idauth_supabase);
  if (result.length == 0) {
    try {
      const { data } = await supabase.from("usuarios").insert(p).select();
      const iduser = data[0].id;
      const pcuenta = {
        descripcion: "billetera",
        icono: "💵",
        saldo_actual: 0,
        idusuario: iduser,
      };

      console.log("esta DATA", iduser);
      await InsertarCuenta(pcuenta);
      return data;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  } else {
    return result;
  }
};

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
export const MostrarUsuarioXIdAuthSupabase = async (idauth_supabase) => {
  try {
    const { error, data } = await supabase
      .from("usuarios")
      .select("id,nombres,foto,idauth_supabase,correo")
      .eq("idauth_supabase", idauth_supabase);

    return data;
  } catch (error) {
    //alert(error.error_description || error.message);
  }
};
export const MostrarUsuarios = async () => {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const { error, data } = await supabase
      .from("usuarios")
      .select()
      .eq("idauth_supabase", idAuthSupabase);
    return data[0];
  } catch (error) {
    //alert(error.error_description || error.message);
  }
};
export async function EditarTemaMonedaUser(p) {

  try {
    const { error } = await supabase
      .from("usuarios")
      .update(p)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar usuarios", error);
    }
    Swal.fire({
        
      icon: 'success',
      title: 'Datos modificados',
      showConfirmButton: false,
      timer: 1500
    })

 
  } catch (error) {
    alert(error.error_description || error.message + " editar categorias");
  }
}