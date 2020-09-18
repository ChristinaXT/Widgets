import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('I RUN WITH EVERY RENDER')
//everytime you use useEffect, you are going to use an empty array, an array with a value inside (one or more elements) of it or nothing at all
     useEffect(() => {
       console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
     } [term]);

  return (
    <div>
       <div className="ui form">
         <div className="field">
           <label>Enter Search Term</label>
           <input
             value={term}
             onChange={(e) => setTerm(e.target.value)}
             className="input"
          />
         </div>
      </div>
    </div>
  );
};

export default Search;
