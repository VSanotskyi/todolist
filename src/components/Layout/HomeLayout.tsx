import {Outlet} from "react-router";

const HomeLayout = () => {
    return (
        <>
            <p>Home header</p>
            <Outlet/>
        </>
    );
};

export default HomeLayout;