import React from 'react';
import NB from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Reviews from "./Reviews/Reviews";

const Navbar = () => {

    return (
        <nav className={NB.N}>
            <div className={NB.Nav}>
                <NavLink className={NB.N1} to={"/Main"}>
                    Главная страница
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1} to={"/Pizzas"}>
                    Пиццы
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1} to={"/Deserts"}>
                    Десерты
                </NavLink>
                <br/>
                <br/>
                <NavLink  className={NB.N1} to={"/Drinks"}>
                    Напитки
                </NavLink>
                <br/>
                <br/>
                <NavLink  className={NB.N1} to={"/Salads"}>
                    Салаты
                </NavLink>
                <br/>
                <br/>
                <NavLink  className={NB.N1} to={"/Souces"}>
                    Соусы
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1}  to={"/Reviews"}>
                     Отзывы
                </NavLink>
                <br/>
                <br/>
                <NavLink className={NB.N1} to={"/HelpJUZEPPE"}>
                    Помоги Джузеппе
                </NavLink>
                <br/>
                <br/>
            </div>
            </nav>
            )
            };

            export default Navbar;
