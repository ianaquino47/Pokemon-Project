const { findEnglishDescription } = require('./utils');

describe('findEnglishDescription', () => {
  test('Should find the object with english translation', () => {
    const entries = [
      {
        flavor_text:
          'Il a la capacité de modifier sa structure cellulaire pour\nprendre l’apparence de ce qu’il voit.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          "Capable of copying\nan enemy's genetic\ncode to instantly\ftransform itself\ninto a duplicate\nof the enemy.",
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
      {
        flavor_text:
          'Es kann seine Zellstruktur so verändern, dass es\nsich in alles verwandeln kann, was es sieht.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
    ];

    expect(findEnglishDescription(entries)).toEqual(entries[1].flavor_text);
  });
  test('Should return empty string if there are no english translations', () => {
    const entries = [
      {
        flavor_text:
          'Il a la capacité de modifier sa structure cellulaire pour\nprendre l’apparence de ce qu’il voit.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Es kann seine Zellstruktur so verändern, dass es\nsich in alles verwandeln kann, was es sieht.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
    ];

    expect(findEnglishDescription(entries)).toEqual('');
  });
});
