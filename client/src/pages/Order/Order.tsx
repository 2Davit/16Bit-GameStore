import React, { FC } from "react";
import { useState, useEffect } from "react";
import { createNewGenre } from "../../redux/actions/products_action";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Store } from "../../redux/reducer";
import { ProductInCart } from "../../interfaces";

interface UserGuess {
  name: string;
  lastname: string;
  email: string;
  adress: string;
}
const OrderUser = () => {
  /* const cart: any = useSelector(
    (state: Store) => state.cartReducer.cart.list
  ); */
  const user = JSON.parse(localStorage.getItem("userData")!);
  const cart: any = JSON.parse(localStorage.getItem("cart")!);
  const [subtotal, setSubtotal] = useState(0.0);

  useEffect(() => {
    if (cart) {
      setSubtotal(
        cart.reduce((acc: number, product: ProductInCart) => {
          acc = acc + product.price_product! * product.quantity!;
          return acc;
        }, 0.0)
      );
    }
  }, [cart]);

  const dispatch = useDispatch();
  const [input, setInput] = useState<UserGuess>({
    name: "",
    lastname: "",
    email: "",
    adress: "",
  });
  const [error, setError] = useState<any>({
    name: "",
    lastname: "",
    email: "",
    adress: "",
  });

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

  const order = {
    id_user: user?.id,
    status_order: "pending",
    amount_order: subtotal,
    cart: cart?.map((c: ProductInCart) => ({
      id_product: c.id_product,
      price_product: c.price_product,
      quantity: c.quantity,
    })),
    address_order: input.adress,
  };

  async function handlePayment() {
    try {
      const preference = await (
        await fetch("/order", {
          method: "post",
          body: JSON.stringify(order),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      var script = document.createElement("script");

      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.type = "text/javascript";
      script.dataset.preferenceId = preference.preferenceId;

      script.setAttribute("data-button-label", "Pagar con Mercado Pago");

      const element: HTMLElement = document.getElementById(
        "mercado"
      ) as HTMLElement;
      element.innerHTML = "";

      const elementTwo: HTMLElement = document.querySelector<HTMLDivElement>(
        "#mercado"
      ) as HTMLElement;

      elementTwo.appendChild(script);
    } catch {
      alert("Sin stock");
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handlePayment();
  }

  const validate = (input: UserGuess) => {
    let error = {
      name: "",
      lastname: "",
      email: "",
      adress: "",
    };
    /*------------------------ NAME VALIDATION -------------------------- */
    if (!input.name) {
      error.name = "Name is required";
    } else if (input.name.length < 3) {
      error.name = "Name is too short";
    } else if (input.name.length > 15) {
      error.name = "Name name is too long";
    }
    /*------------------------ LAST NAME VALIDATION -------------------------- */

    if (!input.lastname) {
      error.lastname = "lastname is required";
    } else if (input.lastname.length < 3) {
      error.lastname = "lastname is too short";
    } else if (input.lastname.length > 15) {
      error.lastname = "lastname name is too long";
    }
    /*------------------------ EMAIL VALIDATION -------------------------- */
    function validEmail(email: string) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(input.email).toLowerCase());
    }

    if (!input.email) {
      error.email = "email is required";
    } else if (!validEmail(input.email)) {
      error.email = "email name is invalid";
    }
    /*------------------------ ADDRESS VALIDATION -------------------------- */

    if (!input.adress) {
      error.adress = "address is required";
    } else if (input.adress.length < 3) {
      error.adress = "address is too short";
    }
    return error;
  };

  //   let disabledBtn = !(inp.name?.length > 0 && error.genres.length === 0);

  return (
    <div id="mercado" className="mercado">
      <h1>Please complete the form</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="name_product">Name</label>
        <input
          onChange={(e) => handleChange(e)}
          name="name"
          placeholder="Introduce your name..."
        />
        {error.name && <div style={{ color: "red" }}>{error.name}</div>}

        <label htmlFor="lastname">Last name</label>
        <input
          onChange={(e) => handleChange(e)}
          name="lastname"
          placeholder="Introduce your last name..."
        />
        {error.lastname && <div style={{ color: "red" }}>{error.lastname}</div>}

        <label htmlFor="name_product">Email</label>
        <input
          onChange={(e) => handleChange(e)}
          name="email"
          placeholder="Introduce your email..."
        />
        {error.email && <div style={{ color: "red" }}>{error.email}</div>}

        <label htmlFor="name_product">Address</label>
        <input
          onChange={(e) => handleChange(e)}
          name="adress"
          placeholder="Introduce your address..."
        />
        {error.adress && <div style={{ color: "red" }}>{error.adress}</div>}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default OrderUser;
