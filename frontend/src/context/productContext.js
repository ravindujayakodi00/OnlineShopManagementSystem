import { createContext } from "react";
import { useReducer } from "react";

export const ProductsContext = createContext();

export const productsReducer = (state, action) => {
    switch (action.type) {
        // set products
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            }
        //set a single product
        case "SET_PRODUCT":
            return {
                ...state,
                products: action.payload,
            }

        case 'CREATE_PRODUCT':
            return {
                products: [action.payload, ...state.products]
            } 
        case 'DELETE_PRODUCT':
            return {
                products: state.products.filter((product) => product._id !== action.payload._id)
            }
        case 'UPDATE_PRODUCT':
            return {
                products: state.products.map((product) => product._id === action.payload._id ? action.payload : product)
            }    
        default:
            return state;       
    }
}

export const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, {
        products: null
    })

    return (
        <ProductsContext.Provider value={{...state, dispatch}}>
            { children }
        </ProductsContext.Provider>
    )
}
   