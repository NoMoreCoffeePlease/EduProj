import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  fr: {
    greeting: 'Bonjour!',
  },
};

export default I18n;