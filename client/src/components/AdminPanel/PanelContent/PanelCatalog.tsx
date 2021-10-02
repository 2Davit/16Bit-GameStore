import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  platform: any;
}

const PanelCatalog: FC<Props> = ({
  name,
  price,
  image,
  id,
  stock,
  description,
  released,
  platform,
  genre,
}) => {
  const [cond, setCond] = useState(false);
  const [input, setInput] = useState({
    name,
    price,
    image,
    id,
    stock,
    description,
    released,
    platform,
    genre,
  });

  function handleEdit() {
    setCond(!cond);
  }
  function handleSave() {
    alert("Cambio realizado con éxito.");
  }
  function handleChangeName(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value)
    console.log(e.currentTarget.name)
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return cond === false ? (
    <div className={style.container}>
      <div className={style.product}>
        <img className={style.img} src={image} alt={name} />
        <Link to={`/game/${id}`} className="card__link">
          Click to see the product
        </Link>
      </div>
      <div className={style.card__content}>
        <h3 className="card__title">
          {name.length > 33 ? name.substring(0, 30) + "..." : name}
        </h3>
        <p>$ {price}</p>
        <p>Quantity: {stock}</p>
        <p>{description}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "80%" }}>
            <p>Release Year: {released}</p>
            <p>Genres: {genre}</p>
            <p>Platform: {platform}</p>
          </div>
          <div>
            <button onClick={handleEdit}>EDIT INFO</button>
            <button
              onClick={handleEdit}
              style={{ pointerEvents: "none", color: "gray" }}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    /* A PARTIR DE ACÁ SE COMIENZA A EDITAR */
    <div className={style.container}>
      <div className={style.product}>
        <img className={style.img} src={image} alt={name} />
        <Link to={`/game/${id}`} className="card__link">
          Click to see the product
        </Link>
      </div>
      <div className={style.card__content}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "0.8vw",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label>Product Name</label>
            <input className="card__title" name="name" onChange={(e: any) => handleChangeName(e)} value={input.name}></input>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label>Product Price</label>
            <input type="number" step="0.01" value={input.price}></input>
          </div>
          <div>
            <label>Quantity</label>
            <input type="number" min="0"></input>
          </div>
          <div>
            <label>Description:</label>
            <textarea value={input.description}></textarea>
          </div>
          <div>
            <label>Release Year</label>
            <input type="number" min="1950" value={input.released}></input>
          </div>
          <div>
            <label>Genres:</label>
            <select>
              <option>Sports</option>
            </select>
          </div>
          <div>
            <label>Platforms:</label>
            <select>
              <option>gba</option>
            </select>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div>
            <button onClick={handleEdit}>EDIT INFO</button>
            <button onClick={handleSave}>SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelCatalog;
