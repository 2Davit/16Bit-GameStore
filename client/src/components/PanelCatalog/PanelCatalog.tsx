import React, { FC, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/reducer/";
import { editProduct } from "../../redux/actions/admin_actions";
import { EditProduct } from "../../interfaces";
import {
  ContainerPanelCata,
  CardContent,
  ImageContent,
  Image,
  H3,
  Paragraph,
  Info,
  EditInfoBtns,
  EditInfoBtns2,
  ContainerDiv,
  BtnEdit,
  InputLabel,
  Form,
  Input,
  BtnOpt,
} from "./PanelCatalog.style";
import { deleteProduct } from "../../redux/actions/admin_actions";

interface Props {
  image: Array<string> | any;
  name: string;
  released: number;
  description: string;
  price: number;
  id: any;
  stock: number;
  genre?: string[];
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
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010,
  ];
  const history = useHistory();

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
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }
  function handleChangeDescription(e: React.FormEvent<HTMLTextAreaElement>) {
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
  function handleDeleteProduct(id: number): any {
    dispatch(deleteProduct(id));
    alert("Cambio realizado con éxito.");
    history.push("/admin"); 
  }

  return cond === false ? (
    <ContainerPanelCata>
      <ImageContent>
        <Link to={`/game/${id}`}>
          <Image src={image ? image[0] : ""} alt={name} />
        </Link>
      </ImageContent>
      <CardContent>
        <H3>{name.length > 33 ? name.substring(0, 30) + "..." : name}</H3>
        <Paragraph>Product Price: ${price}</Paragraph>
        <Paragraph>Quantity: {stock}</Paragraph>
        <Paragraph>{description}</Paragraph>
        <ContainerDiv>
          <Info>
            <Paragraph>Release Year: {released}</Paragraph>
            <Paragraph>
              Genres:{" "}
              {genre
                ? genre.map((g, i) => <li key={i}>{g}</li>)
                : "no hay generos"}
            </Paragraph>
            <Paragraph>Platform: {platform}</Paragraph>
          </Info>
          <EditInfoBtns>
            <BtnEdit
              backGProps="#911F27"
              backHover="#B3141C"
              onClick={() => handleDeleteProduct(id)}
            >
              DELETE
            </BtnEdit>
            <BtnEdit
              backGProps="#c3630f"
              backHover="#B55400"
              onClick={handleEdit}
            >
              EDIT INFO
            </BtnEdit>
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
        <Link to={`/game/${id}`}>
          <Image src={image} alt={name} />
        </Link>
      </ImageContent>
      <CardContent>
        <Form>
          <InputLabel>
            {/* <H3>Product Name</ H3> */}
            <Input
              className="card__title"
              name="name"
              onChange={handleChange}
              value={input.name}
            />
          </InputLabel>
          <InputLabel>
            <label>Product Price</label>
            <input
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "1px solid #c3630f",
                color: "#EEEEEE",
                marginLeft: "10px",
              }}
              name="price"
              type="number"
              value={input.price}
              onChange={handleChange}
            ></input>
          </InputLabel>
          <InputLabel>
            <label>Quantity</label>
            <input
            onChange={handleChange}
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "1px solid #c3630f",
                color: "#EEEEEE",
                marginLeft: "10px",
              }}
              type="number"
              name="stock"
              min="0"
            ></input>
          </InputLabel>
          <InputLabel>
            <textarea
              name="description"
              value={input.description}
              onChange={handleChangeDescription}
            ></textarea>
          </InputLabel>

          <InputLabel>
            <label>Release Year</label>
            <select
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "1px solid #c3630f",
                color: "#EEEEEE",
                marginLeft: "10px",
              }}
              name="release_year"
              onChange={(e) => handleChangeYear(e)}
            >
              {years?.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </InputLabel>
          <InputLabel>
            <label>Genres:</label>
            <select
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "1px solid #c3630f",
                color: "#EEEEEE",
                marginLeft: "10px",
              }}
              name="genre"
              onChange={(e: any) => handleAddGenre(e)}
            >
              {totalGenres.map((index: any) => (
                <option value={index} key={index}>
                  {index}
                </option>
              ))}
            </select>

            {input.genre.length > 0 ? (
              input.genre.map((index: any) => (
                <BtnOpt key={index}>
                  <button
                    type="button"
                    onClick={() => handleGenreDelete(index)}
                  >
                    x
                  </button>
                  <p>{index}</p>
                </BtnOpt>
              ))
            ) : (
              <div>No Genre</div>
            )}
          </InputLabel>

          <InputLabel>
            <label>Platforms:</label>
            <select
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "1px solid #c3630f",
                color: "#EEEEEE",
                marginLeft: "10px",
              }}
              name="platform"
              onChange={(e: any) => handleAddPlatform(e)}
            >
              {totalPlatforms.map((index: any) => (
                <option value={index} key={index}>
                  {index}
                </option>
              ))}
            </select>
            <div style={{ display: "flex" }}>
              {input.platform.length > 0 ? (
                input.platform.map((index: any) => (
                  <BtnOpt key={index}>
                    <button
                      type="button"
                      onClick={() => handlePlatformDelete(index)}
                    >
                      x
                    </button>
                    <p>{index}</p>
                  </BtnOpt>
                ))
              ) : (
                <div>No Platform</div>
              )}
            </div>
          </InputLabel>

          <ContainerDiv>
            <EditInfoBtns></EditInfoBtns>

            <EditInfoBtns2>
              <BtnEdit
                backGProps="#c3630f"
                backHover="#B55400"
                onClick={handleEdit}
              >
                BACK
              </BtnEdit>
              <BtnEdit
                backGProps="#45962F"
                backHover="#2C731D"
                onClick={(e: any) => handleSave(e)}
              >
                SAVE
              </BtnEdit>
            </EditInfoBtns2>
          </ContainerDiv>
        </Form>
      </CardContent>
    </ContainerPanelCata>
  );
};

export default PanelCatalog;
