import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteNavbar } from "../../redux/actions/admin_actions";
import { StyledLanding, ArcadeLanding, ArcadeGi, TitleLanding, ButtonL, ContinerBtnLanding } from "./StyledLanding";

const Landing: FC = () => {
  const dispatch = useDispatch();
  //quitar la navbar
  useEffect(() => {
    dispatch(deleteNavbar());
  }, [dispatch]);

  return (
    <StyledLanding>
      <TitleLanding>GameStore</TitleLanding>
      <ArcadeLanding>
        <ArcadeGi/>
      </ArcadeLanding>
        <ContinerBtnLanding style={{textDecoration: 'none'}} to="/home">
          <ButtonL type="button" >
            Press Start
          </ButtonL>
        </ContinerBtnLanding>
    </StyledLanding>
  );
};

export default Landing;
