import React from "react";

type TBeerProps = {
  name: string;
  imageUrl: string;
  description: string;
  firstBrewed: Date;
};

export const Beer: React.FC<TBeerProps> = ({
  name,
  imageUrl,
  description,
  firstBrewed
}) => (
  <tr>
    <td>{name}</td>
    <td>{new Intl.DateTimeFormat().format(firstBrewed)}</td>
    <td>
      <img src={imageUrl} alt={name} />
    </td>
    <td>{description}</td>
  </tr>
);
