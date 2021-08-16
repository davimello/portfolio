import * as React from 'react';
import { DisclosureStateReturn as ReakitDisclosureStateReturn, DisclosureInitialState as ReakitDisclosureInitialState } from 'reakit';
export declare type DisclosureStateReturn = ReakitDisclosureStateReturn;
export declare type DisclosureInitialState = ReakitDisclosureInitialState;
export declare const DisclosureContext: React.Context<{
    disclosure: {};
}>;
export declare function useDisclosureState(initialState?: DisclosureInitialState): ReakitDisclosureStateReturn;
export declare function useDisclosureContext(): {
    disclosure: {};
};
export declare function DisclosureState(props: {
    children?: React.ReactNode | ((state: DisclosureStateReturn) => React.ReactElement<any>);
} & DisclosureInitialState): JSX.Element;
