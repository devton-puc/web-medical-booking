import React, { useState, useEffect  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Booking = () => {
  const [formData, setFormData] = useState({
    patient: '',
    date: '',
    time: '',
    specialty: ''
  });
  
  const [specialties] = useState([
    { id: 1, name: 'Cardiologia' },
    { id: 2, name: 'Pediatria' },
    { id: 3, name: 'Endocrinologia' },
    { id: 4, name: 'Oftalmologia' },
    { id: 5, name: 'Geriatria' },
    { id: 6, name: 'Clinico Geral' }
  ]);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { patient, date, time, specialty } = location.state;
      setFormData({ patient, date, time, specialty });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', {
      state: formData
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (

                <div className="card shadow-lg rounded-3 border-0">
                  <div className="card-header bg-primary-custom text-white">
                    <h3>Agendar Consulta</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div class="row  mt-1">
                        <div class="form-group col-md-12">
                          <label htmlFor="patient" className="form-label">Paciente</label>
                          <input
                            type="text"
                            id="patient"
                            name="patient"
                            className="form-control"
                            value={formData.patient}
                            onChange={handleChange}
                            required
                          />
                         </div>
                    </div>
                    <div class="row mt-1">
                        <div class="form-group col-md-6">
                          <label htmlFor="date" className="form-label">Data</label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="form-control"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label htmlFor="time" className="form-label">Horário</label>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            className="form-control"
                            value={formData.time}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div class="row  mt-1">
                        <div class="form-group col-md-12">
                          <label htmlFor="specialty" className="form-label">Especialidade</label>
                          <select
                            id="specialty"
                            name="specialty"
                            className="form-control"
                            value={formData.specialty}
                            onChange={handleChange}
                            required
                          >
                          <option value="">Selecione...</option>
                            {specialties.map(specialty => (
                              <option key={specialty.id} value={specialty.name}>
                                {specialty.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start gap-2 mt-3">
                        <button type="submit" className="btn btn-primary-custom">Confirmar</button>
                        <button type="button" onClick={handleCancel} className="btn btn-secondary-custom ml-2">Cancelar</button>
                      </div>
                    </form>
                  </div>
                </div>
    );
};

export default Booking;
