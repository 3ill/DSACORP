import { useState, createContext } from 'react';

export const ActiveSectionContext = createContext(null);

const ActiveSectionProvider = ({ children }) => {
  const [mail, setMail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ActiveSectionContext.Provider
      value={{
        mail,
        setMail,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
