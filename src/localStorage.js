const key = "location";

export const addLocation = (location, char) => {
  console.log(char);
  let listLocation = getLocationList();
  if (listLocation[location]) {
    listLocation[location].push(char);
  } else {
    listLocation[location] = [char];
  }
  localStorage.setItem(key, JSON.stringify(listLocation));
  console.log(getLocationList());
};

export const getLocationList = () => {
  const listLocation = localStorage.getItem(key);
  return listLocation ? JSON.parse(listLocation) : {};
};

export const getLocationOnly = () => {
  return Object.keys(getLocationList());
};

export const getCharsByLocation = (location) => {
  const listChars = getLocationList()[location];
  return listChars ? listChars : {};
};
