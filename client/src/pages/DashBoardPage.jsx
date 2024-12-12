import React, {useEffect} from "react";
import Admin from "../layout/Admin.jsx";  // Adjust path as necessary

import BlogStore from "../store/blogStore.js";
import MainContent from "../components/MainContent.jsx";  // Adjust path as necessary

const DashBoard = () => {
    const BlogListRequest = BlogStore((state) => state.BlogListRequest);

    useEffect(() => {
        (async () => {
            await BlogListRequest();
        })();
    }, [BlogListRequest]);

    return (
        <Admin>
            <MainContent/>
        </Admin>
    );
};

export default DashBoard;
