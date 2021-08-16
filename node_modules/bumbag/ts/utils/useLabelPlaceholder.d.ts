export declare function useLabelPlaceholder({ enabled, useValue, ...props }: {
    [x: string]: any;
    enabled?: boolean;
    useValue?: boolean;
}): {
    isFocused: boolean;
    inputProps: {
        onBlur: (e: any) => void;
        onChange: (...args: any[]) => void;
        onFocus: (e: any) => void;
    };
};
