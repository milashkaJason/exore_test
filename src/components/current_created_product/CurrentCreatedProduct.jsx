import React from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export function CurrentCreatedProduct() {

    const params = useParams(false)
    const product_id = params.id
    const created_products = useSelector(state => state.product_store.created_products)

    const current_product = created_products.filter((item) => {
        return item.id === +product_id
    })[0]

    return (
        <Card style={{width: '50%', padding: '10px', margin: '0 auto 15px auto'}}>

            <Card.Body>
                <Card.Title style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>Title: {current_product.title}</Card.Title>
                <Card.Text>
                    <b> Price:</b> {current_product.price}$
                </Card.Text>
                <Card.Text>
                    <b>Description:</b> <br/> {current_product.description}
                </Card.Text>
                <Card.Text>
                    <b>Created at:</b> {current_product.created_at}
                </Card.Text>
                <Card.Text>
                    <b>Published:</b> {current_product.published ? 'yes' : 'no'}
                </Card.Text>
                <Link to={`/products/`}>
                    <Button variant="primary">Back</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}