import {
    faCircleXmark,
    faSpinner,
}
    from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';


import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';


const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();

    }, [debounced]);


    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };


    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                onClickOutside={handleHideResult}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            <div className={cx('show-all')}>Xem tất cả kết quả tìm kiếm</div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        spellCheck={false}
                        placeholder='Search accounts and videos'
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <button className={cx('loading')}><FontAwesomeIcon icon={faSpinner} /></button>}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy >
        </div>);
}

export default Search;