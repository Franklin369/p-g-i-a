import styled from "styled-components";
import { Btncircular, v,useUsuariosStore } from "../../index";

export function TotalesCard({color,total,title,icono}) {
  const {datausuarios} = useUsuariosStore();
  return (
    <ContentTotales > 
      <div className="contentTextos">
        <section>
          <span className="title">{title}</span>
          <b>{<v.iconoFlechabajo/>}</b>
        </section>

        <span className="total">{datausuarios.moneda} {total}</span>
      </div>

      <div className="contentIcono">
        <Btncircular
          icono={icono}
          height="50px"
          width="50px"
          textColor="#ffffff"
          bgcolor={color}
          fontsize="25px"
         
        />
      </div>
    </ContentTotales>
  );
}

export const ContentTotales = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme})=>theme.bg};
  border-radius: 25px;
  padding: 20px;
  width: 100%;
  justify-content: space-between;

  .contentTextos {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 14px;
    }
    .total {
      font-size: 22px;
      font-weight: 500;
    }
    section{
      display:flex;
      gap:10px;
      display:flex;
      align-items:center;
      b{
        transform:rotate(-90deg)
      }

    }
  }
  .contentIcono {
    display: flex;
  }
`;
