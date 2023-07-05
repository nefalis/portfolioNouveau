import { useState } from 'react';
import './carousel.css';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";




const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0); //1er slide (0)
    const length = pictures.length;

    const goPrevious = () => {
        const isFirst = currentIndex === 0;

        // va dernier slide quand 1er
        const newIndex = isFirst ? length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goNext = () => {
        const isLast = currentIndex === length - 1;

        // va 1er quand dernier
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className='slideshowContainer'>

            <img className='imgSlideshow'
                src={pictures[currentIndex]} alt={currentIndex}>
            </img>

            <div className='leftArrow'>
                <div className={pictures.length}  onClick={goPrevious}> <FaArrowAltCircleLeft/> </div>
                    
            </div>

            <div className='rightArrow'>
                <div className={pictures.length} onClick={goNext}> <FaArrowAltCircleRight/> </div>
            </div>

        </div >

    )
}

export default Carousel;