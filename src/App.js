import './App.scss';
import Header from './components/Header/Header'
import Informations from './components/Informations/Informations';
import SearchUsername from './components/SearchUsermane/SearchUsername';
import { useState, createContext, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './assets/Loading/Loading';
import axios from 'axios';
import { motion } from 'framer-motion';



//Styling BG color to Dark Light Mode
const StyleBackgroundColor = styled.div`
  background-color :  ${props => props.toggleDarkLight ==='Dark' ? "#141D2F" : "#FFF"}; 
`;


// Detect if Dark or Light MODE
const IS_DARK_MODE = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const GlobalContext = createContext();



function App() {
  //States Management
  const [isDarkLight, setIsDarkLight] = useState(IS_DARK_MODE == true ? "Dark" : "Light")
  const [searchValueInput, setSearchValueInput] = useState();
  const [username, setUsername] = useState("octocat");
  const [datas , setDatas] = useState("");
  const [err , setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  // Functions Handler
  const switchThemeHandler = () => {
    isDarkLight == "Light" ? setIsDarkLight("Dark") : setIsDarkLight("Light"); 
  }

  const setSearchValueInputHandler = (e) => {
    setSearchValueInput(e.target.value)
  }

  const searhUserHandler = () => {
    setUsername(searchValueInput);
    
  } 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      
      const result = await axios.get(`https://api.github.com/users/${username}`)
      .catch(err => setError(err));
      setDatas(result.data);
      setIsLoading(false);
      setError(false)
    };
    fetchData();
  },[username]);


  return (
    
    <GlobalContext.Provider value={{switchThemeHandler,isDarkLight,setSearchValueInputHandler,searhUserHandler,datas, err}}>
    <StyleBackgroundColor toggleDarkLight = {isDarkLight}> 
      <div className="App">
          <motion.div initial={{opacity : 0}}
                      animate={{opacity : 1}}
                      transition= {{duration : 0.5}}
                      className='Container'>
          {console.log(datas) }
            <Header />
            <SearchUsername />
            
            {
            err ? <Informations /> : isLoading ? <Loading/>
              : <Informations />
            }

            {console.log(err)}
      
          </motion.div>
        </div>
      </StyleBackgroundColor>
    </GlobalContext.Provider>
  );
}

export default App;
