import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Nav-header"
import { Header } from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {ItemListContainer} from "./components/ItemListContainer";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <ItemListContainer component={<Header/>}>
    </ItemListContainer>
    </>
    
);

