import React from 'react';
import { ModalInitialState, ModalStateReturn } from '../Modal';
export declare type OverlayStateReturn = ModalStateReturn;
export declare type OverlayInitialState = ModalInitialState;
export declare function useOverlayState(initialState?: OverlayInitialState): import("reakit/ts").DialogStateReturn;
export declare function OverlayState(props: {
    children?: React.ReactNode | ((state: OverlayStateReturn) => React.ReactElement<any>);
} & OverlayInitialState): JSX.Element;
