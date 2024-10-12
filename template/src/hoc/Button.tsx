import React, { ReactNode } from 'react';
import { BrandColor } from '../enums/BrandColor.enum.ts';
import { ButtonVariant } from '../enums/ButtonVariant.enum.ts';

interface ButtonProps {
  color: BrandColor;
  variant: ButtonVariant;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, variant, children }) => {
  return (
    <button
      className={`btn btn-${color} btn-${variant} btn-sm rounded-3xl items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
