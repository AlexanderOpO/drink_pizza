import React from 'react';
import M from './Main.module.css'
import About from "./components/About";
import Sliderimages from "./components/Slider";

const Main = () => {
    return (
        <div className={M.Main}>
            <Sliderimages/>
            <About/>
        </div>
    )
};

export default Main;
