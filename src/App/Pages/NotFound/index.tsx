import React from "react";
import Template from "../../Template";
import { withRouter } from "react-router";

const NotFound = (props: any) => {

    return (
        <Template>
            Not Found
        </Template>
    );
};

export default withRouter(NotFound);