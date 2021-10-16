import { useState, FC, useEffect } from "react";
import { ProductCreate, ProductValidate } from "../../interfaces";
import { useDispatch } from "react-redux";
import { createVideogame } from "../../redux/actions/products_action";
import { deleteNavbar } from "../../redux/actions/admin_actions";
import axios from 'axios'
import { Link } from "react-router-dom";
import {
  FormContainer,
  Fields,
  FormLabel,
  FormInput,
  FormErrors,
  FormSelect,
  FormTextarea,
  FormInputImg,
  FormOpt,
  BtnAdd,
  BtnSubmit,
  Title,
  BtnBack,
  ContainerFormP,
} from "./FormProduct.style";

interface Info {
  url: string;
}

const FormProduct: FC = () => {
  const [images, setImages] = useState<Array<string>>([]);
  const [info, setInfo] = useState<Info>({ url: "" });
  const dispatch = useDispatch();
  const [error, setError] = useState<ProductValidate>({
    name_product: "",
    price_product: "",
    description_product: "",
    image_product: "",
    thumbnail_product: "",
    in_stock: "",
    on_sale: "",
    release_year: "",
    genres: "",
    platforms: "",
  });
  const [input, setInput] = useState<ProductCreate>({
    name_product: "",
    price_product: 0,
    description_product: "",
    image_product: images,
    thumbnail_product: "",
    in_stock: 0,
    on_sale: false,
    release_year: 0,
    genres: [],
    platforms: [],
  });
  // console.log(input)

  //quitamos Nav
  useEffect(() => {
    dispatch(deleteNavbar());
  }, [dispatch]);

  // const handleImage = () => {
  //   setImages([...images, info.url]);
  //   setInput((prevState: any) => ({
  //     ...prevState,
  //     image_product: [...images, info.url],
  //   }));
  //   setInfo({ url: "" });

  //   alert("has añadido una imagen");
  // };

  function handleInfoChange(e: React.FormEvent<HTMLInputElement>) {
    setInfo({
      ...info,
      url: e.currentTarget.value,
    });
  }

  function handleImageDelete(img: string) {
    setImages(images.filter((image) => image !== img));
    setInput({
      ...input,
      image_product: input.image_product.filter((image) => image !== img),
    });
  }

  function handleGenreDelete(g: string) {
    setInput({
      ...input,
      genres: input.genres.filter((genre) => genre !== g),
    });
  }

  function handlePlatformDelete(p: string) {
    setInput({
      ...input,
      platforms: input.platforms.filter((platform) => platform !== p),
    });
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    setError(
      validate({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    );
  }
  function handlePrice(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      price_product: parseInt(e.currentTarget.value),
    });
    setError(
      validate({
        ...input,
        price_product: parseInt(e.currentTarget.value),
      })
    );
  }
  function handleTextArea(e: React.FormEvent<HTMLTextAreaElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    setError(
      validate({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    );
  }
  function handleSelectYear(e: React.FormEvent<HTMLSelectElement>) {
    setInput({
      ...input,
      release_year: parseInt(e.currentTarget.value),
    });
    setError(
      validate({
        ...input,
        release_year: parseInt(e.currentTarget.value),
      })
    );
  }

  function handleSelectPlatform(e: React.FormEvent<HTMLSelectElement>) {
    setInput({
      ...input,
      platforms: [...input.platforms, e.currentTarget.value],
    });
    setError(
      validate({
        ...input,
        platforms: [...input.platforms, e.currentTarget.value],
      })
    );
  }
  function handleSelectGenre(e: React.FormEvent<HTMLSelectElement>) {
    setInput({
      ...input,
      genres: [...input.genres, e.currentTarget.value],
    });
    setError(
      validate({
        ...input,
        genres: [...input.genres, e.currentTarget.value],
      })
    );
  }
  function handleSale(e: React.FormEvent<HTMLSelectElement>) {
    if (e.currentTarget.value === "true") {
      setInput({
        ...input,
        on_sale: true,
      });
    } else {
      setInput({
        ...input,
        on_sale: false,
      });
    }
  }
  function handleStock(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      in_stock: parseInt(e.currentTarget.value),
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(input)
    if (
      input.name_product === "" ||
      input.price_product === 0 ||
      input.description_product === "" ||
      images.length === 0 ||
      input.thumbnail_product === "" ||
      input.release_year === 0 ||
      input.genres.length === 0 ||
      input.platforms.length === 0
    ) {
      e.preventDefault();
      alert("Please complete all required fields");
    } else {
      dispatch(createVideogame(input));
      alert("Videogame successfully created");
      setInput({
        name_product: "",
        price_product: 0,
        description_product: "",
        image_product: images,
        thumbnail_product: "",
        in_stock: 0,
        on_sale: false,
        release_year: 0,
        genres: [],
        platforms: [],
      });
      // history.push('/home');
    }
  }

  const years: number[] = [
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961,
    1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
    1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010,
  ];

  const validate = (input: ProductCreate) => {
    let error = {
      name_product: "",
      price_product: "",
      description_product: "",
      image_product: "",
      thumbnail_product: "",
      in_stock: "",
      on_sale: "",
      release_year: "",
      genres: "",
      platforms: "",
    };

    if (!input.name_product) {
      error.name_product = "Product name is required";
    } else if (input.name_product.length < 3) {
      error.name_product = "Product name is too short";
    } else if (input.name_product.length > 50) {
      error.name_product = "Product name is too long";
    } else if (!/(?=.*)/.test(input.name_product)) {
      error.name_product = "Product name must be alphanumeric";
    }

    if (input.price_product < 1) {
      error.price_product = "Price must be higher";
    } else if (!Number.isInteger(input.price_product)) {
      error.price_product = "Price must be Integer";
    }
    if (!input.description_product) {
      error.description_product = "A description is required";
    }
    if (!input.thumbnail_product) {
      error.thumbnail_product = "A thumbnail image is required";
    }
    if (!input.release_year) {
      error.release_year = "A release year is required";
    }
    if (input.genres.length === 0) {
      error.genres = "At least one genre is required";
    }
    if (input.platforms.length === 0) {
      error.platforms = "At least one platform is required";
    }

    return error;
  };

  const handleImage =  async (e:any) => {
    const data = new FormData();
    data.append("upload_preset", "product_image")
    data.append("file", e.target.files[0])
    const fileRequest = await axios.post('https://api.cloudinary.com/v1_1/gamestore-16bit/image/upload', data)
    const result =  fileRequest?.data.secure_url
    setImages([
      ...images, result
    ])
    setInput((prevState: any) => ({
           ...prevState,
           image_product: [...images, result],
         }));


  }
  console.log('por aca', input);

  return (
    <>

    <input onChange={(e) => handleImage(e)} type="file" />
    {images? images.map(el => (
      <img src={el}/>
    )) : ""}



    <ContainerFormP>
      <Link
        to={{
          pathname: "/admin",
          state: true,
        }}
        style={{ textDecoration: "none", color: "#EEEEEE" }}
      >
        <BtnBack>Back</BtnBack>
      </Link>

      <Title>Create a new product</Title>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        {error.name_product && <FormErrors>{error.name_product}</FormErrors>}
        <Fields>
          <FormLabel htmlFor="name_product">Name</FormLabel>
          <FormInput
            onChange={(e) => handleChange(e)}
            name="name_product"
            placeholder="Introduce a Name..."
          />
        </Fields>

        {error.price_product && <FormErrors>{error.price_product}</FormErrors>}
        <Fields>
          <FormLabel htmlFor="price_product">Price</FormLabel>
          <FormInput
            type="number"
            onChange={(e) => handlePrice(e)}
            name="price_product"
            placeholder="Introduce a Price..."
          />
        </Fields>

        {error.description_product && (
          <FormErrors>{error.description_product}</FormErrors>
        )}
        <Fields>
          <FormLabel htmlFor="description_product">Description</FormLabel>
          <FormTextarea
            onChange={(e) => handleTextArea(e)}
            name="description_product"
            placeholder="Introduce a description..."
          />
        </Fields>

        {error.image_product && <FormErrors>{error.image_product}</FormErrors>}
        <Fields>
          <FormLabel htmlFor="image_product">Images</FormLabel>
          <FormInputImg
            value={info.url}
            onChange={(e) => handleInfoChange(e)}
            name="image_product"
            placeholder="Add Images..."
          />
         <BtnAdd type="button" > 
            Add
          </BtnAdd>
        </Fields>
        {input.image_product &&
          input.image_product.map((img) => (
            <div key={img}>
              <img
                src={img}
                style={{ width: "70px", height: "70px" }}
                alt={img}
              />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleImageDelete(img)}
              >
                x
              </span>
            </div>
          ))}

        {error.thumbnail_product && (
          <FormErrors>{error.thumbnail_product}</FormErrors>
        )}
        <Fields>
          <FormLabel htmlFor="thumbnail_product">Thumbnail</FormLabel>
          <FormInput
            onChange={(e) => handleChange(e)}
            name="thumbnail_product"
            placeholder="Introduce a Thumbnail url"
          />
        </Fields>

        <Fields>
          <FormLabel htmlFor="in_stock">Stock</FormLabel>
          <FormInput
            onChange={(e) => handleStock(e)}
            name="in_stock"
            placeholder="Introduce a quantity"
          />
          {/* <FormSelect
            onChange={(e) => handleStock(e)}
            name="in_stock"
            placeholder="Select an Option"
          >
            <option>Select an Option</option>
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </FormSelect> */}
        </Fields>
        <Fields>
          <FormLabel htmlFor="on_sale">Sale Discount</FormLabel>
          <FormSelect onChange={(e) => handleSale(e)} name="on_sale">
            <option>Select an Option</option>
            <option value="true">On sale</option>
            <option value="false">No Discounts</option>
          </FormSelect>
        </Fields>

        {error.release_year && <FormErrors>{error.release_year}</FormErrors>}
        <Fields>
          <FormLabel htmlFor="release_year">Release Year</FormLabel>
          <FormSelect name="release_year" onChange={(e) => handleSelectYear(e)}>
            {years?.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </FormSelect>
        </Fields>

        {error.genres && <FormErrors>{error.genres}</FormErrors>}
        <Fields>
          <FormLabel htmlFor="firstName">Genres</FormLabel>
          <FormSelect name="genres" onChange={(e) => handleSelectGenre(e)}>
            <option>Select an Option</option>
            <option value="action">Action</option>
            <option value="shooter">Shooter</option>
            <option value="racing">Racing</option>
            <option value="fighting">Fighting</option>
            <option value="sports">Sports</option>
            <option value="arcade">Arcade</option>
            <option value="adventure">Adventure</option>
            <option value="platform">Platform</option>
            <option value="puzzle">Puzzle</option>
            <option value="strategy">Strategy</option>
            <option value="rpg">RPG</option>
          </FormSelect>
        </Fields>
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          {input.genres?.map((g) => (
            <FormOpt key={g}>
              <button type="button" onClick={() => handleGenreDelete(g)}>
                x
              </button>
              <p>{g}</p>
            </FormOpt>
          ))}
        </div>

        {error.platforms && <FormErrors>{error.platforms}</FormErrors>}
        <Fields>
          <FormLabel htmlFor="platforms">Platforms</FormLabel>
          <FormSelect
            name="platforms"
            onChange={(e) => handleSelectPlatform(e)}
          >
            <option>Select an Option</option>
            <option value="nes">nes</option>
            <option value="arcade">arcade</option>
            <option value="sega">sega</option>
            <option value="snes">snes</option>
            <option value="gba">gba</option>
            <option value="a2600">a2600</option>
          </FormSelect>
        </Fields>
        <div style={{ display: "flex", marginBottom: "2rem" }}>
          {input.platforms?.map((p) => (
            <FormOpt key={p}>
              <button type="button" onClick={() => handlePlatformDelete(p)}>
                x
              </button>
              <p>{p}</p>
            </FormOpt>
          ))}
        </div>

        <BtnSubmit type="submit">Submit</BtnSubmit>
      </FormContainer>
    </ContainerFormP>
    </>
  );
};

export default FormProduct;
