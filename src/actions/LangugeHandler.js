export const handleLanguageOnEnter = (changeToPolish, changeToEnglish) => {
  if (
    sessionStorage.getItem("isPolish") === "true" ||
    sessionStorage.getItem("isPolish") === null
  ) {
    changeToPolish();
    document.documentElement.lang = "pl";
  } else {
    changeToEnglish();
    document.documentElement.lang = "en";
  }
};
