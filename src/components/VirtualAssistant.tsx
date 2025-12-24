import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Languages, ChevronDown } from 'lucide-react';
import ChatBot from 'react-simple-chatbot';
import { useTranslation } from 'react-i18next';

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'te', name: 'తెలుగు' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    i18n.changeLanguage(langCode);
  };

  const steps = [
    {
      id: '1',
      message: t('assistant.welcome'),
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: t('assistant.options.disease'), trigger: '3' },
        { value: 2, label: t('assistant.options.navigation'), trigger: '4' },
        { value: 3, label: t('assistant.options.help'), trigger: '5' },
      ],
    },
    {
      id: '3',
      message: t('assistant.disease_help'),
      trigger: '2',
    },
    {
      id: '4',
      message: t('assistant.navigation_help'),
      trigger: '2',
    },
    {
      id: '5',
      message: t('assistant.general_help'),
      trigger: '2',
    },
  ];

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 w-96 bg-white rounded-xl shadow-2xl z-50"
          >
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center">
                <Languages className="h-5 w-5 text-primary mr-2" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="text-sm border-none focus:ring-0"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="h-[500px]">
              <ChatBot
                steps={steps}
                headerTitle={t('assistant.title')}
                placeholder={t('assistant.input_placeholder')}
                customStyle={{
                  background: '#ffffff',
                  headerBgColor: '#2D5A27',
                  headerFontColor: '#ffffff',
                  headerFontSize: '16px',
                  botBubbleColor: '#2D5A27',
                  botFontColor: '#ffffff',
                  userBubbleColor: '#1E88E5',
                  userFontColor: '#ffffff',
                }}
                floating={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualAssistant;