import * as React from 'react';
import { ModalStateReturn, ModalInitialState } from '../Modal';
export declare type DrawerStateReturn = ModalStateReturn;
export declare type DrawerInitialState = ModalInitialState;
export declare function useDrawerState(initialState?: DrawerInitialState): import("reakit/ts").DialogStateReturn;
export declare function DrawerState(props: {
    children?: React.ReactNode | ((state: DrawerStateReturn) => React.ReactElement<any>);
} & DrawerInitialState): JSX.Element;
