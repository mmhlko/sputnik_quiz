import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export enum FormButtonSize {
    'full'= 'full',
    'minContent'= 'minContent',   
}

export interface IFormButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    color: 'primary' | 'secondary';
    extraClass?: string;
    size?:  FormButtonSize;
}