export const getDate = (value) => {
  const d = new Date(value);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  return `${day}/ ${month}/${year}`;
};
