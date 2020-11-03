import { RadioButtonProps } from '../RadioButton/RadioButton.types';
import { IOptionProps, Size } from '../../common';
import { HtmlHTMLAttributes } from 'react';
export interface RadioButtonGroupProps extends RadioButtonProps, HtmlHTMLAttributes<HTMLDivElement> {
    /**
     * Whether the group and _all_ its radios are disabled.
     * Individual radios can be disabled using their `disabled` prop.
     */
    disabled?: boolean;
    /**
     * Whether the radio buttons are to be displayed inline horizontally.
     */
    inline?: boolean;
    /** Optional label text to display above the radio buttons. */
    label?: string;
    /**
     * Align Lable to the right of left of the radio button
     */
    alignLabel?: 'rightAlign' | 'leftAlign';
    /**
* The size gets the width and height of the radioButton in px
* Small: 8px
* Medium:12px
* Large: 16px
*/
    size?: Size;
    /**
     * Name of the group, used to link radio buttons together in HTML.
     * If omitted, a unique name will be generated internally.
     */
    name?: string;
    /**
     * Callback invoked when the currently selected radio changes.
     * Use `event.currentTarget.value` to read the currently selected value.
     * This prop is required because this component only supports controlled usage.
     */
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    /**
     * Array of options to render in the group. This prop is mutually exclusive
     * with `children`: either provide an array of `IOptionProps` objects or
     * provide `<Radio>` children elements.
     */
    options?: IOptionProps[];
    /** Value of the selected radio. The child with this value will be `:checked`. */
    selectedValue?: string | number;
    className?: string;
}
