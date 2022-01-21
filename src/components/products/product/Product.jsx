import React, {useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {deleteProductThunk} from "../../../reducers/productReducer";
import {useDispatch} from "react-redux";
import {DeleteModal} from "../../delete_modal/DeleteModal";

export function Product({item}) {

    const dispatch = useDispatch()
    const [is_modal, changeIsModal] = useState(false)

    const deleteProduct = () => {
        dispatch(deleteProductThunk(item.id))
    }
    return (
        <Col>
            <Card style={{width: '18rem', height: '20rem', padding: '10px', marginBottom: '15px'}}>
                <Card.Img style={{
                    height: '50%',
                    objectFit: 'contain'
                }} variant="top" src={item.image}/>
                <Card.Body>
                    <Card.Title style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{item.title}</Card.Title>
                    <Card.Text>
                        Price: {item.price}$
                    </Card.Text>
                    <Row>
                        <Col xs={4}>
                            <Link to={`/product/${item.id}`}>
                                <Button variant="primary">More</Button>
                            </Link>
                        </Col>
                        <Col xs={4}>
                            <Link to={`/change_product/${item.id}/no_created`}>
                                <Button variant="secondary">Edit</Button>
                            </Link>
                        </Col>
                        <Col xs={4}>
                            <Button onClick={()=>changeIsModal(true)} variant="danger">Delete</Button>
                            {is_modal && <DeleteModal deleteProduct={deleteProduct} close={()=>changeIsModal(false)}/>}
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
}