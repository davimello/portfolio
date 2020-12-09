import * as React from 'react';
export declare const ToastContext: React.Context<{
    add: (toast: any) => void;
    success: (toast: any) => void;
    danger: (toast: any) => void;
    warning: (toast: any) => void;
    info: (toast: any) => void;
    toasts: any[];
}>;
declare type Props = {
    children: React.ReactNode;
};
export declare function ToastProvider(props: Props): JSX.Element;
export declare function useToasts(): {
    add: (toast: any) => void;
    success: (toast: any) => void;
    danger: (toast: any) => void;
    warning: (toast: any) => void;
    info: (toast: any) => void;
    toasts: any[];
};
export {};
