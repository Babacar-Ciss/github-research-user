import Counter from "../Counter/Counter";
import Links from "../Links/Links";
import IMAGES from "../../assets/imagesBundler";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./Informations.scss"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Informations = () => {
    let date = " ";
    let bio ;
    let login;
    let name;
   
    const {isDarkLight, datas} = useContext(GlobalContext);
    
    // // DATE FORMATING
    if(datas) {
        date = datas.created_at.slice(0,10);
        bio = (datas.bio !== null ? datas.bio : "This profile has no bio");
        login = (datas.login !== null ? datas.login.toLowerCase() : null);
        name = (datas.name !== null ? datas.name : login[0].toUpperCase()+login.slice(1))
    }
    

    const joinMonth = MONTHS[+date.slice(5,6) + 1]
    const joinDate = ""+date.slice(8,10)
    const joinYear = date.slice(0,4)

    const formatingDate = `${joinDate} ${joinMonth} ${joinYear}`

    
    // functions Handler

    const isDarkLightBGHandler = (isDarkLight, darkColor, lightColor) => {
        if (isDarkLight === "Dark"){
            return {backgroundColor : "#"+darkColor}
        }
        else if (isDarkLight === "Light"){
            return {backgroundColor : "#"+lightColor}
        }
    }

    const isDarkLightColorHandler = (isDarkLight, darkColor, lightColor) => {
        if (isDarkLight === "Dark"){
            return {color : "#"+darkColor}
        }
        else if (isDarkLight === "Light"){
            return {color : "#"+lightColor}
        }
    }
        
    
    return(

            <div style={isDarkLightBGHandler(isDarkLight , "1E2A47" , "FEFEFE")}         
                className="Informations">
           {console.log(date)}

           <img src={datas.avatar_url} className="Informations__avatar"  alt="Avatar"/>
           <div className="Informations__Container">
           
           <h2 style={isDarkLightColorHandler(isDarkLight, "FFF" , "2B3442")}
               className="Informations__Container--name"> {name} </h2>
           
           <p  style={isDarkLightColorHandler(isDarkLight, "FFF" , "697C9A")}
               className="Informations__Container--join-date"> Joined {formatingDate} </p>
           
           <p className="Informations__Container--username">@{login}</p>
           
           <p  style={isDarkLightColorHandler(isDarkLight, "FFF" , "4B6A9B")}
               className="Informations__Container--profile-bio"> {bio}.</p>
           
           <div style={isDarkLightBGHandler(isDarkLight , "141D2F" , "FEFEFE")}
                className="Informations__Container--counters"> 
               <Counter title = "Repos" value={datas.public_repos} />
               <Counter title = "Followers" value={datas.followers} />
               <Counter title = "Following" value={datas.following} />
           </div>

           <div className="Informations__Container--links"> 
               <Links icon={IMAGES.location} title="user location" value="location"  text={datas.location ? datas.location : "Not Available"} />
               <Links icon={IMAGES.twitter} title="user location"  value="twitter_username" text={datas.twitter_username ? datas.twitter_username : "Not Available"} />
               <Links icon={IMAGES.website} title="user location"  value="blog"  text={datas.blog ? datas.blog : "Not Available"} />
               <Links icon={IMAGES.company} title="user location"  value="company"  text={datas.company == null ? "Not Available"  : datas.company  } />
           </div>
           
         </div>  
       </div> 

  
    )
}

export default Informations;