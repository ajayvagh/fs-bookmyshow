import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/users"
import { useState } from "react";
import { message } from "antd";


function ProtectedRoute ({ children }) {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // logic for validating token and redirection to home page

    const getValidUser = async () => {
        try {
            const response = await GetCurrentUser();
            console.log(response);
            setUser(response.data);
        } catch (error) {
            console.log("Error in Protected Route jsx")
            message.error(error.message);
            navigate('/login')
        }
    }

    useEffect( () => {
        if(localStorage.getItem('token')){
            getValidUser();
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <div>
                {user.name}
            </div>
            {children}
        </div>
    )

}

export default ProtectedRoute;