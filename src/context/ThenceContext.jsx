import { createContext, useState } from "react";

export const ThenceContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThenceProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  return (
    <ThenceContext.Provider value={{ timeLeft, setTimeLeft }}>
      {children}
    </ThenceContext.Provider>
  );
};
