import React, { useState } from 'react';
import './Slider.css';
import Slide from './Slide'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'

export default function Slider(){
    const [currentIndex,setIndex] = useState(0);
    const [translateValue,setTranslate] = useState(0);

    const images= [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ]

    let goToPrevSlide = () => {
    
    }
    
    let goToNextSlide = () => {

        if(currentIndex === images.length - 1) {
            setIndex(0)
            setTranslate(0)
            return
          }

        setIndex(currentIndex+1)
        setTranslate(translateValue + -(slideWidth))
    }
    let slideWidth = () => {
        return document.querySelector('.slide').clientWidth
     }

    



    return(
        <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>
                <RightArrow goToNextSlide={goToNextSlide}/>
                <LeftArrow goToPrevSlide={goToPrevSlide}/>
      </div>
    )
}