import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const values = {
    currentPage,
    handlePageChange,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
