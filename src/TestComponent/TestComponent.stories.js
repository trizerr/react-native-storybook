import React from 'react';
import TestComponent from './TestComponent';

export default {
  title: 'components/TestComponent',
  component: TestComponent,
};

export const Basic = args => <TestComponent {...args} />;

Basic.args = {
  text: 'Hello World',
};
