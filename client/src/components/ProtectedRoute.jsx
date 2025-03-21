import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/users"
import { useState } from "react";
import { message, Menu, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";

function ProtectedRoute({ children }) {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const navItems = [
        {
            label: "Home",
            icon: <HomeOutlined />,
        },
        {
            label: `${user ? user.name : ""}`,
            icon: <UserOutlined />,
            children: [
                {
                    label: (
                        <span
                            onClick={() => {
                                user.isAdmin ? navigate("/admin") : navigate("/profile")
                            }}
                        >
                            My Profile
                        </span>
                    ),
                    icon: <ProfileOutlined />
                },
                {
                    label: (
                        <Link to="/login" onClick={() => {
                            localStorage.removeItem("token");
                        }}>Logout</Link>
                    ),
                    icon: <LogoutOutlined />
                }
            ]

        }
    ]
    // logic for validating token and redirection to home page

    const getValidUser = async () => {
        try {
            const response = await GetCurrentUser();
            console.log(response);
            setUser(response.data);         //response.data
        } catch (error) {
            console.log("Error in Protected Route jsx")
            message.error(error.message);
            // navigate('/login')       causing error
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getValidUser();
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Layout>
                <Header
                    className="d-flex justify-content-between"
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
                        Book My Show
                    </h3>

                    <Menu theme="dark" mode="horizontal" items={navItems} />

                </Header>
                <div style={{ padding: 24, minHeight: 380, background: "#fff" }} >
                    {children}
                </div>
            </Layout>
        </>
    )

}

export default ProtectedRoute;