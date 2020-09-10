import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?'
    content: 'React is a front end JavaScript framework'
  }
]

export default () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};
