import { useState } from "react";
import Questions from "../components/questions";

export default function Quiz() {



    return (
        <div className="w-screen h-screen bg-white pt-20">
            <div className="flex justify-center items-center w-full h-20">
                <h1 className="text-5xl">Quiz</h1>
            </div>

            <div className="w-full">
                {/* Pass setUserAnswers to Questions */}
                <Questions />
            </div>



        </div>
    );
}
