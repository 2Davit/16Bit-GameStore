import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
  ;
import StarRatings from "react-star-ratings";


interface InputReview {
  score: number;
  description: string;
}

interface Params {
  iduser: string;
  idgame: string;
}

const LeaveReview: FC = () => {


  const { iduser, idgame } = useParams<Params>()



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

  console.log(input.score)

  function handleScore(rating: number) {
    setInput({
      ...input,
      score: rating,
    });
  }


  async function handleReview(iduser: string, idgame: string) {

    console.log("acaaaai",input)
    try {
       await axios.post(`/videogames/review/${iduser}/${idgame}`, input);
      setInput({
        score: 1,
        description: "",
      });
     
      alert("Thanks for send your review");
    } catch {
      alert("Ya dejaste una review");
    }
  }




  return (
    <>
      <form>
        <label>YOUR OPINION</label>
        <textarea
          value={input.description}
          name="description"
          onChange={(e: any) => handleChange(e)}
        ></textarea>
        <label>YOUR SCORE</label>
        <StarRatings
          rating={input.score}
          starRatedColor="blue"
          changeRating={handleScore}
          numberOfStars={5}
          name='rating'
        />
      </form>
      <button
        onClick={() => handleReview(iduser, idgame)}
      >
        Send Review
      </button>
    </>
  )
}

export default LeaveReview