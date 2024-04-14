import React from "react";

export const FilterCriteriasContext =
  React.createContext<FilterProductsCriterias>(initialState);
export const FilterCriteriasDispatchContext = React.createContext<
  React.Dispatch<FilterAction>
>(() => {});
