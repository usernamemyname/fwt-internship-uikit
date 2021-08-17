import { useState, useEffect, ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    isDarkTheme: Boolean,
    value: {
      description: 'The value of the `<input>`',
      type: 'string',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onChange: {
      type: 'function',
      raw: '() => void',
      description:
        'The callback function that is called each time the value of the `<input>` changes',
      signature: {
        return: { name: 'void' }
      },
      table: {
        type: {
          summary: '() => void'
        }
      }
    }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const { value: currentValue } = args;
  const [value, setValue] = useState<typeof currentValue>(currentValue);

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // @ts-ignore
    args.onChange(newValue);
    setValue(newValue);
  };
  return <Input {...args} onChange={onChange} value={value} />;
};

export const InputComponent = Template.bind({});

InputComponent.args = {
  isDarkTheme: false,
  value: ''
};
