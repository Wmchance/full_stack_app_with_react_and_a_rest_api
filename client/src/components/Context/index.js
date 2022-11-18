import React from "react";

const authUserContext = React.createContext();

export const AuthProvider = authUserContext.Provider;
export const AuthConsumer = authUserContext.Consumer;

