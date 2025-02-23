import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons"; // Definindo o ícone diretamente
import "../../styles/components/_btn.scss";

interface LinkButtonProps {
  href: string; // URL para onde o link vai direcionar
  children: React.ReactNode; // Texto do botão
}

const BtnLink: React.FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn">
      <FontAwesomeIcon icon={faPersonDigging} /> {/* Ícone diretamente aqui */}
      {children}
    </a>
  );
};

export default BtnLink;




/* 
faPersonDigging */