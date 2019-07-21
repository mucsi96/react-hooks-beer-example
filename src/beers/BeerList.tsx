import React from "react";
import { useBeers } from "./BeersProvider";
import { TBeer } from "../punkapi";
import { Beer } from "./Beer";

export const BeerList: React.FC = () => {
  const { beers, loading, error } = useBeers();

  if (loading) {
    return <div>'Loading beers...'</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>First brewed</th>
          <th>Image</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {beers.map(
          ({ id, name, description, imageUrl, firstBrewed }: TBeer) => (
            <Beer
              key={id}
              name={name}
              description={description}
              imageUrl={imageUrl}
              firstBrewed={firstBrewed}
            />
          )
        )}
      </tbody>
    </table>
  );
};
