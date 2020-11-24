import React from 'react';

const Link = ({ className, href, children }) => {
  return (
    <a onClick={onClick} className={className} href={href}>
     {children}
   </a>
  );
};

export default Link;
