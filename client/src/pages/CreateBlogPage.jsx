import React from 'react';
import CreateBlog from "../components/CreateBlog.jsx";
import Admin from "../layout/Admin.jsx";

const CreateBlogPage = () => {
    return (
        <Admin>
            <CreateBlog/>
        </Admin>
    );
};

export default CreateBlogPage;