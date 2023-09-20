import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import { Icon } from "@rsuite/icons";
export function Btnguardar({ text, link, bgColor, textcolor,funcion }) {
  return (
    <a href={link} target="_blank">
      <Btn inputColor={bgColor} textcolor={textcolor} onClick={funcion}>
        <span className="containerText">
         
          <h6>{text}</h6>
        </span>
      </Btn>
    </a>
  );
}
export function Btnnuevoregistro({ text, link, inputColor, textcolor, tipo,funcion }) {
  return (
  
      <Btn inputColor={inputColor} textcolor={textcolor} onClick={funcion}>
        <span className="containerText">

           {(tipo==="nuevo")?CgMathPlus:IoIosArrowDown}
          <h6>{text}</h6>
        </span>
      </Btn>
    
  );
}
export function BtnDesplegable({ text, link, inputColor, textcolor, tipo,funcion }) {
  return (
  
      <Btn inputColor={inputColor} textcolor={textcolor} onClick={funcion}>
        <span className="containerText">
          <IoIosArrowDown/>
          <h6>{text}</h6>
        </span>
      </Btn>
    
  );
}
const Btn = styled.div`
  display: flex;
  background-color: ${(props) => props.inputColor};
  img {
    background-image: url(${(props) => props.inputColor});
  }
  color: ${(props) => props.textcolor};
  outline: none;
  font-weight: 500;
  border: none;
  font-size: 23px;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
 :hover{
  background-color: rgba(77, 77, 77, 0.5);
 }
  
 

`;
export function Buttonfiltro({ link, inputColor, textcolor, tipo,icono,funcion }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
      
      <Btnfiltro inputColor={inputColor} textcolor={textcolor} onClick={funcion}>
        <span className="containerText">
        <Icon as =  {icono}/>
        </span>
      
      </Btnfiltro>
   
    </motion.div>
   
  );
}
const Btnfiltro = styled.button`
  display: inline-block;
  background-color: ${(props) => props.inputColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${(props) => props.textcolor};
  outline: none;
  font-weight: 600;
  border: none;
  font-size: ${(props) => props.theme.fontxl};
  padding: 0px;

  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
   background-color:#EBE9E5;
  }

  
 
  @media (max-width: 48em) {
    /* font-size: ${(props) => props.theme.fontlg}; */
  }
`;
const Btnflecha = styled.button`
  display: inline-block;
  background-color: ${(props) => props.inputColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${(props) => props.textcolor};
  outline: none;
  font-weight: 600;
  border: none;
  font-size: ${(props) => props.theme.fontxl};
  padding: 0px;

  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.inputColor};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  @media (max-width: 48em) {
    /* font-size: ${(props) => props.theme.fontlg}; */
  }
`;
