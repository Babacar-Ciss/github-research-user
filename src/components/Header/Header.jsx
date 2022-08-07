import "./Header.scss"; 
import LightAndDarkSwitcher from "../LightAndDarkSwitcher/LightAndDarkSwitcher";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import styled from 'styled-components';

const DarkLigthStyle = styled.div`
  color :  ${props => props.toggleDarkLight ==='Dark' ? "#FFF" : "#141D2F"}; 
`;

const Header = () => {
    const {isDarkLight} = useContext(GlobalContext);

    return (
        <div className="Header">
            <DarkLigthStyle toggleDarkLight={isDarkLight}> 
                <h1> devfinder </h1> 
            </DarkLigthStyle> 
            
            <LightAndDarkSwitcher />
        </div>
    )
}

export default Header;