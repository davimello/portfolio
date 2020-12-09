export declare function useOptionsState({ defaultValue, isNativeInput, onBlur, onChange, type, value }: any): {
    getOptionItemProps: ({ readOnly, value }: {
        readOnly?: boolean;
        value: any;
    }) => {
        checked: any;
        onChange: (e: any) => void;
        onBlur: () => void;
    };
};
