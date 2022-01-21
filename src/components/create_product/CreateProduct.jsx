import React from "react";
import {useDispatch} from "react-redux";
import {createNewProductThunk} from "../../reducers/productReducer";
import {Formik, Form} from 'formik';
import {Button, Modal} from "react-bootstrap";
import {createProduct} from "../../validation/validation";
import {Input} from "../common/input/Input";
import {Checkbox} from "../common/checkbox/Checkbox";

export function CreateProduct() {

    const dispatch = useDispatch()

    const submit = (data, setSubmitting, setStatus) => {
        const obj = {
            id: Date.now(),
            title: data.title,
            price: data.price,
            description: data.description,
            published: data.published,
            created_at: new Date().toLocaleDateString()
        }
        return dispatch(createNewProductThunk(obj, setSubmitting, setStatus))

    }
    return (
        <div>
            <h1>Create new product</h1>
            <Formik
                initialValues={{title: '', price: '', description: '', published: false}}

                onSubmit={(values, {setSubmitting, setStatus}) => {
                    submit(values, setSubmitting, setStatus)
                }}
                validationSchema={createProduct}
            >
                {({isSubmitting, errors, touched, status, setStatus, resetForm}) => (
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
                                    resetForm()
                                }} variant="primary">Ok</Button>
                            </Modal.Footer>
                        </Modal.Dialog> :
                        <Form>
                            <Input errors={errors} name={'title'} touched={touched}/>
                            <Input errors={errors} name={'price'} touched={touched}/>
                            <Input errors={errors} name={'description'} touched={touched}/>
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