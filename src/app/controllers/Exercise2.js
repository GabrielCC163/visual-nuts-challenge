const getAllLangages = (countries) => {
  const allLanguages = [];

  countries.forEach(({ languages }) => {
    languages.forEach((l) => {
      allLanguages.push(l);
    });
  });

  return allLanguages;
};

const getNumberOfCountries = (countries) => {
  return countries.length;
};

const getDeCountryWithMostLanguages = (countries) => {
  return countries
    .filter(({ languages }) => languages.includes('de'))
    .sort((a, b) => b.languages.length - a.languages.length)[0];
};

const getNumberOfOficialLanguages = (countries) => {
  const languages = getAllLangages(countries);

  return [...new Set(languages)].length;
};

const getCountryWithMostLanguages = (countries) => {
  return countries.sort(
    (a, b) => b.languages.length - a.languages.length,
  )[0];
};

const getMostCommonLanguages = (countries) => {
  const languages = getAllLangages(countries);

  const mostCommonLanguages = [];

  let counts = {};

  for (let lang of languages) {
    counts[lang] = counts[lang] ? counts[lang] + 1 : 1;
  }

  let max = Math.max(...Object.values(counts));

  let result = [];

  Object.values(counts).forEach((item, index) =>
    item === max ? result.push(index) : null,
  );

  result.forEach((r) => {
    mostCommonLanguages.push(Object.keys(counts)[r]);
  });

  return mostCommonLanguages;
};

module.exports = {
  async index(req, res) {
    try {
      const countries = req.body;

      const ret = [];

      ret.push({
        'number of countries': getNumberOfCountries(countries),
      });

      ret.push({
        'country with the most official languages, where German (de) is spoken':
          getDeCountryWithMostLanguages(countries),
      });

      ret.push({
        'official languages': getNumberOfOficialLanguages(countries),
      });

      ret.push({
        'country with the highest number of official languages':
          getCountryWithMostLanguages(countries),
      });

      ret.push({
        'most common languages': getMostCommonLanguages(countries),
      });

      return res.status(200).json(ret);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },
};
