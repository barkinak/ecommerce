import React, { createContext, useReducer } from "react"

const CartContext = createContext({}) // Create cart context

const initialState = []

// Cart context reducer
const reducer = (state, action) => {
  console.log('Cart context reducer');
  console.log(`state: ${JSON.stringify(state)}`);
  console.log(`action: ${JSON.stringify(action)}`);

  switch (action.type) {
    case "reset":
      return initialState // Reset cart
    case "add":
      return [...state, action.payload]
    case "remove":
      return state.filter((x) => x.name !== action.payload.name) // Remove item from cart
  }
}

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
