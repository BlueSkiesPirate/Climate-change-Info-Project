import styles from "./Infopage.module.css"
import planet from "/planet.png"
import saveTheEarth from "/save-the-earth.png"
import submarine from "/submarine.png"
import turtle from "/turtle.png"
import waterTemp from "/water-temperature.png"
import ScrollToTop from "../components/scrollToTop"
import ContinueBtn from "../components/ContinueBtn"
import BackBtn from "../components/backBtn"

import { useEffect, useState} from "react"
import { useLocation } from "react-router-dom"

export default function Infopage4(){

const [scrollPosition, setScrollPosition] = useState(0);
const [percentScrolled, setPercentScrolled] = useState(0)

const location = useLocation().pathname;
useEffect(() =>{
    const handlescroll =() =>{
        const position = window.scrollY;
        setScrollPosition(position)
        const fullHeight = window.innerHeight * 3;
        setPercentScrolled((position /1870) * 100); /**The 1870 represents the MAX Height */
    }
    window.addEventListener("scroll", handlescroll)

  

    return () =>{
        window.removeEventListener("scroll", handlescroll)
    }
})
    return(
        <>
        <ScrollToTop/>
        <div className={styles.background}>

            <div className={`${styles.progressbarBackground} bg-slate-700 fixed z-10`}
            style={{top: scrollPosition < 40 ? 50 - scrollPosition : 10 }} >

                <div className={`${styles.progressbar} bg-teal-500`}
                style={{width: `${percentScrolled}%`}}></div>
            </div>


        <img  className={`${styles.image} ${styles.img1}`} src={planet} 
        style={{
            height:"301px", 
            width: "300px"
            }}/>

        <img  className={`${styles.image} ${styles.img2}`} src={saveTheEarth} 
        style={{
            height:" ", 
            width: "50vw"
            }}/>
                    <img  className={`${styles.image} ${styles.img3}`} src={submarine} 
        style={{
            height:"20vh", 
            width: "40vw"
            }}/>
       
       <img  className={`${styles.image} ${styles.img4}`} src={turtle} 
        style={{
            height:"20vh", 
            width: "40vw"
            }}/>
               <img  className={`${styles.image} ${styles.img5}`} src={waterTemp} 
        style={{
            height:"20vh", 
            width: "40vw"
            }}/>
       
       
       
        <div className={styles.section} >
            <div className={styles.container}>
               <div className={styles.headingText}>information</div> 
               <h3 className={styles.infoText}>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and 
                 scrambled it to make a type specimen book. It has 
                 survived not only five centuries</h3>
            </div>
            <br/>

       </div>

       <div className={styles.section} >
            <div className={styles.container}>
               <div className={styles.headingText}>information</div> 
               <h3 className={styles.infoText}>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and 
                 scrambled it to make a type specimen book. It has 
                 survived not only five centuries</h3>
            </div>
            <br/>

       </div>

       <div className={styles.section} >
            <div className={styles.container}>
               <div className={styles.headingText}>information</div> 
               <h3 className={styles.infoText}>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and 
                 scrambled it to make a type specimen book. It has 
                 survived not only five centuries</h3>
            </div>
            <br/>

       </div>
       <div className="flex justify-space-around ">
       <BackBtn page={location}/>
       <div className="w-0.5"></div>
       <ContinueBtn page={location}/>
       </div>
       </div>
        </>
    )
}