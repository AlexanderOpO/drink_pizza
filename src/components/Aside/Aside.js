import React, { useEffect } from 'react'
import styles from './Aside.module.scss'
import Navbar from '@/components/Navbar'
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { getNumbers } from '../../actions/getAction.js';

const Aside = (props) => {
    console.log(props);
    useEffect(()=>{
        getNumbers();
    },[]);
    const onLogin = () => {
        props.history.push('/login')
    }
    const toBasket = () => {
        props.history.push('/shoppingbasket')
    }
    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={onLogin}>Войти</button>
            <button className={styles.buttonBasket} onClick={toBasket}>Корзина {props.basketProps.basketNumbers}
            </button>
            <h1 className={styles.logo} onClick={() => props.history.push('/')}>Хочу<br/> наПИЦЦА </h1>
            <Navbar />
        </div>
    )
}
const mapStateToprops = state =>({
    basketProps: state.basketState
})
export default connect (mapStateToprops, {getNumbers}) (withRouter(Aside))
