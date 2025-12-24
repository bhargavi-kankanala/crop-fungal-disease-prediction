import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Info,
  Check,
  Download,
  Share2
} from 'lucide-react';

import MainLayout from '../components/layout/MainLayout';
import { useDisease } from '../hooks/useDisease';

const DiseaseAnalysis = () => {
  const { id } = useParams<{ id: string }>();
  const { getDisease } = useDisease();
  
  const disease = getDisease(id || '');
  
  if (!disease) {
    return (
      <MainLayout title="Disease Not Found">
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <AlertTriangle className="h-16 w-16 text-warning mb-4" />
          <h2 className="text-2xl font-bold mb-2">Disease Not Found</h2>
          <p className="text-light-text mb-6">The disease you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`Disease: ${disease.name}`}>
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-light-text hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
                <div className="bg-light-bg rounded-lg overflow-hidden">
                  <img 
                    src={disease.images[0]} 
                    alt={disease.name} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {disease.images.slice(1).map((image, index) => (
                    <div key={index} className="bg-light-bg rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${disease.name} ${index + 2}`} 
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-dark-text mb-1">{disease.name}</h1>
                  <p className="text-sm text-light-text italic mb-3">{disease.scientificName}</p>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    disease.severity === 'high' 
                      ? 'bg-error/20 text-error' 
                      : disease.severity === 'medium'
                        ? 'bg-warning/20 text-warning'
                        : 'bg-success/20 text-success'
                  }`}>
                    {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)} Severity
                  </div>
                </div>
                
                <p className="text-light-text mb-6">{disease.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Affected Crops:</h3>
                  <div className="flex flex-wrap gap-2">
                    {disease.affectedCrops.map((crop, index) => (
                      <span 
                        key={index}
                        className="bg-primary/10 text-primary text-sm rounded-full px-3 py-1"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Common Regions:</h3>
                  <div className="flex flex-wrap gap-2">
                    {disease.commonRegions.map((region, index) => (
                      <span 
                        key={index}
                        className="bg-secondary/10 text-secondary text-sm rounded-full px-3 py-1"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button className="btn btn-primary flex-1 flex justify-center items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Save Report
                  </button>
                  
                  <button className="btn bg-gray-100 text-dark-text hover:bg-gray-200 flex justify-center items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-4">Symptoms</h2>
              <ul className="space-y-3">
                {disease.symptoms.map((symptom, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-error/20 flex items-center justify-center mr-3 mt-0.5">
                      <AlertTriangle className="h-3 w-3 text-error" />
                    </span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Causes</h2>
              <ul className="space-y-3">
                {disease.causes.map((cause, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-info/20 flex items-center justify-center mr-3 mt-0.5">
                      <Info className="h-3 w-3 text-info" />
                    </span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-6">Treatment Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Chemical Treatment</h3>
                <ul className="space-y-2">
                  {disease.treatments.chemical.map((treatment, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-success/5 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Organic Treatment</h3>
                <ul className="space-y-2">
                  {disease.treatments.organic.map((treatment, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-success mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-info/5 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Preventive Measures</h3>
                <ul className="space-y-2">
                  {disease.treatments.preventive.map((treatment, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-info mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-warning/10 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Safety Warning</h3>
                  <p className="text-sm text-light-text">
                    Always follow the manufacturer's instructions when applying chemical treatments. 
                    Wear protective clothing and equipment. Keep chemicals away from children, pets, 
                    and water sources. Observe recommended waiting periods before harvest.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">Application Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">For Chemical Treatment:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Mix {disease.treatments.chemical[0]} as per product label instructions</li>
                  <li>Apply during early morning or late evening</li>
                  <li>Ensure complete coverage of affected plant parts</li>
                  <li>Repeat application after 7-10 days if necessary</li>
                  <li>Do not apply in windy conditions or before rain</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">For Organic Treatment:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Prepare {disease.treatments.organic[0]} solution</li>
                  <li>Apply thoroughly to affected areas</li>
                  <li>Treat nearby plants as preventive measure</li>
                  <li>Reapply after rainfall</li>
                  <li>Combine with good cultural practices</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">Disease Cycle</h2>
            <div className="bg-light-bg rounded-lg overflow-hidden mb-3">
              <img 
                src="https://images.pexels.com/photos/5864282/pexels-photo-5864282.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Disease cycle" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-light-text">
              Understanding the disease cycle helps prevent future outbreaks. The pathogen 
              {disease.scientificName} typically overwinters in plant debris and soil, becoming 
              active during favorable conditions.
            </p>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Similar Diseases</h2>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-3">
                    <img 
                      src={`https://images.pexels.com/photos/1${item}85172/pexels-photo-1${item}85172.jpeg?auto=compress&cs=tinysrgb&w=100`} 
                      alt="Similar disease" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-dark-text">{['Early Blight', 'Bacterial Wilt', 'Anthracnose'][item - 1]}</h3>
                    <p className="text-xs text-lighter-text mt-1">Similar symptoms on {disease.affectedCrops[0]}</p>
                    <Link to="#" className="text-xs text-primary mt-1 inline-block">
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default DiseaseAnalysis;