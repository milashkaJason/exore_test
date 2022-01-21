import {API} from "../api/api";

let initialState = {
    product: [],
    created_products: [],
    current_product: {},
    is_load: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                product: action.response
            }
        case 'SET_CREATED_PRODUCTS':
            return {
                ...state,
                created_products: [...state.created_products, action.response]
            }
        case 'SET_ALL_CREATED_PRODUCTS':
            return {
                ...state,
                created_products: action.response
            }
        case 'SET_CURRENT_PRODUCTS':
            return {
                ...state,
                current_product: action.response
            }
        case 'SET_IS_LOAD':
            return {
                ...state,
                is_load: action.response
            }

        default:
            return state;
    }
}

//======================================================ACTIONS==========================================================

export const setProductsAction = (response) => ({type: 'SET_PRODUCTS', response})

export const setCurrentProductAction = (response) => ({type: 'SET_CURRENT_PRODUCTS', response})

export const setIsLoadAction = (response) => ({type: 'SET_IS_LOAD', response})

export const setCreatedProductsAction = (response) => ({type: 'SET_CREATED_PRODUCTS', response})

export const setAllCreatedProductsAction = (response) => ({type: 'SET_ALL_CREATED_PRODUCTS', response})


//======================================================THUNKS==========================================================

export const setProductsThunk = (count) => async (dispatch) => {
    dispatch(setIsLoadAction(true))

    let data
    if (count === 'all') {
        data = await API.getAllProductsApi();
    } else {
        data = await API.getProductsApi(count);
    }
    dispatch(setIsLoadAction(false))
    if (data && data.status === 200) {
        dispatch(setProductsAction(data.data))
    } else {
        console.warn('Failed Request')
    }
}

export const setSingleProductThunk = (id) => async (dispatch) => {
    dispatch(setIsLoadAction(true))
    let data = await API.getSingleProductApi(id);
    dispatch(setIsLoadAction(false))
    if (data && data.status === 200) {
        dispatch(setCurrentProductAction(data.data))
    } else {
        console.warn('Failed Request')
    }
}

export const createNewProductThunk = (product_data, setSubmitting, setStatus) => async (dispatch, getState) => {
    dispatch(setIsLoadAction(true))
    let data = await API.createNewProductApi(product_data);
    dispatch(setIsLoadAction(false))
    if (data && data.status === 200) {
        setSubmitting(false)
        dispatch(setCreatedProductsAction(product_data))
        localStorage.setItem('product_data', JSON.stringify(getState().product_store.created_products));
        setStatus('The product has been created')
    } else {
        console.warn('Failed Request')
    }
}

export const deleteProductThunk = (id, custom) => async (dispatch, getState) => {
    dispatch(setIsLoadAction(true))
    let data = await API.deleteProductApi(id);
    dispatch(setIsLoadAction(false))
    if (data && data.status === 200) {
        if (custom) {
            const created_products = getState().product_store.created_products
            const new_created_data = created_products.filter((item) => {
                return item.id !== id
            })
            dispatch(setAllCreatedProductsAction(new_created_data))
            localStorage.setItem('product_data', JSON.stringify(getState().product_store.created_products));

        }
    } else {
        console.warn('Failed Request')
    }
}

export const changeProductThunk = (data_product, custom, setSubmitting, setStatus) => async (dispatch, getState) => {
    dispatch(setIsLoadAction(true))
    let data = await API.changeProductApi(data_product);
    dispatch(setIsLoadAction(false))
    if (data && data.status === 200) {
        if (custom) {
            const created_products = getState().product_store.created_products
            const new_created_data = created_products.filter((item) => {
                return item.id !== data_product.id
            })
            new_created_data.unshift(data_product)
            dispatch(setAllCreatedProductsAction(new_created_data))
            localStorage.setItem('product_data', JSON.stringify(getState().product_store.created_products));
        }
        setStatus('The product has been changed')
        setSubmitting(false)
    } else {
        console.warn('Failed Request')
    }
}

export default productReducer;