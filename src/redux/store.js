import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};

//STORE CONFIGURATION
const store = configureStore({
  reducer: {
    appSlice
  }, 
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
