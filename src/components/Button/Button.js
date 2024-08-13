import classNames from "classnames/bind";
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);


function Button({
    className,
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    text = false,
    leftIcon,
    rightIcon,
    disabled = false,
    children,
    onClick,
    ...passProps

}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else {
        if (href) {
            props.href = href;
            Comp = 'a';
        }
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    const classes = cx('wrapper', { [className]: className, primary, outline, small, large, text, disabled, rounded });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    class : PropTypes.string,
    to : PropTypes.string,
    href : PropTypes.string,
    primary : PropTypes.bool,
    outline : PropTypes.bool,
    rounded : PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,
    text : PropTypes.bool,
    disabled : PropTypes.bool,
    children : PropTypes.node.isRequired,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    onClick : PropTypes.func,

}

export default Button;

