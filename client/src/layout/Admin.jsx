import React from 'react';
import Sidebar from "./Sidebar.jsx";

const Admin = (props) => {
    return (
        <>
            <Sidebar/>
            {props.children}
        </>
    );
};

export default Admin;