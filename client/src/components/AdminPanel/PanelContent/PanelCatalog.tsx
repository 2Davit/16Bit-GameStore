import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/PanelCatalog.module.css";

interface Props {
  image: string;
  name: string;
  released: number;
  description: string;
  price: number;
  id: number | undefined;
  stock: boolean;
  genre: any;
}

const PanelCatalog: FC<Props> = ({
  name,
  price,
  image,
  id,
  stock,
  description,
  released,
  genre,
}) => {
  return (
    <div className={style.container}>
      <div className={style.product}>
        <img className={style.img} src={image} alt={name} />
        <Link to={`/game/${id}`} className="card__link">
          Click to see the product
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">
          {name.length > 33 ? name.substring(0, 30) + "..." : name}
        </h3>
        <p>$ {price}</p>
        <p>Cantidad: {stock}</p>
        <p>{description}</p>
        <p>Release Year: {released}</p>
        <p>Genres: {genre}</p>
      </div>
    </div>
  );
};

export default PanelCatalog;
