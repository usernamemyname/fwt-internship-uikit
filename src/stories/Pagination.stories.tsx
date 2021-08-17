import { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PaginationContainer from '../components/Pagination';

export default {
  title: 'Components/Pagination',
  component: PaginationContainer,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    isDarkTheme: Boolean,
    pagesAmount: Number,
    currentPage: Number
  }
} as ComponentMeta<typeof PaginationContainer>;

const Template: ComponentStory<typeof PaginationContainer> = (args) => {
  const { currentPage: currentPageArgs } = args;
  const [currentPage, setCurrentPage] = useState<number>(currentPageArgs);

  useEffect(() => {
    setCurrentPage(currentPageArgs);
  }, [currentPageArgs]);

  const onChange = (inputValue: number) => {
    args.onChange(inputValue);
    setCurrentPage(inputValue);
  };

  return <PaginationContainer {...args} onChange={onChange} currentPage={currentPage} />;
};

export const PaginationComponent = Template.bind({});

PaginationComponent.args = {
  isDarkTheme: false,
  pagesAmount: 4,
  currentPage: 1
};
