import { GlobalContext } from "../../App";
import { useContext } from "react";
import styled from "styled-components";
import "./Links.scss";

const LinkStyle = styled.div`

    &:nth-child(3) a:hover {
        border-bottom: 1px solid ${props => props.toggleDarkLight ==='Dark' ? "#FFF" : "#4B6A9B"} ;
    }

`;


const Links = ({icon, title, text, value}) => {

    const {isDarkLight, datas} = useContext(GlobalContext);

    const isDarkLightColorHandler = (isDarkLight, darkColor, lightColor, opacity = 1) => {
        let op = opacity ;
        if (isDarkLight === "Dark"){
            return {color : "#"+darkColor, opacity : op}
        }
        else if (isDarkLight === "Light"){
            return {color : "#"+lightColor, opacity : op}
        }
    }

    const isDarkLightIconHandler = (isDarkLight, darkColor, lightColor, opacity = 1) => {
        let op = opacity ;
        if (isDarkLight === "Dark"){
            return {filter : darkColor, opacity : op}
        }
        else if (isDarkLight === "Light"){
            return {filter : lightColor, opacity : op}
        }
    }

    const linkPathRedirect = (datas,value) => {
        switch (value) {
            case "twitter_username" : {
                return `https://twitter.com/@${datas[value]}`
            }
            case "blog" : {
                return datas[value]
            }
        }
    }
    




    const displayLighterIfNotAvailable = (datas[""+value] !== null && datas[""+value] !== "") ? <a   href={linkPathRedirect(datas,value)}
                                                                                                     target="_blank"
                                                                                                     style={ isDarkLightColorHandler(isDarkLight, "FFF", "4B6A9B")}> {text} </a>
                    : <a  style={ isDarkLightColorHandler(isDarkLight, "FFF", "4B6A9B", 0.5) }> {text} </a>;
    
    
    const displayLighterIconIfNotAvailable = (datas[""+value] !== null && datas[""+value] !== "") ?  <img  style={isDarkLightIconHandler(isDarkLight, "brightness(0) invert(1)","brightness(0) saturate(100%) invert(34%) sepia(98%) saturate(255%) hue-rotate(176deg) brightness(97%) contrast(89%)" )}src={icon} alt={title} width={13.75} height={20} />
                                                                                                  :  <img  style={isDarkLightIconHandler(isDarkLight, "brightness(0) invert(1)","brightness(0) saturate(100%) invert(34%) sepia(98%) saturate(255%) hue-rotate(176deg) brightness(97%) contrast(89%)",0.5) } src={icon} alt={title} width={13.75} height={20} />
    return (
        <LinkStyle className="Links" toggleDarkLight={isDarkLight}>
         
            { displayLighterIconIfNotAvailable }
            
            { displayLighterIfNotAvailable}
         
        </LinkStyle>
    )
}

export default Links;