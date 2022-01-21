import React from "react";
import {Form, Formik} from "formik";
import {changeRemoveProduct} from "../../validation/validation";
import {Button, Modal} from "react-bootstrap";
import {Input} from "../common/input/Input";

export function Product({submit, current_product}) {

    return (
        <div>
            <h1>Change product</h1>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    title: current_product.title || '',
                    price: current_product.price || '',
                    description: current_product.description || '',
                    count: Object.keys(current_product).length !== 0 ? current_product.rating.count : '',
                    image: current_product.image || '',
                    category: current_product.category || ''
                }}

                onSubmit={(values, {setSubmitting, setStatus}) => {
                    submit(values, setSubmitting, setStatus)
                }}
                validationSchema={changeRemoveProduct}
            >
                {({isSubmitting, errors, touched, status, setStatus}) => (
                    status ?
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title>Status</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>{status}</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={() => {
                                    setStatus(null)
                                }} variant="primary">Ok</Button>
                            </Modal.Footer>
                        </Modal.Dialog> :
                        <Form>
                            <Input name={'title'} touched={touched} errors={errors}/>
                            <Input name={'price'} touched={touched} errors={errors}/>
                            <Input name={'description'} touched={touched} errors={errors}/>
                            <Input name={'count'} touched={touched} errors={errors}/>
                            <Input name={'image'} touched={touched} errors={errors}/>
                            <Input name={'category'} touched={touched} errors={errors}/>

                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form>
                )}
            </Formik>
        </div>
    )
}