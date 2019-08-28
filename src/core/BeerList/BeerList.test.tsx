import React from 'react';
import { render } from '@testing-library/react';
import { BeerList } from './BeerList';
import { mockBeers } from 'test/mockBeers';

jest.mock('core/Beer', () => ({
  Beer: 'mock-beer'
}));

const renderWithProps = (props: Partial<React.ComponentProps<typeof BeerList>> = {}) =>
  render(<BeerList beers={mockBeers} isFavorite={id => id === 2} {...props} />);

describe('BeerList', () => {
  it('renders', () => {
    const { container } = renderWithProps();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          class="container"
        >
          <mock-beer
            id="1"
            imageurl="alpha/beer/img.png"
            isfavorite="false"
            name="alpha beer"
            tagline="alpha beer tagline"
          />
          <mock-beer
            id="2"
            imageurl="bravo/beer/img.png"
            isfavorite="true"
            name="bravo beer"
            tagline="bravo beer tagline"
          />
        </section>
      </div>
    `);
  });

  it('renders loader in loading state', () => {
    const { container } = renderWithProps({ loading: true });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          'Loading beers...'
        </div>
      </div>
    `);
  });

  it('render error in error state', () => {
    const { container } = renderWithProps({ error: 'test error' });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          test error
        </div>
      </div>
    `);
  });
});
