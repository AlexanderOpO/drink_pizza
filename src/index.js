import React from 'react';
import State, {AddReview, subscribe, updateNewReview} from "./State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App/App";

let RerenderEntireTree = (State) =>
{
    ReactDOM.render(
        <BrowserRouter>
            <App State={State} AddReview={AddReview} updateNewReview={updateNewReview}/>
        </BrowserRouter>,
        document.getElementById("root"))
}

RerenderEntireTree(State);

subscribe(RerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
