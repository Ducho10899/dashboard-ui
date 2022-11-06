import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <LeftSidebar />
                <div className={cx('main__content_wrapper')}>
                    <div className={cx('left___inner__main_content')}>
                        <Header />
                        <div className={cx('page_wrapper')}>{children}</div>
                    </div>
                    <div className={cx('right___inner__main_content')}>
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
