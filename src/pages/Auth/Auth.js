import React, { useEffect, useState } from 'react';
import AuthApi from "@/api/auth";
import { withRouter } from "react-router-dom"
import styles from './Auth.module.scss'
import { updateUserState } from '../../actions/user'
import { connect } from 'react-redux'

const Auth = props => {
    const [isRegMode, setRegMode] = useState(false)

    useEffect(() => {
        if (props.user) {
            props.history.replace('/')
        }
    }, [props.user])

    const onSubmit = async e => {
        e.preventDefault()
        const { name, email, password } = e.target;

        if (isRegMode) {
            await AuthApi.register({
                name: name.value,
                email: email.value,
                password: password.value
            }).then(({ data }) => {
                props.updateUserState({
                    name: data.name,
                    email: data.email,
                })
            }).catch(res => {
                props.updateUserState(null)
            })
        } else {
            await AuthApi.login({
                email: email.value,
                password: password.value
            }).then(({ data }) => {
                props.updateUserState({
                    name: data.name,
                    email: data.email,
                })
            }).catch(res => {
                props.updateUserState(null)
            })
        }
    }

    return (
        <div className={styles.root}>
            <form onSubmit={onSubmit} className={styles.form}>
                <h5>{!isRegMode ? "Вход" : "Регистрация"}</h5>
                {isRegMode && <input name="name" type="name" placeholder="Имя" />}
                <input name="email" type="text" placeholder="E-mail" />
                <input name="password" type="password" placeholder="Пароль" />
                <div className={styles["form-actions"]}>
                    <button className={styles.modeButton} onClick={() => setRegMode(!isRegMode)}>{!isRegMode ? "Регистрация" : "Вход"}</button>
                    <button className={styles.submitButton} type="submit">{!isRegMode ? "Войти" : "Зарегистрироваться"}</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { updateUserState })(withRouter(Auth));