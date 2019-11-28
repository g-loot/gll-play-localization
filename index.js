import { convertPropsToFlatJson } from 'propson';
// This is imported using Fusebox's raw plugin
import enMessages from './messages/en-US/strings.properties';
import viMessages from './messages/vi/strings.properties';
import jaMessages from './messages/ja-JP/strings.properties';
import koMessages from './messages/ko-KR/strings.properties';
import trMessages from './messages/tr-TR/strings.properties';
import thMessages from './messages/th-TH/strings.properties';
import ruMessages from './messages/ru-RU/strings.properties';

function returnMessagesFromPropertiesFile(rawPropertiesString) {
  const translationsContent = rawPropertiesString.split('\n');
  console.log(translationsContent);
  const parsedTranslations = convertPropsToFlatJson(translationsContent);
  console.log(parsedTranslations);

  return parsedTranslations;
}

export default [
  {
    name: 'English',
    locale: 'en-US',
    contentfulLocale: 'en-US',
    defaultLocale: true,
    messages: returnMessagesFromPropertiesFile(enMessages),
  },
  {
    name: 'Vietnamese',
    locale: 'vi',
    contentfulLocale: 'vi',

    messages: returnMessagesFromPropertiesFile(viMessages),
  },
  {
    name: 'Japanese',
    locale: 'ja-JP',
    contentfulLocale: 'ja-JP',

    messages: returnMessagesFromPropertiesFile(jaMessages),
  },
  {
    name: 'Korean',
    locale: 'ko-KR',
    contentfulLocale: 'ko-KR',

    messages: returnMessagesFromPropertiesFile(koMessages),
  },
  {
    name: 'Turkish',
    locale: 'tr-TR',
    contentfulLocale: 'tr-TR',

    messages: returnMessagesFromPropertiesFile(trMessages),
  },
  {
    name: 'Thailand',
    locale: 'th-TH',
    contentfulLocale: 'th-TH',

    messages: returnMessagesFromPropertiesFile(thMessages),
  },
  {
    name: 'Russian',
    locale: 'ru-RU',
    contentfulLocale: 'ru-RU',

    messages: returnMessagesFromPropertiesFile(ruMessages),
  },
];
