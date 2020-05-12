import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "@/assets/styles/index.scss"
import styles from "./App.module.css";
import ProductPage from '@/pages/Products'
import PRODUCT_CONFIG from '@/const/products' 
import Reviews from "@/pages/Reviews";
import { Route } from "react-router-dom";
import Main from "@/pages/Main";
import HelpJUZEPPE from "@/components/HelpJUZEPPE";
import Auth from "@/pages/Auth"
import Aside from "@/components/Aside"
import ShoppingBasket from "@/pages/ShoppingBasket"
import {Provider} from "react-redux";
import store from '../store.js';

const App = (props) => {
    return (
        <Provider store={store}> 
        <div className={styles.app}>
            <Aside />
            <div className={styles.Path}>
                <Route path='/login' render={
                    () => <Auth />} />
                <Route path='/' exact={true} render={
                    () => <Main/>}/>
                    <Route path='/shoppingbasket' render={
                    () => <ShoppingBasket/>}/>
                {
                    PRODUCT_CONFIG.map(({path, data, name}, index) => (
                        <Route  path={`${path}`}
                                exact={true}
                                key={`route_${index}`}
                                render={() => <ProductPage productsList={data} title={name}/>} />
                    ))
                }
                <Route path='/reviews' render={
                    () => <Reviews  Reviews={props.State.Reviews}
                                    AddReview={props.AddReview}
                                    updateNewReview={props.updateNewReview}/>}/>
                <Route path='/help_juzeppe' render={
                    () => <HelpJUZEPPE/>}/>
            </div>
        </div>
        </Provider>
    )  
};

export default App;
