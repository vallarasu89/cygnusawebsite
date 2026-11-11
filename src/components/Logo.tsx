
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/CA-New_Blue_White-Logo-01.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  markOnly?: boolean;
  withTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'white',
  markOnly = false,
  withTagline = false,
  className = '',
  size = 'md'
}) => {
  // Height sizing for exact proportional aspect ratio
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center transition-opacity hover:opacity-95 focus:outline-none ${className}`}
      aria-label="CYGNUSA Technologies - Home"
    >
      <img 
        src={logoImg} 
        alt="CYGNUSA Technologies"
        className={`${heightMap[size]} w-auto object-contain shrink-0`}
        loading="eager"
      />
    </Link>
  );
};
