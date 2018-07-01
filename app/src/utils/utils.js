const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const getTotalTime = (time) => {
  const h = time.hours * 60 * 60 * 1000;
  const m = time.minutes * 60 * 1000;
  const s = time.seconds * 1000;

  return (new Date(Date.parse(new Date()) + h + m + s));
};

const getTimeRemaining = (endTime) => {
  const total = Date.parse(endTime) - Date.parse(new Date());

  const hours = Math.floor(total / (1000 * 60 * 60));
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    hours,
    minutes,
    seconds,
  };
};

const addLeadingZeros = (value) => {
  let v = String(value);

  while (v.length < 2) {
    v = `0${v}`;
  }

  return v;
};

export {
  capitalize,
  getTimeRemaining,
  getTotalTime,
  addLeadingZeros,
};
