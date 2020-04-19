import React from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { Provider } from 'react-redux'
import { cart } from './components/reducers/cart'
import { products } from './components/reducers/products'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
})
const store = configureStore({ reducer });

export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
