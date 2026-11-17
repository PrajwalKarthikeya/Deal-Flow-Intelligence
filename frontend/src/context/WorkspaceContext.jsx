import React, { createContext, useContext, useState, useEffect } from 'react';

const WorkspaceContext = createContext();

export const WorkspaceProvider = ({ children }) => {
  const [currentWorkspace, setCurrentWorkspace] = useState(() => {
    const saved = localStorage.getItem('activeWorkspace');
    return saved ? JSON.parse(saved) : { id: 'default', name: 'Global Intelligence' };
  });

  useEffect(() => {
    localStorage.setItem('activeWorkspace', JSON.stringify(currentWorkspace));
  }, [currentWorkspace]);

  return (
    <WorkspaceContext.Provider value={{ currentWorkspace, setCurrentWorkspace }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => useContext(WorkspaceContext);
