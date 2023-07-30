export const getLocalData = (key:string) => JSON.parse(localStorage.getItem(key));
export const setLocalData = (key:string, data: unknown) => localStorage.setItem(key, JSON.stringify(data));