export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const createProductRequest = (data) => ({
    type: CREATE_PRODUCT_REQUEST,
    payload: data
});

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const getProductsRequest = (data) => ({
    type: GET_PRODUCTS_REQUEST,
    payload: data
});

export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const getProductRequest = (data) => ({
    type: GET_PRODUCT_REQUEST,
    payload: data
});

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const updateProductRequest = (data) => ({
    type: UPDATE_PRODUCT_REQUEST,
    payload: data
})

export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const updateProductSuccess = (data) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: data,
})

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const deleteProductRequest = (data) => ({
    type: DELETE_PRODUCT_REQUEST,
    payload: data
})