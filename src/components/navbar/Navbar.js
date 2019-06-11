import React from 'react';
import './Navbar.css';

const Navbar = props => (
 <header className='navbar'>
   <nav className='navigation'>
     
     <div className='spacer' />
     <div className='toolbar_navi-items'>
       <ul>
         <li><a href='/'>Home</a></li>
         <li><a href='/'>Products</a></li>
         <li><a href='/'>About</a></li>
         <li><a href='/'>Contact</a></li>



       </ul>
     </div>
   </nav>
 </header>
);

export default Navbar;