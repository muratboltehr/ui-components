import Icon from "../Icon/Icon";
import { Intent } from "../../common";

// Generated with util/create-component.js
export interface AlertProps {
    isOpen?: boolean;
    cancelButtonText?: string;
    confirmButtonText?: string;
    canEscapeKeyClose?: boolean;
    onCancel?: any;
    onClose?: any;
    canClickOutSideToClose?: boolean;
    style?: any;
    // onOpen?: any;
    onConfirm?: any;
    intent?: Intent;
    // wrapperRef?:any;
    icon?: Icon;

    
}
