import { FC } from 'react';
import cn from 'classnames/bind';
import PaginationPage, { PaginationPageProps } from './PaginationPage';

interface IProps extends PaginationPageProps {
  isActive: boolean;
}

const PaginationPageWithActive: FC<IProps> = ({ isDarkTheme, isActive, className, ...other }) => (
  <PaginationPage
    isDarkTheme={isDarkTheme}
    className={cn(className, {
      PaginationPageWithActive: isActive,
      'PaginationPageWithActive--dark': isDarkTheme && isActive
    })}
    {...other}
  />
);

export default PaginationPageWithActive;
