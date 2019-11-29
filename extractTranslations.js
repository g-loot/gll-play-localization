const fs = require("fs");
const { convertPropsToFlatJson } = require("propson");
function returnMessagesFromPropertiesFile(rawPropertiesString) {
  const translationsContent = rawPropertiesString.split("\n");
  const parsedTranslations = convertPropsToFlatJson(translationsContent);

  return parsedTranslations;
}

const englishPropertiesRaw = fs.readFileSync(
  "./messages/en-US/strings.properties",
  { encoding: "utf-8" }
);

const englishLang = returnMessagesFromPropertiesFile(englishPropertiesRaw);
const rawTranslations = require("./rawTranslations.json");
const supportedLocales = [
  {
    name: "English",
    codeName: "en",
    locale: "en-US",
    defaultLocale: true
  },
  {
    name: "Vietnamese",
    codeName: "vi",
    locale: "vi"
  },
  {
    name: "Japanese",
    codeName: "ja",
    locale: "ja"
  },

  {
    name: "Korean",
    codeName: "ko",
    locale: "ko"
  },
  {
    name: "Turkish",
    codeName: "tr",
    locale: "tr"
  },
  {
    name: "Thailand",
    codeName: "th",
    locale: "th"
  },
  {
    locale: "ru",
    codeName: "ru",
    name: "Russian"
  }
];
function generateTranslationProperties() {
  console.log(rawTranslations);
  console.log(englishLang);
}
generateTranslationProperties();
