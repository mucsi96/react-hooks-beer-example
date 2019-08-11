import React from 'react';
import { render } from '@testing-library/react';
import { Beer } from './Beer';

const renderWithProps = (props: Partial<React.ComponentProps<typeof Beer>> = {}) =>
  render(
    <Beer id={1} name="test beer" imageUrl="test/image/url.png" tagline="test tagline" {...props} />
  );

describe('Beer', () => {
  it('renders', () => {
    const { container } = renderWithProps();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          class="container container"
          href="/beer/1"
        >
          <img
            alt="test beer"
            class="image"
            src="test/image/url.png"
          />
          <div>
            <h2
              class="title"
            >
              test beer
            </h2>
            <p>
              test tagline
            </p>
          </div>
        </a>
      </div>
    `);
  });

  it('renders star icon if isFavorite', () => {
    const { getAllByTestId } = renderWithProps({ isFavorite: true });
    expect(getAllByTestId('favorite')).toMatchInlineSnapshot(`
      Array [
        <svg
          class="favoriteMark"
          data-testid="favorite"
        >
          star.svg
        </svg>,
      ]
    `);
  });
});
