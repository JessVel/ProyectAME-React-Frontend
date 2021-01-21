const { mostrarCompanies, crearCompany, borrarCompany, actualizarCompany } = require("../services/company_services");



const borrarCompanyController = async (req, res) => {
  const resultados = await borrarCompany(req.params.id);
  try {
    res.status(200).json({ msg: `Contacto eliminado con exito!` });
    console.log(resultados);
  } catch (e) {
    return res.status(400).json({ error: true, message: `Hubo un error al intentar eliminar una compañia, vuelve a intentarlo.${e.errsmg}` });
  }
};

const mostrarCompaniesController = async (req, res) => {
  try {
    const resultados = await mostrarCompanies();
    res.status(200).json({ msg: `Compañías mostradas con éxito!` });
    console.log(resultados);
  } catch {
    return res.status(400).json({ error: true, message: `Hubo un error al intentar mostrar compañias, vuelve a intentarlo.${e.errsmg}` });
  }
};

const crearCompanyController = async (req, res) => {
  const { id_citie, address, name, email, tel } = req.body;
  try {
    const resultados = await crearCompany(id_citie, address, name, email, tel);
    res.status(200).json({ msg: `La compañia se creó con éxito!` });
    console.log(resultados);
  } catch (err) {
    return res.status(400).json({ error: true, message: `Hubo un error al intentar crear una compañia, vuelve a intentarlo${e.errsmg}` });
  }
};

const actualizarCompanyController = async (req, res) => {
  const id = req.params.id;
  const { nuevoId_citie, nuevoAddress, nuevoName, nuevoEmail, nuevoTel } = req.body;
  try {
    const resultados = await actualizarCompany(id, id, nuevoId_citie, nuevoAddress, nuevoName, nuevoEmail, nuevoTel);
    res.status(200).json({ msg: `La compañía se actualizó con exito` });
    console.log(resultados);
  } catch (e) {
    return res.status(400).json({ error: true, message: `Hubo un error al intentar actualizar la compañia, vuelve a intentarlo.${e.errsmg}` });
  }
};

module.exports = {
  mostrarCompaniesController: mostrarCompaniesController,
  borrarCompanyController: borrarCompanyController,
  crearCompanyController: crearCompanyController,
  actualizarCompanyController: actualizarCompanyController,
};
