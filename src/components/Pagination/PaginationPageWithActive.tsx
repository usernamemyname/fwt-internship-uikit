import { FC } from 'react';
import cn from 'classnames/bind';
import PaginationPage, { PaginationPageProps } from './PaginationPage';
import * as styles from './PaginationPageWithActive.module.scss';

const cx = cn.bind(styles);

interface IProps extends PaginationPageProps {
  isActive: boolean;
}

const PaginationPageWithActive: FC<IProps> = ({ isDarkTheme, isActive, className, ...other }) => (
  <PaginationPage
    isDarkTheme={isDarkTheme}
    className={cx(className, {
      PaginationPageWithActive: isActive,
      'PaginationPageWithActive--dark': isDarkTheme && isActive
    })}
    {...other}
  />
);

export default PaginationPageWithActive;
