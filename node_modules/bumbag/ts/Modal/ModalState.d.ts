import * as React from 'react';
import { DialogStateReturn as ReakitDialogStateReturn, DialogInitialState as ReakitDialogInitialState } from 'reakit';
export declare type ModalStateReturn = ReakitDialogStateReturn;
export declare type ModalInitialState = ReakitDialogInitialState;
export declare const ModalContext: React.Context<{
    modal: ReakitDialogStateReturn;
}>;
export declare function useModalState(initialState?: ModalInitialState): ReakitDialogStateReturn;
export declare function useModalContext(): {
    modal: ReakitDialogStateReturn;
};
export declare function ModalState(props: {
    children?: React.ReactNode | ((state: ModalStateReturn) => React.ReactElement<any>);
} & ModalInitialState): JSX.Element;
