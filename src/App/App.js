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


const App = (props) => {
    return (
        <div className={styles.app}>
            <Aside />
            <div className={styles.Path}>
                <Route path='/login' render={
                    () => <Auth />} />
                <Route path='/' exact={true} render={
                    () => <Main/>}/>
                {
                    PRODUCT_CONFIG.map(({path, data, name}, index) => (
                        <Route  path={`${path}`}
                                exact={true}
                                key={`route_${index}`}
                                render={() => <ProductPage productsList={data} title={name} />} />
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
    )
};

export default App;
