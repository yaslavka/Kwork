import React from "react";
import {Input} from "reactstrap";

function Inputs({value, placeholder, onChange, className, name, type,  ...props}) {
    return(
        <>
            <Input
                className={className}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={type} {...props}
            />
        </>
    )
}
export default Inputs
