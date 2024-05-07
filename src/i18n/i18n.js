import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import SETTING_EN from "../assets/locales/en/setting.json";
import SETTING_VI from "../assets/locales/vi/setting.json";
const resources = {
  en: {
    setting: SETTING_EN,
  },
  vi: {
    setting: SETTING_VI,
  },
};
const defaultNS = "setting";
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: "setting",
  defaultNS,
  fallbacklng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
