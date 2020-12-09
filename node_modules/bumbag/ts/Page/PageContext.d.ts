import * as React from 'react';
export declare const PageContext: React.Context<{
    collapseBelow: string;
    isCollapsed: boolean;
    sidebar: {
        isOpen: boolean;
        open: () => any;
        close: () => any;
        toggle: () => any;
        isMinimized: boolean;
        minimize: () => any;
        maximize: () => any;
        toggleMinimize: () => any;
        drawer: import("reakit/ts").DialogStateReturn;
        disclosure: import("reakit/ts").DisclosureStateReturn;
    };
    header: {
        isOpen: boolean;
        open: () => any;
        close: () => any;
        toggle: () => any;
        disclosure: import("reakit/ts").DisclosureStateReturn;
    };
}>;
export declare function PageProvider(props: any): JSX.Element;
