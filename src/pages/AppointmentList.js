import React, { useState } from "react";
import PaginatedTable from "../components/PaginatedTable";
import { useModal } from '../providers/ModalContext';

const AppointmentList = () => {

  const { showAlert, showConfirm } = useModal();

  const columns = [
    { key: "patient", label: "Paciente" },
    { key: "date", label: "Data" },
    { key: "time", label: "Horário" },
    { key: "specialty", label: "Especialidade", hideOnMobile: true },

  ];

  const [data, setData] = useState([
    { patient: "João Silva", date: "25/11/2024", time: "09:00", specialty: "Cardiologia" },
    { patient: "Maria Oliveira", date: "26/11/2024", time: "10:00", specialty: "Dermatologia" },
    { patient: "Marcelo Gomes", date: "26/11/2024", time: "11:00", specialty: "Dermatologia" },
    { patient: "João Almeida", date: "26/11/2024", time: "13:00", specialty: "Pediatria" },
    { patient: "Carla Ferreira", date: "26/11/2024", time: "14:00", specialty: "Endrocnologia" },
  ]);

  const cancelAppointment = (row) => {

    showConfirm(`Você tem certeza que deseja cancelar o agendamento do paciente selecionado?`, (result) => {
      if (result) {
        showAlert('Agendamento cancelado com sucesso.', 'success');
      }
    });

  };

  const actions = [
    {
      label: "Cancelar",
      className: "btn-danger",
      onClick: cancelAppointment,
    },
  ];



  return (
          <div className="card shadow-lg rounded-3 border-0">
            <div className="card-header bg-primary-custom text-white">
                <h3>Agendamentos Marcados</h3>
            </div>
            <div className="card-body">
              <PaginatedTable
                  columns={columns}
                  data={data}
                  rowsPerPage={3}
                  actions={actions}
                  noDataMessage="Não existe nenhum agendamento marcado."
              />
            </div>
          </div>
  );
};

export default AppointmentList;
