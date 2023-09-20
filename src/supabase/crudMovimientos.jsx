import { supabase } from "./supabase.config";
import { MostrarIdUsuarioXIdAuthSupabase } from "../supabase/global";
import Swal from "sweetalert2";
import { useCuentaStore } from "../store/CuentaStore";
export const InsertarMovimientos = async (p) => {
  try {
    const { data, error  } = await supabase.from("movimientos").insert(p).select();
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
        
        icon: 'success',
        title: 'Registrado',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } catch (error) {
    alert(error.error_description || error.message + " insertar movimientos");
  }
};
export async function MostrarMovimientosPorMesAño(p) {
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { data } = await supabase.rpc("mmovimientosmesaño", {
      anio: p.año,
      mes: p.mes,
      iduser: idusuario,
      tipocategoria: p.tipocategoria,
    });
    console.log("dataMovimientos NEW", data);
    return data;
  } catch (error) {
    //alert(error.error_description || error.message + " mostrar movimientos");
  }
}
export async function MostrarTotalMesAño(p) {
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { data } = await supabase.rpc("totalpormesaño", {
      anio: p.año,
      mes: p.mes,
      iduser: idusuario,
    });
    console.log("total", data);
    return data;
  } catch (error) {
    //alert(error.error_description || error.message + " mostrar movimientos");
  }
}
export async function MostrarTotalMesAñoPorEstado(p) {
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { data } = await supabase.rpc("totalpormesaño_estado", {
      anio: p.año,
      mes: p.mes,
      iduser: idusuario,
      pestado: p.estado,
    });
    console.log("total", data);
    return data;
  } catch (error) {
    //alert(error.error_description || error.message + " mostrar movimientos");
  }
}
export async function EliminarMovimientos(p) {
  try {
    const { error } = await supabase
      .from("movimientos")
      .delete()
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error);
    }
    // const ruta = idAuthSupabase + "/categorias/" + id;
    // await supabase.storage.from("imagenes").remove([ruta]);
  } catch (error) {
    alert(error.error_description || error.message + " eliminar movimientos");
  }
}
export async function EliminarMovimientosTodos(p) {
  try {
  alert(p.idcuenta)
    const { error } = await supabase
      .from("movimientos")
      .delete()
      .eq("idcuenta", p.idcuenta);
    if (error) {
      alert("Error al eliminar", error);
    }
    Swal.fire({
        
      icon: 'success',
      title: 'Datos Reseteados',
      showConfirmButton: false,
      timer: 1500
    })
    // const ruta = idAuthSupabase + "/categorias/" + id;
    // await supabase.storage.from("imagenes").remove([ruta]);
  } catch (error) {
    alert(error.error_description || error.message + " eliminar movimientos");
  }
}
export async function ReporteMovimientosMesAño(p) {
  try {
    const idusuario = await MostrarIdUsuarioXIdAuthSupabase();
    const { data } = await supabase.rpc("rptmovimientos_año_mes", {
      anio: p.año,
      mes: p.mes,
      iduser: idusuario,
    });
    console.log("total", data);
    return data;
  } catch (error) {
    //alert(error.error_description || error.message + " mostrar movimientos");
  }
}
