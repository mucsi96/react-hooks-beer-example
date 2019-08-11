import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Link } from './Link';

const renderWithProps = (props: Partial<React.ComponentProps<typeof Link>> = {}) =>
  render(
    <Link href="/home" className="additional classes" id="test id" {...props}>
      🐵
    </Link>
  );

describe('Link', () => {
  it('renders', () => {
    const { container } = renderWithProps();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          class="container additional classes"
          href="/home"
          id="test id"
        >
          🐵
        </a>
      </div>
    `);
  });

  describe('handles internal urls', () => {
    it('pushes state on click', async () => {
      window.history.pushState = jest.fn();
      const { findByText } = renderWithProps();
      fireEvent.click(await findByText('🐵'));
      expect(window.history.pushState).toBeCalledWith(null, '', '/home');
    });

    it('dispatches a pop state on click', async () => {
      const popStateEvents: string[] = [];
      window.addEventListener('popstate', e => popStateEvents.push('pop'));
      const { findByText } = renderWithProps();
      fireEvent.click(await findByText('🐵'));
      expect(popStateEvents).toEqual(['pop']);
    });
  });

  describe('handles external urls', () => {
    it('not pushes state on click', async () => {
      window.history.pushState = jest.fn();
      const { findByText } = renderWithProps({ href: 'https://test.url' });
      fireEvent.click(await findByText('🐵'));
      expect(window.history.pushState).not.toBeCalled();
    });

    it('not dispatches a pop state on click', async () => {
      const popStateEvents: string[] = [];
      window.addEventListener('popstate', e => popStateEvents.push('pop'));
      const { findByText } = renderWithProps({ href: 'https://test.url' });
      fireEvent.click(await findByText('🐵'));
      expect(popStateEvents).toEqual([]);
    });
  });
});
