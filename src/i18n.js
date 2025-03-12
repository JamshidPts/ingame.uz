import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

const loadTranslations = async (lang) => {
  try {
    const response = await axios.get(`https://ingame1.azeme.uz/api/user/langs?lang=${lang}`);
    return response.data.translations || {};
  } catch (error) {
    console.error("Ошибка загрузки переводов:", error);
    return {};
  }
};

i18next
  .use(initReactI18next)
  .init({
    lng: "ru", // Язык по умолчанию
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
    resources: {},
  });

export const changeLanguage = async (lang) => {
  const translations = await loadTranslations(lang);
  i18next.addResourceBundle(lang, "translation", translations, true, true);
  await i18next.changeLanguage(lang);
};

export default i18next;
