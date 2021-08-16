import { CSSProperties } from '../types';
declare type Opts = {
    direction?: CSSProperties['gradientDirection'];
    from?: CSSProperties['gradientFrom'];
    fromAt?: CSSProperties['gradientFromAt'];
    to?: CSSProperties['gradientTo'];
    toAt?: CSSProperties['gradientToAt'];
    via?: CSSProperties['gradientVia'];
    viaAt?: CSSProperties['gradientViaAt'];
};
export declare function gradient(opts: any): (styleProps: any) => string;
export declare namespace gradient {
    var text: (styleProps: any) => "" | import("@emotion/utils").SerializedStyles;
}
export declare function getGradientStyles(opts: Opts): (styleProps: any) => import("@emotion/utils").SerializedStyles;
export {};
