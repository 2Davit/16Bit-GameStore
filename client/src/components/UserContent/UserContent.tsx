import { FC, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { getUsers } from "../../redux/actions/admin_actions";
// import { Store } from "../../redux/reducer/";
import { User } from "../../interfaces";
import { ContainerNav, ContainerMainContent, IconContainer, BtnPaged1, BtnPaged2, IconPrev, IconNext, Searchbar, Search } from '../ProductContent/ProductContent.style'
import { InfoUser, UserContainer, UserMainContainer, UserButtons, InfoUserMini, TitleBlankDiv, TitleContainer, TitleUserMini, TitleUser, IconUsersDelete, IconUsersEdit } from './UserContent.style'

interface Props {
    totalUser: Array<User>;
}

const UserContent: FC<Props> = ({totalUser}) => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUsers())
    // }, [dispatch]);
    // const totalUsers = useSelector(
    //     (state: Store) => state.adminReducer.users
    // )

    const [page, setPage] = useState<number>(0)//iria de 10 en 10 ejm : 0-10,20,30
    const [page2, setPage2] = useState<number>(10)//19
    const [btnNext, setBtnNext] = useState<boolean>(false)
    const [btnPrev, setBtnPrev] = useState<boolean>(false)
    const [userSearch, setUserSearch] = useState(totalUser);
    let onViewUsers = userSearch.slice(page, page2)


    const handleNextPage = () => {
        if (userSearch.length < (page2 + 1)) {
            setBtnNext(true)
        } else {
            setPage(page + 10);
            setPage2(page2 + 10)
            setBtnPrev(false)
        }

    }

    const handlePreviousPage = () => {
        if (page <= 0) {
            setBtnPrev(true)
        } else {
            setPage(page - 10);
            setPage2(page2 - 10)
            setBtnNext(false)
        }

    }
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

    return (
        <ContainerMainContent >
            <ContainerNav>
            <Searchbar>
          <Search placeholder=' Search users...' onChange={searchUsers} />
        </Searchbar>
            </ContainerNav>
            <UserMainContainer>
                <IconContainer>
                    <BtnPaged1 byeBtn={btnPrev} disabled={btnPrev} onClick={handlePreviousPage}><IconPrev byeBtnI={btnPrev} /></BtnPaged1>
                    <BtnPaged2 byeBtn={btnNext} disabled={btnNext} onClick={handleNextPage}><IconNext byeBtnI={btnNext} /></BtnPaged2>
                </IconContainer>
                <TitleContainer >

                    <TitleUserMini>User Id</TitleUserMini>
                    <TitleUser>Username</TitleUser>
                    <TitleUser>Name</TitleUser>
                    <TitleUser>Last Name</TitleUser>
                    <TitleUserMini>Status</TitleUserMini>
                    <TitleUser>Email</TitleUser>
                    <TitleUser>Address</TitleUser>
                    <TitleBlankDiv></TitleBlankDiv>


                </TitleContainer>
                {onViewUsers ? onViewUsers.map((u: User) => (
                    <UserContainer backg={u.id_user ? u.id_user % 2 === 0 ? '#e1e1e1': '#eeeeee' : ""} key={u.id_user} >
                        <InfoUserMini>{u.id_user}</InfoUserMini>
                        <InfoUser>{u.nickname}</InfoUser>
                        <InfoUser>{u.name}</InfoUser>
                        <InfoUser>{u.lastname}</InfoUser>
                        <InfoUserMini>{u.active ? "Active" : "Unactive"}</InfoUserMini>
                        <InfoUser>{u.email}</InfoUser>
                        <InfoUser>{u.address}</InfoUser>
                        <UserButtons backg={u.id_user ? u.id_user % 2 === 0 ? '#e1e1e1': '#eeeeee' : ""}><IconUsersDelete/></UserButtons>
                        <UserButtons backg={u.id_user ? u.id_user % 2 === 0 ? '#e1e1e1': '#eeeeee' : ""}><IconUsersEdit/></UserButtons>

                    </UserContainer>
                )) : "No Users Found"}
            </UserMainContainer>
        </ContainerMainContent>
    )
}

export default UserContent
