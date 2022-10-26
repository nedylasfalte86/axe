import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex] = {
                  ...state.cartItems[itemIndex],
                  cartQuantity: state.cartItems[itemIndex].cartQuantity += 1,
                };
                toast.info(`${state.cartItems[itemIndex].name} augmenté`, {
                  position: "bottom-left",
                });
            // if (itemIndex >= 0) {
            //     state.cartItems[itemIndex].cartQuantity += 1;
            //     toast.info(`${state.cartItems[itemIndex].name} augmenté`, {
            //         position: "bottom-left",
            //     });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} ajouté au panier`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            //Dans le nextCartItems il y'a tous les articles du pannier, qu'on va filtrer en donnant la variable
            //cartItem : qui elle va être égale a tous les produits du panier qui ont un id diferents
            //de l'article sur lequel on supprime.
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem._id !== action.payload._id
            )
            state.cartItems = nextCartItems;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(`${action.payload.name} supprimer du panier`, {
                position: "bottom-left",
            });
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem._id === action.payload._id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`${state.cartItems[itemIndex].name} diminué`, {
                    position: "bottom-left",
                });
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem._id !== action.payload._id
                )
                state.cartItems = nextCartItems;

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

                toast.error(`${action.payload.name} supprimer du panier`, {
                    position: "bottom-left",
                });
            }
        },
        increaseCart(state, action) {
            //Dans l'augmentation de la quantité on fait appel a la fonction addToCart depuis le cart.jsx qui est déja configurer pour augmenter le
            //  produit en plus si celui ci existe déja dans le panier
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(`Votre panier a été vider`, {
                position: "bottom-left",
            });

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                }, {
                total: 0,
                quantity: 0
            }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
