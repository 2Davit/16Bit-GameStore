import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchCard.module.css";

interface Props {
  game: any;
  key: any;
  id: any;
}

const SearchCard: FC<Props> = ({ game, key, id }: any) => {
  return (
    <Link to={`/game/${id}`}>
      <div key={key} className={styles.container}>{game.name_product}</div>
    </Link>
  );
};

export default SearchCard;
