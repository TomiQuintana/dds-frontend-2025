import axios from "axios";

const urlResource = "http://localhost:3000/api/contratos";

const getAll = async () => {
  const res = await axios.get(urlResource);
  return res.data;
};

const getByNombre = async (nombre) => {
  const res = await axios.get(`${urlResource}?NombreContrato=${nombre}`);
  return res.data;
};

const create = async (contrato) => {
  const res = await axios.post(urlResource, contrato);
  return res.data;
};

const ContratosService = {
  getAll,
  getByNombre,
  create,
};

export { ContratosService };
