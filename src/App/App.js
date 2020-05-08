import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import A from './App.module.css';
import Deserts from "../Navbar/Deserts/Deserts";
import Drinks from "../Navbar/Drinks/Drinks";
import Pizzas from "../Navbar/Pizzas/Pizzas";
import Reviews from "../Navbar/Reviews/Reviews";
import {Route} from "react-router-dom";
import Souces from "../Navbar/Souces/Souces";
import Salads from "../Navbar/Salads/Salads";
import Main from "../Navbar/Main/Main";
import HelpJUZEPPE from "../HelpJUZEPPE/HelpJUZEPPE";



const App = (props) => {
    return (
        <div className={A.app}>
            <Header/>
            <Navbar/>
            <div className={A.Path}>
                <Route path='/Main' render={
                    () => <Main/>}/>
                <Route path='/Deserts' render={
                    () => <Deserts Deserts={props.State.Deserts}/>}/>
                <Route path='/Drinks' render={
                    () => <Drinks Drinks={props.State.Drinks}/>}/>
                <Route path='/Salads' render={
                    () => <Salads Salads={props.State.Salads}/>}/>
                <Route path='/Souces' render={
                    () => <Souces Souces={props.State.Souces}/>}/>
                <Route path='/Pizzas' render={
                    () => <Pizzas Pizzas={props.State.Pizzas}/>}/>
                <Route path='/Reviews' render={
                    () => <Reviews Reviews={props.State.Reviews}
                                   AddReview={props.AddReview}
                       updateNewReview={props.updateNewReview}/>}/>
                <Route path='/HelpJUZEPPE' render={
                    () => <HelpJUZEPPE/>}/>

            </div>
        </div>
    )
};

export default App;
