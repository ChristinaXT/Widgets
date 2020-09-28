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
     <div className="ui form">
       <div className="field">
         <label className="label">Select a Color</label>
       </div>
     </div>
  );
};

export default Dropdown;
