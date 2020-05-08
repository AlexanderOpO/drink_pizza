import React, {Component} from 'react';
import './Aut.css'
import LoginRegister from "./LoginRegister";
import Main from "../Navbar/Main/Main";
import fire from "./Fire";
import App from "../App/App";


export default class Aut extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({user});
                } else {
                    this.setState({user: null});
                }
            }
        );
    }
    render() {
        return (
            <div>
                {this.state.user ? (<App/>) : (<LoginRegister/>)}
            </div>
        );
    }
}
