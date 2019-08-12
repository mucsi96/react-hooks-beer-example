import { TBeer } from 'punkapi';

export const mockBeers: TBeer[] = [
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
