
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function BackBtn({ page }) {

    const [lastPage, setLastPage] = useState('')



    useEffect(() => {

        switch (page) {
            case "/info":
                setLastPage("/")
                break;
            case "/info2":
                setLastPage("/info")
                break;
            case "/info3":
                setLastPage("/info2")
                break;
            case "/info4":
                setLastPage("/info3")
                break;
            case "/quiz":
                setLastPage("/")
                break;
        }
    }, [])

    return (
        <>
            <Link to={lastPage}>
                <div className={`bg-green-600 relative bottom-10 h-10 w-40 flex justify-center  items-center rounded-l-lg`}
                >{/** left: 290 - (290 * (percentScrolled/ 100)) This makes it lag */}
                    Go back
                </div>
            </Link>

        </>
    )
}