import React from 'react';
import { render } from '@testing-library/react';
import { AddToFavoritesButton } from './AddToFavoritesButton';

const renderWithProps = (props: Partial<React.ComponentProps<typeof AddToFavoritesButton>> = {}) =>
  render(<AddToFavoritesButton {...props} />);

describe('AddToFavoritesButton', () => {
  it('renders', () => {
    const { container } = renderWithProps({ id: 'test id', className: 'additional classes' });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="container additional classes container"
          id="test id"
          type="button"
        >
          <svg>
            star.svg
          </svg>
        </button>
      </div>
    `);
  });

  it('add active class if active', async () => {
    const { findByRole } = renderWithProps({ active: true });
    expect(await findByRole('button')).toHaveClass('active');
  });
});
