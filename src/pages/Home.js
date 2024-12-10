import React, { useState, useEffect } from "react";
import PaginatedCard from "../components/PaginatedCard";
import { useLocation } from 'react-router-dom';
import { useModal } from '../providers/ModalContext';
import appointmentListJsonToday from '../appointmentList.json';

const Home = () => {

  const location = useLocation();
  const { success, message } = location.state || {};
  const { showAlert } = useModal();

  useEffect(() => {
    if (success !== undefined && message) {
      showAlert(message, success ? 'success' : 'danger');
    }
  }, [location]); 

  const [data, setData] = useState(appointmentListJsonToday.results);
  
  const columns = [
    { key: "patient", label: "Paciente" },  // Agora o campo 'patient' está dinâmico
    { key: "specialty", label: "Especialidade" },
    { key: "time", label: "Horário" },
  ];
  

  return (
          <div className="card shadow-lg rounded-3 border-0">
            <div className="card-header bg-primary-custom text-white d-flex justify-content-between align-items-center rounded-top">
              <div className="d-flex align-items-center">
                <h3>Agendamentos Marcados para Hoje</h3>
              </div>
            </div>
            <div className="card-body">
              <PaginatedCard data={data} columns={columns} rowsPerPage={4} />
            </div>
          </div>
  );

}

export default Home;
