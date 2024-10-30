// src/components/MyCalendar/MyCalendar.js
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import ReservModal from "../Modal/Modal";
import Button from "../Button/Button";

Modal.setAppElement("#root");

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate("");
  };

  const openViewModal = (event) => {
    setSelectedEvent(event);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    console.log("Fechando o modal de visualização...");
    setIsViewModalOpen(false);
    setSelectedEvent(null);
  };

  const saveEvent = (eventData) => {
    setEvents((prevEvents) => [...prevEvents, eventData]);
    closeModal();
  };

  console.log("Estado de isViewModalOpen:", isViewModalOpen);

  return (
    <div className="relative">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={(info) => openModal(info.dateStr)}
        events={events}
        eventClick={(info) => openViewModal(info.event)}
      />

      {/* Modal para registrar Reservas */}
      <ReservModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedDate={selectedDate}
        saveEvent={saveEvent}
      />

      {/* Modal para visualizar informações da reserva */}
      <Modal
        isOpen={isViewModalOpen}
        onRequestClose={closeViewModal}
        contentLabel="Visualizar Evento"
        className="bg-blue-700 p-8 rounded shadow-md max-w-lg mx-auto mt-20 z-50 relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        {selectedEvent && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center text-white">
              Detalhes da Reserva
            </h2>
            <p className="text-white mb-2">
              <strong>Disciplina:</strong> {selectedEvent.title.split(" - ")[0]}
            </p>
            <p className="text-white mb-2">
              <strong>Laboratório:</strong> {selectedEvent.title.split(" - ")[1]}
            </p>
            <p className="text-white mb-2">
              <strong>Início:</strong>{" "}
              {new Date(selectedEvent.start).toLocaleTimeString()}
            </p>
            <p className="text-white mb-2">
              <strong>Fim:</strong> {new Date(selectedEvent.end).toLocaleTimeString()}
            </p>
            <p className="text-white mb-4">
              <strong>Observações:</strong>{" "}
              {selectedEvent.extendedProps.observations}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Calendar;
