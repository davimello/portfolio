declare type CapsizeOpts = {
    fontFamily?: string;
    fontSize?: string;
    includeBottomGap?: boolean;
    lineHeight?: string;
    shrink?: boolean;
    themeKey?: string;
};
export declare function getCapsizeAttributes(opts?: CapsizeOpts): ({ theme, ...props }: {
    [x: string]: any;
    theme: any;
}) => {
    fontMetrics: any;
    lineHeight: any;
    lineHeightScale: any;
    lineGap: number;
    fontSizeInPx: number;
    leading: number;
};
export declare function getFontSize(opts?: any): (props: any) => {
    [key: string]: string;
};
export declare function getCapsizeStyles(opts?: CapsizeOpts): any;
export {};
