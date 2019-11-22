import enMessages from './messages/en-US/strings.json';
import viMessages from './messages/vi/strings.json';
import jaMessages from './messages/ja-JP/strings.json';
import koMessages from './messages/ko-KR/strings.json';
import trMessages from './messages/tr-TR/strings.json';
import thMessages from './messages/th-TH/strings.json';
import ruMessages from './messages/ru-RU/strings.json';

export default [
  {
    name: 'English',
    locale: 'en-US',
    contentfulLocale: 'en-US',
    defaultLocale: true,
    messages: enMessages,
  },
  {
    name: 'Vietnamese',
    locale: 'vi',
    contentfulLocale: 'vi',

    messages: viMessages,
  },
  {
    name: 'Japanese',
    locale: 'ja-JP',
    contentfulLocale: 'ja-JP',

    messages: jaMessages,
  },
  {
    name: 'Korean',
    locale: 'ko-KR',
    contentfulLocale: 'ko-KR',

    messages: koMessages,
  },
  {
    name: 'Turkish',
    locale: 'tr-TR',
    contentfulLocale: 'tr-TR',

    messages: trMessages,
  },
  {
    name: 'Thailand',
    locale: 'th-TH',
    contentfulLocale: 'th-TH',

    messages: thMessages,
  },
  {
    name: 'Russian',
    locale: 'ru-RU',
    contentfulLocale: 'ru-RU',

    messages: ruMessages,
  },
];
