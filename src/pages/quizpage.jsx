
import { useLocation } from "react-router-dom";
import Questions from "../components/questions";
import { useEffect } from "react";
import ScrollToTop from "../components/scrollToTop"

export default function Quiz() {

    const location = useLocation().pathname;



    return (<>

        <ScrollToTop />
        <div className="w-screen h-screen bg-white pt-20">
            <div className="flex justify-center items-center w-full h-20">
                <h1 className="text-5xl">Quiz</h1>
            </div>

            <div className="w-full">
                {/* Pass setUserAnswers to Questions */}
                <Questions page={location} />
            </div>



        </div>
    </>
    );
}
