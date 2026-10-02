import React from "react";
import { Link } from "react-router-dom";

interface RegisterDropdownProps {
  buttonText?: string;
  className?: string;
  align?: "left" | "right" | "center";
}

export const RegisterDropdown: React.FC<RegisterDropdownProps> = ({
  buttonText = "REGISTER",
  className = "",
}) => {
  return (
    <Link
      to="/register"
      className={`px-6 py-3.5 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md inline-flex items-center justify-center space-x-2 ${className}`}
    >
      <span>{buttonText}</span>
    </Link>
  );
};

export default RegisterDropdown;
