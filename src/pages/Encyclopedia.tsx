import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronRight,
  AlertTriangle
} from 'lucide-react';

import MainLayout from '../components/layout/MainLayout';
import { useDisease } from '../hooks/useDisease';

const Encyclopedia = () => {
  const { diseases } = useDisease();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [selectedSeverity, setSelectedSeverity] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  // Extract all unique crops, regions for filters
  const allCrops = Array.from(new Set(diseases.flatMap(disease => disease.affectedCrops)));
  const allRegions = Array.from(new Set(diseases.flatMap(disease => disease.commonRegions)));

  const handleCropFilter = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter(c => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const handleSeverityFilter = (severity: string) => {
    if (selectedSeverity.includes(severity)) {
      setSelectedSeverity(selectedSeverity.filter(s => s !== severity));
    } else {
      setSelectedSeverity([...selectedSeverity, severity]);
    }
  };

  const handleRegionFilter = (region: string) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter(r => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const clearFilters = () => {
    setSelectedCrops([]);
    setSelectedSeverity([]);
    setSelectedRegions([]);
    setSearchTerm('');
  };

  // Filter diseases based on search and filters
  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = 
      searchTerm === '' || 
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCrops = 
      selectedCrops.length === 0 || 
      disease.affectedCrops.some(crop => selectedCrops.includes(crop));
    
    const matchesSeverity = 
      selectedSeverity.length === 0 || 
      selectedSeverity.includes(disease.severity);
    
    const matchesRegions = 
      selectedRegions.length === 0 || 
      disease.commonRegions.some(region => selectedRegions.includes(region));
    
    return matchesSearch && matchesCrops && matchesSeverity && matchesRegions;
  });

  return (
    <MainLayout title="Disease Encyclopedia">
      <div className="mb-6">
        <motion.h1 
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Crop Disease Encyclopedia
        </motion.h1>
        
        <motion.p 
          className="text-light-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Comprehensive information about common crop fungal diseases, their symptoms, and treatments.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary-dark transition-colors"
              >
                Clear All
              </button>
            </div>
            
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-full flex items-center justify-between p-3 bg-light-bg rounded-lg"
              >
                <span className="font-medium">Filter Options</span>
                {filterOpen ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </button>
            </div>
            
            <div className={`space-y-6 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
              <div>
                <h3 className="font-medium mb-3">Affected Crops</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allCrops.map((crop, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCrops.includes(crop)}
                        onChange={() => handleCropFilter(crop)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-sm">{crop}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Severity</h3>
                <div className="space-y-2">
                  {['low', 'medium', 'high'].map((severity, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedSeverity.includes(severity)}
                        onChange={() => handleSeverityFilter(severity)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-sm capitalize">{severity}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Regions</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allRegions.map((region, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedRegions.includes(region)}
                        onChange={() => handleRegionFilter(region)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-sm">{region}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-lighter-text" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by disease name or scientific name..."
                className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">
              {filteredDiseases.length} {filteredDiseases.length === 1 ? 'Disease' : 'Diseases'} Found
            </h2>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-light-text">Sort by:</span>
              <select
                className="text-sm border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="name">Name (A-Z)</option>
                <option value="severity">Severity (High-Low)</option>
              </select>
            </div>
          </div>
          
          {filteredDiseases.length === 0 ? (
            <div className="card flex flex-col items-center justify-center py-12">
              <AlertTriangle className="h-12 w-12 text-warning mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Diseases Found</h3>
              <p className="text-light-text text-center max-w-md mb-6">
                No diseases match your current search criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDiseases.map((disease, index) => (
                <motion.div 
                  key={disease.id}
                  className="card flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index % 4) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                    <img 
                      src={disease.images[0]} 
                      alt={disease.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        disease.severity === 'high' 
                          ? 'bg-error/80 text-white' 
                          : disease.severity === 'medium'
                            ? 'bg-warning/80 text-white'
                            : 'bg-success/80 text-white'
                      }`}>
                        {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold mb-1">{disease.name}</h3>
                    <p className="text-sm text-light-text italic mb-3">{disease.scientificName}</p>
                    
                    <p className="text-sm text-light-text line-clamp-3 mb-4">
                      {disease.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-1">Affected Crops:</h4>
                      <div className="flex flex-wrap gap-1">
                        {disease.affectedCrops.slice(0, 3).map((crop, idx) => (
                          <span 
                            key={idx}
                            className="bg-primary/10 text-primary text-xs rounded-full px-2 py-0.5"
                          >
                            {crop}
                          </span>
                        ))}
                        {disease.affectedCrops.length > 3 && (
                          <span className="text-xs text-lighter-text">
                            +{disease.affectedCrops.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t">
                      <Link
                        to={`/disease/${disease.id}`}
                        className="text-primary hover:text-primary-dark font-medium text-sm inline-flex items-center"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Encyclopedia;