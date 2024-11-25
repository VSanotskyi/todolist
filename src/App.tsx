import {Route, Routes} from "react-router";

import MainPage from "@pages/MainPage.tsx";
import SignInPage from "@pages/SignInPage.tsx";
import SignUpPage from "@pages/SignUpPage.tsx";
import HomePage from "@pages/HomePage.tsx";
import RouteNotFoundPage from "@pages/RouteNotFoundPage.tsx";

import MainLayout from "@components/Layout/MainLayout.tsx";
import HomeLayout from "@components/Layout/HomeLayout.tsx";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={'/sign-in'} element={<SignInPage/>}/>
                <Route path={'/sign-up'} element={<SignUpPage/>}/>
            </Route>
            <Route path={'/home'} element={<HomeLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
            <Route path={'*'} element={<RouteNotFoundPage/>}/>
        </Routes>
    );
};

export default App;