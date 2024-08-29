const key = "location";

export const addLocation = (location, id) => {
  let listLocation = getLocationList();
  if (listLocation[location]) {
    listLocation[location].push(id);
  } else {
    listLocation[location] = [id];
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

export const getIdsByLocation = (location) => {
  return getLocationList()[location];
};
