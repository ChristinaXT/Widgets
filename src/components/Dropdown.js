import React from 'react';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item">
         {option.label}
        </div>
    );
  });

  return (

  );
};

export default Dropdown;
