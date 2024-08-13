import classNames from "classnames/bind";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import PropTyles from 'prop-types';


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTyles = {
    children: PropTyles.node.isRequired,
}

export default DefaultLayout;