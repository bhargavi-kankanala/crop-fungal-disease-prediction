import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Upload, 
  AlertCircle,
  Loader2,
  Check,
  X,
  Info,
  MapPin
} from 'lucide-react';

import MainLayout from '../components/layout/MainLayout';
import { useAuth } from '../hooks/useAuth';
import { useDisease } from '../hooks/useDisease';
import { DetectionResult } from '../contexts/DiseaseContext';

const Home = () => {
  const { user } = useAuth();
  const { detectDisease, loading, error } = useDisease();
  const [image, setImage] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setShowCamera(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        
        const capturedImage = canvas.toDataURL('image/jpeg');
        setImage(capturedImage);
        setShowCamera(false);
        
        // Stop all video streams
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
          setStream(null);
        }
      }
    }
  };

  const handleCancelCapture = () => {
    setShowCamera(false);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const handleAnalyze = async () => {
    if (image) {
      try {
        const detectionResult = await detectDisease(image);
        setResult(detectionResult);
      } catch (err) {
        console.error('Disease detection error:', err);
      }
    }
  };

  const handleReset = () => {
    setImage(null);
    setResult(null);
  };

  return (
    <MainLayout title="Home">
      <section className="mb-8">
        <motion.div 
          className="bg-hero-pattern bg-cover bg-center rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black/40 backdrop-blur-sm py-12 px-6 md:px-12">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Welcome back, {user?.fullName}
              </motion.h1>
              
              <motion.p 
                className="text-white/90 text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Upload a crop leaf image to instantly detect fungal diseases and get treatment recommendations.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="ml-2 text-white">{user?.location}</span>
                </div>
                
                <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <Info className="h-5 w-5 text-accent" />
                  <span className="ml-2 text-white">Risk level: <span className="font-medium">Moderate</span></span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Detect Crop Disease</h2>
            
            {/* Image upload area */}
            {!image && !showCamera && (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center ${
                  dragging ? 'border-primary bg-primary/5' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center">
                  <Upload className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload Crop Image</h3>
                  <p className="text-light-text mb-4">
                    Drag and drop your image here, or click to select from your device
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="btn btn-primary"
                    >
                      <Upload className="h-5 w-5 mr-2" />
                      Upload Image
                    </button>
                    
                    <button 
                      onClick={handleStartCamera}
                      className="btn btn-secondary"
                    >
                      <Camera className="h-5 w-5 mr-2" />
                      Take Photo
                    </button>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Camera view */}
            {showCamera && (
              <div className="relative rounded-lg overflow-hidden">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <canvas ref={canvasRef} className="hidden" />
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 bg-black/50">
                  <button
                    onClick={handleCapture}
                    className="btn btn-primary mr-4"
                  >
                    <Camera className="h-5 w-5 mr-2" />
                    Capture
                  </button>
                  
                  <button
                    onClick={handleCancelCapture}
                    className="btn bg-white text-dark-text hover:bg-gray-100"
                  >
                    <X className="h-5 w-5 mr-2" />
                    Cancel
                  </button>
                </div>
              </div>
            )}
            
            {/* Image preview */}
            {image && !result && (
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={image} 
                    alt="Uploaded crop" 
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg border border-gray-200"
                  />
                  
                  <button
                    onClick={handleReset}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                  >
                    <X className="h-5 w-5 text-error" />
                  </button>
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={handleAnalyze}
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    ) : (
                      <Camera className="h-5 w-5 mr-2" />
                    )}
                    {loading ? 'Analyzing...' : 'Analyze Disease'}
                  </button>
                </div>
              </div>
            )}
            
            {/* Detection results */}
            {result && (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <img 
                      src={image!} 
                      alt="Analyzed crop" 
                      className="w-full h-auto max-h-[300px] object-contain rounded-lg border border-gray-200" 
                    />
                  </div>
                  
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="bg-success/20 p-1.5 rounded-full mr-3">
                          <Check className="h-5 w-5 text-success" />
                        </div>
                        <h3 className="text-lg font-semibold">Detection Complete</h3>
                      </div>
                      
                      <h4 className="text-xl font-bold text-primary mb-2">{result.disease.name}</h4>
                      <p className="text-sm text-light-text mb-2">
                        <em>{result.disease.scientificName}</em>
                      </p>
                      
                      <div className="flex items-center mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${result.confidence}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm font-medium">{result.confidence}%</span>
                      </div>
                      
                      <p className="text-light-text text-sm mb-4">{result.disease.description.substring(0, 120)}...</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Link 
                        to={`/disease/${result.disease.id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                      
                      <button
                        onClick={handleReset}
                        className="btn bg-gray-100 text-dark-text hover:bg-gray-200"
                      >
                        Scan New Image
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Quick Recommendations:</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
            
            {/* Error message */}
            {error && (
              <div className="mt-4 bg-error-light p-4 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-error mr-3" />
                <p className="text-error">{error}</p>
              </div>
            )}
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">Recent Detections</h2>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-3">
                    <img 
                      src={`https://images.pexels.com/photos/1${item}85172/pexels-photo-1${item}85172.jpeg?auto=compress&cs=tinysrgb&w=100`} 
                      alt="Crop sample" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-dark-text">{['Powdery Mildew', 'Leaf Spot', 'Rice Blast'][item - 1]}</h3>
                    <p className="text-sm text-lighter-text">Detected on {['Rice', 'Tomato', 'Wheat'][item - 1]}</p>
                    <p className="text-xs text-lighter-text mt-1">{item} day{item > 1 ? 's' : ''} ago</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="text-primary text-sm font-medium mt-4 hover:text-primary-dark transition-colors">
              View All History
            </button>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Regional Alerts</h2>
            
            <div className="space-y-3 mb-4">
              <div className="bg-warning/10 p-3 rounded-lg border-l-4 border-warning">
                <h3 className="font-medium text-dark-text">Increased Rice Blast Risk</h3>
                <p className="text-sm text-light-text">High humidity levels detected in your region. Take preventative measures.</p>
              </div>
              
              <div className="bg-info/10 p-3 rounded-lg border-l-4 border-info">
                <h3 className="font-medium text-dark-text">Weekly Disease Forecast</h3>
                <p className="text-sm text-light-text">Based on local weather patterns, moderate risk for fungal diseases this week.</p>
              </div>
            </div>
            
            <Link 
              to="/map"
              className="text-primary text-sm font-medium hover:text-primary-dark transition-colors"
            >
              View Disease Map
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Home;