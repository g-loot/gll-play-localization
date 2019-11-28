/* eslint-disable import/no-unresolved */
import { convertPropsToFlatJson } from 'propson';
// This is imported using Fusebox's raw plugin
import * as enMessages from './messages/en-US/strings.properties';
import * as viMessages from './messages/vi/strings.properties';
import * as jaMessages from './messages/ja/strings.properties';
import * as koMessages from './messages/ko/strings.properties';
import * as trMessages from './messages/tr/strings.properties';
import * as thMessages from './messages/th/strings.properties';
import * as ruMessages from './messages/ru-RU/strings.properties';

function returnMessagesFromPropertiesFile(rawPropertiesString) {
  const translationsContent = rawPropertiesString.split('\n');
  const parsedTranslations = convertPropsToFlatJson(translationsContent);

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
    locale: 'ja',
    contentfulLocale: 'ja-JP',

    messages: returnMessagesFromPropertiesFile(jaMessages),
  },
  {
    name: 'Korean',
    locale: 'ko',
    contentfulLocale: 'ko-KR',

    messages: returnMessagesFromPropertiesFile(koMessages),
  },
  {
    name: 'Turkish',
    locale: 'tr',
    contentfulLocale: 'tr-TR',

    messages: returnMessagesFromPropertiesFile(trMessages),
  },
  {
    name: 'Thailand',
    locale: 'th',
    contentfulLocale: 'th-TH',

    messages: returnMessagesFromPropertiesFile(thMessages),
  },
  {
    name: 'Russian',
    locale: 'ru-RU',
    contentfulLocale: 'ru',

    messages: returnMessagesFromPropertiesFile(ruMessages),
  },
];
