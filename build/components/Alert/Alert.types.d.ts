import Icon from "../Icon/Icon";
import { Intent } from "../../common";
export interface AlertProps {
    isOpen?: boolean;
    cancelButtonText?: string;
    confirmButtonText?: string;
    canEscapeKeyClose?: boolean;
    onCancel?: any;
    onClose?: any;
    canClickOutSideToClose?: boolean;
    style?: any;
    onConfirm?: any;
    intent?: Intent;
    icon?: Icon;
}
