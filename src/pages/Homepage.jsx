import styles from './Homepage.module.css';
import downShevron from "../../public/chevron-double-down.png"
import { useState } from 'react';

import { Link } from 'react-router-dom';


export default function Homepage() {

    const [state, setState] = useState("")
    const [canContinue, setCancontinue] = useState(true)

    function stateAdded(event) {
        const state = event.target.value;
        if (state != "---") {
            setState(state)
            setCancontinue(true)
        }


    }
    {/* 
    if state has changed then animate the shevron(give the animated class) and set state to the chosen state
    */}

    return (<>
        <div className={styles.background}>


            <div className={styles.main}>


                <div className={`${styles.centeredDiv} flex flex-col items-center`}>

                    <h1 className={styles.greeting}>Welcome</h1>
                    <p className={styles.info}>Let's learn about</p>
                    <p className={styles.info}>climate change</p>
                </div>

                <div className={`${styles.centeredDiv} my-10 text-2xl`}>
                    <p>This app is best on mobile</p>
                    {/* <p className={styles.info}>  to continue, <br />
                        pick your state:</p>
                    <form >
                        <label for="state"></label>
                        <select className={styles.pickState} id="state" name="state" onChange={stateAdded}> <option value="---">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
                    </form> */}

                </div>

            </div>
            <div className={styles.continueDiv}>

                <img className={`${styles.ContinueImg} ${canContinue ? styles.animateContinue : styles.noDisplay}`} src={downShevron} />
                <Link to="/info"><h3 className={`${styles.info} ${styles.continueText} ${canContinue ? " " : styles.noDisplay}`}>continue</h3></Link>
            </div>
        </div>
    </>)
}