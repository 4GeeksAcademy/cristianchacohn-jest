//valores
const oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07,  // dolar
    GBP: 0.87   // libra
  };
 
  // Función: Convierte de euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
  };
// FUNCION: CONVIERTE de dolar a yen
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return parseFloat(yenes.toFixed(2));
  };
    // Función: Convierte de yenes a libras
  const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY; 
    return euros * oneEuroIs.GBP; 
  };


  // exporto las funciones
  module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };