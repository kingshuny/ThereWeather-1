import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faHeart,
    faMapMarkerAlt,
    faPencilAlt,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
// import PostListContainer from "./PostListView"
import { useHistory } from "react-router-dom"
const Outer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    z-index: 100;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;

    @media screen and (min-width: 1081px) {
        width: 1080px;
    }
`

const Buttons = styled.div`
    background-color: WHITE;
    height: 70px;
    right: 0;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 101;
    border-top: 1px solid #dbdbdb;

    @media screen and (min-width: 1081px) {
        position: fixed;
        background-color: white;
        border-top: 1px solid #dbdbdb;
        border-left: 1px solid #dbdbdb;
        width: 400px;
    }
`

const Button = styled.button`
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 2rem;
`

export default function MenuBar() {
    const history = useHistory()
    return (
        <Outer className="menuBar">
            <Buttons>
                {/*
                    <Link to='/mainpage'>
                    <Button>
                        <FontAwesomeIcon icon={faHome} />
                    </Button>
                    </Link>
                */}
                <Button>
                    {/* <FontAwesomeIcon
                        onClick={() => history.push("/homeorlogin")}
                        icon={faHome}
                    /> */}
                    <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/45/000000/external-home-instagram-flatart-icons-outline-flatarticons.png"
                        onClick={() => history.push("/homeorlogin")}
                    />
                </Button>
                <Button>
                    {/* <FontAwesomeIcon
                        onClick={() => history.push("/bookmarkorlogin")}
                        icon={faHeart}
                    /> */}
                    <img
                        src="https://img.icons8.com/ios/45/000000/like--v1.png"
                        onClick={() => history.push("/bookmarkorlogin")}
                    />
                </Button>
                <Button>
                    {/* <FontAwesomeIcon
                        onClick={() => history.push("/map")}
                        icon={faMapMarkerAlt}
                    /> */}
                    <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/45/000000/external-location-map-location-flatart-icons-outline-flatarticons-13.png"
                        onClick={() => history.push("/map")}
                    />
                </Button>
                <Button>
                    {/* <FontAwesomeIcon
                        onClick={() => history.push("/writeorlogin")}
                        icon={faPencilAlt}
                    /> */}
                    <img
                        src="https://img.icons8.com/ios/45/000000/pencil--v1.png"
                        onClick={() => history.push("/writeorlogin")}
                    />
                </Button>
                <Button>
                    {/* <FontAwesomeIcon
                        onClick={() => history.push("/moreoruserinfo")}
                        icon={faUserAlt}
                    /> */}
                    <img
                        src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/45/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png"
                        onClick={() => history.push("/moreoruserinfo")}
                    />
                </Button>
            </Buttons>
        </Outer>
    )
}
