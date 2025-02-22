import { Link } from "react-router-dom";
import "../../styles/components/_navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Jonathan Lima</div>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
