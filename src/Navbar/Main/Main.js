import React from 'react';
import M from './Main.module.css'
import About from "./About/About";
import Sliderimages from "./Popular/Sliderimages";

const Main = () => {
    return (
        <div className={M.Main}>
            <Sliderimages/>
            <About/>
        </div>
    )
};

export default Main;
