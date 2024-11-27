import React, { useState } from "react";
import PropTypes from "prop-types";

const PaginatedCard = ({ data, columns, rowsPerPage, noDataMessage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {data.length > 0 ? (
        <>
          <div className="row">
            {currentData.map((appointment, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card">
                  <div className="card-body">

                    <h5 className="card-title">{appointment[columns[0].key]}</h5>
                    {columns.map((column, colIndex) => (
                      <p className="card-text" key={colIndex}>
                        <strong>{column.label}:</strong> {appointment[column.key]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-3">
              <button
                className="btn btn-outline-primary-custom mx-1"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`btn mx-1 ${currentPage === index + 1 ? "btn-primary-custom" : "btn-outline-primary-custom"}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="btn btn-outline-primary-custom mx-1"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Próximo
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-info mt-3" role="alert">
          {noDataMessage}
        </div>
      )}
    </div>
  );
};

PaginatedCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  rowsPerPage: PropTypes.number,
  noDataMessage: PropTypes.string,
};

PaginatedCard.defaultProps = {
  rowsPerPage: 5,
  noDataMessage: "Nenhum agendamento para hoje.",
};

export default PaginatedCard;
