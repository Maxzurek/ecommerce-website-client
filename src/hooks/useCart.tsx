import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { CartItem } from "../interfaces/Cart.interfaces";

//#region State
export interface CartState {
    items: CartItem[];
}

const initialCartState: CartState = {
    items: []
};
//#endregion

//#region Actions
export type CartAction =
    | {
          type: "addItem";
          payload: CartItem;
      }
    | {
          type: "removeItem";
          payload: { itemId: string };
      }
    | {
          type: "updateItemQuantity";
          payload: { itemId: string; newQuantity: number };
      };
//#endregion

//#region Reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "addItem": {
            const item = action.payload;

            return { ...state, items: [...state.items, item] };
        }
        case "removeItem": {
            const { itemId } = action.payload;
            const newItems = state.items.filter((item) => item.id !== itemId);

            return { ...state, items: newItems };
        }
        case "updateItemQuantity": {
            const { itemId, newQuantity } = action.payload;
            const newItems = state.items.map((item) => {
                if (item.id !== itemId) {
                    return item;
                } else {
                    const updatedItem = { ...item };
                    updatedItem.quantity = newQuantity;

                    return updatedItem;
                }
            });

            return { ...state, items: newItems };
        }
    }
};
//#endregion

//#region Contexts
const CartStateContext = createContext<CartState>(initialCartState);
CartStateContext.displayName = "CartStateContext";

const CartDispatchContext = createContext<Dispatch<CartAction>>(null);
CartDispatchContext.displayName = "CartDispatchContext";
//#endregion

interface CartProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

export const useCartState = () => {
    const context = useContext(CartStateContext);

    if (!context) {
        throw Error(
            "useCartState must be used within a <{TM_FILENAME_BASE/^(use)(.*)/addItem/}Provider />"
        );
    }

    return context;
};

export const useCartDispatch = () => {
    const context = useContext(CartDispatchContext);

    if (!context) {
        throw Error(
            "useCartDispatch must be used within a <{TM_FILENAME_BASE/^(use)(.*)/addItem/}Provider />"
        );
    }

    return context;
};
