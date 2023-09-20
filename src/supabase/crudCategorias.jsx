import { UserAuth } from "../context/AuthContext";
import { supabase } from "./supabase.config";
import Swal from "sweetalert2";
import { useCategoriasStore } from "../store/CategoriasStore";
import { MostrarIdUsuarioXIdAuthSupabase } from "../supabase/global";
import {useAuthStore} from "../index"


export async function InsertarCategorias(p) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .insert(p)
      .select();
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya existe un registro con " + p.descripcion,
        footer: '<a href="">Agregue una nueva descripcion</a>',
      });
    }
    if (data) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } catch (error) {
    alert(error.error_description || error.message + " insertar categorias");
  }
}
async function subirImagen(idauthUserSupabase, idcategoria, file) {
  const ruta = idauthUserSupabase + "/categorias/" + idcategoria;
  const { data, error } = await supabase.storage
    .from("imagenes")
    .upload(ruta, file, {
      cacheControl: "0",
      upsert: false,
    });
  if (data) {
    const dataImagen = await ObtenerUrlImagen(ruta);
    return dataImagen;
  } else {
    alert("Error al subir imagen", error);
  }
}
async function ObtenerUrlImagen(ruta) {
  const { data } = await supabase.storage.from("imagenes").getPublicUrl(ruta);
  return data;
}

export async function EditarCategorias(p) {

  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { error } = await supabase
      .from("categorias")
      .update(p)
      .eq("idusuario", idusuario)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar categoria", error);
    }

 
  } catch (error) {
    alert(error.error_description || error.message + " editar categorias");
  }
}
export async function EliminarCategorias(p) {
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { error } = await supabase
      .from("categorias")
      .delete()
      .eq("idusuario", idusuario)
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error);
    }
   
  } catch (error) {
    alert(error.error_description || error.message + " eliminar categorias");
  }
}
export async function MostrarCategorias(p) {
  
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    console.log("data Papus",idusuario);  
    const { data } = await supabase
      .from("categorias")
      .select()
      .eq("idusuario", idusuario)
      .eq("tipo",p.tipo)
      .order("id", { ascending: false })
     
    return data;
  } catch (error) {
    
  }

}
export async function BuscarCategorias(buscador, idusuario) {
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { data, error } = await supabase
      .from("categorias")
      .select()
      .limit(10)
      .eq("idusuario", idusuario)
      .ilike("descripcion", "%" + buscador + "%");

    if (error) {
      alert("Error al eliminar", error);
    }
    return data;
  } catch (error) {
    alert(error.error_description || error.message + " buscar categorias");
  }
}
