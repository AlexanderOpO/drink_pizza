import React, {Component} from 'react';
import H from './Header.module.css'
import {NavLink, Route} from "react-router-dom";
import Aut from "../Aut/Aut";
import fire from "../Aut/Fire";
import Main from "../Navbar/Main/Main";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isInputButton: true
        }
    }
    logout = () =>
    {
        fire.auth().signOut()
    }
     onLogIn = () => {
        this.setState({ isInputButton: !this.state.isInputButton })
    }
    render()
    {
        return (
            <div className={H.head}>
                <div className={H.text}>
                    <h1>Хочу наПИЦЦА </h1>
                </div>
                <div className={H.Aut}>
                    <button className="InputBtn" onClick={this.onLogIn.bind(this)}>Войти</button>
                </div>
                {this.state.isInputButton  ?  <Main/> : <Aut/> }
            </div>
        )
    }
}

export default Header;
