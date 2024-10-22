import React, { useState } from 'react'


import { FaNewspaper } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";


const menuItems = [
    {
      icons: <FaNewspaper size={36} />,
      label: 'Mural'
    },
    {
      icons: <FaCalendar size={36} />,
      label: 'Calendário'
    },
    {
      icons: <TbReportSearch size={36} />,
      label: 'Relatorio'
    },
    {
      icons: <MdOutlineSupportAgent size={36} />,
      label: 'Suporte'
    },
    {
      icons: <FaUserPlus size={36} />,
      label: 'Registrar'
    },
  ]

  export default function Sidebar() {
  
    return (
      <nav className={`w-20 shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-700 text-white`}>
  
        {/* Header */}
        <div className='px-3 py-2 h-20 flex justify-between'>
          <IoMenu size={36}/>
        </div>
  
        {/* Body */}
  
        <ul className='flex-1'>
          {
            menuItems.map((item, index) => {
              return (
                <li key={index} className='px-3 py-7 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex flex-col gap-2 items-center relative group'>
                  <div>{item.icons}</div>
                  {/*<p className='mt-2 text-sm text-center font-bold'>{item.label}</p> */}
                  <p className={`absolute left-32 shadow-md rounded-md
                   w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                  `}>{item.label}</p>
                </li>
              )
            })
          }
        </ul>
        {/* footer */}
        <div className='flex items-center gap-2 px-3 py-2'>
          <div><FaUserCircle size={30} /></div>
          <div className={`leading-5 duration-500 overflow-hidden`}>
          </div>
        </div>
  
  
      </nav>
    )
  }


