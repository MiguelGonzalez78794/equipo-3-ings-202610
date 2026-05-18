import React from 'react';
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.service";
import Button from "../atoms/Button";
import { useMenu } from "../../context/MenuContext";
import AccessButton from '../atoms/AccessButton';

const Header2 = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };


  return (
    <header className="sticky top-0 z-50 border-b border-negro-txt px-4 py-2 w-full">
      <div className="flex items-center justify-between h-14">

        {/* Left: UPB Logo */}
        <img
          src="upb.png"
          alt="UPB Logo"
          className="h-10 w-auto object-contain cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />

        {/* Right: Accessibility + Buttons */}
        <div className="flex items-center gap-2">
          <AccessButton />
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
