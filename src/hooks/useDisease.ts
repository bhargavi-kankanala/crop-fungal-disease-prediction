import { useContext } from 'react';
import { DiseaseContext } from '../contexts/DiseaseContext';

export const useDisease = () => {
  const context = useContext(DiseaseContext);
  
  if (context === undefined) {
    throw new Error('useDisease must be used within a DiseaseProvider');
  }
  
  return context;
};