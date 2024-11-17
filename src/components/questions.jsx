
import { useState, forwardRef, useImperativeHandle } from "react";
import BackBtn from "./backBtn";


export default function questions({ page }) {

    const questions = [{
        image: "pexels-pixabay-37403.webp",
        question: "Which option best represents the percentage of earth's oxygen prooduced by the ocean?",
        options: ["0%", "30%", "50%", "95%"],
        correct_answer: "50%",
        feedback: "According to many studies conducted, at least 50% of Earth's oxygen is produced by the ocean. The main contributing factor are tiny organisms called phytoplankton. However, there has been a decline in these organisms globally due to factors such as climate change, pollution, over-fishing, which can have devastating consequences."
    },
    {
        image: "pexels-jeremy-bishop-1260133-2397651.webp",
        question: "Which of the following option represents the major threat to marine biodiversity?",
        options: ["Overfishing", "Climate Change", "Plastic(s)", "All of the above"],
        correct_answer: "All of the above",
        feedback: "The answer is all of the above. These issues and more are mainly a result of human impact, and have harmed and devasted ecosystems all around the world. It is projected that in a few decades, the damages will be irreversible." +
            "<ul><ol>Here are some methods to help lessen the impact:</ol><li>Reduce Plastic Consumption: Use reusable bags, bottles, and containers. </li><li>Reduce Carbon Footprint: Use renewable energy resources and by reducing car travel by biking or using public transportation</li><li>Conserve Water: Reduce water consumption by taking shorter showers, or using less water in general to reduce energy and greenhouse gas emissions.</li></ul>"
    },
    {
        image: "pexels-yogendras31-2480807.webp",
        question: "What percentage of marine pollution comes from land-based sources?",
        options: ["30%", "50%", "60%", "80%"],
        correct_answer: "80%",
        feedback: "Over 80% of marine pollution comes from land based sources. These include: <li>Industrial waste from corporations leaking toxic chemicals, and other materials into waterways, destroying ecosystems. This is creating an alarming amount of deadzones where marine life can't live, due to the oxygen content.</li> <li>Plastic: Plastic items such as straws, bags, bottles, have had an innumerable impact on marine life</li>"
    },
    {
        image: "pexels-catherinesheila-2409022.webp",
        options: ["1 million tons", "8 million tons", "15 million tons", "30 million tons"],
        question: "How much plastic waste is estimated to enter the ocean every year?",
        correct_answer: "8 million tons",
        feedback: "It is estimated that 8 million tons of plastic waste enter the ocean each year."
    },
    {
        image: "marek-okon-tWWCqIMiUmg-unsplash.webp",
        question: "What percentage of global fish stocks are overexploited?",
        options: ["10%", "30%", "60%", "90%"],
        correct_answer: "60%",
        feedback: "Approximately, over 60% of global fish stocks are fully exploited or overexploited, threatening the sustainability of marine resources. Sustainable fishing practices are necessary to preserve marine life as 30% of marine life are endangered."
    }]

    const [displayResult, setDisplayResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]); // Track user-selected answers
    const [numnberOfCorrect, setNumberOfCorrect] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null)); // To track selected options for each question

    // Handle option selection
    const handleOptionClick = (questionIndex, option) => {
        const updatedSelections = [...selectedOptions];
        updatedSelections[questionIndex] = option;
        setSelectedOptions(updatedSelections);
    };

    // Tally the answers
    const handleSubmit = () => {
        const correctCount = questions.reduce((count, question, index) => {
            return count + (selectedOptions[index] === question.correct_answer ? 1 : 0);
        }, 0);
        setNumberOfCorrect(correctCount)

    };
    const submitted = () => {
        setDisplayResult(true);
        window.scrollTo({ top: 0, behavior: "smooth" });

        handleSubmit()
    };


    return (

        <div>
            <div className={`flex justify-center items-center w-full h-20 ${displayResult ? `` : `hidden`}`}>

                <div> {`You got ${numnberOfCorrect} out of ${questions.length} correct!`}</div>
            </div>
            {questions.map((Q, key) => (
                <div key={key} className="border rounded-lg mx-2 bg-blue-200 mb-10">
                    <div className="flex justify-center mt-2">
                        <img className="w-4/5" src={Q.image} alt={`Question ${key + 1}`} />
                    </div>

                    <div className="flex justify-center py-5 px-2">{Q.question}</div>
                    <div className="flex justify-center">
                        <div className="w-96 grid grid-cols-2 gap-x-16 gap-y-5">
                            {Q.options.map((option, i) => (
                                <div
                                    key={i}
                                    className={`w-40 h-14 border flex justify-center items-center rounded-lg mt-5 cursor-pointer ${selectedOptions[key] === option ? "bg-green-500 text-white" : "bg-blue-300"
                                        }`}
                                    onClick={() => handleOptionClick(key, option)}
                                >
                                    {option}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className={`flex flex-col justify-center items-center mt-5 ${displayResult ? " " : " hidden"}`}>
                        <div>Correct answer:{Q.correct_answer}</div>
                        <div className={`border border-2 rounded-lg w-4/5 mt-5 mb-5 `}>
                            {Q.feedback}
                        </div>
                    </div>
                </div>
            ))}


            <div className="flex justify-around items-center w-full h-20">
                <BackBtn page={page} />
                <button
                    className="bg-green-500 w-36 h-20 mb-10 rounded-lg"
                    onClick={submitted}
                >
                    Submit
                </button>
            </div>

        </div>

    )
}