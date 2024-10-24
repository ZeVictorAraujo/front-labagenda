import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";

Modal.setAppElement("#root");

const MyCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate("");
  };

  return (
    <div className="relative">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={(info) => openModal(info.dateStr)}
      />

      {/* Modal para registrar eventos */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Registrar Evento"
        
        className="
        bg-blue-700
         p-8 
         rounded 
         shadow-md 
         max-w-lg 
         mx-auto 
         mt-20 
         z-50 
         relative"

        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <h2 className="text-2xl font-bold mb-4">Registrar Evento</h2>
        <p className="mb-4">Data selecionada: {selectedDate}</p>
        <form>
          <label className="block mb-2">
            Nome do Evento:
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Digite o nome do evento"
            />
          </label>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button type="submit" className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
              Salvar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyCalendar;
