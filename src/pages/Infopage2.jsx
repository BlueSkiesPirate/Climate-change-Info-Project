import styles from "./Infopage.module.css"

import heating from "/heating.png"
import planet_earth from "/planet-earth.png"
// import submarine from "/"
import pollution from "/pollution.png"
import water_plution from "/water-pollution.png"

import ScrollToTop from "../components/scrollToTop"
import ContinueBtn from "../components/ContinueBtn"
import BackBtn from "../components/backBtn"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Infopage2() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [percentScrolled, setPercentScrolled] = useState(0)

    const location = useLocation().pathname;
    useEffect(() => {
        const handlescroll = () => {
            const position = window.scrollY;
            setScrollPosition(position)

            // const fullHeight = window.innerHeight * 3;
            setPercentScrolled((position / 1835) * 100);
        }
        window.addEventListener("scroll", handlescroll)

        return () => {
            window.removeEventListener("scroll", handlescroll)
        }

    }, [])


    return (
        <>

            <ScrollToTop />
            <div className={styles.background}>

                <div className={`${styles.progressbarBackground} bg-slate-700 fixed z-10`}
                    style={{ top: scrollPosition < 40 ? 50 - scrollPosition : 10 }} >

                    <div className={`${styles.progressbar} bg-teal-500`}
                        style={{ width: `${percentScrolled}%` }}></div>
                </div>


                <img className={`${styles.image} ${styles.img1}`} src={heating}
                    style={{
                        height: "201px",
                        width: "201px"
                    }} />

                <img className={`${styles.image} ${styles.img2}`} src={planet_earth}
                    style={{
                        height: " ",
                        width: "50vw"
                    }} />
                {/* <img className={`${styles.image} ${styles.img3}`} src={submarine}
                    style={{
                        height: "20vh",
                        width: "40vw"
                    }} /> */}

                <img className={`${styles.image} ${styles.img4}`} src={water_plution}
                    style={{
                        height: "20vh",
                        width: "40vw"
                    }} />
                <img className={`${styles.image} ${styles.img5}`} src={pollution}
                    style={{
                        height: "20vh",
                        width: "40vw"
                    }} />



                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>Sea-level rise, combined with intensifying tropical cyclones, has worsened extreme events such as storm surges and coastal hazards like flooding, erosion, and landslides.
                        </h3>
                    </div>
                    <br />

                </div>


                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>These extreme events, which used to occur once per century, are now projected to happen at least once a year in many locations.
                            The IPCC reports that regions such as the western Tropical Pacific, the South-west Pacific, the North Pacific, the South-west Indian Ocean, and the South Atlantic are experiencing substantially faster sea-level rise.

                        </h3>
                    </div>
                    <br />

                </div>

                <div className={styles.section} >
                    <div className={styles.container}>
                        <div className={styles.headingText}>information</div>
                        <h3 className={styles.infoText}>Marine heatwaves have doubled in frequency and have become longer-lasting, more intense, and extensive. The IPCC states that human influence has been the main driver of ocean heat increase since the 1970s. Most marine heatwaves occurred between 2006 and 2015, leading to widespread coral bleaching and reef degradation. In 2021, nearly 60 percent of the world's ocean surface experienced at least one marine heatwave.
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