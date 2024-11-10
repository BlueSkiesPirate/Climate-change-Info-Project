import { useEffect } from "react"

export default  function scrollToTop(){

    useEffect(()=>{
            window.scrollTo({top:0, behavior :"smooth"})  
    },[])
    
   return null
}