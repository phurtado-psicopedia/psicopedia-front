
export const saveDataToSessionStorage = (key: string, data: any) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromSessionStorage = (key: string): any => {
  const retrievedData = sessionStorage.getItem(key);

  if (!retrievedData) return null;
  
  return JSON.parse(retrievedData);
};

export const removeDataFromSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};