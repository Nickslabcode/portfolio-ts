import React, { ReactNode } from 'react';
import { BrandColor } from '../enums/BrandColor.enum';
import { ButtonVariant } from '../enums/ButtonVariant.enum';

interface ButtonProps {
  color: BrandColor;
  variant: ButtonVariant;
  handleClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  color,
  variant,
  handleClick,
  children,
}) => {
  return (
    <button
      className={`btn ${color} btn-${variant} btn-sm rounded-3xl items-center`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
