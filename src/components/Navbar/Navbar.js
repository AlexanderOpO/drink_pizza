import React from 'react';
import styles from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import PRODUCTS_CONFIG from '@/const/products'

const Navbar = () => {

    return (
        <nav className={styles.root}>
            <NavLink className={styles.item} to={"/"}>
                Главная страница
            </NavLink>
            {
                PRODUCTS_CONFIG.map(({path, name}, index) => (
                    <NavLink 
                        className={styles.item}
                        to={`${path}`}
                        key={`nav-item_${index}`}>{name}</NavLink>
                ))
            }
            <NavLink className={styles.item}  to={"/reviews"}>
                Отзывы
            </NavLink>
            <NavLink className={styles.item} to={"/help_juzeppe"}>
                Помоги Джузеппе
            </NavLink>
            <NavLink className={styles.item} to={"/help_juzeppe"}>
                Добавить товар
            </NavLink>
        </nav>
    )
};

export default Navbar;
