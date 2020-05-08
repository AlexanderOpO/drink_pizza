import React from 'react';
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import styles from './App.module.css';
import Deserts from "../pages/Deserts/Deserts";
import Drinks from "../pages/Drinks/Drinks";
import Pizzas from "../pages/Pizzas/Pizzas";
import Reviews from "../pages/Reviews/Reviews";
import {Route} from "react-router-dom";
import Souces from "../pages/Souces/Souces";
import Salads from "../pages/Salads/Salads";
import Main from "../pages/Main/Main";
import HelpJUZEPPE from "../components/HelpJUZEPPE/HelpJUZEPPE";
import Auth from "@/pages/Auth"


const App = (props) => {
    return (
        <div className={styles.app}>
            <Header/>
            <Navbar/>
            <div className={styles.Path}>
                <Route path='/login' render={
                    () => <Auth />} />
                <Route path='/' exact="true" render={
                    () => <Main/>}/>
                <Route path='/deserts' render={
                    () => <Deserts Deserts={props.State.Deserts} />} />
                <Route path='/drinks' render={
                    () => <Drinks Drinks={props.State.Drinks}/>}/>
                <Route path='/salads' render={
                    () => <Salads Salads={props.State.Salads}/>}/>
                <Route path='/souces' render={
                    () => <Souces Souces={props.State.Souces}/>}/>
                <Route path='/pizzas' render={
                    () => <Pizzas Pizzas={props.State.Pizzas}/>}/>
                <Route path='/reviews' render={
                    () => <Reviews Reviews={props.State.Reviews}
                                   AddReview={props.AddReview}
                       updateNewReview={props.updateNewReview}/>}/>
                <Route path='/help_juzeppe' render={
                    () => <HelpJUZEPPE/>}/>

            </div>
        </div>
    )
};

export default App;
