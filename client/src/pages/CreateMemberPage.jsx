import React from 'react';
import Layout from "../layout/Layout.jsx";
import CreateMember from "../components/CreateMember.jsx";
import Admin from "../layout/Admin.jsx";

const CreateMemberPage = () => {
    return (
        <Admin>
            <CreateMember/>
        </Admin>
    );
};

export default CreateMemberPage;