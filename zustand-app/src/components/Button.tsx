import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { BUTTON_COLORS, type ButtonColorsType } from '../shared/colors';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: ButtonColorsType;
}

export default function Button({
  children,
  className = 'py-2 px-4',
  color = BUTTON_COLORS.PRIMARY,
  ...rest
}: IProps) {
  return (
    <button
      className={`cursor-pointer flex items-center justify-center rounded-full border-2 focus:ring-4 transition-[color,background-color,border-color,box-shadow] ${color} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
