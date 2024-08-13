import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTyles from 'prop-types';

const cx = classNames.bind(styles);



function MenuItem({ data, onClick }) {

    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>
    );
}

MenuItem.propTyles = {
    data: PropTyles.object.isRequired,
    onClick: PropTyles.func,
}

export default MenuItem;