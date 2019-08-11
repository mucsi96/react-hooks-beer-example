import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

const renderWithProps = (props: Partial<React.ComponentProps<typeof Footer>> = {}) =>
  render(<Footer {...props} />);

describe('Footer', () => {
  it('renders', () => {
    const { container } = renderWithProps();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="container"
        >
          Icons made by
           
          <a
            class="container"
            href="https://www.freepik.com/?__hstc=57440181.66c09f51fc9b0b37db491c2f5585e3dc.1563827412634.1563827412634.1563827412634.1&__hssc=57440181.7.1563827412635&__hsfp=3232041946"
            title="Freepik"
          >
            Freepik
             
          </a>
          from
           
          <a
            class="container"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
             
          </a>
          is licensed by
           
          <a
            class="container"
            href="http://creativecommons.org/licenses/by/3.0/"
            rel="noopener noreferrer"
            target="_blank"
            title="Creative Commons BY 3.0"
          >
            CC 3.0 BY
          </a>
        </footer>
      </div>
    `);
  });
});
