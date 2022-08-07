import IMAGES from "../../assets/imagesBundler";
import "./LightAndDarkSwitcher.scss";
import { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import styled from 'styled-components';

const LightAndDarkSwitcher = () => {

    // Context Consumers
    const {switchThemeHandler, isDarkLight} = useContext(GlobalContext);

    ///////////////////////////////////////////////////////////////////////////////////


    //States Management
    const [onHoverDarkLight, setOnHoverDarkLight ] = useState();

    //////////////////////////////////////////////////////////////////////////////////


    // Functions Handler
    const addHoverHandler = () => {
       isDarkLight === "Dark"  ?  setOnHoverDarkLight('hoverInDark') : setOnHoverDarkLight('hoverInLight')
    }

    const removeHoverHandler = () => {
        setOnHoverDarkLight('')
    }

    //////////////////////////////////////////////////////////////////////////////////



    const darkLightIcon = (isDarkLight === "Dark" ? 
                                                   <img className={isDarkLight === "Dark" ? `LightAndDarkSwitcher__icon-inDark ${onHoverDarkLight}`
                                                                                           : `LightAndDarkSwitcher__icon-inLight ${onHoverDarkLight}`}  
                                                        src={IMAGES.sun} 
                                                        alt='icon' />
                                                   :
                                                   <img className={isDarkLight === "Dark" ? `LightAndDarkSwitcher__icon-inDark ${onHoverDarkLight}`
                                                                                           : `LightAndDarkSwitcher__icon-inLight ${onHoverDarkLight}`}  
                                                        src={IMAGES.moon} 
                                                        alt='icon' />)

const darkLightParagraph = ( <p className={isDarkLight === "Dark" 
                                                                ? `LightAndDarkSwitcher__paragraph-inDark ${onHoverDarkLight}`
                                                                : `LightAndDarkSwitcher__paragraph-inLight ${onHoverDarkLight}`
                                                                }>
                             {isDarkLight === "Dark" ? "LIGHT" : "DARK"}
                             </p>
                            )  

     return(
        <div className="LightAndDarkSwitcher" onClick={switchThemeHandler}
                                              onMouseOver={addHoverHandler}
                                              onMouseOut={removeHoverHandler}  >

            {darkLightParagraph}
         
            {darkLightIcon}

        </div>
    )
}


export default LightAndDarkSwitcher;