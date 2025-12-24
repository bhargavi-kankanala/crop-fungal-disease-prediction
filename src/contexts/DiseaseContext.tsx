import React, { createContext, useState, ReactNode } from 'react';
import { mockDiseases, mockStats } from '../data/mockData';

export interface Disease {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  symptoms: string[];
  causes: string[];
  treatments: {
    chemical: string[];
    organic: string[];
    preventive: string[];
  };
  images: string[];
  affectedCrops: string[];
  severity: 'low' | 'medium' | 'high';
  commonRegions: string[];
}

export interface DetectionResult {
  id: string;
  timestamp: string;
  imageUrl: string;
  disease: Disease;
  confidence: number;
  recommendations: string[];
}

export interface Stats {
  mostCommonDiseases: { name: string; count: number }[];
  diseasesByRegion: { region: string; diseases: { name: string; count: number }[] }[];
  uploadsByMonth: { month: string; count: number }[];
  successRate: number;
}

interface DiseaseContextType {
  diseases: Disease[];
  detectionHistory: DetectionResult[];
  stats: Stats;
  loading: boolean;
  error: string | null;
  detectDisease: (imageUrl: string) => Promise<DetectionResult>;
  getDisease: (id: string) => Disease | undefined;
}

export const DiseaseContext = createContext<DiseaseContextType | undefined>(undefined);

export const DiseaseProvider = ({ children }: { children: ReactNode }) => {
  const [diseases] = useState<Disease[]>(mockDiseases);
  const [detectionHistory, setDetectionHistory] = useState<DetectionResult[]>([]);
  const [stats] = useState<Stats>(mockStats);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const detectDisease = async (imageUrl: string): Promise<DetectionResult> => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call to ML model
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Randomly select a disease for demonstration
      const randomIndex = Math.floor(Math.random() * diseases.length);
      const detectedDisease = diseases[randomIndex];
      
      // Generate random confidence between 70-95%
      const confidence = Math.floor(Math.random() * 25) + 70;
      
      const result: DetectionResult = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        imageUrl,
        disease: detectedDisease,
        confidence,
        recommendations: [
          `Apply ${detectedDisease.treatments.chemical[0]} as recommended`,
          `Ensure proper crop spacing for air circulation`,
          `Monitor humidity levels in your field`
        ]
      };
      
      setDetectionHistory(prev => [result, ...prev]);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during disease detection';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getDisease = (id: string) => {
    return diseases.find(disease => disease.id === id);
  };

  return (
    <DiseaseContext.Provider value={{
      diseases,
      detectionHistory,
      stats,
      loading,
      error,
      detectDisease,
      getDisease
    }}>
      {children}
    </DiseaseContext.Provider>
  );
};