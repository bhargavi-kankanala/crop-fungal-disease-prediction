import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  TrendingUp, 
  MapPin, 
  AlertTriangle,
  Calendar, 
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

import MainLayout from '../components/layout/MainLayout';
import { useDisease } from '../hooks/useDisease';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const { stats } = useDisease();

  // Bar chart data
  const barChartData = {
    labels: stats.uploadsByMonth.map(item => item.month),
    datasets: [
      {
        label: 'Number of Scans',
        data: stats.uploadsByMonth.map(item => item.count),
        backgroundColor: '#76B947',
        borderColor: '#5A9C2F',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Pie chart data
  const pieChartData = {
    labels: stats.mostCommonDiseases.slice(0, 5).map(disease => disease.name),
    datasets: [
      {
        label: 'Disease Count',
        data: stats.mostCommonDiseases.slice(0, 5).map(disease => disease.count),
        backgroundColor: [
          '#76B947',
          '#A8D5BA',
          '#BFA48A',
          '#92C9E3',
          '#F9E79F',
        ],
        borderColor: [
          '#5A9C2F',
          '#8AB89A',
          '#A38769',
          '#5DA9D6',
          '#F4D03F',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <MainLayout title="Dashboard">
      <div className="mb-6">
        <motion.h1 
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Crop Disease Analytics
        </motion.h1>
        
        <motion.p 
          className="text-light-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Monitor disease trends and get insights to better protect your crops.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: 'Total Scans',
            value: '954',
            icon: <BarChart2 className="h-5 w-5 text-primary" />,
            change: { value: '+12%', isPositive: true },
            bgColor: 'bg-primary/10',
          },
          {
            title: 'Detection Success Rate',
            value: '87.4%',
            icon: <TrendingUp className="h-5 w-5 text-success" />,
            change: { value: '+3.2%', isPositive: true },
            bgColor: 'bg-success/10',
          },
          {
            title: 'Regional Risk Level',
            value: 'Moderate',
            icon: <MapPin className="h-5 w-5 text-warning" />,
            change: { value: 'Stable', isPositive: true },
            bgColor: 'bg-warning/10',
          },
          {
            title: 'Disease Alerts',
            value: '6',
            icon: <AlertTriangle className="h-5 w-5 text-error" />,
            change: { value: '-2', isPositive: false },
            bgColor: 'bg-error/10',
          },
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="card border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-light-text mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
              
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                {stat.icon}
              </div>
            </div>
            
            <div className="mt-4 flex items-center">
              {stat.change.isPositive ? (
                <ArrowUp className="h-3 w-3 text-success mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 text-error mr-1" />
              )}
              
              <span className={`text-xs font-medium ${
                stat.change.isPositive ? 'text-success' : 'text-error'
              }`}>
                {stat.change.value}
              </span>
              
              <span className="text-xs text-lighter-text ml-1">vs last month</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <motion.div 
          className="card lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Monthly Scan Trend</h2>
            <div className="flex items-center text-xs text-light-text">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Last 12 months</span>
            </div>
          </div>
          
          <Bar data={barChartData} options={barChartOptions} />
        </motion.div>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Common Diseases</h2>
            <div className="flex items-center text-xs text-light-text">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Last 6 months</span>
            </div>
          </div>
          
          <Pie data={pieChartData} options={pieChartOptions} />
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-6">Disease by Region</h2>
          
          <div className="space-y-6">
            {stats.diseasesByRegion.map((region, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{region.region}</h3>
                  <span className="text-sm text-lighter-text">
                    {region.diseases.reduce((sum, disease) => sum + disease.count, 0)} cases
                  </span>
                </div>
                
                <div className="space-y-2">
                  {region.diseases.map((disease, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-full mr-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{disease.name}</span>
                          <span>{disease.count} cases</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-secondary' : 'bg-info'
                            }`}
                            style={{ 
                              width: `${(disease.count / region.diseases.reduce((sum, d) => sum + d.count, 0)) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-6">Seasonal Forecast</h2>
          
          <div className="bg-primary/5 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="p-2 bg-primary/20 rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              
              <div>
                <h3 className="font-medium text-dark-text">Current Season: Monsoon</h3>
                <p className="text-sm text-light-text mt-1">July - September</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-medium mb-4">Disease Risk Predictions</h3>
          
          <div className="space-y-4">
            {[
              { disease: 'Rice Blast', risk: 'High', reason: 'High humidity levels' },
              { disease: 'Late Blight', risk: 'Moderate', reason: 'Periodic rainfall' },
              { disease: 'Powdery Mildew', risk: 'Low', reason: 'Humid but controlled conditions' },
              { disease: 'Rust', risk: 'Moderate', reason: 'Temperature fluctuations' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-3 h-3 rounded-full mr-3 ${
                    item.risk === 'High' 
                      ? 'bg-error' 
                      : item.risk === 'Moderate' 
                        ? 'bg-warning' 
                        : 'bg-success'
                  }`}
                ></div>
                
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.disease}</span>
                    <span className={`text-sm ${
                      item.risk === 'High' 
                        ? 'text-error' 
                        : item.risk === 'Moderate' 
                          ? 'text-warning' 
                          : 'text-success'
                    }`}>
                      {item.risk} Risk
                    </span>
                  </div>
                  <p className="text-xs text-lighter-text">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="btn btn-primary w-full mt-6">
            Get Detailed Forecast
          </button>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;