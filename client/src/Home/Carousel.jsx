import "./Carousel.css"
import {useState} from "react"
const Carousel = () => {
    const [isActive,setIsActive] = useState(1)

    const handleClick = (action) =>{
        setIsActive((prev) => {
            if(action === "prev" && prev === 1) return 3
            if(action === "next" && prev === 3) return 1

            const offset = action === "next" ? 1 : -1
            return prev + offset
        })
    }
    return (
        <>
            <section aria-label = "Newest Photos">
                <div className="carousel">
                    <button onClick={() => handleClick("prev")} className="carousel-button prev">&#8656;</button>
                    <button onClick={() =>handleClick("next")} className="carousel-button next">&#8658;</button>
                <ul>
                    <li className={isActive === 1 ? "slide active" : "slide" }>
                        <img src='./assets/MiamiHurricanes.webp' alt="Picture of Carson Beck" style={{height:"500px"}} />
                    </li>
                    <li className={isActive === 2 ? "slide active" : "slide" }>
                        <img src='./assets/WiltChamberlain.webp' alt="Picture of Wilt Chamberlain" />
                    </li>
                    <li className={isActive === 3 ? "slide active" : "slide" }>
                        <img src='./assets/PeteRose.jpg' alt="Picture of Pete Rose" />
                    </li>
                </ul>
                </div>
            </section>
        </>
    )
}

export default Carousel