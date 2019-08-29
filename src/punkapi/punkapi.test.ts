import { fetchBeers } from './punkapi';

window.fetch = async () =>
  ({
    json: async () => [
      {
        id: 0,
        name: 'alpha beer',
        tagline: 'alpha beer tagline',
        first_brewed: '09/2019',
        description: 'alpha beer description',
        image_url: 'alpha/beer/img.png',
        brewers_tips: 'alpha beer brewer tips'
      },
      {
        id: 0,
        name: 'bravo beer',
        tagline: 'bravo beer tagline',
        first_brewed: '10/2019',
        description: 'bravo beer description',
        image_url: 'bravo/beer/img.png',
        brewers_tips: 'bravo beer brewer tips'
      }
    ]
  } as Response);

describe('punkapi', () => {
  it('fetches beers', async () => {
    const beers = await fetchBeers();
    expect(new Date().getTimezoneOffset()).toBe(0);
    expect(beers).toMatchInlineSnapshot(`
      Array [
        Object {
          "brewersTips": "alpha beer brewer tips",
          "description": "alpha beer description",
          "firstBrewed": 2019-09-01T00:00:00.000Z,
          "id": 0,
          "imageUrl": "alpha/beer/img.png",
          "name": "alpha beer",
          "tagline": "alpha beer tagline",
        },
        Object {
          "brewersTips": "bravo beer brewer tips",
          "description": "bravo beer description",
          "firstBrewed": 2019-10-01T00:00:00.000Z,
          "id": 0,
          "imageUrl": "bravo/beer/img.png",
          "name": "bravo beer",
          "tagline": "bravo beer tagline",
        },
      ]
    `);
  });
});
