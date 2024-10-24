import Sidebar from './components/SideBar/SideBar'
import FullCalendar from './components/FullCalendar/FullCalendar'

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar Fixa à Esquerda */}
      <Sidebar />

      {/* Conteúdo Principal à Direita */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <FullCalendar/>
      </div>
    </div>
  );
}