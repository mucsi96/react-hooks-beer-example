type APIBeer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
};

export type TBeer = {
  id: number;
  name: string;
  firstBrewed: Date;
  description: string;
  imageUrl: string;
};

const mapsDate = (apiDate: string): Date => {
  const [month, year] = apiDate.split('/');

  return new Date(parseInt(year), parseInt(month) - 1);
};

export const fetchBeers = async (): Promise<TBeer[]> => {
  const response = await fetch('https://api.punkapi.com/v2/beers?per_page=80');
  const beers: APIBeer[] = await response.json();

  return beers.map<TBeer>(({ id, name, description, first_brewed, image_url }) => ({
    id,
    name,
    description,
    firstBrewed: mapsDate(first_brewed),
    imageUrl: image_url
  }));
};