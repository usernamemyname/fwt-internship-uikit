import React, { FC, useState, SetStateAction } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import cn from 'classnames/bind';
import Range from '../components/Range';
import Input from '../components/Input';
import styles from './RangeExample.module.scss';

const cx = cn.bind(styles);

interface IRangeExample {
  valueFrom: string;
  valueBefore: string;
  handlerFrom: React.Dispatch<SetStateAction<string>>;
  handlerTo: React.Dispatch<SetStateAction<string>>;
  isDarkTheme: boolean;
  className?: string;
}

const RangeExample: FC<IRangeExample> = ({ isDarkTheme, className }) => {
  const [valueFrom, setFrom] = useState('');
  const [valueBefore, setTo] = useState('');

  const blurFromHandler = (value: string) => {
    setFrom(value);
  };
  const blurToHandler = (value: string) => {
    setTo(value);
  };
  const toServer = () => {
    // eslint-disable-next-line no-console
    console.log('server request');
  };

  return (
    <Range isDarkTheme={isDarkTheme} onClose={toServer} aria-hidden="true" className={className}>
      <Input
        isDarkTheme={isDarkTheme}
        className={cx('input', {
          'input--dark': isDarkTheme
        })}
        placeholder="from"
        onChange={(e) => blurFromHandler(e.target.value)}
        onBlur={() => toServer()}
        value={valueFrom}
      />
      <div
        className={cx('separator', {
          'separator--dark': isDarkTheme
        })}
      />
      <Input
        isDarkTheme={isDarkTheme}
        className={cx('input', {
          'input--dark': isDarkTheme
        })}
        placeholder="before"
        onChange={(e) => blurToHandler(e.target.value)}
        onBlur={() => toServer()}
        value={valueBefore}
      />
    </Range>
  );
};

export default {
  title: 'Example/Range',
  component: RangeExample,
  argTypes: {
    isDarkTheme: Boolean
  }
} as ComponentMeta<typeof RangeExample>;

const Template: ComponentStory<typeof RangeExample> = (args) => <RangeExample {...args} />;

export const RangeExampleComponent = Template.bind({});

RangeExampleComponent.args = {
  isDarkTheme: false
};
