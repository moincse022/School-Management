import React, { useState } from 'react';
import NavLink from './NavLink';
import logo from '../../assets/Image/edufy-logo.svg'
import { IoClose, IoMenu } from 'react-icons/io5';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "হোম" },
        { id: 2, path: "/about", name: "ফিচার" },
        { id: 3, path: "/skill", name: " প্যাকেজ এবং প্রাইস" },
        { id: 4, path: "/education", name: "আমাদের সম্পর্কে"},
        { id: 5, path: "/project", name: "আরো" },
       
      ];
    return (
        <nav>
          <div className="flex justify-between items-center ">
          <div className="block md:hidden">
                <img src={logo} alt="" className=' w-32' />
            </div>
          <div className="md:hidden " onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="text-2xl cursor-pointer w-6 " />
        ) : (
          <IoMenu className="text-2xl cursor-pointer" />
        )}
      </div>
          </div>
            <div className="flex justify-between items-center p-3">
            <div className="hidden md:block">
                <img src={logo} alt="" />
            </div>
      
            <div className="hidden lg:block">
            {/* <ul
        className={`md:flex z-50  bg-slate-800 justify-end absolute md:static mt-2 duration-1000 h-full
         ${open ? "left-0   " : "left-[-100%]"}
         ] opacity-0.8  px-6 `}
      > */}
      <ul className='flex'>
            {
                routes.map((route) => (
                    <NavLink key={route.id} route={route} className="mx-8 d-flex"/>
            ))
        
            }
            <button  className="btn btn-success px-8 ">ডেমো রিকুয়েস্ট</button> 
                </ul>
            </div>
         
                </div>
        </nav>
    );
};

export default Navbar;