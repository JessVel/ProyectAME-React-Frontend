const { mostrarCountries, mostrarCountry } = require("../services/country_services");

const mostrarCountriesController = async (req, res) => {
  const resultados = await mostrarCountries();
  res.status(200).json({ resultados });
  console.log(resultados);
};

const mostrarCountryController = async (res, req) => {
  const resultados = await mostrarCountry(req.params.id);
  res.status(200).json({ resultados });
  console.log(resultados);
};

module.exports = {
  mostrarCountriesController: mostrarCountriesController,
  mostrarCountryController: mostrarCountryController,
};
