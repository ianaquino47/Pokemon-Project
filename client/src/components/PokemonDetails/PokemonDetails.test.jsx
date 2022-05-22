import React from 'react';
import { render, screen } from '@testing-library/react';
import { moltresData } from '../mocks/data';
import PokemonDetails from './index';

describe('PokemonDetails', () => {
  describe('If data exists', () => {
    it('Should display pokemon details', () => {
      render(<PokemonDetails data={moltresData} />);
      expect(screen.getByText('moltres')).toBeDefined();
      expect(screen.getByAltText('Legendary Badge')).toBeDefined();
      expect(
        screen.getByText(
          'Legendary bird POKéMON. It is said to migrate from the south along with the spring.'
        )
      ).toBeDefined();
      expect(screen.getByAltText('Logo')).toBeDefined();
    });
  });
  describe('If data does not exist', () => {
    it('Should display pokemon details', () => {
      render(<PokemonDetails />);
      expect(screen.queryByText('moltres')).toBeNull();
      expect(screen.queryByAltText('Legendary Badge')).toBeNull();
      expect(
        screen.queryByText(
          'Legendary bird POKéMON. It is said to migrate from the south along with the spring.'
        )
      ).toBeNull();
      expect(screen.queryByAltText('Logo')).toBeNull();
    });
  });
});
