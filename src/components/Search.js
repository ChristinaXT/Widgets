import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

//everytime you use useEffect, you are going to use an empty array, an array with a value inside (one or more elements) of it or nothing at all
     useEffect(() => {
       
     });

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
