import React from "react";
import { useForm } from "react-hook-form";
import  { ContratosService } from "../../services/contratos.service";

function ContratoRegistro({ onVolver }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await ContratosService.create(data);
      alert("Contrato creado correctamente");
      reset();
      onVolver();
    } catch (error) {
      alert("Error al crear contrato");
    }
  };

return (
    <div className="container mt-3">
        <h4>Nuevo Contrato</h4>
        <div className="card shadow p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="formulario-contrato">
                <div className="col-12 mb-3">
                    <label className="form-label">Nombre del Contrato</label>
                    <input
                        type="text"
                        autoComplete="off"
                        className={`form-control ${errors.NombreContrato ? "is-invalid" : ""}`}
                        {...register("NombreContrato", { required: true, minLength: 5, maxLength: 70 })}
                    />
                    {errors.NombreContrato && (
                        <div className="invalid-feedback">Entre 5 y 70 caracteres</div>
                    )}
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Fecha Inicio</label>
                    <input
                        type="date"
                        className={`form-control ${errors.FechaInicio ? "is-invalid" : ""}`}
                        {...register("FechaInicio", { required: true })}
                    />
                    {errors.FechaInicio && <div className="invalid-feedback">Requerido</div>}
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Fecha Fin</label>
                    <input
                        type="date"
                        className={`form-control ${errors.FechaFin ? "is-invalid" : ""}`}
                        {...register("FechaFin", { required: true })}
                    />
                    {errors.FechaFin && <div className="invalid-feedback">Requerido</div>}
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Importe Mensual</label>
                    <input
                        type="number"
                        step="0.01"
                        className={`form-control ${errors.ImporteMensual ? "is-invalid" : ""}`}
                        {...register("ImporteMensual", { required: true })}
                    />
                    {errors.ImporteMensual && <div className="invalid-feedback">Requerido</div>}
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Teléfono de Contacto</label>
                    <input
                        type="text"
                        autoComplete="off"
                        className={`form-control ${errors.TelefonoContacto ? "is-invalid" : ""}`}
                        {...register("TelefonoContacto", { required: true })}
                    />
                    {errors.TelefonoContacto && <div className="invalid-feedback">Requerido</div>}
                </div>

                <div className="col-12 d-flex justify-content-start gap-2">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button type="button" className="btn btn-secondary" onClick={onVolver}>Cancelar</button>
                </div>
            </form>
        </div>
    </div>
);
}

export { ContratoRegistro };