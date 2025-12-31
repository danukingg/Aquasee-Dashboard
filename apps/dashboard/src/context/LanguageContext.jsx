import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    // Load saved language preference if simple persistence is desired, 
    // but for now we default to 'en' as per typical SPA behavior unless explicit.
    // Let's add simple persistence.
    useEffect(() => {
        const savedLang = localStorage.getItem('appLanguage');
        if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
            setLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('appLanguage', lang);
    };

    const value = {
        language,
        changeLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
