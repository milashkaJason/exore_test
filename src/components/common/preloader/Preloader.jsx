import React from "react";
import {Spinner} from "react-bootstrap";

export function Preloader() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            width: '100%',
            height: '100vh'
        }}>
            <Spinner animation="border" variant="primary"/>
        </div>
    )
}