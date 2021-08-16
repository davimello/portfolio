import { BordersThemeConfig } from '../types';
declare const _default: (overrides: BordersThemeConfig) => {
    default: {
        color: string;
        width: string;
    } | ((props: {
        theme: import("../types").ThemeConfig;
    }) => {
        color: string;
        width: string;
    }) | {
        color: string;
        style: string;
        width: string;
    };
};
export default _default;
