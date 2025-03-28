import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="lg:px-20 px-2">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;