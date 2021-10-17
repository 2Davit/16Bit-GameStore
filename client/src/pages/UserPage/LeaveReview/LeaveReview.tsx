import React, { FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import StarRatings from "react-star-ratings";
import { FormStyled } from "../../FormRegister/StyledFormRegister";
import { Btn } from "../../../GlobalStyles/GlobalStyles";
import { StyledLeaveReview } from "./StyledLeaveReview";
import { toast } from "react-toastify";

interface InputReview {
  score: number;
  description: string;
}

interface Params {
  iduser: string;
  idgame: string;
}

const LeaveReview: FC = () => {
  const { iduser, idgame } = useParams<Params>();

  const [userReview, setUserReview] = useState<any>([]);

  const user = JSON.parse(localStorage.getItem("userData")!);

  useEffect(() => {
    async function getUserReviews(iduser: string, idgame: string) {
      let userReview = await axios.get(`/videogames/review/${idgame}/${iduser}`);
      setUserReview(userReview.data)
      return userReview.data;
    }
    getUserReviews(iduser, idgame);
  }, [iduser, idgame])

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

  

  function handleScore(rating: number) {
    setInput({
      ...input,
      score: rating,
    });
  }


  async function handleReview(iduser: string, idgame: string) {
    try {
      await axios.post(`/videogames/review/${iduser}/${idgame}`, input);
      setInput({
        score: 1,
        description: "",
      });
      toast.success("Your review was sent!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch {
      toast.error(
        "An error occured while trying to send your review. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  }
  console.log(userReview)
  return (
    <StyledLeaveReview>
      { !userReview.length ?
      <FormStyled>
        <form>
          <span className="span__score">Score:</span>
          <StarRatings
            rating={input.score}
            starRatedColor="var(--clr-primary)"
            changeRating={handleScore}
            numberOfStars={5}
            starHoverColor="var(--clr-primary)"
            starDimension="3.5em"
            starSpacing="0"
            name="rating"
          />
          <label>
            <span>Comment (optional):</span>
            <textarea
              value={input.description}
              name="description"
              onChange={(e: any) => handleChange(e)}
            ></textarea>
          </label>
          <Btn
            className="btn-card"
            onClick={() => handleReview(iduser, idgame)}
          >
            Send Review
          </Btn>
        </form>
      </FormStyled>
      
      : 
      <>
      <h2>Hi, {user.data.username}!</h2>
      <p>Your opinion about this game has been uploaded on {userReview[0].createdAt.split("T")[0]}</p>
      <h3>Your score:</h3>
      <StarRatings
            rating={userReview[0].score}
            starRatedColor="var(--clr-primary)"
            numberOfStars={5}
            starHoverColor="var(--clr-primary)"
            starDimension="3.5em"
            starSpacing="0"
          />
        <h3>Your review:</h3>
        <p>{userReview[0].description}</p>
          </>
        }
    </StyledLeaveReview>
  );
};

export default LeaveReview;
