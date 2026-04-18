import React from 'react';
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.service";
import Button from "../atoms/Button";
import { useMenu } from "../../context/MenuContext";

const Header2 = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-negro-txt px-4 py-4 w-full">
      <div className="flex items-center justify-between w-full h-16 mx-4">

        {/* Left: UPB Logo */}
          <img
          src="upb.png"
          alt="UPB Logo"
          className="h-14 w-auto object-contain cursor-pointer ml-4"
          onClick={() => navigate("/dashboard")}
          />

        {/* Right: Buttons (Perfil and Menú) */}
        <div className="flex flex-control items-center px-10 mr-4">
          <img
            src="accesibilidad.png"
            alt="Accesibilidad"
            className="w-12 h-12 object-contain cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-negro-txt translate-y-px"
          />
          <Button
            text="Perfil"
            onClick={() => navigate("/perfil")}
            variant="header"
          />
          <Button
            text="Menú"
            onClick={toggleMenu}
            variant="header"
          />
        </div>

      </div>
    </header>
  );
};
  
export default Header2;
