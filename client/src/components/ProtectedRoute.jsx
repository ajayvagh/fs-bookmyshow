import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/users"

function ProtectedRoute ({ children }) {
    const navigate = useNavigate();
    // logic for validating token and redirection to home page

    const getValidUser = async () => {
        try {
            const response = await GetCurrentUser();
            console.log(response);
        } catch (error) {
            console.log("Error in Protected Route jsx")
            console.log(error)
            // navigate('/login')
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
            {children}
        </div>
    )

}

export default ProtectedRoute;