import React from 'react'
import styles from './Aside.module.scss'
import Navbar from '@/components/Navbar'
import { withRouter } from "react-router-dom";

const Aside = (props) => {
    const onLogin = () =>
     {
        props.history.push('/login')
    }
    const toBasket = () =>
    {
        props.history.push('/shoppingbasket')
    }
    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={onLogin}>Войти</button>
            <button className={styles.buttonBasket} onClick={toBasket}>Корзина</button>
            <h1 className={styles.logo} onClick={() => props.history.push('/')}>Хочу<br/> наПИЦЦА </h1>
            <Navbar />
        </div>
    )
}

export default withRouter(Aside)
