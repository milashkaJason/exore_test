import React from "react";
import {Button, Modal} from "react-bootstrap";

export function DeleteModal({deleteProduct, close}) {

    return (
        <div style={{
            position: 'fixed',
            background: '#fff',
            inset: 0,
            zIndex: 12
        }}>
            <Modal.Dialog onClick={close} style={{top: '50%', transform: 'translateY(-50%)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you really want to delete</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button onClick={close} variant="secondary">Close</Button>
                    <Button onClick={deleteProduct} variant="danger">Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )

}