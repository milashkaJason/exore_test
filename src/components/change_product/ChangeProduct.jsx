import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeProductThunk, setSingleProductThunk} from "../../reducers/productReducer";
import {useParams} from "react-router";
import {useCurrentCreatedProduct} from "../../hooks/useCurrentCreatedProducts";
import {CustomProduct} from "./CustomProduct";
import {Product} from "./Product";

export function ChangeProduct() {

    const params = useParams()
    const id = +params.id
    const created = params.created === 'created'

    const [current_product] = useCurrentCreatedProduct(id, created)

    const dispatch = useDispatch()

    const current_product_store = useSelector(state => state.product_store.current_product)

    useEffect(() => {
        dispatch(setSingleProductThunk(id))
    }, [dispatch, id])

    const submit = (data, setSubmitting, setStatus) => {
        const obj={
            id: id,
            title: data.title,
            price: data.price,
            description: data.description,
            published: data.published,
        }
        return dispatch(changeProductThunk(obj, created, setSubmitting, setStatus))

    }
    return (
        created ?
        <CustomProduct current_product={current_product} submit={submit} /> :
        <Product current_product={current_product_store} submit={submit} />

    )
}