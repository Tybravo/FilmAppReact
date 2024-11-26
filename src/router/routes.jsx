import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import FilmList from "../order/FilmList"

const routes = [

    {
        path :"/signup",
        element:  <SignUp/>
    },
    
    {
        path :"/login",
        element:  <Login/>
    }
    ,

    {
        path :"/filmlist",
        element:  <FilmList/>
    }
    ,

    {
        path :"/",
        element:  <SignUp/>
    }
]

export default routes;