import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div>
      <h1>{t('welcome')}</h1> {/* Will display "Welcome" or "Bienvenue" based on the language */}
      <button>{t('login')}</button> {/* Will display "Login" or "Connexion" */}
    </div>
  );
};

export default HomePage;
