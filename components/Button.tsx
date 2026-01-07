import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg min-h-[44px] cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple to-brand-neon text-white shadow-brand-neon/30 hover:shadow-brand-neon/50",
    outline: "border-2 border-brand-neon text-brand-neon hover:bg-brand-neon/10"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (external) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;