const { mostrarCountries, mostrarCountry } = require("../services/country_services");

exports.mostrarCountriesController = async (req, res) => {
  const resultados = await mostrarCountries();
  res.status(200).json({ resultados });
  console.log(resultados);
};

exports.mostrarCountryController = async (res, req) => {
  const resultados = await mostrarCountry(req.params.id);
  res.status(200).json({ resultados });
  console.log(resultados);
};
