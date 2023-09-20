import { create } from "zustand";
import { useMovimientosStore, useUsuariosStore,useCategoriasStore } from "../index";
import { useQuery } from "@tanstack/react-query";

export const useQueryMostrarMovimientosMesAño = (p) => {
  const { mostrarMovimientos } = useMovimientosStore();
  return useQuery(
    ["mostrar movimientos ss", { año: p.año, mes: p.mes, tipocategoria: p.tipo }],
    () => mostrarMovimientos({ año: p.año, mes: p.mes, tipocategoria: p.tipo })
  );
};
