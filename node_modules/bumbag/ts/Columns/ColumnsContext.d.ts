import * as React from 'react';
import { Breakpoint } from '../types';
export declare type ColumnsContextProps = {
    isGapless?: boolean;
    minBreakpoint?: Breakpoint;
};
export declare const ColumnsContext: React.Context<ColumnsContextProps>;
