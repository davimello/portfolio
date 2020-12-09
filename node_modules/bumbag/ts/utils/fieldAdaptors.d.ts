export declare function formikField(Component: any, { disableBlurEvent, disableFocusEvent, hasFieldWrapper, isCheckbox, isCheckboxGroup, isAutosuggest, isSelectMenu, useValue, }?: {
    disableBlurEvent?: boolean;
    disableFocusEvent?: boolean;
    hasFieldWrapper?: boolean;
    isCheckbox?: boolean;
    isCheckboxGroup?: boolean;
    isAutosuggest?: boolean;
    isSelectMenu?: boolean;
    useValue?: boolean;
}): ({ field, form, ...props }: any) => JSX.Element;
export declare function reduxFormField(Component: any, { disableBlurEvent, disableFocusEvent, hasFieldWrapper, isCheckbox, isCheckboxGroup, isAutosuggest, isSelectMenu, useValue, }?: {
    disableBlurEvent?: boolean;
    disableFocusEvent?: boolean;
    hasFieldWrapper?: boolean;
    isCheckbox?: boolean;
    isCheckboxGroup?: boolean;
    isAutosuggest?: boolean;
    isSelectMenu?: boolean;
    useValue?: boolean;
}): ({ input, meta, ...props }: any) => JSX.Element;
