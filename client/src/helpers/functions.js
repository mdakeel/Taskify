export const getDate = (value) => {
  const d = new Date(value);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  return `${day}/ ${month}/${year}`;
};


export const getDifferenceOfDate = (value) => {
  const inputDate = new Date(value);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - inputDate;

  // Calculate the number of days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  console.log(daysDifference)
  return daysDifference;
}

export const isFutureDate = (value) => {
  const inputDate = new Date(value);
  const currentDate = new Date();
  return inputDate > currentDate
}