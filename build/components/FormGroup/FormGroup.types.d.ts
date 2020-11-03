/// <reference types="react" />
import { Intent } from '../../common';
export interface FormGroupProps {
    /**
     * A space-delimited list of class names to pass along to the
     * `Classes.FORM_CONTENT` element that contains `children`.
     */
    contentClassName?: string;
    /**
     * Whether form group should appear as non-interactive.
     * Remember that `input` elements must be disabled separately.
     */
    disabled?: boolean;
    /**
     * Optional helper text. The given content will be wrapped in
     * `Classes.FORM_HELPER_TEXT` and displayed beneath `children`.
     * Helper text color is determined by the `intent`.
     */
    helperText?: React.ReactNode;
    /** Whether to render the label and children on a single line. */
    inline?: boolean;
    /** Label of this form group. */
    label?: string;
    intent?: Intent;
    isInvalid?: boolean;
    /**
     * `id` attribute of the labelable form element that this `FormGroup` controls,
     * used as `<label for>` attribute.
     */
    required?: boolean;
    placeholder?: string;
}
