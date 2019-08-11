import React from 'react';
import { render } from '@testing-library/react';
import { BeerList } from './BeerList';
import { TBeer } from 'punkapi';

jest.mock('core/Beer', () => ({
  Beer: 'mock-beer'
}));

const beers: TBeer[] = [
  {
    id: 1,
    name: 'alpha beer',
    tagline: 'alpha beer tagline',
    firstBrewed: new Date(2019, 0, 1),
    description: 'alpha beer description',
    imageUrl: 'alpha/beer/img.png',
    brewersTips: 'alpha beer brewer tips'
  },
  {
    id: 2,
    name: 'bravo beer',
    tagline: 'bravo beer tagline',
    firstBrewed: new Date(2019, 0, 2),
    description: 'bravo beer description',
    imageUrl: 'bravo/beer/img.png',
    brewersTips: 'bravo beer brewer tips'
  }
];

const renderWithProps = (props: Partial<React.ComponentProps<typeof BeerList>> = {}) =>
  render(<BeerList beers={beers} isFavorite={id => id === 2} {...props} />);

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
