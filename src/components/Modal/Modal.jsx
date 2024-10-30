import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClockCircle } from "react-icons/ai";
import Button from "../Button/Button"; 

Modal.setAppElement("#root");

const ReservModal = ({ isOpen, closeModal, selectedDate, saveEvent }) => {
  const [discipline, setDiscipline] = useState("");
  const [laboratory, setLaboratory] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [observations, setObservations] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    const eventData = {
      title: `${discipline} - ${laboratory}`,
      start: `${selectedDate}T${startTime}`,
      end: `${selectedDate}T${endTime}`,
      extendedProps: { observations }
    };
    saveEvent(eventData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Reservar Laboratório"
      className="bg-blue-900 p-8 rounded shadow-md max-w-lg mx-auto mt-20 z-50 relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-white">RESERVAR LABORATÓRIO</h2>
      
      {/* Mostra a data selecionada */}
      <p className="text-center text-white mb-4">Data Selecionada: {selectedDate}</p>
      
      <form onSubmit={handleSave}>
        <label className="block text-white mb-2">Disciplina:
          <input
            type="text"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
            placeholder="Digite a disciplina"
          />
        </label>
        
        {/* Campo de seleção para Laboratório */}
        <label className="block text-white mb-2">Laboratório:
          <select
            value={laboratory}
            onChange={(e) => setLaboratory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          >
            <option value="">Selecione um laboratório</option>
            <option value="Lab Desenvolvimento de Sistemas">Lab Desenvolvimento de Sistemas</option>
            <option value="Lab de Química">Lab de Química</option>
            <option value="Lab de Elétrica">Lab de Elétrica</option>
          </select>
        </label>

        <div className="flex justify-center p-4 items-center text-white mb-7">
          <div className="flex mr-3 items-center space-x-2">
            <label>Início:</label>
            <div className="relative">
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="pl-8 p-2 border border-gray-300 rounded mt-1 text-black"
              />
            </div>
          </div>

          <div className="flex ml-3 items-center space-x-2">
            <label>Fim:</label>
            <div className="relative">
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="pl-8 p-2 border border-gray-300 rounded mt-1 text-black"
              />
            </div>
          </div>
        </div>

        <label className="block text-white mb-2">Observações:
          <textarea
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
            placeholder="Observações"
          />
        </label>

        <div className="flex justify-end mt-4 gap-3">
          <Button size="normal" color="secondary" onClick={closeModal} type="button">
            Cancelar
          </Button>
          <Button size="normal" color="primary" type="submit" className="ml-3">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ReservModal;
