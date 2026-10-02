import React from "react";
import { Link } from "react-router-dom";

interface RegistrationCtaGroupProps {
  layout?: "row" | "grid" | "vertical";
  className?: string;
  buttonSize?: "small" | "medium" | "large";
}

export const RegistrationCtaGroup: React.FC<RegistrationCtaGroupProps> = ({
  className = "",
}) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <Link
        to="/register"
        className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2"
      >
        <span>REGISTER →</span>
      </Link>
    </div>
  );
};

export default RegistrationCtaGroup;
