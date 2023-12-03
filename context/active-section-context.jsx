import { useState, createContext } from 'react';

export const ActiveSectionContext = createContext(null);

const ActiveSectionProvider = ({ children }) => {
  const [mail, setMail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackMail, setFeedbackMail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [isActive, setIsActive] = useState('');
  const [isToggled, setIsToggled] = useState(true);

  return (
    <ActiveSectionContext.Provider
      value={{
        mail,
        setMail,
        feedbackMail,
        setFeedbackMail,
        feedback,
        setFeedback,
        isLoading,
        setIsLoading,
        isFeedbackLoading,
        setIsFeedbackLoading,
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
