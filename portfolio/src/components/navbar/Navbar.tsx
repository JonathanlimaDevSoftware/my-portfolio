import { Link } from "react-router-dom";
import "../../styles/components/_navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Jonathan Lima</div>
      <ul className="navbar__links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>

      <div className="menu-hamburguer">
        <button type="button" className="btn btn-menu" >

        <FontAwesomeIcon icon={faBars} size="xl" />

        </button>
      </div>
    </nav>
  );
};

export default Navbar;
