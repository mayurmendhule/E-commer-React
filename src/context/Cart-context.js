// import React, { useState } from "react";


//const CartContext = React.createContext();

// const CartProvider = (props)=> {
//     const [cartData, setCartData] = useState([]);
//     const addCartData = (data)=> {
//         setCartData([...cartData, data]);
//     }
//     const removeCartData = ()=> {

//     }
//     return (
//         <CartContext.Provider value={{cartData, addCartData}}>
//             {props.children}
//         </CartContext.Provider>
//     )
// }



import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);

  const addCartData = (data) => {
    setCartData([...cartData, data]);
  };

  const removeCartData = (index) => {
    const newCartData = [...cartData];
    newCartData.splice(index, 1);
    setCartData(newCartData);
  };

  return (
    <CartContext.Provider value={{ cartData, addCartData, removeCartData }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
