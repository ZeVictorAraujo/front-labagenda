import './App.css';
import { useState } from 'react';
import Sidebar from './components/SideBar/SideBar.jsx';

export default function App() {

  const [userType, setUserType] = useState('admin');
  return (
    
    <div>
      <Sidebar userType={userType}/>
    </div>

  );
}