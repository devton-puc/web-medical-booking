import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '../providers/ModalContext';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { patient, date, time, specialty } = location.state || {};

  const handleConfirm = () => {
    navigate('/');
    navigate('/', { state: { success: true, message: 'Agendamento criado com sucesso.' } });

  };

  const handleBookingRedirect = () => {
    navigate('/booking', { state: { patient, date, time, specialty } });
  };

  return (
          <div className="card shadow-lg rounded-3 border-0">
              <div className="card-header bg-primary-custom text-white">
                  <h3>Confirmar Consulta</h3>
              </div>
              <div className="card-body">
                {patient ? (
                  <div>
                    <p className='mt-2'><strong>Paciente:</strong> {patient}</p>
                    <p className='mt-2'><strong>Data:</strong> {date}</p>
                    <p className='mt-2'><strong>Horário:</strong> {time}</p>
                    <p className='mt-2'><strong>Especialidade:</strong> {specialty}</p>
                  </div>
                ) : (
                  <p>Nenhum Agendamento foi encontrado.</p>
                )}
                <div className="d-flex justify-content-start gap-2 mt-5">
                  <button onClick={handleConfirm} className="btn btn-primary-custom">Confirmar</button>
                  <button onClick={handleBookingRedirect} className="btn btn-secondary-custom">Voltar</button>
                </div>
              </div>
          </div>
  );
};

export default Confirmation;
