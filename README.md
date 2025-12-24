# crop-fungal-disease-prediction

# 🌾 Crop Fungal Disease Prediction

A web application that helps users predict possible fungal diseases affecting crops based on predefined patterns and data. This project is built with **React** and **TypeScript**, with focus on clean architecture and future scalability.

---

## ⭐ Project Overview

Crop diseases cause significant losses in agriculture every year. This project aims to:

- Provide a user-friendly interface to explore common fungal diseases in crops
- Offer a modular React + TypeScript application that can be extended to AI/ML vision
- Serve as a foundation for future image-based disease prediction

---

## 💡 Features

- Modular React application structure
- Custom hooks for prediction and authentication logic
- TypeScript support for strong typing and fewer bugs
- Internationalization (i18n) included
- Clean and maintainable code base

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React      | Frontend UI |
| TypeScript | Static typing |
| Vite       | Dev build tool |
| HTML       | Markup |
| CSS        | Styling |
| GitHub     | Version control |

---

## 📂 Project Structure

crop-fungal-disease-prediction/
│
├── README.md # Project description
├── package.json # Project metadata + dependencies
├── tsconfig.json # TypeScript config
├── eslint.config.js # Linter config
│
├── src/ # Source files
│ ├── main.tsx # React app entry point
│ ├── App.tsx # Root component
│ │
│ ├── components/ # UI components
│ │ └── layout/ # Layout components
│ │
│ ├── hooks/ # Custom React hooks
│ │ ├── useDisease.ts
│ │ └── useAuth.ts
│ │
│ ├── data/ # Mock data used for predictions
│ │ └── mockData.ts
│ │
│ └── i18n/ # Internationalization setup
│ └── index.ts
│
└── public/ # Public assets

yaml
Copy code

---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhargavi-kankanala/crop-fungal-disease-prediction.git
Install dependencies

bash
Copy code
cd crop-fungal-disease-prediction
npm install
Run the development server

bash
Copy code
npm run dev
Open Browser
Visit: http://localhost:5173 (default Vite address)

📈 Usage
This project currently uses mock data for the prediction logic. It showcases:

✔ React component structure
✔ Usage of custom hooks
✔ Clean architecture ready for AI / future enhancements

🔮 Future Enhancements
🎯 Add real machine learning model for image-based disease prediction

📸 Upload crop images directly for AI analysis

🗂 Backend integration (Node.js / Python / Flask / FastAPI)

🧠 Cache & historical prediction tracking

🌎 Multi-language support for farmers worldwide

🤝 Contributing
You are welcome to collaborate!

Fork the repository

Create a new branch (feature/awesome)

Commit your changes

Push to the branch

Create a Pull Request

👩‍💻 Author
Bhargavi Kankanala
BTech CSE | FRONTEND DEVELOPER, CODING ENTHUSIAST
📍 India

