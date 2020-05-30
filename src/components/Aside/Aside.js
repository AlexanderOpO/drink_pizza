import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import classnames from "classnames";
import styles from './Aside.module.scss'
import Navbar from '@/components/Navbar'
import { withRouter } from "react-router-dom";
import { updateUserState } from '../../actions/user'

const Aside = (props) => {
    const onLogin = () => {
        props.history.push('/login')
    }
    const toBasket = () => {
        props.history.push('/shoppingbasket')
    }
    const onLogout = () => {
        props.updateUserState(null)
    }

    return (
        <div className={styles.root}>
            {
                !props.user ?
                    <button className={styles.button} onClick={onLogin}>Войти</button> : 
                    <p className={styles.actions}>
                        <span>Здравствуйте, {props.user.name}!&nbsp;</span>
                        <span className={styles['actions-logout']} onClick={onLogout}>Хотите выйти?</span>
                    </p>
            }
            <button className={classnames([styles.button, styles["button-basket"]])} onClick={toBasket}>Корзина ({props.basket.length})</button>
            <h1 className={styles.logo} onClick={() => props.history.push('/')}>Хочу<br/> наПИЦЦА </h1>
            <Navbar />
        </div>
    )
}
const mapStateToprops = state =>({
    basket: state.basket,
    user: state.user
})
export default connect(mapStateToprops, { updateUserState })(withRouter(Aside))
