import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/95910bef0257937cf4a3d05184cc25c0.jpeg?x-expires=1652623200&x-signature=ThvgHX7C5hkhh%2F9GmdQFfah9eMQ%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
    </div>
}

export default AccountItem;