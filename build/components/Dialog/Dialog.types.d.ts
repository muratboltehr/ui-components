import { Icon } from '../Icon/Icon';
export interface DialogProps {
    autofocus?: boolean;
    canEscapeKeyClose?: boolean;
    canClickOutSideToClose?: boolean;
    className?: string;
    icon?: Icon;
    showCloseButton?: boolean;
    isOpen?: boolean;
    onClose?: any;
    title?: string;
    transitionDuration?: number;
    transitionName?: string;
    usePortal?: boolean;
}
