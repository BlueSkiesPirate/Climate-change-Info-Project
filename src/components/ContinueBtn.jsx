
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"

export default function ContinueBtn({page}){

const [nextPage, setNextPage] = useState('')
const [BtnText, setBtnText] = useState("")


useEffect(()=>{

    switch(page){
        case "/info":
            setNextPage("/info2")
            setBtnText("continue to 2/4")
        break;
        case "/info2":
            setNextPage("/info3")
            setBtnText("continue to 3/4")
        break;
        case "/info3":
            setNextPage("/info4")
            setBtnText("continue to 4/4")
        break;
        case "/info4":
            setNextPage("")
            setBtnText("continue to Quiz")
        break;
    }
},[])
    
    return(
        <>
        <Link to={nextPage}>
       <div className={`bg-green-600 relative bottom-10 h-10 w-40 flex justify-center  items-center rounded-r-lg`}
       >{/** left: 290 - (290 * (percentScrolled/ 100)) This makes it lag */}
        {BtnText}
        </div>
        </Link>
        
        </>
    )
}