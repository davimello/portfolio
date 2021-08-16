import * as React from 'react';
import { RoverStateReturn as ReakitRoverStateReturn, RoverInitialState as ReakitRoverInitialState } from 'reakit';
export declare type RoverStateReturn = ReakitRoverStateReturn;
export declare type RoverInitialState = ReakitRoverInitialState;
export declare const RoverContext: React.Context<{
    rover: {};
}>;
export declare function useRoverState(initialState?: RoverInitialState): ReakitRoverStateReturn;
export declare function useRoverContext(): {
    rover: {};
};
export declare function RoverState(props: {
    children?: React.ReactNode | ((state: RoverStateReturn) => React.ReactElement<any>);
} & RoverInitialState): JSX.Element;
