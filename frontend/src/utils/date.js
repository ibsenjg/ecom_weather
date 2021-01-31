export const dateString = (date) => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const newDate = new Date(date).toDateString(undefined, dateOptions);

  return newDate;
};
