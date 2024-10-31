import { FaNewspaper } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import React from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    icons: <FaNewspaper size={36} />,
    label: 'Mural',
    path: '/home'
  },
  {
    id: 2,
    icons: <FaCalendar size={36} />,
    label: 'Calendário',
    path: '/calendar'
  },
  {
    id: 3,
    icons: <TbReportSearch size={36} />,
    label: 'Relatorio',
    path: '/relatorio'
  },
  {
    id: 4,
    icons: <MdOutlineSupportAgent size={36} />,
    label: 'Suporte',
    path: '/suporte'
  },
];

export default function Sidebar({ userType }) {
  const navigate = useNavigate();

  // Conditionally add the "Registrar" menu item if the user is an admin
  const conditionalMenuItems = userType === 'admin' 
    ? [...menuItems, {
        id: 5,
        icons: <FaUserPlus size={36} />,
        label: 'Registrar',
        path: '/registrar'
      }] 
    : menuItems;

  return (
    <nav className="w-20 shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-700 text-white">
      {/* Header */}
      <div className='px-3 py-2 h-20 flex justify-between'>
        <FaRegCalendarCheck size={36} />
      </div>

      {/* Body */}
      <ul className='flex-1'>
        {conditionalMenuItems.map((item) => (
          <li 
            key={item.id} 
            className='px-3 py-7 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex flex-col gap-2 items-center relative group'
            onClick={() => navigate(item.path)} // Navegação ao clicar
          >
            <div>{item.icons}</div>
            <p className={`absolute left-32 shadow-md rounded-md
               w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
              `}>{item.label}</p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className='flex items-center gap-2 px-3 py-2'>
        <div><FaUserCircle size={30} /></div>
      </div>
    </nav>
  );
}
