
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(<>
    
    
    <div className={styles.container}>

       <Link to="/additionalInfo">
       <h2 className={styles.NavbarLink} >Additional Info</h2>
       </Link> 

        <h2 className={styles.NavbarLink}>References</h2>
        <Link to="/getInvolved">
       <h2 className={styles.NavbarLink} >Get Involved</h2>
       </Link> 
        

    </div>
    
    
    
    
    
    </>)
}