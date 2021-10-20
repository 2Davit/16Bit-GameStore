import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { getUsers } from "../../redux/actions/admin_actions";
// import { Store } from "../../redux/reducer/";
import { User } from "../../interfaces";
import { deleteUser, banUser, promoteUser } from "../../redux/actions/admin_actions";
import {
  ContainerNav,
  ContainerMainContent,
  IconContainer,
  BtnPaged1,
  BtnPaged2,
  IconPrev,
  IconNext,
  Searchbar,
  Search,
  AddBtns,
  ContainerNotExist,
  H2,
} from "../ProductContent/ProductContent.style";
import {
  InfoUser,
  UserContainer,
  UserMainContainer,
  UserButtons,
  InfoUserMini,
  TitleBlankDiv,
  TitleContainer,
  TitleUserMini,
  TitleUser,
  IconUsersDelete,
  IconUsersBan,
  IconUsersUnban,
  NavBtn,
  IconUsersAdmin,
  IconUsersAdmin2,
} from "./UserContent.style";

interface Props {
  totalUser: Array<User>;
}

const UserContent: FC<Props> = ({ totalUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = useState<number>(0); //iria de 10 en 10 ejm : 0-10,20,30
  const [page2, setPage2] = useState<number>(10); //19
  const [btnNext, setBtnNext] = useState<boolean>(false);
  const [btnPrev, setBtnPrev] = useState<boolean>(false);

  let orderId = totalUser.sort(function (a, b) {
    return a.id_user - b.id_user;
  });

  const [userSearch, setUserSearch] = useState(totalUser);
  const [btnStatus, setBtnStatus] = useState<boolean>(true);
  const [btnAlphabet, setBtnAlphabet] = useState<boolean>(true);
  
  let onViewUsers = userSearch.slice(page, page2);
  

  let alphabet = totalUser.sort(function (a, b) {
    if (a.nickname.toLowerCase() > b.nickname.toLowerCase()) {
      return 1;
    } else return 0;
  });

  const handleNextPage = () => {
    if (userSearch.length < page2 + 1) {
      setBtnNext(true);
    } else {
      setPage(page + 10);
      setPage2(page2 + 10);
      setBtnPrev(false);
    }
  };

  const handlePreviousPage = () => {
    if (page <= 0) {
      setBtnPrev(true);
    } else {
      setPage(page - 10);
      setPage2(page2 - 10);
      setBtnNext(false);
    }
  };
  const searchUsers = (e: any) => {
    let search = e.target.value.toLowerCase();
    if (search === "") {
      setUserSearch(totalUser);
      setBtnNext(false);
    } else {
      let newArray = totalUser.filter((user: any) => {
        return user.nickname.toLowerCase().includes(search);
      });
      setPage(0);
      setPage2(10);
      setUserSearch(newArray);
    }
  };



  const handleDeleteUser = (id: number | unknown) => {
    dispatch(deleteUser(id));
    alert("se fue" + id);
    history.go(0);
  };
  const banDeleteUser = (id: number | unknown, status: boolean | string) => {
    dispatch(banUser(id, status));
    alert("cambio status");
    history.go(0);
  };

  const handleOrderByStatus = () => {
    const actives = totalUser.filter((status) => status.active === true);
    const banneds = totalUser.filter((status) => status.active !== true);
    const filteredstatus = actives.concat(banneds);

    setUserSearch([]);
    setUserSearch(filteredstatus);
    setBtnStatus(!btnStatus);
  };
  const handleCleanseStatus = () => {
    setUserSearch([]);
    setUserSearch(orderId);
    setBtnStatus(true);
    setBtnAlphabet(true);
  };

  const handleOrderByAlphabet = () => {
    setUserSearch([]);
    setUserSearch([...alphabet]);
    setBtnAlphabet(!btnAlphabet);
  };
  const handleAdmin = ( status: boolean | string, id: number | unknown): any => {
    dispatch(promoteUser( status, id ));
    
    alert("cambio a Admin");

    // history.go(0);
  };
  const handleAdmin2 = ( status: boolean | string, id: number | unknown): any => {
    dispatch(promoteUser( status, id ));
    
    alert("cambio a Admin");

    // history.go(0);
  };
  

  return (
    <ContainerMainContent>
      <ContainerNav>
        <Searchbar>
          <Search placeholder=" Search users..." onChange={searchUsers} />
        </Searchbar>
        <AddBtns>
          {btnStatus ? (
            <NavBtn onClick={handleOrderByStatus}>By Status</NavBtn>
          ) : (
            <NavBtn onClick={handleCleanseStatus}>By Id</NavBtn>
          )}
          {btnAlphabet ? (
            <NavBtn onClick={handleOrderByAlphabet}>By Alphabet</NavBtn>
          ) : (
            <NavBtn onClick={handleCleanseStatus}>By Id</NavBtn>
          )}
        </AddBtns>
      </ContainerNav>
      <UserMainContainer>
        <IconContainer>
          <BtnPaged1
            byeBtn={btnPrev}
            disabled={btnPrev}
            onClick={handlePreviousPage}
          >
            <IconPrev byeBtnI={btnPrev} />
          </BtnPaged1>
          <BtnPaged2
            byeBtn={btnNext}
            disabled={btnNext}
            onClick={handleNextPage}
          >
            <IconNext byeBtnI={btnNext} />
          </BtnPaged2>
        </IconContainer>
        <TitleContainer>
          <TitleUserMini>User Id</TitleUserMini>
          <TitleUser>Username</TitleUser>
          <TitleUser>Name</TitleUser>
          <TitleUser>Last Name</TitleUser>
          <TitleUserMini>Status</TitleUserMini>
          <TitleUser>Email</TitleUser>
          <TitleUser>Address</TitleUser>
          <TitleBlankDiv></TitleBlankDiv>
        </TitleContainer>
        {onViewUsers.length > 0 ? (
          onViewUsers.map((u: User) => (
            <UserContainer
              backg={
                u.id_user ? (u.id_user % 2 === 0 ? "#e1e1e1" : "#eeeeee") : ""
              }
              key={u.id_user}
            >
              <InfoUserMini>{u.id_user} {u.admin === true ? <button style={{border: 'none'}} onClick={() => handleAdmin(false, u.id_user)}><IconUsersAdmin /></button> : <button style={{border: 'none'}} onClick={() => handleAdmin2(true, u.id_user)}><IconUsersAdmin2 /></button>}</InfoUserMini>
              <InfoUser>{u.nickname}</InfoUser>
              <InfoUser>{u.name}</InfoUser>
              <InfoUser>{u.lastname}</InfoUser>
              <InfoUserMini>{u.active ? "Active" : "Banned"}</InfoUserMini>
              <InfoUser style={{ overflowX: "scroll" }}>{u.email}</InfoUser>
              {u.address.length > 18 ? (
                <InfoUser>{u.address.slice(0, 17) + "..."}</InfoUser>
              ) : (
                <InfoUser>{u.address}</InfoUser>
              )}
              <UserButtons
                onClick={() => handleDeleteUser(u.id_user)}
                backg={
                  u.id_user ? (u.id_user % 2 === 0 ? "#e1e1e1" : "#eeeeee") : ""
                }
              >
                <IconUsersDelete />
              </UserButtons>
              <UserButtons
                onClick={() => banDeleteUser(u.id_user, !u.active)}
                backg={
                  u.id_user ? (u.id_user % 2 === 0 ? "#e1e1e1" : "#eeeeee") : ""
                }
              >
                {u.active ? <IconUsersBan /> : <IconUsersUnban />}
              </UserButtons>
            </UserContainer>
          ))
        ) : (
          <ContainerNotExist>
            <H2>Oops, No Users Found...</H2>
          </ContainerNotExist>
        )}
      </UserMainContainer>
    </ContainerMainContent>
  );
};

export default UserContent;
