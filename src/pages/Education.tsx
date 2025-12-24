import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

import MainLayout from '../components/layout/MainLayout';

const Education = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const educationSections = [
    {
      title: 'Understanding Crop Diseases',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>
            Crop diseases can be caused by fungi, bacteria, viruses, and other pathogens. Understanding the 
            basic principles of disease development can help farmers identify problems early and take 
            appropriate action.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-light-bg p-4 rounded-lg">
              <h4 className="font-medium mb-2">Disease Triangle</h4>
              <p className="text-sm">
                Three factors are necessary for a disease to develop:
              </p>
              <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                <li>Susceptible host plant</li>
                <li>Pathogen (disease-causing organism)</li>
                <li>Favorable environmental conditions</li>
              </ul>
            </div>
            <div className="bg-light-bg p-4 rounded-lg">
              <h4 className="font-medium mb-2">Types of Pathogens</h4>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Fungi - Most common cause of crop diseases</li>
                <li>Bacteria - Enter through natural openings</li>
                <li>Viruses - Often spread by insect vectors</li>
                <li>Nematodes - Microscopic worms in soil</li>
              </ul>
            </div>
          </div>
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Early Signs of Fungal Diseases</h4>
            <ul className="text-sm list-disc list-inside space-y-2">
              <li>Discolored spots or patches on leaves</li>
              <li>White or colored powdery substance on plant surfaces</li>
              <li>Wilting or drooping despite adequate watering</li>
              <li>Stunted growth or deformed plant parts</li>
              <li>Visible mold growth or fruiting bodies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Resources:</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>Disease Identification Guide (PDF)</span>
                <Download className="h-4 w-4 ml-2" />
              </a>
              <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                <Video className="h-4 w-4 mr-2" />
                <span>Video: Understanding the Disease Cycle</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Prevention Best Practices',
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>
            Prevention is the most effective approach to disease management. Implementing good agricultural 
            practices can significantly reduce disease pressure and minimize the need for chemical interventions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-light-bg p-4 rounded-lg">
              <h4 className="font-medium mb-2">Crop Selection & Rotation</h4>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Choose disease-resistant varieties</li>
                <li>Rotate crops to break disease cycles</li>
                <li>Avoid planting susceptible crops in affected areas</li>
                <li>Follow recommended crop spacing</li>
              </ul>
            </div>
            <div className="bg-light-bg p-4 rounded-lg">
              <h4 className="font-medium mb-2">Field Sanitation</h4>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Remove and dispose of infected plant material</li>
                <li>Clean tools between fields</li>
                <li>Manage weeds that harbor pathogens</li>
                <li>Use clean, disease-free seeds and planting material</li>
              </ul>
            </div>
            <div className="bg-light-bg p-4 rounded-lg">
              <h4 className="font-medium mb-2">Cultural Practices</h4>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Proper irrigation timing and methods</li>
                <li>Improve soil health and drainage</li>
                <li>Balanced fertilization</li>
                <li>Avoid working in fields when plants are wet</li>
              </ul>
            </div>
          </div>
          <div className="bg-success/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Seasonal Preventive Measures</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <h5 className="text-sm font-medium">Pre-Planting</h5>
                <ul className="text-sm list-disc list-inside mt-1 space-y-1">
                  <li>Soil testing and amendment</li>
                  <li>Deep plowing to bury crop residues</li>
                  <li>Seed treatment</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium">Growing Season</h5>
                <ul className="text-sm list-disc list-inside mt-1 space-y-1">
                  <li>Regular crop monitoring</li>
                  <li>Preventive fungicide application</li>
                  <li>Pruning for better air circulation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium">Post-Harvest</h5>
                <ul className="text-sm list-disc list-inside mt-1 space-y-1">
                  <li>Field cleanup</li>
                  <li>Proper crop residue management</li>
                  <li>Planning for next season's rotation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium">Off-Season</h5>
                <ul className="text-sm list-disc list-inside mt-1 space-y-1">
                  <li>Cover cropping</li>
                  <li>Tool and equipment sanitation</li>
                  <li>Storage area cleaning</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Resources:</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>Seasonal Prevention Calendar (PDF)</span>
                <Download className="h-4 w-4 ml-2" />
              </a>
              <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                <Video className="h-4 w-4 mr-2" />
                <span>Video: Crop Rotation Techniques</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Chemical & Organic Treatment Options',
      icon: <FileText className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>
            When prevention is not enough, both chemical and organic treatment options are available. Understanding 
            the proper use of these treatments is essential for effective disease management while minimizing 
            environmental impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Chemical Treatments</h4>
              <div className="bg-light-bg p-4 rounded-lg mb-4">
                <h5 className="text-sm font-medium mb-2">Fungicide Types</h5>
                <ul className="text-sm list-disc list-inside space-y-2">
                  <li>
                    <span className="font-medium">Contact fungicides:</span> Remain on plant surface, prevent infection
                  </li>
                  <li>
                    <span className="font-medium">Systemic fungicides:</span> Absorbed into plant tissue, can cure existing infections
                  </li>
                  <li>
                    <span className="font-medium">Protectant fungicides:</span> Applied before disease appears
                  </li>
                  <li>
                    <span className="font-medium">Eradicant fungicides:</span> Kill existing fungal pathogens
                  </li>
                </ul>
              </div>
              <div className="bg-warning/5 p-4 rounded-lg">
                <h5 className="text-sm font-medium mb-2">Application Guidelines</h5>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Follow label instructions strictly</li>
                  <li>Use appropriate protective equipment</li>
                  <li>Apply at recommended rates and timing</li>
                  <li>Observe pre-harvest intervals</li>
                  <li>Rotate fungicide classes to prevent resistance</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Organic Treatments</h4>
              <div className="bg-success/5 p-4 rounded-lg mb-4">
                <h5 className="text-sm font-medium mb-2">Natural Fungicides</h5>
                <ul className="text-sm list-disc list-inside space-y-2">
                  <li>
                    <span className="font-medium">Copper-based:</span> Bordeaux mixture, copper sulfate
                  </li>
                  <li>
                    <span className="font-medium">Sulfur-based:</span> Wettable sulfur, lime sulfur
                  </li>
                  <li>
                    <span className="font-medium">Botanical extracts:</span> Neem oil, garlic extract, tea tree oil
                  </li>
                  <li>
                    <span className="font-medium">Microbial:</span> Bacillus subtilis, Trichoderma spp.
                  </li>
                </ul>
              </div>
              <div className="bg-info/5 p-4 rounded-lg">
                <h5 className="text-sm font-medium mb-2">Homemade Solutions</h5>
                <ul className="text-sm space-y-2">
                  <li>
                    <span className="font-medium">Baking soda spray:</span> 1 tablespoon baking soda + 1 teaspoon oil + 1 liter water
                  </li>
                  <li>
                    <span className="font-medium">Milk spray:</span> 1 part milk to 9 parts water
                  </li>
                  <li>
                    <span className="font-medium">Garlic extract:</span> 4-5 cloves crushed in 1 liter water, strained
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-error/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Safety Precautions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Always read and follow label instructions</li>
                <li>Wear appropriate protective clothing</li>
                <li>Mix chemicals in well-ventilated areas</li>
                <li>Keep children and pets away during application</li>
              </ul>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Store chemicals in original containers</li>
                <li>Dispose of containers properly</li>
                <li>Calibrate sprayers for accurate application</li>
                <li>Observe re-entry intervals for treated areas</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Resources:</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>Chemical Safety Guide (PDF)</span>
                <Download className="h-4 w-4 ml-2" />
              </a>
              <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                <Video className="h-4 w-4 mr-2" />
                <span>Video: Making Organic Fungicides</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <MainLayout title="Education">
      <div className="mb-6">
        <motion.h1 
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Farmer Education Center
        </motion.h1>
        
        <motion.p 
          className="text-light-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Learn about crop diseases, prevention methods, and treatment options to protect your harvest.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <motion.div 
          className="card border-l-4 border-primary flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="p-4 bg-primary/10 rounded-full mr-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Learning Resources</h3>
            <p className="text-sm text-light-text">Articles, guides, and videos</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="card border-l-4 border-info flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="p-4 bg-info/10 rounded-full mr-4">
            <Video className="h-8 w-8 text-info" />
          </div>
          <div>
            <h3 className="font-semibold">Video Tutorials</h3>
            <p className="text-sm text-light-text">Step-by-step visual guides</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="card border-l-4 border-success flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <div className="p-4 bg-success/10 rounded-full mr-4">
            <FileText className="h-8 w-8 text-success" />
          </div>
          <div>
            <h3 className="font-semibold">Downloadable Guides</h3>
            <p className="text-sm text-light-text">PDF resources for offline use</p>
          </div>
        </motion.div>
      </div>
      
      <div className="mb-8">
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
            <img 
              src="https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Farmer education" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Disease Prevention & Management</h2>
          <p className="text-light-text mb-6">
            Understanding crop diseases and implementing proper management strategies is crucial for 
            maintaining crop health and maximizing yields. This guide covers essential knowledge and 
            practices to help you prevent, identify, and treat common fungal diseases affecting your crops.
          </p>
          
          <div className="space-y-4">
            {educationSections.map((section, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
              >
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full flex items-center justify-between p-4 text-left ${
                    expandedSection === index ? 'bg-primary/5' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="mr-4">{section.icon}</div>
                    <h3 className="font-semibold">{section.title}</h3>
                  </div>
                  
                  {expandedSection === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {expandedSection === index && (
                  <motion.div 
                    className="p-6 bg-white"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div>
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-6">Upcoming Webinars & Workshops</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Managing Rice Blast During Monsoon",
                date: "July 15, 2025",
                time: "10:00 AM - 11:30 AM",
                presenter: "Dr. Anand Kumar",
                image: "https://images.pexels.com/photos/2563720/pexels-photo-2563720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              },
              {
                title: "Organic Fungicides for Vegetable Crops",
                date: "July 22, 2025",
                time: "2:00 PM - 3:30 PM",
                presenter: "Dr. Priya Singh",
                image: "https://images.pexels.com/photos/7728637/pexels-photo-7728637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              },
              {
                title: "Climate Change and Disease Patterns",
                date: "August 5, 2025",
                time: "11:00 AM - 12:30 PM",
                presenter: "Dr. Rahul Sharma",
                image: "https://images.pexels.com/photos/7727743/pexels-photo-7727743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              }
            ].map((event, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.9 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start text-sm">
                      <span className="font-medium w-20">Date:</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="font-medium w-20">Time:</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <span className="font-medium w-20">Presenter:</span>
                      <span>{event.presenter}</span>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-full">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Education;