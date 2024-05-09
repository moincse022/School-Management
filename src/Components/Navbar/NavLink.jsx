import React from 'react';

const NavLink = ({route}) => {
    console.log(route)
    const {path,name} = route;
    return (
    
         <div>
               <li className=' list-unstyled text-black-50 hover:  px-3 py-2 rounded-md text-md font-medium transition-colors duration-30 
            '><a className=' text-black ' href={path}>{name}</a></li>
      
        </div>
       
    );
};

export default NavLink;