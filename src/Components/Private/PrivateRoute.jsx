
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { myContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
const{user,loading}=useContext(myContext)
const location=useLocation()
if(loading){
    return <span className="loading loading-spinner text-success"></span>
}
if(user){
    return children;
}

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;