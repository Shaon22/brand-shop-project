import { Outlet } from "react-router-dom";
import Navbar from "../Others/Navbar";
import Footer from "../Others/Footer";

const Root = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;