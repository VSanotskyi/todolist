import {Outlet} from "react-router";


const MainLayout = () => {
    return (
        <>
            <p>Header</p>
            <Outlet/>
        </>
    );
};

export default MainLayout;