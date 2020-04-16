/* eslint-disable import/no-unresolved */
import propertiesToJSON from 'properties-to-json';
// This is imported using Fusebox's raw plugin, make sure to include .properties in your fusebox config
import enMessages from './messages/en-US/strings.properties';
import viMessages from './messages/vi/strings.properties';
import jaMessages from './messages/ja/strings.properties';
import koMessages from './messages/ko/strings.properties';
import trMessages from './messages/tr/strings.properties';
import thMessages from './messages/th/strings.properties';
import ruMessages from './messages/ru/strings.properties';
import ptBRMessages from './messages/pt-BR/strings.properties';
import esMessages from './messages/es/strings.properties';
import idMessages from './messages/id/strings.properties';

function returnMessagesFromPropertiesFile(rawPropertiesString) {
  let parsedTranslations;
  if (typeof rawPropertiesString === 'string') {
    parsedTranslations = propertiesToJSON(rawPropertiesString);
  } else {
    parsedTranslations = propertiesToJSON(rawPropertiesString.default);
  }

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
    name: 'Tiếng Việt',
    locale: 'vi',
    contentfulLocale: 'vi',

    messages: returnMessagesFromPropertiesFile(viMessages),
  },
  {
    name: '日本語',
    locale: 'ja',
    contentfulLocale: 'ja-JP',

    messages: returnMessagesFromPropertiesFile(jaMessages),
  },
  {
    name: '한국어',
    locale: 'ko',
    contentfulLocale: 'ko-KR',

    messages: returnMessagesFromPropertiesFile(koMessages),
  },
  {
    name: 'Türkçe',
    locale: 'tr',
    contentfulLocale: 'tr-TR',

    messages: returnMessagesFromPropertiesFile(trMessages),
  },
  {
    name: 'ภาษาไทย',
    locale: 'th',
    contentfulLocale: 'th-TH',

    messages: returnMessagesFromPropertiesFile(thMessages),
  },
  {
    name: 'Русский',
    locale: 'ru',
    contentfulLocale: 'ru-RU',

    messages: returnMessagesFromPropertiesFile(ruMessages),
  },
  {
    name: 'Português',
    locale: 'pt-BR',
    contentfulLocale: 'pt-BR',

    messages: returnMessagesFromPropertiesFile(ptBRMessages),
  },
  {
    name: 'Español',
    locale: 'es',
    contentfulLocale: 'es',

    messages: returnMessagesFromPropertiesFile(esMessages),
  },
  {
    name: 'Español',
    locale: 'id',
    contentfulLocale: 'id',

    messages: returnMessagesFromPropertiesFile(idMessages),
  },
];
