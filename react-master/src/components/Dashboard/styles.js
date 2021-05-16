import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = ({setAuth}) => {
    const [name, setName] = useState("");
    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:3001/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseData = await res.json();
            setName(parseData.librarianname || parseData.studentname || parseData.lecturername || parseData.adminName   );
            console.log(parseData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const logout = async e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logout successfully");

    };



    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <h1 className="mt-5">Dashboard</h1>
            <h2>Welcome  {name}</h2>
            <button onClick={e => logout(e)}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;