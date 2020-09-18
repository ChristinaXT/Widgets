import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

//everytime you use useEffect, you are going to use an empty array, an array with a value inside (one or more elements) of it or nothing at all
     useEffect(() => {
       const search = async () => {
         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
           params: {
             action: 'query',
             list: 'search' ,
             origin: '*',
             format: 'json',
             srsearch: term,
           },
         });

         setResults(data.query.search);
       };


       search();
     }, [term]);

     const renderResults = results.map((results) => {
        return (
          <div className="item">
            <div className="content">
             <div className="header">
               {result.title}
             </div>
             {result.snippet}
           </div>
        </div>
       );
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
      <div className="ui called list">
        {renderedResults}
    </div>
  );
};

export default Search;
