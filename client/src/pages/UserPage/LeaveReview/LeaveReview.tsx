import React, { FC, useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import StarRatings from "react-star-ratings";
import { FormStyled } from "../../FormRegister/StyledFormRegister";
import { Btn } from "../../../GlobalStyles/GlobalStyles";
import { StyledLeaveReview, StyledCheckReview, StyledParagraph } from "./StyledLeaveReview";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


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

  const history = useHistory();

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
  
  return (
    <>
    { !userReview.length ?
    <StyledLeaveReview>
      
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
          <Btn style={{marginTop:'-18rem'}} className="btn-card" onClick={() => history.push('/user')}>
          <i className="fas fa-caret-left"></i> My Profile
          </Btn>
          <Btn
            style={{ marginLeft:'4em'}}
            className="btn-card"
            onClick={() => handleReview(iduser, idgame)}
          >
            Send Review
          </Btn>
        </form>
      
      </FormStyled>
      
      </StyledLeaveReview>
      : 
      <StyledCheckReview>
      <div style={{display:'flex', flexDirection:'column', marginTop:'-17em'}}>
      <h1>Hi, {user.data.username}!</h1>
      <p>Your opinion about this game has been uploaded on {userReview[0].createdAt.split("T")[0]}.</p>
      </div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding: '2rem', marginLeft:'1rem', height:'100%'}}>
      <div>
      <h3>Score</h3>
      <StarRatings
            rating={userReview[0].score}
            starRatedColor="black"
            numberOfStars={5}
            starHoverColor="var(--clr-primary)"
            starDimension="3.5em"
            starSpacing="0"
          />
        </div>
        <div>
        <h3>Review</h3>
        <StyledParagraph>{userReview[0].description}</StyledParagraph>
        </div>
        </div>
        <Btn style={{marginTop:'-18rem'}} className="btn-card" onClick={() => history.push('/user')}>
            <i className="fas fa-caret-left"></i> My Profile
        </Btn>
          </StyledCheckReview>
        }
    </>
  );
};

export default LeaveReview;
