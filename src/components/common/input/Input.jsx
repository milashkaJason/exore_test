import React from "react";
import {Field} from "formik";
import {FormControl, InputGroup} from "react-bootstrap";

export function Input({errors, touched, name}) {
    return (
        <>
            <h4 style={{textTransform: "capitalize"}}>{name}</h4>
            <Field name={name}>
                {({field}) => (
                    <InputGroup>
                        <FormControl {...field} placeholder={'Enter you text'}/>
                    </InputGroup>
                )}
            </Field>
            {errors[name] && touched[name] ? <div style={{color: 'red'}}>{errors[name]}</div> :
                <div style={{height: '24px'}}/>}
        </>
    )
}