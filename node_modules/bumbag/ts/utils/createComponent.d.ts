import * as React from 'react';
export declare function createComponent<Props>(Component: React.FunctionComponent<Props>, config?: {
    attach?: {
        displayName?: string;
        useProps: (props?: Partial<Props>, config?: {
            disableCSSProps?: Array<string>;
            themeKey?: string;
        }) => any;
    };
    defaultProps?: Partial<Props>;
    themeKey?: string;
    shouldMemo?: boolean;
}): React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<unknown>> & {
    displayName?: string;
    useProps: (props?: Partial<Props>, config?: {
        disableCSSProps?: Array<string>;
        themeKey?: string;
    }) => any;
};
