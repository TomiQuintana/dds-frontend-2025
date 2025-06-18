import React from "react";

function ContratoListado({ contratos }) {
  const formatearFecha = (fechaIso) => {
    const f = new Date(fechaIso);
    return f.toLocaleDateString("es-AR");
  };

  const formatearMoneda = (importe) => {
    return Number(importe).toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    });
  };

  if (!contratos.length)
    return <div className="alert alert-warning">No hay contratos encontrados.</div>;

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Id Contrato</th>
            <th>Nombre del Contrato</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Importe Mensual</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {contratos.map((contrato) => (
            <tr key={contrato.IdContrato}>
              <td>{contrato.IdContrato}</td>
              <td>{contrato.NombreContrato}</td>
              <td>{formatearFecha(contrato.FechaInicio)}</td>
              <td>{formatearFecha(contrato.FechaFin)}</td>
              <td>{formatearMoneda(contrato.ImporteMensual)}</td>
              <td>{contrato.TelefonoContacto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ContratoListado };