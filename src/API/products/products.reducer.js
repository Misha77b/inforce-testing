import { 
    CREATE_PRODUCT_REQUEST,
    GET_PRODUCTS_REQUEST, 
    UPDATE_PRODUCT_REQUEST, 
    UPDATE_PRODUCT_SUCCESS, 
    DELETE_PRODUCT_REQUEST, 
    GET_PRODUCT_REQUEST,
} from "./products.actions";

const initState = {
    createProductRequest: {},
    editProductId: null,
    updateProductRequest: null,
    products: [],
    deleteProductRequest: null,
}

const productsReducer = (state = initState, action) => {
    switch(action.type) {

        case GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                products: action.payload,
            }
        }

        case GET_PRODUCT_REQUEST: {
            return {
                ...state,
                editVisitId: action.payload
            }
        }

        case CREATE_PRODUCT_REQUEST: {
            return {
                ...state,
                createProductRequest: action.payload,
                products: [...state.products, action.payload]
            }
        }

        case UPDATE_PRODUCT_REQUEST: {
            return{
                ...state,
                editProductId: action.payload
            }
        }

        case UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state, 
                products: state.products.map((product) => {product.id === action.payload.id ? updatedProduct : product}),
                editVisitId: null
            }
        }

        case DELETE_PRODUCT_REQUEST: {
            return {
                ...state,
                deleteProductRequest: action.payload,
                products: state.products.filter((product) => +product.id !== +action.payload)
            }
        }

        default:
            return state
    }
}

export default productsReducer