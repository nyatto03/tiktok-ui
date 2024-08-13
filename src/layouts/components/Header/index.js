import {
    faEllipsisVertical,
}
    from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import {
    CoinIcon,
    HelpIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingsIcon,
    ShortcutsIcon,
    UploadIcon
} from '~/components/Icons';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <HelpIcon />,
        title: "Feedback and help",
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: "Keyboard shortcuts",
        to: '/shortcut',
    }
];

const userMenu = [
    {
        icon: <ProfileIcon />,
        title: "View profile",
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: "Get coins",
        to: '/coin',
    },
    {
        icon: <SettingsIcon />,
        title: "Settings",
        to: '/settings',
    },
    ...MENU_ITEM,
    {
        icon: <LogoutIcon />,
        title: "Log out",
        to: '/logout',
        separate: true,
    },
]

function Header() {

    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    const currentUser = true;

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>

            <div className={cx('logo')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt='logo-img'></img>
                </Link>
            </div>

            <Search />

            <div className={cx('actions')}>
                {currentUser ?
                    (< >
                        <>
                            <Tippy delay={100} content="Upload video" placement='bottom' >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                        <>
                            <Tippy delay={100} content="Messages" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                        <>
                            <Tippy delay={100} content="Inboxs" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    </>)
                    :
                    (<>
                        <Button text to="/upload">Upload</Button>
                        <Button primary to="/login">Log in</Button>
                        {/* <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn}/>} >Get app</Button> */}


                    </>)
                }

                <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                    {currentUser ?
                        (
                            <Image
                                src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6208d2b408468a0ad011297c0dfbae1a~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=45086&refresh_token=7dfed9407113d61f7202f605c3350b79&x-expires=1723114800&x-signature=wzzePlgb64KnuUaJbXwE62gdBQo%3D&shp=a5d48078&shcp=81f88b70'
                                alt='user-avatar'
                                className={cx('user-avatar')}
                            />)
                        :
                        (<button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />

                        </button>)
                    }
                </Menu>

            </div>



        </div>
    </header >;
}

export default Header;