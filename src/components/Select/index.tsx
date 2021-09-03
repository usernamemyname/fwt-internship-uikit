import { FC, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import cn from 'classnames/bind';
import useOutsideClick from '../../hooks/useOutsideClick';
import Arrow from '../Arrow';
import './SimpleBar.scss';
import * as styles from './Select.module.scss';

const cx = cn.bind(styles);

type TOption = {
  id: number;
  name: string;
};

export interface ISelect {
  /**
   * Specify an optional className to be applied to the select box
   */
  className?: string;
  /**
   * Specify whether the control is disabled
   */
  disabled: boolean;
  /**
   * Provide the contents of your Select
   */
  options: TOption[];
  /**
   * Current theme
   */
  isDarkTheme: boolean;
  /**
   * The value of the `<select>`
   */
  value: string;
  /**
   * The callback function that is called each time the value of
   * the underlying `<input>` changes
   */
  onChange: (name: string) => void;
}

const Select: FC<ISelect> = ({
  className,
  disabled = false,
  options,
  isDarkTheme = false,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  useOutsideClick(ref, toggleOpen);

  return (
    <div
      ref={isOpen ? ref : null}
      className={cx(className, 'Select', {
        'Select--open': isOpen,
        'Select--dark': isDarkTheme
      })}
      onClick={!disabled ? toggleOpen : () => {}}
      aria-hidden="true">
      {!value && <span className={cx('Select__title')}>Choose an option</span>}
      <span className={cx('Select__title')}>{value}</span>
      <Arrow isOpen={isOpen} className={cx('Select__arrow')} isDarkTheme={isDarkTheme} />
      {isOpen && options && (
        <ul
          className={cx('Select__optionContainer', {
            'Select__optionContainer--open': isOpen,
            'Select__optionContainer--dark': isDarkTheme
          })}>
          <SimpleBar style={{ maxHeight: 'inherit' }}>
            {options.map((option) => (
              <li
                onClick={() => onChange(option.name)}
                className={cx('Select__option', {
                  'Select__option--dark': isDarkTheme
                })}
                key={option.id}
                aria-hidden="true">
                <p className={cx('Select__optionName')}>{option.name}</p>
              </li>
            ))}
          </SimpleBar>
        </ul>
      )}
    </div>
  );
};

export default Select;
