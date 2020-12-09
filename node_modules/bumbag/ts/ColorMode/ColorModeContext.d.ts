import * as React from 'react';
export declare const ColorModeContext: React.Context<any>;
declare type Props = {
    children: React.ReactNode;
    mode: string;
    isSSR?: boolean;
};
export declare function ColorModeProvider(props: Props): JSX.Element;
export declare namespace ColorModeProvider {
    var defaultProps: {
        isSSR: boolean;
    };
}
export declare function useColorMode(): any;
export {};
