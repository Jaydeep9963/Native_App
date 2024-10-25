import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const configurationAppStore = () => {
  const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([...middleware]),
    devTools: process.env.NODE_ENV === "development",
  });
//   sagaMiddleware.run(rootSaga);
  return store;
};
export default configurationAppStore;
