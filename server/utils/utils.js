const findEnglishDescription = (entries) => {
  english_entry = entries?.find((entry) => entry.language.name === 'en')?.flavor_text || '';
  return english_entry;
};

module.exports = { findEnglishDescription };
