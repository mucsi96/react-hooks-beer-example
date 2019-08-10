import React, { DOMElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Beer } from './Beer';

let container: HTMLDivElement | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
  container = null;
});

describe('Beer', () => {
  act(() => {
    render(
      <Beer id={1} name="test beer" imageUrl="test/image/url.png" tagline="test tagline" />,
      container
    );
  });
  expect(container && container.textContent).toBe('Hey, stranger');
});
