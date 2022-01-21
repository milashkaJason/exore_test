import * as Yup from 'yup';

export const createProduct = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    price: Yup.number()
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
});

export const changeRemoveProduct = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    price: Yup.number()
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    count: Yup.number()
        .required('Required'),
    image: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    category: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
});