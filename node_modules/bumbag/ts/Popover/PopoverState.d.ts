import * as React from 'react';
import { PopoverStateReturn as ReakitPopoverStateReturn, PopoverInitialState as ReakitPopoverInitialState } from 'reakit';
export declare type PopoverStateReturn = ReakitPopoverStateReturn;
export declare type PopoverInitialState = ReakitPopoverInitialState;
export declare const PopoverStateContext: React.Context<{
    popover: {};
}>;
export declare function usePopoverState(initialState?: PopoverInitialState): ReakitPopoverStateReturn;
export declare function usePopoverContext(): {
    popover: {};
};
export declare function PopoverState(props: {
    children?: React.ReactNode | ((state: PopoverStateReturn) => React.ReactElement<any>);
} & PopoverInitialState): JSX.Element;
