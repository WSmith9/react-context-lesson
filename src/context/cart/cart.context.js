import React from "react";

const CartContext = React.createContext({
  hidden: true,
  toggleHidden: () => {},
});

export default CartContext;
