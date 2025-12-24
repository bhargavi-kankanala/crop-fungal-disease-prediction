import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      assistant: {
        title: 'Keth Suraksha Assistant',
        welcome: 'Hello! How can I help you today?',
        input_placeholder: 'Type your message...',
        options: {
          disease: 'Help me identify a disease',
          navigation: 'Help me navigate the site',
          help: 'General help',
        },
        disease_help: 'To identify a disease, upload a clear photo of the affected plant part. I can help guide you through the process.',
        navigation_help: 'You can find different features in the menu. What would you like to explore?',
        general_help: 'I can help you with disease identification, treatment recommendations, and using the site. What do you need?',
      },
    },
  },
  hi: {
    translation: {
      assistant: {
        title: 'केथ सुरक्षा सहायक',
        welcome: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूं?',
        input_placeholder: 'अपना संदेश लिखें...',
        options: {
          disease: 'बीमारी की पहचान में मदद करें',
          navigation: 'साइट नेविगेट करने में मदद करें',
          help: 'सामान्य सहायता',
        },
        disease_help: 'बीमारी की पहचान के लिए, प्रभावित पौधे के हिस्से की एक स्पष्ट फोटो अपलोड करें। मैं आपको इस प्रक्रिया में मदद कर सकता हूं।',
        navigation_help: 'आप मेनू में विभिन्न सुविधाएं पा सकते हैं। आप क्या देखना चाहेंगे?',
        general_help: 'मैं बीमारी की पहचान, उपचार की सिफारिशों और साइट का उपयोग करने में आपकी मदद कर सकता हूं। आपको क्या चाहिए?',
      },
    },
  },
  te: {
    translation: {
      assistant: {
        title: 'కేత్ సురక్ష సహాయకుడు',
        welcome: 'నమస్కారం! నేను మీకు ఎలా సహాయం చేయగలను?',
        input_placeholder: 'మీ సందేశాన్ని టైప్ చేయండి...',
        options: {
          disease: 'వ్యాధిని గుర్తించడంలో సహాయం చేయండి',
          navigation: 'సైట్‌ను నావిగేట్ చేయడంలో సహాయం చేయండి',
          help: 'సాధారణ సహాయం',
        },
        disease_help: 'వ్యాధిని గుర్తించడానికి, ప్రభావిత మొక్క భాగం యొక్క స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి. నేను మీకు ఈ ప్రక్రియలో సహాయం చేయగలను.',
        navigation_help: 'మీరు మెనูలో వివిధ ఫీచర్‌లను కనుగొనవచ్చు. మీరు ఏమి అన్వేషించాలనుకుంటున్నారు?',
        general_help: 'నేను వ్యాధి గుర్తింపు, చికిత్స సిఫార్సులు మరియు సైట్ ఉపయోగంలో మీకు సహాయం చేయగలను. మీకు ఏమి కావాలి?',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;