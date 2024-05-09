// import React, { useState } from 'react';
import { useState } from "react";
import NavLink from "./NavLink";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/Image/edufy-logo.svg";
// import { IoClose, IoMenu } from 'react-icons/io5';
// const Navbar = () => {
//     const [open, setOpen] = useState(false);
// const routes = [
//     { id: 1, path: "/", name: "হোম" },
//     { id: 2, path: "/about", name: "ফিচার" },
//     { id: 3, path: "/skill", name: " প্যাকেজ এবং প্রাইস" },
//     { id: 4, path: "/education", name: "আমাদের সম্পর্কে"},
//     { id: 5, path: "/project", name: "আরো" },

//   ];
//     return (
//         <nav>
//           <div className="flex justify-between items-center ">
//           <div className="block md:hidden">
//                 <img src={logo} alt="" className=' w-32' />
//             </div>
//           <div className="md:hidden " onClick={() => setOpen(!open)}>
//         {open ? (
//           <IoClose className="text-2xl cursor-pointer w-6 " />
//         ) : (
//           <IoMenu className="text-2xl cursor-pointer" />
//         )}
//       </div>
//           </div>
//             <div className="flex justify-between items-center p-3">
//             <div className="hidden md:block">
//                 <img src={logo} alt="" />
//             </div>

//             <div className="hidden lg:block">
//             {/* <ul
//         className={`md:flex z-50  bg-slate-800 justify-end absolute md:static mt-2 duration-1000 h-full
//          ${open ? "left-0   " : "left-[-100%]"}
//          ] opacity-0.8  px-6 `}
//       > */}
//       <ul className='flex'>
//             {
//                 routes.map((route) => (
//                     <NavLink key={route.id} route={route} className="mx-8 d-flex"/>
//             ))

//             }
//             <button  className="btn btn-success px-8 ">ডেমো রিকুয়েস্ট</button>
//                 </ul>
//             </div>

//                 </div>
//         </nav>
//     );
// };

// export default Navbar;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "হোম" },
    { id: 2, path: "/about", name: "ফিচার" },
    { id: 3, path: "/skill", name: " প্যাকেজ এবং প্রাইস" },
    { id: 4, path: "/education", name: "আমাদের সম্পর্কে" },
    { id: 5, path: "/project", name: "আরো" },
  ];
  return (
    <nav>
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className=" w-32 block md:hidden" />
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open == true ? (
            <AiOutlineClose className="text-2xl cursor-pointer  "></AiOutlineClose>
          ) : (
            <AiOutlineMenu className="text-2xl cursor-pointer  "></AiOutlineMenu>
          )}
        </div>
      </div>
      <div className="flex ">
        <img src={logo} alt="" className=" w-32 hidden md:block" />

        <ul
          className={`md:flex z-50 w-full bg-white text-black  md:bg-white justify-end
       absolute md:static -mt-8 md:mt-2 duration-1000 md:duration-0 h-full
      ${open ? "left-0   " : "left-[-100%]"}`}
        >
          <div className="flex justify-between items-center bg-[#e8f7f6] h-16">
            <img src={logo} alt="" className=" w-32 block md:hidden" />

            <button
              className="md:hidden  border-[#000] rounded-full p-2 mr-4 hover:bg-[#20c997] hover:text-white hover:duration-100 text-[#20c997]"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineClose className="text-2xl cursor-pointer  "></AiOutlineClose>
            </button>
          </div>
          {routes.map((route) => (
            <NavLink key={route.id} route={route} className="mx-8 mt-4" />
          ))}

          <button className="btn btn-success text-white px-8 w-full mx-4 md:w-auto  absolute bottom-0 md:static ">
            ডেমো রিকুয়েস্ট
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
