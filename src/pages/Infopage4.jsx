import styles from "./Infopage.module.css"

import planet from "/shield.png"
import saveTheEarth from "/absorption.png"
// import submarine from "/submarine.png"
import turtle from "/coral.png"
import waterTemp from "/sea-level.png"

import ScrollToTop from "../components/scrollToTop"
import ContinueBtn from "../components/ContinueBtn"
import BackBtn from "../components/backBtn"


import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Infopage4() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [percentScrolled, setPercentScrolled] = useState(0)

    const location = useLocation().pathname;
    useEffect(() => {
        const handlescroll = () => {
            const position = window.scrollY;
            setScrollPosition(position)
            const fullHeight = window.innerHeight * 3;
            setPercentScrolled((position / 1835) * 100); /**The 1870 represents the MAX Height */
        }
        window.addEventListener("scroll", handlescroll)



        return () => {
            window.removeEventListener("scroll", handlescroll)
        }
    })
    return (
        <>
            <ScrollToTop />
            <div className={styles.background}>

                <div className={`${styles.progressbarBackground} bg-slate-700 fixed z-10`}
                    style={{ top: scrollPosition < 40 ? 50 - scrollPosition : 10 }} >

                    <div className={`${styles.progressbar} bg-teal-500`}
                        style={{ width: `${percentScrolled}%` }}></div>
                </div>


                <img className={`${styles.image} ${styles.img1}`} src={planet}
                    style={{
                        height: "301px",
                        width: "300px"
                    }} />

                <img className={`${styles.image} ${styles.img2}`} src={saveTheEarth}
                    style={{
                        height: " ",
                        width: "50vw"
                    }} />
                {/* <img className={`${styles.image} ${styles.img3}`} src={submarine}
                    style={{
                        height: "20vh",
                        width: "40vw"
                    }} /> */}

                <img className={`${styles.image} ${styles.img4}`} src={turtle}
                    style={{
                        height: "20vh",
                        width: "40vw"
                    }} />
                <img className={`${styles.image} ${styles.img5}`} src={waterTemp}
                    style={{
                        top: "265vh",
                        height: "25vh",
                        width: "50vw"
                    }} />



                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>The ocean absorbs both carbon dioxide and heat as greenhouse gas levels rise.
                            Dissolving carbon dioxide makes ocean water more acidic, hindering the ability of corals and some marine life to grow shells and protect themselves.
                        </h3>
                    </div>
                    <br />

                </div>

                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>Marine heatwaves exacerbate the issue by creating temperatures too warm for many corals to survive.
                            Satellites provide crucial data for scientists to monitor these changes in marine ecosystems.
                            When corals are stressed by environmental changes, they turn white, or "bleach."
                            Corals may sometimes recover from bleaching, but in other cases, the event results in their death.
                            An image referenced shows the decay of a healthy coral reef to a damaged reef between 2014 and 2015 in the National Marine Sanctuary of American Samoa (Credit: NOAA/XL Catlin Seaview Survey).
                        </h3>
                    </div>
                    <br />

                </div>

                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>Global sea levels have risen more than 4 inches (101 millimeters) since 1992, contributing to increased coastal flooding in some areas.
                            As ocean water warms, it expands, taking up more space and rising sea levels.
                            Added heat in the air and ocean melts ice sheets and glaciers, introducing more freshwater and further increasing sea levels.
                        </h3>
                    </div>
                    <br />

                </div>
                <div className="flex justify-space-around ">
                    <BackBtn page={location} />
                    <div className="w-0.5"></div>
                    <ContinueBtn page={location} />
                </div>
            </div>
        </>
    )
}