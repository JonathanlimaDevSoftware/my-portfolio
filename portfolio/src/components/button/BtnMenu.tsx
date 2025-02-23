import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BtnMenu: React.FC<BtnMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      type="button"
      className={`btn btn-menu ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
    >
      <FontAwesomeIcon icon={faBars} size="xl" />
    </button>
  );
};

export default BtnMenu;
