import React, {Component} from 'react';
import H from './Header.module.css'
import {NavLink, Route, withRouter} from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import fire from "../../pages/Auth/firebase";
import Main from "../../pages/Main/Main";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        fire.auth().signOut()
    }
    onLogIn() {
        // this.
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className={H.head}>
                <div className={H.text}>
                    <h1>Хочу наПИЦЦА </h1>
                </div>
                <div className={H.Aut}>
                    <button className="InputBtn" onClick={this.onLogIn.bind(this)}>Войти</button>
                </div>
                {/* {this.state.isInputButton  ?  <Main/> : <Auth/> } */}
            </div>
        )
    }
}

export default withRouter(Header);
