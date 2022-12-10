export const format = (value: number) => {
  //TODO: Cual es la moneda que se pone aca

  // Crear formateador
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(value); //$2,500.00
};
