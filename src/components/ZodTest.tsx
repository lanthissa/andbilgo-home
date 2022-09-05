
import { z } from "zod";
import React from "react";

type NameDisplayProps = {
    firstname : string;
    lastname : string;
};

/* Component declaration works by defining a nameless function taking in N properties and thatfunction returning a div or section for 
 that component */
const NameDisplay = ({ firstname, lastname} : NameDisplayProps) => {
    return <div>
        <h1> {firstname} {lastname}</h1>
    </div>
}
export default NameDisplay;