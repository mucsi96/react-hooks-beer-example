type APIBeer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  brewers_tips: string;
};

export type TBeer = {
  id: number;
  name: string;
  tagline: string;
  firstBrewed: Date;
  description: string;
  imageUrl: string;
  brewersTips: string;
};

const mapsDate = (apiDate: string): Date => {
  const [month, year] = apiDate.split('/');

  return new Date(parseInt(year), parseInt(month) - 1);
};

export const fetchBeers = async (): Promise<TBeer[]> => {
  const response = await fetch('https://api.punkapi.com/v2/beers?per_page=80');
  const beers: APIBeer[] = await response.json();

  return beers.map<TBeer>(
    ({ id, name, tagline, description, first_brewed, image_url, brewers_tips }) => ({
      id,
      name,
      tagline,
      description,
      firstBrewed: mapsDate(first_brewed),
      imageUrl: image_url,
      brewersTips: brewers_tips
    })
  );
};
