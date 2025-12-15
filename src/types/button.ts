// import type { ButtonHTMLAttributes, ReactNode } from "react";

// export interface ButtonProps
//   extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
// }

import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
}