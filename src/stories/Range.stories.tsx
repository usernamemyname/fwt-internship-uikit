import { ComponentStory, ComponentMeta } from '@storybook/react';

import Range from '../components/Range';

export default {
  title: 'Range',
  component: Range,
  argTypes: {
    isDarkTheme: Boolean,
    onClose: () => {}
  }
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const RangeComponent = Template.bind({});

RangeComponent.args = {
  onClose: () => {},
  isDarkTheme: false
};
