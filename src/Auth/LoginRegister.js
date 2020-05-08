import React, {Component} from 'react';
import fire from "./Fire";

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Вход',
            loginBtn: true
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
    }

    getAction = action => {
        if (action === 'reg') {
            this.setState({formTitle: 'Регистрация нового пользователя', loginBtn: false, fireErrors: ''});
        } else {
            this.setState({formTitle: 'Авторизация', loginBtn: true, fireErrors: ''});
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        let errorNotification = this.state.fireErrors ?
            (<div className="Error"> {this.state.fireErrors} </div>) : null;

        let submitBtn = this.state.loginBtn ?
            (<input className="loginBtn" type="submit" onClick={this.login} value="Войти"/>) :
            (<input className="loginBtn" type="submit" onClick={this.register} value="Зарегистрироваться"/>);

        let login_register = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Регистрация</button>) :
            (<button className="registerBtn" onClick={() => this.getAction('login')}>Авторизация</button>)

        return (
            <div className="form">
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form>
                        <input type="text"
                               value={this.state.email}
                               onChange={this.handleChange}
                               name="email"/>
                        <input type="password"
                               value={this.state.password}
                               onChange={this.handleChange}
                               name="password"/>
                        {submitBtn}
                    </form>
                    {login_register}
                </div>
            </div>
        )
    }
}

export default LoginRegister;