import React from 'react';
import Link from './Link';


const Header = () => {
   return (
     <div className="ui secondary pointing menu navbar" style={{backgroundColor: '#eca1a6'}}>
       <Link href="/" className="item item-A">
         Accordion
       </Link>
       <Link href="/list" className="item item-S">
         Search
       </Link>
       <Link href="/dropdown" className="item item-D">
         Dropdown
       </Link>
       <Link href="/translate" className="item item-T">
         Translate
       </Link>
     </div>
   );
};


export default Header;
