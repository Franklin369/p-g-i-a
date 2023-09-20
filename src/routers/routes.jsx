import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import {
  Movimientos,
  Informes,
  Home,
  Categorias,
  MovimientosS,
  Configurar,
  ProtectedRoute,
  useAuthStore,
  UserAuth,
  AboutPage,
  InformesPage,
  
} from "../index";
import { useQuery } from "@tanstack/react-query";
export function MyRoutes() {
  const { user } = UserAuth();
  const {isAuth,verificarSubscripcion,session} = useAuthStore();
  useQuery(["Verificar Auth"], () =>
  verificarSubscripcion())
  return (
    <Routes>
    
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={session} />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/movimientos" element={<MovimientosS />} />
        <Route path="/informes" element={<InformesPage />} />
        <Route path="/configurar" element={<Configurar />} />
        <Route path="/acercade" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
