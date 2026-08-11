import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);
export function AppProvider({ children }) {
  const [period, setPeriod] = useState('Last 12 months');
  const [segment, setSegment] = useState('All segments');
  return <AppContext.Provider value={{ period, setPeriod, segment, setSegment }}>{children}</AppContext.Provider>;
}
export const useApp = () => useContext(AppContext);

