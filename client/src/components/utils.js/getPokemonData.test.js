import { pokemonApiCall, getPokemonData } from './getPokemonData';
import { moltresData } from '../mocks/data';

describe('getPokemon', () => {
  describe('pokemonApiCall', () => {
    it('Should return pokemon data if response is ok', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(moltresData),
        })
      );
      const received = await pokemonApiCall('moltres');
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(received).toEqual(moltresData);
    });
    it('Should throw error if response is false', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          status: 404,
        })
      );

      await expect(pokemonApiCall('moltres')).rejects.toThrow(Error);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('getPokemonData', () => {
    it('Should return the correct format', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(moltresData),
        })
      );
      const received = await getPokemonData('moltres');
      expect(received).toEqual(moltresData);
    });
  });
});
