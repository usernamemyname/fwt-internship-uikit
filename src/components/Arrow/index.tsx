import { FC } from 'react';
import cn from 'classnames/bind';
import { ReactComponent as SelectArrow } from '../../images/selectArrow.svg';
import * as styles from './Arrow.module.scss';

export type TArrow = {
  isOpen: boolean;
  isDarkTheme: boolean;
  className?: string;
};

const cx = cn.bind(styles);

const Arrow: FC<TArrow> = ({ isOpen, isDarkTheme, className }) => (
  <div
    className={cx(className, {
      Arrow__opened: isOpen,
      Arrow__dark: isDarkTheme
    })}>
    <SelectArrow />
  </div>
);

export default Arrow;
