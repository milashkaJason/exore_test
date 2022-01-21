import React from "react";
import {Field} from "formik";

export function Checkbox({text, name}) {
    return (
        <label style={{cursor: 'pointer'}}>
            <Field style={{marginRight: '10px', cursor: 'pointer'}} type="checkbox" name={name} />
            {text}
        </label>
    )
}