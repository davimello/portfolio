import { MenuStateReturn as ReakitMenuStateReturn, MenuInitialState as ReakitMenuInitialState } from 'reakit';
export declare type DropdownMenuStateReturn = ReakitMenuStateReturn;
export declare type DropdownMenuInitialState = ReakitMenuInitialState;
export declare function useDropdownMenuState(initialState?: DropdownMenuInitialState): ReakitMenuStateReturn;
export declare function DropdownMenuState(props?: {
    children?: (state: DropdownMenuStateReturn) => any;
} & DropdownMenuInitialState): any;
