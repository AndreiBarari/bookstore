import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useCartSelector = () => {
  const addToCart = useSelector((state: RootState) => state.cart.count);
  return addToCart;
};
