import useProductStore from "../pages/phones/hooks/useProductStore";
import { response } from "../utils/constants";

const initializeStore = () => {
    const setProducts = useProductStore.getState().setProducts;
    setProducts(response);
};

initializeStore();