import styles from "./Infopage.module.css"

import planet from "/coral-reef.png"
import saveTheEarth from "/alert.png"
// import submarine from "/submarine.png"
import turtle from "/promotional.png"
import waterTemp from "/water-temperature.png"

import ScrollToTop from "../components/scrollToTop"
import ContinueBtn from "../components/ContinueBtn"
import BackBtn from "../components/backBtn"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Infopage3() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [percentScrolled, setPercentScrolled] = useState(0)

    const location = useLocation().pathname;
    useEffect(() => {
        const handlescroll = () => {
            const position = window.scrollY;
            setScrollPosition(position)
            const fullHeight = Math.round((window.innerHeight * 3) * 0.682);
            setPercentScrolled((position / fullHeight) * 100);
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
                        height: "201px",
                        width: "200px"
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
                        height: "20vh",
                        width: "40vw"
                    }} />



                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>The UN Environment Programme warns that all of the world's coral reefs could bleach by the end of the century if water temperatures continue to rise.
                            Coral bleaching happens when reefs lose their life-sustaining microscopic algae due to stress.
                            The last global coral bleaching event began in 2014 and lasted into 2017, affecting the Pacific, Indian, and Atlantic oceans.

                        </h3>
                    </div>
                    <br />

                </div>

                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>Rising temperatures increase the risk of irreversible loss of marine and coastal ecosystems.
                            Widespread changes include damage to coral reefs and mangroves that support ocean life, as well as species migrating to cooler latitudes and altitudes.
                        </h3>

                    </div>
                    <br />

                </div>

                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>The UN Educational, Scientific and Cultural Organization estimates that more than half of the world's marine species may face extinction by 2100.
                            At a 1.1°C increase in temperature, around 60 percent of the world's marine ecosystems have already been degraded or are being used unsustainably.
                            A 1.5°C temperature rise threatens to destroy 70 to 90 percent of coral reefs.
                            A 2°C temperature increase could lead to nearly 100 percent coral reef loss, reaching a point of no return.
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