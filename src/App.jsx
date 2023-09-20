import { useState } from "react";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routers/routes";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  Dark,
  Light,
  Sidebar,
  Device,
  useAuthStore,
  DeviceMin,
  useUsuariosStore,
  useOperaciones
} from "./index";
import { Menuambur } from "./components/organismos/Menuambur";
export const ThemeContext = createContext(null);
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const { estadoAlerta, textoAlerta, tipoAlerta } = useOperaciones();
  const { datausuarios, temaUser, mostrarUsuarios } = useUsuariosStore();
  const {verificarSubscripcion} = useAuthStore();
  const { data, isLoading, error } = useQuery(["mostrar usuarios APP"], () =>
    mostrarUsuarios()
  );
//   useQuery(["Verificar Auth"], () =>
//   verificarSubscripcion()
// );
  const theme = temaUser === "0" ? "light" : "dark";

  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //  alert(isAuth)

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          {pathname != "/login" ? (
            <Container className={sidebarOpen ? "active" : "oculto"}>
              <div className="ContentSidebar">
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              </div>

              <div className="ContentMenuambur">
                <Menuambur />
              </div>

              <Containerbody>
                <MyRoutes />
              </Containerbody>

              <ReactQueryDevtools initialIsOpen={true} />
            </Container>
          ) : (
            <MyRoutes />
          )}
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
const Container = styled.div`
  display: grid;
  
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
  grid-template-columns: 65px 1fr;

  &.active {
    grid-template-columns: 220px 1fr;
  }


  .ContentMenuambur {
    display: none;
  }

  color: ${({ theme }) => theme.text};
  @media ${Device.mobile} {
    grid-template-columns: 1fr;
    &.active {
      grid-template-columns: 1fr;
    }
    .ContentSidebar {
      display: none;
    }
    .ContentMenuambur {
      position: absolute;
      left: 20px;

      display: block;
    }
  }
`;
const Containerbody = styled.div`
  grid-column: 2;
  width: 100%;
  .ocultarSidebar {
    grid-column: 1;
  }
  @media ${Device.mobile} {
    grid-column: 1;
    width: 100%;
  }
`;

export default App;
