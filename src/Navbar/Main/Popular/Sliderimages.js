import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Main3 from '../../../images/main3.jpg'
import Main2 from '../../../images/Main2.jpg'
import Main1 from '../../../images/main1.webp'
import './Slider.css'

const Photos = [
    {
        p1: Main3
    },
    {
        p1: Main2
    },
    {
        p1: Main1
    }
]
class Sliderimages extends Component
{
    render() {
    const Settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides",
        autoplay: true
    }
    return(
            <div className="Slider">
                <Slider{...Settings}>
                    {Photos.map((ph) => {
                            return (
                                <div>
                                <img width="900px" src={ph.p1} alt=""/>
                                </div>
                            )
                    })}
                </Slider>
            </div>
    )
}}
export default Sliderimages;
