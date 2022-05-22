import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentSearches from './index';

describe('RecentSearches', () => {
  describe('If there are no recent searches', () => {
    it('Should display no recent searches if recent is not passed', () => {
      render(<RecentSearches />);
      expect(screen.getByText('Recent Searches')).toBeDefined();
      expect(screen.queryByRole('button')).toBeNull();
    });
    it('Should display no recent searches if recent is empty', () => {
      render(<RecentSearches recent={[]} />);
      expect(screen.getByText('Recent Searches')).toBeDefined();
      expect(screen.queryByRole('button')).toBeNull();
    });
  });
  describe('If there are recent searches', () => {
    it('Should display the recent searches', () => {
      render(<RecentSearches recent={['mew']} />);
      expect(screen.getByText('Recent Searches')).toBeDefined();
      expect(screen.getByText('mew')).toBeDefined();
    });
  });
});
