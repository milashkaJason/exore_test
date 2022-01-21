import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Product} from "./product/Product";
import {useDispatch, useSelector} from "react-redux";
import {setProductsThunk} from "../../reducers/productReducer";
import {CreatedProduct} from "./CreatedProduct";
import {Preloader} from "../common/preloader/Preloader";

export function Products() {

    const products = useSelector(state => state.product_store.product)
    const created_products = useSelector(state => state.product_store.created_products)
    const [created_products_state, setCreatedProducts] = useState(created_products || [])
    const is_load = useSelector(state => state.product_store.is_load)

    const [count_load, changeCountLoad] = useState(8)
    const [count_view, changeCountView] = useState(8)
    const [view_created, changeView] = useState(true)
    const [is_published, changeIsPublished] = useState(true)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProductsThunk(count_load))
    }, [dispatch, count_load])

    useEffect(() => {
        count_view === 'all' ?setCreatedProducts(created_products):
            setCreatedProducts(created_products.slice(0, count_view))
    }, [created_products, count_view])

    if (is_load) {return <Preloader/>}
    return (
        <>
            <Row style={{marginBottom: '10px'}}>
                {!view_created ?
                    <Col xs={1}><Button onClick={() => changeCountLoad(8)} disabled={count_load === 8} style={{width: '100%'}}>8</Button></Col> :
                    <Col xs={1}><Button onClick={() => changeCountView(8)} disabled={count_view === 8} style={{width: '100%'}}>8</Button></Col>
                }
                {!view_created ?
                    <Col xs={1}><Button onClick={() => changeCountLoad(16)} disabled={count_load === 16} style={{width: '100%'}}>16</Button></Col> :
                    <Col xs={1}><Button onClick={() => changeCountView(16)} disabled={count_view === 16} style={{width: '100%'}}>16</Button></Col>
                }
                {!view_created ?
                    <Col xs={1}><Button onClick={() => changeCountLoad('all')} disabled={count_load === 'all'} style={{width: '100%'}}>All</Button></Col> :
                    <Col xs={1}><Button onClick={() => changeCountView('all')} disabled={count_view === 'all'} style={{width: '100%'}}>All</Button></Col>}

                <Col xs={2}/>
                <Col xs={2}/>
                <Col xs={2}/>
                <Col xs={1}><Button onClick={() => changeView(true)} disabled={view_created} style={{width: '100%'}}>Created</Button></Col>
                <Col xs={1}><Button onClick={() => changeView(false)} disabled={!view_created} style={{width: '100%'}}>Remote</Button></Col>
                {view_created &&
                <Col xs={1}>
                    <Form.Check
                        style={{cursor: "pointer"}}
                        checked={is_published}
                        onChange={() => {changeIsPublished(!is_published)}}
                        type="switch"
                        id="custom-switch"
                        label="Published    "
                    />
                </Col>}
            </Row>
            <Row>
                {!view_created ?
                products && products.map((item, index) => {
                    return <Product key={index} item={item}/>
                }):
                    created_products_state && created_products_state.map((item, index) => {
                        return (
                                <React.Fragment key={index}>
                                {is_published && item.published &&
                                    <CreatedProduct is_published={is_published} item={item}/>}
                                {!is_published && !item.published &&
                                    <CreatedProduct is_published={is_published} item={item}/>}
                                </React.Fragment>
                            )
                    })
                }
            </Row>
        </>
    )
}
