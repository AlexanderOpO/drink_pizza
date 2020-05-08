import React, {Component} from 'react';
import styles from './Header.module.css'
import {NavLink, Route, withRouter} from "react-router-dom";
import Auth from "@/pages/Auth";
import fire from "@/pages/Auth/firebase";
import Main from "@/pages/Main";

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
            <div className={styles.head}>
                <div className={styles.text}>
                    <h1>Хочу наПИЦЦА </h1>
                </div>
                <div className={styles.Aut}>
                    <button className={styles.button} onClick={this.onLogIn.bind(this)}>Войти</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
