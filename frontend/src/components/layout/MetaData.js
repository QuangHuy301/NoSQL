import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Nhóm 3`}</title>
        </Helmet>
    );
};

export default MetaData;
