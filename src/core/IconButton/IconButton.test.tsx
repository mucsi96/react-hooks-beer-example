import React from 'react';
import { render } from '@testing-library/react';
import { IconButton } from './IconButton';

const renderWithProps = (props: Partial<React.ComponentProps<typeof IconButton>> = {}) =>
  render(<IconButton {...props}>🐥</IconButton>);

describe('IconButton', () => {
  it('renders', () => {
    const { container } = renderWithProps({ className: 'additional classes', id: 'test id' });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="container additional classes"
          id="test id"
          type="button"
        >
          🐥
        </button>
      </div>
    `);
  });
});
