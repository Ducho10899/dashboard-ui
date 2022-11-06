import classNames from 'classnames/bind';
import styles from './LeftSidebar.module.scss';

const cx = classNames.bind(styles);

function LeftSidebar() {
    return <aside className={cx('wrapper')}></aside>;
}

export default LeftSidebar;
