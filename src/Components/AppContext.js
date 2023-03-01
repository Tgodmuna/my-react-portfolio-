// import React from "react";
import { createContext } from "react";
//created a context
const AppContext = createContext();
//created a provider and consumer
const AppProvider = AppContext.Provider;
const AppConsumer = AppContext.Consumer;

//export the Context , so it can be used in around the app
export { AppConsumer, AppProvider };
