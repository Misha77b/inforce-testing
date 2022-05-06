import { 
    createProductRequest, 
    getProductsRequest, 
    getProductRequest, 
    deleteProductRequest, 
    updateProductSuccess
} from "./products.actions";

export const createProduct = (createProductData) => {
    return (dispatch) => {
        fetch('http://localhost:3004/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createProductData),
        }).then(res => res.json())
        .then(createProduct =>  dispatch(createProductRequest(createProduct)))
    }
};

export const getProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:3004/products', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(products => dispatch(getProductsRequest(products)))
    }
};

export const getProduct = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3004/products/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(product => {dispatch(getProductRequest(product.id))})
    }
};

export const updateProduct = (product) => {
    return (dispatch) => {
        fetch(`http://localhost:3004/products/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product),
        }).then(res => res.json())
        .then(product => {dispatch(updateProductSuccess(product))})
    }
};

export const deleteProduct = (id) => {
    return (dispatch) => {
        fetch (`http://localhost:3004/products/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            dispatch(deleteProductRequest(id))
        })
    }
};