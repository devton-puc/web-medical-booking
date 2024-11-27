import React, { useState } from "react";
import PaginatedTable from "../components/PaginatedTable";

const AppointmentList = () => {

  const columns = [
    { key: "patient", label: "Paciente" },
    { key: "date", label: "Data" },
    { key: "time", label: "Horário" },
    { key: "specialty", label: "Especialidade", hideOnMobile: true },

  ];

  const [data, setData] = useState([
    { patient: "João Silva", date: "2024-11-25", time: "09:00", specialty: "Cardiologia" },
    { patient: "Maria Oliveira", date: "2024-11-26", time: "10:00", specialty: "Dermatologia" },
    { patient: "Marcelo Gomes", date: "2024-11-26", time: "11:00", specialty: "Dermatologia" },
    { patient: "João Almeida", date: "2024-11-26", time: "13:00", specialty: "Pediatria" },
    { patient: "Carla Ferreira", date: "2024-11-26", time: "14:00", specialty: "Endrocnologia" },
  ]);

  const cancelAppointment = (row) => {
    if (window.confirm(`Você tem certeza que deseja excluir ${row.patient}?`)) {
        setData(data.filter((item) => item.id !== row.id));
      }
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
