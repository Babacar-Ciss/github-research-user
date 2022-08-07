import './Counter.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../App';

const Counter = ({title, value}) => {
    
    const {isDarkLight} = useContext(GlobalContext);
    
    const isDarkLightColorHandler = (isDarkLight, darkColor, lightColor) => {
        if (isDarkLight === "Dark"){
            return {color : "#"+darkColor}
        }
        else if (isDarkLight === "Light"){
            return {color : "#"+lightColor}
        }
    }
        
    
    
    return(
        <div className='Counter'>
            <h3 style={isDarkLightColorHandler(isDarkLight, "FFF", "4B6A9B")}>
                {title}
            </h3>
            <p style={isDarkLightColorHandler(isDarkLight, "FFF", "2B3442")}>
                {value}
            </p>
        </div>
    )
}

export default Counter;