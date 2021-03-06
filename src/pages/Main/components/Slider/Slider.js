import React, {Component} from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Main3 from '@/assets/images/main3.jpg'
import Main2 from '@/assets/images/main2.jpg'
import Main1 from '@/assets/images/main1.webp'
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
class Slider extends Component
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
                <SlickSlider{...Settings}>
                    {Photos.map((ph) => {
                            return (
                                <div>
                                <img width="900px" src={ph.p1} alt=""/>
                                </div>
                            )
                    })}
                </SlickSlider>
            </div>
    )
}}

export default Slider;
