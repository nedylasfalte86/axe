import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { productsApi } from './features/productsApi';
import productsReducer, { productsFetch } from './features/productSlice';
import categoryReducer, { categoryFetch } from './features/categoriesSlice';
import markReducer, { marksFetch } from './features/markSlice'
import usersReducer, { usersFetch } from './features/usersSlice'
import cartReducer, { getTotals } from './features/cartSlice';
import authReducer, { loadUser, logoutUser } from './features/authSlice'
import orderReducer, { ordersFetch } from './features/orderSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
    cart: cartReducer,
    order: orderReducer,
    mark: markReducer,
    users: usersReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});

store.dispatch(productsFetch())
store.dispatch(marksFetch())
store.dispatch(categoryFetch())
store.dispatch(getTotals())
store.dispatch(usersFetch())
store.dispatch(ordersFetch())
store.dispatch(loadUser(null))
store.dispatch(logoutUser)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
