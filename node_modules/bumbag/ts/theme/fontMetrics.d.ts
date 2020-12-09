import { FontMetricsThemeConfig } from '../types';
export declare const fontMetrics: {
    SFPro: {
        capHeight: number;
        ascent: number;
        descent: number;
        lineGap: number;
        unitsPerEm: number;
    };
    Roboto: {
        capHeight: number;
        ascent: number;
        descent: number;
        lineGap: number;
        unitsPerEm: number;
    };
    SegoeUI: {
        capHeight: number;
        ascent: number;
        descent: number;
        lineGap: number;
        unitsPerEm: number;
    };
};
export declare const OSFonts: {
    windows: string;
    apple: string;
    android: string;
};
export declare function getFontMetricsFromUserAgent(): any;
declare const _default: (overrides: FontMetricsThemeConfig) => {
    default: any;
    heading: any;
};
export default _default;
