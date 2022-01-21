import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setSingleProductThunk} from "../../reducers/productReducer";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Preloader} from "../common/preloader/Preloader";

export function CurrentProduct() {

    const params = useParams(false)
    const product_id = params.id
    const dispatch = useDispatch()
    const current_product = useSelector(state => state.product_store.current_product)
    const is_load = useSelector(state => state.product_store.is_load)

    useEffect(() => {
        dispatch(setSingleProductThunk(product_id))
    }, [dispatch, product_id])

    if (is_load) {
        return <Preloader/>
    }
    return (
        <Card style={{width: '50%', padding: '10px', margin: '0 auto 15px auto'}}>
            <Card.Img style={{
                height: '50%',
                objectFit: 'contain'
            }} variant="top" src={current_product.image}/>
            <Card.Body>
                <Card.Title style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{current_product.title}</Card.Title>
                <Card.Text>
                    <b> Price:</b> {current_product.price}$
                </Card.Text>
                <Card.Text>
                    <b>Description:</b> <br/> {current_product.description}
                </Card.Text>
                <Card.Text>
                    <b>Category:</b> {current_product.category}
                </Card.Text>
                <Card.Text>
                    <b>Count:</b> {current_product.rating && current_product.rating.count}
                </Card.Text>
                <Link to={`/products/`}>
                    <Button variant="primary">Back</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}