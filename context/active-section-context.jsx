import { useState, createContext } from 'react';

export const ActiveSectionContext = createContext(null);

const ActiveSectionProvider = ({ children }) => {
  const [mail, setMail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState('');
  const [isToggled, setIsToggled] = useState(true);

  return (
    <ActiveSectionContext.Provider
      value={{
        mail,
        setMail,
        isLoading,
        setIsLoading,
        isActive,
        setIsActive,
        isToggled,
        setIsToggled,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
