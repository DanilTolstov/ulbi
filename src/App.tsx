import React, {Suspense, useContext, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Counter from "./components/Counter";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";

const App = () => {

    const {theme, toggleTheme} = useTheme()


    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>change theme!</button>
            <Link to={"./"}>Главная</Link>
            <Link to={"./about"}>О сайте</Link>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            asdasdASFASFa
            <Counter/>
        </div>
    );
};

export default App;
