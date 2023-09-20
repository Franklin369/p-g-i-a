import styled from "styled-components";
import {
  DatacategoriasFake,
  Colorcontent,
  ContentAccionesTabla,
} from "../../index";
import Swal from "sweetalert2";
import { v } from "../../styles/variables";
import { EliminarCategorias } from "../../supabase/crudCategorias";
import { useMovimientosStore } from "../../store/MovimientosStore";
import { paginationClasses } from "@mui/material";
import { Fade } from "react-reveal";
export function TablaMovimientos({
  rows,
  SetopenRegistro,
  setdataSelect,
  setAccion,
  mes,
  año,moneda
}) {
  const { eliminarMovimientos } = useMovimientosStore();
  // const {eliminarCategorias} = CrudSupabaseContext();
  function eliminar(id) {
    Swal.fire({
      title: "¿Estás seguro(a)(e)?",
      text: "Una vez eliminado, ¡no podrá recuperar este registro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const p = {
          id: id,
          año: año,
          mes: mes,
        };

        await eliminarMovimientos(p);
      }
    });
  }
  function editar(data) {
    SetopenRegistro(true);
    setdataSelect(data);
    setAccion("Editar");
  }
  return (
    <>
      <Container>
        <table className="responsive-table">
          <thead>
            <tr>
              <th scope="col">Situacion</th>
              <th scope="col">Fecha</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Categoria</th>
              <th scope="col">Cuenta</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {rows?.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-title="Estado">
                    <Situacion
                      bgcolor={item.estado == "1" ? "#69e673" : "#b3b3b3"}
                    ></Situacion>
                  </td>
                  <td data-title="Fecha:">{item.fecha}</td>
                  <td  scope="row">{item.descripcion}</td>
                  <td scope="row">{item.categoria}</td>
                  <td scope="row">{item.cuenta}</td>
                  <td scope="row">{moneda} {item.valor}</td>
                  <td data-title="Acciones">
                    <ContentAccionesTabla
                      funcionEditar={() => editar(item)}
                      funcionEliminar={() => eliminar(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </>
  );
}
const Situacion = styled.div`
  display: flex;
  justify-content: center;
  ::before {
    content: "";
    width: 20px;
    height: 20px;
    /* background-color: red; */
    border-radius: 50%;
    background-color: ${(props) => props.bgcolor};
  }
`;
const Container = styled.div`
  position: relative;
  z-index: 2;
  margin: 5% 3%;
  @media (min-width: ${v.bpbart}) {
    margin: 2%;
  }
  @media (min-width: ${v.bphomer}) {
    margin: 2em auto;
    max-width: ${v.bphomer};
  }
  .responsive-table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;
    @media (min-width: ${v.bpbart}) {
      font-size: 0.85em;
    }
    @media (min-width: ${v.bpmarge}) {
      font-size: 0.9em;
    }
    thead {
      position: absolute;

      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
      @media (min-width: ${v.bpbart}) {
        position: relative;
        height: auto;
        width: auto;
        overflow: auto;
      }
      th {
        border-bottom: 2px solid rgba(115, 115, 115, 0.32);
        font-weight: normal;
        text-align: center;
        color: ${({ theme }) => theme.text};
        &:first-of-type {
          text-align: center;
        }
      }
    }
    tbody,
    tr,
    th,
    td {
      display: block;
      padding: 0;
      text-align: left;
      white-space: normal;
    }
    tr {
      @media (min-width: ${v.bpbart}) {
        display: table-row;
      }
    }

    th,
    td {
      padding: 0.5em;
      vertical-align: middle;
      @media (min-width: ${v.bplisa}) {
        padding: 0.75em 0.5em;
      }
      @media (min-width: ${v.bpbart}) {
        display: table-cell;
        padding: 0.5em;
      }
      @media (min-width: ${v.bpmarge}) {
        padding: 0.75em 0.5em;
      }
      @media (min-width: ${v.bphomer}) {
        padding: 0.75em;
      }
    }
    tbody {
      @media (min-width: ${v.bpbart}) {
        display: table-row-group;
      }
      tr {
        margin-bottom: 1em;
        @media (min-width: ${v.bpbart}) {
          display: table-row;
          border-width: 1px;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &:nth-of-type(even) {
          @media (min-width: ${v.bpbart}) {
            background-color: rgba(151, 151, 151, 0.12);
          }
        }
      }
      th[scope="row"] {
        @media (min-width: ${v.bplisa}) {
          border-bottom: 1px solid rgba(115, 115, 115, 0.32);
        }
        @media (min-width: ${v.bpbart}) {
          background-color: transparent;
          text-align: center;
          color: ${({ theme }) => theme.text};
        }
      }
      .Colordiv {
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        @media (min-width: ${v.bpbart}) {
          justify-content: center;
        }
      }
      td {
        text-align: left;
        @media (min-width: ${v.bpbart}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
          text-align: center;
        }
      }
      td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: 0.8em;
        @media (min-width: ${v.bplisa}) {
          font-size: 0.9em;
        }
        @media (min-width: ${v.bpbart}) {
          content: none;
        }
      }
    }
  }
`;
const ContentEstado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .estado {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
