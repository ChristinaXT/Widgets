// import React from 'react';
import { useState } from 'react';


const Route = ({ path, children }) => {
    useEffect(() => {
      window.addEventListener('popstate' onLocationChange);
    }, []);

   return window.location.pathname === path
    ? children
    : null;
};


export default Route;
