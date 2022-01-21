import React from "react";
import {Form, Formik} from "formik";
import {createProduct} from "../../validation/validation";
import {Button, Modal} from "react-bootstrap";
import {Input} from "../common/input/Input";
import {Checkbox} from "../common/checkbox/Checkbox";

export function CustomProduct({submit, current_product }) {
    return (
        <div>
            <h1>Change product</h1>
            <Formik
                initialValues={{
                    title: current_product.title,
                    price: current_product.price,
                    description: current_product.description,
                    published: current_product.published
                }}

                onSubmit={(values, { setSubmitting, setStatus }) => {
                    submit(values, setSubmitting, setStatus)
                }}
                validationSchema={createProduct}
            >
                {({ isSubmitting, errors, touched, status, setStatus }) => (
                    status ?
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title>Status</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>{status}</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={() => {setStatus(null)}} variant="primary">Ok</Button>
                            </Modal.Footer>
                        </Modal.Dialog> :
                        <Form>

                            <Input name={'title'} touched={touched} errors={errors}/>
                            <Input name={'price'} touched={touched} errors={errors}/>
                            <Input name={'description'} touched={touched} errors={errors}/>
                            <Input name={'title'} touched={touched} errors={errors}/>
                            <Checkbox name={'published'} text={'Published?'}/>

                            <Button style={{marginLeft: '10px'}} type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form>
                )}
            </Formik>
        </div>
    )
}