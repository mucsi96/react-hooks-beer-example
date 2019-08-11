import React from 'react';
import { render } from '@testing-library/react';
import { IconLink } from './IconLink';

const renderWithProps = (props: Partial<React.ComponentProps<typeof IconLink>> = {}) =>
  render(
    <IconLink href="/home" className="additional classes" id="test id" {...props}>
      🐱
    </IconLink>
  );

describe('IconLink', () => {
  it('renders', () => {
    const { container } = renderWithProps();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          class="container container additional classes"
          href="/home"
          id="test id"
        >
          🐱
        </a>
      </div>
    `);
  });
});
