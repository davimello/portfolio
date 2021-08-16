import { Palette, ThemeConfig } from '../types';
declare type ScaleType = 'major' | 'minor';
export declare function theme(themeKey: string, path?: string, defaultValue?: any): (props: {
    theme?: ThemeConfig;
    overrides?: any;
    colorMode?: string;
    variant?: string;
}) => any;
export declare function altitude(selector?: string, defaultValue?: any): (props: {
    altitude?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useAltitude(selector?: string, defaultValue?: any): any;
export declare function border(selector?: string, defaultValue?: any): (props: {
    border?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useBorder(selector?: string, defaultValue?: any): any;
export declare function borderRadius(selector?: string, defaultValue?: any): (props: {
    borderRadius?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useBorderRadius(selector?: string, defaultValue?: any): any;
export declare function font(selector?: string, defaultValue?: any): (props: {
    font?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useFont(selector?: string, defaultValue?: any): any;
export declare function fontMetric(selector?: string): (props: {
    fontMetrics?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useFontMetric(selector?: string): any;
export declare function fontSize(selector?: string, defaultValue?: any): (props: {
    fontSize?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useFontSize(selector?: string, defaultValue?: any): any;
export declare function fontWeight(selector?: string, defaultValue?: any): (props: {
    fontWeight?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useFontWeight(selector?: string, defaultValue?: any): any;
export declare function lineHeight(selector?: string, defaultValue?: any): (props: {
    lineHeight?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useLineHeight(selector?: string, defaultValue?: any): any;
export declare function letterSpacing(selector?: string, defaultValue?: any): (props: {
    letterSpacing?: string;
    theme?: ThemeConfig;
}) => any;
export declare function useLetterSpacing(selector?: string, defaultValue?: any): any;
export declare function palette(_selector?: Palette, modes?: any, { useCSSVariables }?: {
    useCSSVariables?: boolean;
}): (props: {
    palette?: string;
    colorMode?: string;
    theme?: ThemeConfig;
}) => any;
export declare function usePalette(selector: string, modes?: any): any;
export declare function space(_scalar: number | string | void, _scaleType?: ScaleType): (props: {
    theme?: ThemeConfig;
}) => any;
export declare function useSpace(scalar: number | string | void, scaleType: ScaleType): any;
export declare function breakpoint(breakpoint: string, cssStyle: any, config?: {
    show?: boolean;
    else?: any;
}): (props: any) => import("@emotion/utils").SerializedStyles;
export {};
