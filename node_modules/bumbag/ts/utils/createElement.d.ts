import * as React from 'react';
declare type Props = {
    children?: React.ReactNode;
    component: string | React.ComponentType<any>;
    enableRenderPropsComposition?: boolean;
    use?: string | React.ComponentType<any>;
    htmlProps: any;
};
export declare function createElement({ children, component, enableRenderPropsComposition, htmlProps, use }: Props): any;
export {};
