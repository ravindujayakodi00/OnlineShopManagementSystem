import { ProductsContext } from "../context/productContext";
import { useContext } from "react";

export const useProductsContext = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw Error("useProductsContext must be used within a ProductsContextProvider");
    }

    return context;
}
