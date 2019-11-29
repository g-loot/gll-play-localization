const fs = require("fs");
const { convertPropsToFlatJson } = require("propson");

const englishLang = getlangFileAsJson("en-US");
const rawTranslations = require("./rawTranslations.json");
const supportedLocales = {
  Vietnam: { locale: "vi", messages: {} },
  Thailand: { locale: "th", messages: {} },
  Japan: { locale: "ja", messages: {} },
  Korean: { locale: "ko", messages: {} },
  Turkish: { locale: "tr", messages: {} },
  Russia: { locale: "ru", messages: {} }
};
const notFoundList = [];
const foundList = [];
function main() {
  // console.log(rawTranslations);
  // console.log(englishLang);
  const modifiedRawTranslations = rawTranslations.map(block => {
    const id = Object.keys(englishLang).find(id => {
      const taggedMessage = englishLang[id];
      const nonTaggedMessage = block["English text"];
      // if (
      //   taggedMessage == "OK" &&
      //   taggedMessage.toLowerCase() === nonTaggedMessage.toLowerCase()
      // ) {
      //   console.warn(id);
      //   console.log(nonTaggedMessage);
      // }
      return taggedMessage.toLowerCase() === nonTaggedMessage.toLowerCase();
    });
    const newBlock = { ...block, id: id ? id : block.id };
    if (id) {
      foundList.push(newBlock);
    } else {
      notFoundList.push(newBlock);
    }
    return newBlock;
  });

  foundList.forEach(foundBlock => {
    Object.keys(supportedLocales).forEach(locale => {
      supportedLocales[locale].messages[foundBlock.id] = foundBlock[locale];
    });
  });

  Object.keys(supportedLocales).forEach(locale => {
    const localeCode = supportedLocales[locale].locale;
    const extractedTranslations = supportedLocales[locale].messages;
    const currentLangFile = getlangFileAsJson(localeCode);
    const newLangFile = {};
    Object.keys(currentLangFile).forEach(key => {
      const currentTranslation = currentLangFile[key];
      newLangFile[key] = currentTranslation
        ? currentTranslation
        : extractedTranslations[key]
        ? extractedTranslations[key]
        : "";
    });
    const propertiesContent = Object.keys(newLangFile)
      .map(id => `${id}=${newLangFile[id] ? newLangFile[id] : ""}`)
      .join("\n");
    fs.writeFileSync(
      `messages/${localeCode}/strings.properties`,
      propertiesContent
    );
  });
  console.log("found: ", foundList.length);
  console.log("notFound: ", notFoundList.length);
  // console.log("notFoundList: ", notFoundList);
}

function getlangFileAsJson(locale) {
  function returnMessagesFromPropertiesFile(rawPropertiesString) {
    const translationsContent = rawPropertiesString.split("\n");
    const parsedTranslations = convertPropsToFlatJson(translationsContent);

    return parsedTranslations;
  }
  const englishPropertiesRaw = fs.readFileSync(
    `./messages/${locale}/strings.properties`,
    { encoding: "utf-8" }
  );
  return returnMessagesFromPropertiesFile(englishPropertiesRaw);
}

main();
