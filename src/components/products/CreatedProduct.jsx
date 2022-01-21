import React, {useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteProductThunk} from "../../reducers/productReducer";
import {DeleteModal} from "../delete_modal/DeleteModal";

export function CreatedProduct({item}) {

    const dispatch = useDispatch()

    const [is_modal, changeIsModal] = useState(false)

    const deleteProduct = () => {
    dispatch(deleteProductThunk(item.id, true))
    }
    return (
            <Col>
                <Card style={{width: '18rem', height: '10rem', padding: '10px', marginBottom: '15px'}}>
                    <Card.Body>
                        <Card.Title style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}><b>Title: </b>{item.title}</Card.Title>
                        <Card.Text>
                            Price: {item.price}$
                        </Card.Text>
                        <Row>
                            <Col xs={4}>
                                <Link to={`/created_product/${item.id}`}>
                                    <Button variant="primary">More</Button>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Link to={`/change_product/${item.id}/created`}>
                                    <Button variant="secondary">Edit</Button>
                                </Link>
                            </Col>
                            <Col xs={4}>
                                <Button onClick={()=>changeIsModal(true)} variant="danger">Delete</Button>
                                {is_modal && <DeleteModal close={() =>changeIsModal(false)} deleteProduct={deleteProduct}/>}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
    )
}