import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'Which is the smallest planet within our solar system?',
    content: 'Mercury'
  },
  {
    title: 'The moon called Titan orbits which planet?',
    content: 'Saturn'
  },
  {
    title: 'Which planet is known as the Morning Star?',
    content: 'Venus'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];


export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
  <div>
    <Header />
    <Route path="/">
      <Accordion items={ items } />
    </Route>
    <Route path="/list">
      <Search />
    </Route>
    <Route path="/dropdown">
      <Dropdown
         label="Select a color"
         options={options}
         selected={selected}
         onSelectedChange={setSelected}
        />
    </Route>
    <Route path="/translate">
     <Translate />
    </Route>
  </div>
  );
};
