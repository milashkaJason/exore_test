import {useSelector} from "react-redux";

export const useCurrentCreatedProduct = (product_id) => {

    const created_products = useSelector(state => state.product_store.created_products)
    const current_product = created_products && created_products.filter((item) => {
        return item.id === +product_id
    })[0]

    return [current_product]
}