import React from 'react';
import { render } from '@testing-library/react';
import { AllBeersList } from './AllBeersList';

const renderWithProps = (props: Partial<React.ComponentProps<typeof AllBeersList>> = {}) =>
  render(<AllBeersList {...props} />);

describe('AllBeersList', () => {
  it('renders', () => {
    const { container } = renderWithProps();
    expect(container).toMatchInlineSnapshot();
  });
});
