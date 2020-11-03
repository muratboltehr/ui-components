import { Intent } from "../../common";
export interface ProgressBarProps {
    /**
     * Prop type animaiton determines if the background should animate or not
     * @default true
     */
    animation?: boolean;
    /**
     * Prop type stripes determines if the progress bar will have stripes or no
     * @default true
     */
    stripes?: boolean;
    /**
     * Prop Type value determines the percentage of the progress bar which should be filled.
     * has a value range of [0-100]
     */
    value?: number;
    /**
     * Prop Type intent help in determining the intent of the progress bar
     */
    intent?: Intent;
}
