
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import PropTyles from 'prop-types';

const cx = classNames.bind(styles);

const defaultFn = () => { };

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]

    console.log(current)

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children])
                        } else {
                            onChange(item);
                        }
                    }
                    }
                />
            )
        })
    }
    return (
        <Tippy
            // visible
            interactive
            placement='bottom-end'
            // offset={[16, 8]}
            hideOnClick={hideOnClick}
            delay={[0, 400]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {
                            (history.length > 1)
                            &&
                            (
                                <Header
                                    title={current.title}
                                    onBack={() => {
                                        setHistory(prev => prev.slice(0, prev.length - 1))
                                    }}
                                />
                            )
                        }
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTyles = {
    children: PropTyles.node.isRequired,
    items: PropTyles.array,
    hideOnClick: PropTyles.bool,
    onChange: PropTyles.func,
}

export default Menu;