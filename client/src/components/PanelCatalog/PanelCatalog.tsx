import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/reducer/";
import { editProduct } from "../../redux/actions/admin_actions";
import { EditProduct } from "../../interfaces";
import style from "./PanelCatalog.module.css";
import { ContainerPanelCata, CardContent, ImageContent, Image, H3, Paragraph, Info, EditInfoBtns, ContainerDiv, BtnEdit, InputLabel, Form, Input } from './PanelCatalog.style'

interface Props {
  image: Array<string> | any;
  name: string;
  released: number;
  description: string;
  price: number;
  id: number | undefined;
  stock: boolean;
  genre: any;
  platform: any;
  thumbnail: string;
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
  thumbnail,
}) => {
  const [cond, setCond] = useState(false);
  const years: number[] = [
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961,
    1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
    1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
    1998, 1999, 2000,
  ];
  const [input, setInput] = useState<EditProduct>({
    id,
    name,
    price,
    description,
    image,
    stock,
    released,
    genre,
    platform,
    thumbnail,
  });
  const dispatch = useDispatch();
  const totalGenres = useSelector(
    (state: Store) => state.productsReducer.genres
  );
  const totalPlatforms = useSelector(
    (state: Store) => state.productsReducer.platforms
  );

  function handleEdit() {
    setCond(!cond);
  }
  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    dispatch(editProduct(input));
    alert("Cambio realizado con éxito.");
  }
  function handleChangeName(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }
  function handleChangeDescription(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }
  function handleChangeYear(e: React.FormEvent<HTMLSelectElement>) {
    console.log(e.currentTarget);
    setInput({
      ...input,
      released: parseInt(e.currentTarget.value),
    });
  }
  function handleChangePrice(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }
  function handleAddGenre(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      genre: [...input.genre, e.currentTarget.value],
    });
  }
  function handleAddPlatform(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      platform: [...input.platform, e.currentTarget.value],
    });
  }

  function handleGenreDelete(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      genre:
        input.genre.length > 1
          ? input.genre.filter((genre: any) => genre !== e)
          : [],
    });
  }
  function handlePlatformDelete(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      platform:
        input.platform.length > 1
          ? input.platform.filter((platform: any) => platform !== e)
          : [],
    });
  }

  return cond === false ? (
    <ContainerPanelCata>
        <ImageContent>
          <Link to={`/game/${id}`}>
            <Image src={image} alt={name} />
          </Link>
        </ImageContent>
        <CardContent >
          <H3 >
            {name.length > 33 ? name.substring(0, 30) + "..." : name}
          </H3>
          <Paragraph>$ {price}</Paragraph>
          <Paragraph>Quantity: {stock}</Paragraph>
          <Paragraph>{description}</Paragraph>
          <ContainerDiv>
            <Info>
                <Paragraph>Release Year: {released}</Paragraph>
                <Paragraph>Genres: {genre}</Paragraph>
                <Paragraph>Platform: {platform}</Paragraph>
            </Info>
            <EditInfoBtns>
                <BtnEdit onClick={handleEdit}>EDIT INFO</BtnEdit>
                {/* <button
                  onClick={handleEdit}
                  style={{ pointerEvents: "none", color: "gray" }}
                >
                  SAVE
                </button> */}
            </EditInfoBtns>
            </ContainerDiv>
        </CardContent>
    </ContainerPanelCata>
  ) : (
    /* A PARTIR DE ACÁ SE COMIENZA A EDITAR */
    <ContainerPanelCata>
      <ImageContent>
        <Link to={`/game/${id}`} >
          <Image src={image} alt={name} />
        </Link>
      </ImageContent>
      <CardContent>
        <Form>
          <InputLabel style={{ display: "flex", flexDirection: "row" }}>
            {/* <H3>Product Name</ H3> */}
            <Input
              className="card__title"
              name="name"
              onChange={handleChangeName}
              value={input.name}
            />
          </InputLabel>
          <InputLabel style={{ display: "flex", flexDirection: "row" }}>
            <label>Product Price</label>
            <input
              name="price"
              type="number"
              value={input.price}
              onChange={handleChangePrice}
            ></input>
          </InputLabel>
          <InputLabel>
            <label>Quantity</label>
            <input type="number" min="0"></input>
          </InputLabel>
          <InputLabel>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={input.description}
              onChange={handleChangeDescription}
            ></input>
          </InputLabel>
          
          <InputLabel>
            <label>Release Year</label>
            <select name="release_year" onChange={(e) => handleChangeYear(e)}>
              {years?.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </InputLabel>
          <InputLabel>
            <label>Genres:</label>
            <select name="genre" onChange={(e: any) => handleAddGenre(e)}>
              {totalGenres.map((index: any) => (
                <option value={index} key={index}>
                  {index}
                </option>
              ))}
            </select>
            </InputLabel>
            <InputLabel>
              {input.genre.length > 0 ? (
                input.genre.map((index: any) => (
                  <div key={index} style={{ margin: "0 0.5vw 0 0.5vw" }}>
                    <button
                      type="button"
                      onClick={() => handleGenreDelete(index)}
                      >
                      x
                    </button>
                    <p>{index}</p>
                  </div>
                ))
              ) : (
                <div>No Genre</div>
              )}
            </InputLabel>
          
                              
          <InputLabel>
            <label>Platforms:</label>
            <select name="platform" onChange={(e: any) => handleAddPlatform(e)}>
              {totalPlatforms.map((index: any) => (
                <option value={index} key={index}>
                  {index}
                </option>
              ))}
            </select>
            </InputLabel>
            <ContainerDiv> 
            <Info>
            <InputLabel>
            {input.platform.length > 0 ? (
              input.platform.map((index: any) => (
                <div key={index} style={{ margin: "0 0.5vw 0 0.5vw" }}>
                  <button
                    type="button"
                    onClick={() => handlePlatformDelete(index)}
                    >
                    x
                  </button>
                  <p>{index}</p>
                </div>
              ))
            ) : (
              <div>No Platform</div>
            )}
                    </InputLabel>
          </Info>
          <EditInfoBtns>
            <BtnEdit onClick={handleEdit}>EDIT INFO</BtnEdit>
            <BtnEdit onClick={(e: any) => handleSave(e)}>SAVE</BtnEdit>
          </EditInfoBtns>
          </ContainerDiv>
        </Form>
      </CardContent>
    </ContainerPanelCata>
  );
};

export default PanelCatalog;
