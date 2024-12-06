import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PaginatedTable = ({ columns, data, rowsPerPage, actions, noDataMessage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const visibleColumns = isMobile
    ? columns.filter((column) => !column.hideOnMobile)
    : columns;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {currentData.length > 0 ? (
        <>
          {/* Tabela para dispositivos maiores */}
          {!isMobile && (
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    {visibleColumns.map((column) => (
                      <th key={column.key}>{column.label}</th>
                    ))}
                    {actions.length > 0 && <th>Ações</th>}
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {visibleColumns.map((column) => (
                        <td key={column.key}>{row[column.key]}</td>
                      ))}
                      {actions.length > 0 && (
                        <td>
                          {actions.map((action, actionIndex) => (
                            <button
                              key={actionIndex}
                              className={`btn ${action.className || "btn-primary"} btn-sm mx-1`}
                              onClick={() => action.onClick(row)}
                            >
                              {action.label}
                            </button>
                          ))}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isMobile && (
            <>
              {currentData.map((row, rowIndex) => (
                <div className="card-custom" key={rowIndex}>
                  <div className="card-custom-body">
                    {visibleColumns.map((column) => (
                      <div className="card-item" key={column.key}>
                        <span class="card-label">{column.label}:</span>
                        <span class="card-value">{row[column.key]}</span>
                      </div>
                    ))}
                    {actions.length > 0 && (
                      <div className="mt-2">
                        {actions.map((action, actionIndex) => (
                          <button
                            key={actionIndex}
                            className={`btn ${action.className || "btn-primary-custom"} btn-sm mx-1`}
                            onClick={() => action.onClick(row)}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Paginação */}
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
                  className={`btn mx-1 ${
                    currentPage === index + 1 ? "btn-primary-custom" : "btn-outline-primary-custom"
                  }`}
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

PaginatedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      hideOnMobile: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPage: PropTypes.number,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      className: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    })
  ),
  noDataMessage: PropTypes.string,
};

PaginatedTable.defaultProps = {
  rowsPerPage: 5,
  actions: [],
  noDataMessage: "Nenhum item encontrado.",
};

export default PaginatedTable;
