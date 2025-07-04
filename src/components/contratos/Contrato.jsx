import React, { useState } from "react";
// import moment from "moment";
import { ContratoRegistro } from "./ContratoRegistro";
import  { ContratoListado } from "./ContratoListado";
import { ContratosService } from "../../services/contratos.service";


function Contrato() {
  const [contratos, setContratos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [accion, setAccion] = useState("L"); // L = Listado, A = Alta

  const buscar = async () => {
    try {
      const data = await ContratosService.getByNombre(filtro);
      setContratos(data);
      setAccion("L");
    } catch (error) {
      alert("Error al buscar contratos");
    }
  };

  const agregar = () => {
    setAccion("A");
    //setContratos([]); // Limpiar la lista de contratos al agregar uno nuevo
    // setContratos({
      //IdContrato: 0,
      //NombreContrato: '',
      //FechaInicio: '',
      //FechaFin: '',
      //ImporteMensual: 0,
      //TelefonoContacto: '',  
    //});
    //modalDialogService.Alert("preparando el Alta...");
    //console.log(Contratos);
  //};

  };

  const volver = () => {
    setAccion("L");
    buscar();
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Contratos</h2>
      {accion === "L" && (
        <>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del contrato"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
            <button className="btn btn-primary" onClick={buscar}>
              Buscar
            </button>
            <button className="btn btn-success ms-2" onClick={agregar}>
              Agregar
            </button>
          </div>
          <ContratoListado contratos={contratos} />
        </>
      )}
      {accion === "A" && (
        <ContratoRegistro onVolver={volver} />
      )}
    </div>
  );
}







export { Contrato };
