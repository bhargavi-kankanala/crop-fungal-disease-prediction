import { Disease, Stats } from '../contexts/DiseaseContext';

export const mockDiseases: Disease[] = [
  {
    id: '1',
    name: 'Late Blight',
    scientificName: 'Phytophthora infestans',
    description: 'Late blight is a potentially devastating disease of potato and tomato, caused by the fungus-like organism Phytophthora infestans. It spreads quickly in wet weather with cool nights and warm days.',
    symptoms: [
      'Dark, water-soaked spots on leaves',
      'White, fuzzy growth on undersides of leaves',
      'Brown lesions on stems',
      'Firm, dark, greasy-looking patches on tubers'
    ],
    causes: [
      'High humidity (above 90%)',
      'Temperatures between 10-25°C',
      'Poor air circulation',
      'Prolonged leaf wetness'
    ],
    treatments: {
      chemical: [
        'Chlorothalonil',
        'Mancozeb',
        'Copper-based fungicides'
      ],
      organic: [
        'Copper sulphate with lime (Bordeaux mixture)',
        'Potassium bicarbonate',
        'Neem oil'
      ],
      preventive: [
        'Plant resistant varieties',
        'Improve air circulation',
        'Avoid overhead irrigation',
        'Practice crop rotation'
      ]
    },
    images: [
      'https://images.pexels.com/photos/6754094/pexels-photo-6754094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1391348/pexels-photo-1391348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    affectedCrops: ['Potato', 'Tomato'],
    severity: 'high',
    commonRegions: ['Maharashtra', 'Uttar Pradesh', 'West Bengal']
  },
  {
    id: '2',
    name: 'Powdery Mildew',
    scientificName: 'Erysiphe spp.',
    description: 'Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white to gray powdery growth on leaf surfaces, stems, and sometimes fruit.',
    symptoms: [
      'White powdery spots on leaves and stems',
      'Yellow or brown patches on leaves',
      'Distorted or stunted new growth',
      'Premature leaf drop'
    ],
    causes: [
      'Warm, dry conditions with high humidity',
      'Poor air circulation',
      'Overcrowded plantings',
      'Excessive nitrogen fertilization'
    ],
    treatments: {
      chemical: [
        'Sulfur-based fungicides',
        'Tebuconazole',
        'Trifloxystrobin'
      ],
      organic: [
        'Potassium bicarbonate',
        'Milk spray (1:10 milk to water)',
        'Neem oil'
      ],
      preventive: [
        'Plant resistant varieties',
        'Proper spacing for good airflow',
        'Avoid overhead watering',
        'Prune affected parts'
      ]
    },
    images: [
      'https://images.pexels.com/photos/4910751/pexels-photo-4910751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/7728041/pexels-photo-7728041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    affectedCrops: ['Grapes', 'Cucurbits', 'Roses', 'Apples'],
    severity: 'medium',
    commonRegions: ['Karnataka', 'Tamil Nadu', 'Himachal Pradesh']
  },
  {
    id: '3',
    name: 'Rice Blast',
    scientificName: 'Magnaporthe oryzae',
    description: 'Rice blast is one of the most destructive diseases of rice worldwide. It can affect all above-ground parts of the rice plant at any growth stage.',
    symptoms: [
      'Diamond-shaped lesions on leaves',
      'Gray or white centers in lesions with dark borders',
      'Infected nodes turn blackish and break easily',
      'Poor grain filling and broken panicles'
    ],
    causes: [
      'High humidity (above 90%)',
      'Cool temperatures at night and warm during the day',
      'Excessive nitrogen application',
      'Water stress'
    ],
    treatments: {
      chemical: [
        'Trifloxystrobin + Tebuconazole',
        'Azoxystrobin',
        'Isoprothiolane'
      ],
      organic: [
        'Pseudomonas fluorescens',
        'Silicon supplements',
        'Cow urine spray'
      ],
      preventive: [
        'Plant resistant varieties',
        'Balanced fertilization',
        'Proper water management',
        'Field sanitation'
      ]
    },
    images: [
      'https://images.pexels.com/photos/7666021/pexels-photo-7666021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/8468440/pexels-photo-8468440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    affectedCrops: ['Rice'],
    severity: 'high',
    commonRegions: ['West Bengal', 'Odisha', 'Assam', 'Tamil Nadu']
  },
  {
    id: '4',
    name: 'Anthracnose',
    scientificName: 'Colletotrichum spp.',
    description: 'Anthracnose is a group of fungal diseases that can affect a wide variety of plants in warm, humid areas. It primarily attacks developing tissues and ripe fruits.',
    symptoms: [
      'Dark, sunken lesions on fruits',
      'Tan to brown spots on leaves with dark borders',
      'Twig dieback',
      'Premature defoliation'
    ],
    causes: [
      'Warm, wet weather',
      'Splashing water that spreads spores',
      'Poor air circulation',
      'Overhead irrigation'
    ],
    treatments: {
      chemical: [
        'Copper-based fungicides',
        'Mancozeb',
        'Azoxystrobin'
      ],
      organic: [
        'Copper spray',
        'Garlic extract',
        'Compost tea'
      ],
      preventive: [
        'Proper plant spacing',
        'Avoid overhead irrigation',
        'Prune affected parts',
        'Crop rotation'
      ]
    },
    images: [
      'https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/11701549/pexels-photo-11701549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    affectedCrops: ['Mango', 'Chili', 'Banana', 'Papaya', 'Bean'],
    severity: 'medium',
    commonRegions: ['Kerala', 'Karnataka', 'Andhra Pradesh']
  },
  {
    id: '5',
    name: 'Rust',
    scientificName: 'Puccinia spp.',
    description: 'Rust is a term used for a group of fungal diseases that affect various plants. The disease appears as rusty spots on leaves and other plant parts.',
    symptoms: [
      'Orange-brown, yellow, or red pustules on leaves and stems',
      'Chlorotic areas around pustules',
      'Defoliation in severe cases',
      'Reduced plant vigor'
    ],
    causes: [
      'High humidity',
      'Temperatures between 15-25°C',
      'Long periods of leaf wetness',
      'Overcrowded plantings'
    ],
    treatments: {
      chemical: [
        'Tebuconazole',
        'Propiconazole',
        'Myclobutanil'
      ],
      organic: [
        'Sulfur spray',
        'Neem oil',
        'Baking soda solution (with horticultural oil)'
      ],
      preventive: [
        'Resistant varieties',
        'Proper plant spacing',
        'Avoid overhead irrigation',
        'Remove affected plant debris'
      ]
    },
    images: [
      'https://images.pexels.com/photos/6231874/pexels-photo-6231874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/8980105/pexels-photo-8980105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    affectedCrops: ['Wheat', 'Coffee', 'Beans', 'Roses'],
    severity: 'medium',
    commonRegions: ['Punjab', 'Haryana', 'Madhya Pradesh']
  }
];

export const mockStats: Stats = {
  mostCommonDiseases: [
    { name: 'Late Blight', count: 156 },
    { name: 'Powdery Mildew', count: 109 },
    { name: 'Rice Blast', count: 87 },
    { name: 'Anthracnose', count: 64 },
    { name: 'Rust', count: 53 }
  ],
  diseasesByRegion: [
    {
      region: 'Maharashtra',
      diseases: [
        { name: 'Late Blight', count: 42 },
        { name: 'Powdery Mildew', count: 28 },
        { name: 'Anthracnose', count: 19 }
      ]
    },
    {
      region: 'Punjab',
      diseases: [
        { name: 'Rust', count: 35 },
        { name: 'Late Blight', count: 21 },
        { name: 'Powdery Mildew', count: 17 }
      ]
    },
    {
      region: 'West Bengal',
      diseases: [
        { name: 'Rice Blast', count: 47 },
        { name: 'Late Blight', count: 23 },
        { name: 'Anthracnose', count: 11 }
      ]
    }
  ],
  uploadsByMonth: [
    { month: 'Jan', count: 45 },
    { month: 'Feb', count: 62 },
    { month: 'Mar', count: 58 },
    { month: 'Apr', count: 71 },
    { month: 'May', count: 89 },
    { month: 'Jun', count: 103 },
    { month: 'Jul', count: 120 },
    { month: 'Aug', count: 132 },
    { month: 'Sep', count: 94 },
    { month: 'Oct', count: 76 },
    { month: 'Nov', count: 63 },
    { month: 'Dec', count: 51 }
  ],
  successRate: 87.4
};