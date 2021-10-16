import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Props {
    index: any;
    idUser: string;
}

interface InputReview {
    score: number;
    description: string;
}

const ProductUserDetail: FC<Props> = ({ index, idUser }) => {

    const [input, setInput] = useState<InputReview>({
        score: 0,
        description: "",
      });


      function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setInput({
          ...input,
          [e.currentTarget.name]: e.currentTarget.value,
        });
      }

      async function handleReview(id: string, idProduct: string) {
        try {
          await axios.post(`/videogames/review/${id}/${idProduct}`, input);
          setInput({
            score: 0,
            description: "",
          });
          alert("Thanks for send your review");
        } catch {
          alert("Ya dejaste una review");
        }
      }




    return (
        <>
              <h4>Name Product: {index.product.name_product}</h4>
              <h4>Price Product: ${index.product.price_product}</h4>
              <h4>Quantity: {index.quantity}</h4>
              <Link to={`/game/${index.product.id_product}`}>
                <button>Game Detail</button>
              </Link>
              <form>
                <label>YOUR OPINION</label>
                <textarea
                  value={input.description}
                  name="description"
                  onChange={(e: any) => handleChange(e)}
                ></textarea>
                <label>YOUR SCORE</label>
                <select name="score" value={input.score} onChange={(e: any) => handleChange(e)}>
                  <option>⭐</option>
                  <option>⭐⭐</option>
                  <option>⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐⭐</option>
                </select>
              </form>
              <button
                onClick={() => handleReview(idUser, index.product.id_product)}
              >
                Send Review
              </button>
            </>
    )
}

export default ProductUserDetail
