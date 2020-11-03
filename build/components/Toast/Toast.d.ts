/// <reference types="react" />
import PropTypes from 'prop-types';
import './Toast.scss';
declare const Toast: {
    (props: any): JSX.Element;
    propTypes: {
        toastList: PropTypes.Validator<any[]>;
        position: PropTypes.Requireable<string>;
        autoDelete: PropTypes.Requireable<boolean>;
        dismissTime: PropTypes.Requireable<number>;
    };
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
};
export default Toast;
