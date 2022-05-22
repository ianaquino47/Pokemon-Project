import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonNotFound from './index';

describe('PokemonNotFound', () => {
  it('Should render error message if pokemont not found', () => {
    render(<PokemonNotFound />);
    expect(screen.getByText('Pokemon not found!')).toBeDefined();
    expect(screen.getByText('Try again.')).toBeDefined();
  });
});
