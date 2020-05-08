import React from 'react';
import NB from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Reviews from "../../pages/Reviews/Reviews";

const Navbar = () => {

    return (
        <nav className={NB.N}>
            <div className={NB.Nav}>
                <NavLink className={NB.N1} to={"/"}>
                    Главная страница
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1} to={"/pizzas"}>
                    Пиццы
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1} to={"/deserts"}>
                    Десерты
                </NavLink>
                <br/>
                <br/>
                <NavLink  className={NB.N1} to={"/drinks"}>
                    Напитки
                </NavLink>
                <br/>
                <br/>
                <NavLink  className={NB.N1} to={"/salads"}>
                    Салаты
                </NavLink>
                <br/>
                <br/>
                <NavLink  className={NB.N1} to={"/souces"}>
                    Соусы
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1}  to={"/reviews"}>
                     Отзывы
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1} to={"/help_juzeppe"}>
                    Помоги Джузеппе
                </NavLink>
                <br/>
                <br/>
            </div>
        </nav>
    )
};

export default Navbar;
