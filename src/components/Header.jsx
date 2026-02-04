import { Menu } from "lucide-react";
import EnumLogo from "../assets/Enum_Logo_Blue-removebg-preview 2.png";

const Header = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] border-b border-gray-200 bg-white flex items-center px-6 z-50">
      
      {/* Menu icon – MOBILE ONLY */}
      <button
        onClick={onMenuClick}
        className="lg:hidden mr-3"
      >
        <Menu size={24} />
      </button>

      <img
        src={EnumLogo}
        alt="Enum"
        className="h-[31px] pl-2"
      />
    </header>
  );
};

export default Header;
