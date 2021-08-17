import { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '../components/Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    options: [
      {
        id: Number,
        name: String
      }
    ],
    isDarkTheme: Boolean,
    value: String,
    disabled: Boolean
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const { value: currentValue } = args;
  const [value, setValue] = useState<string>(currentValue);

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  const onChange = (newValue: string) => {
    args.onChange(newValue);
    setValue(newValue);
  };
  return <Select {...args} value={value} onChange={onChange} />;
};

export const SelectComponent = Template.bind({});

SelectComponent.args = {
  options: [
    {
      id: 1,
      name: 'apple'
    },
    {
      id: 2,
      name: 'mango'
    },
    {
      id: 3,
      name: 'banana'
    }
  ],
  isDarkTheme: false,
  value: '',
  disabled: false
};
