import React from 'react'
import styles from './Aside.module.scss'
import Navbar from '@/components/Navbar'
import { withRouter } from "react-router-dom";

const Aside = (props) => {
    const onLogin = () => {
        this.props.history.push('/login')
    }
    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={onLogin}>Войти</button>
            <h1 className={styles.logo} onClick={() => props.history.push('/')}>Хочу<br/> наПИЦЦА </h1>
            <Navbar />
        </div>
    )
}

export default withRouter(Aside)
