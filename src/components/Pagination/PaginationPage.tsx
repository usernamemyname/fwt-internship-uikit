import { FC, ButtonHTMLAttributes } from 'react';
import cn from 'classnames/bind';
import * as styles from './PaginationPage.module.scss';

const cx = cn.bind(styles);

export interface PaginationPageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkTheme: boolean;
}

const PaginationPage: FC<PaginationPageProps> = ({ isDarkTheme, className, ...other }) => (
  <button
    type="button"
    className={cx(
      'PaginationPage',
      {
        'PaginationPage--dark': isDarkTheme
      },
      className
    )}
    {...other}
  />
);

export default PaginationPage;
