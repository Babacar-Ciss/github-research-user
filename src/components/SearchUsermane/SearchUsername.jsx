import "./SearchUsername.scss"
import { useContext } from "react";
import { GlobalContext } from "../../App";
import styled from "styled-components";
//#4B6A9B placeHolder colors

const Input = styled.input`
        background-color: transparent;
        width: 50%;
        height: 25px;
        border: none;
        text-align: left;
        margin-left: 80px ;
        margin-top: 22px;
        font-size: 18px;
        font-weight: 400;
        color: ${props => props.toggleDarkLight ==='Dark' ? "#FFF" : "#222731"};
        font-family: "Space Mono";
        caret-color: #0079FF;

        @media (min-width: 375px) and (max-width: 1440px) {
            margin-left: 50px ;
            margin-top: 17px;
            width: 54%;
        }

        ::placeholder {
            font-family: "Space Mono";
            font-size: 18px;
            font-weight: 400;
            color: ${props => props.toggleDarkLight ==='Dark' ? "#FFF" : "#4B6A9B"};

            @media (min-width: 375px) and (max-width: 1440px) {
                font-size: 13px;
            }
        }

        :focus {
            outline: none;
        }
        `

const SearchUsername = () => {

    const {isDarkLight, setSearchValueInputHandler, searhUserHandler, err,setSearchPressHandler} = useContext(GlobalContext);


    return(
        <div style={isDarkLight === "Dark" ? {backgroundColor : "#1E2A47"} 
                                            : {backgroundColor : "#FEFEFE"}}
            className="SearchUsername"
            onKeyDown = {setSearchPressHandler}>

             <Input     className="SearchUsername__inputField"  
                   type="text" 
                   placeholder="Search GitHub username..."
                   toggleDarkLight = {isDarkLight}
                   onChange = {setSearchValueInputHandler}
            />
            {
               err ? <p className="SearchUsername__error">No results</p> : null

            }
            
            <button className="SearchUsername__button"
                    onClick = {searhUserHandler}
                    > 
                        Search 
            </button>
        </div>
    )


}


export default SearchUsername;