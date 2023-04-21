// import { useCallback, useContext, useState, useEffect} from "react";
// import { CartContext } from "../../context/Cart-context";
// import useRazorpay from "react-razorpay";

// const Cart = () => {
//   const { cartData, setCartData } = useContext(CartContext);
//   const [total, setTotal] = useState(0);
//   const RazorPay = useRazorpay();
  
//   const calculateTotal = useCallback(() => {
//     let totalAmount = 0;
//     cartData.forEach((item) => {
//       totalAmount += item.price;
//     });
//     setTotal(totalAmount);
//   }, [cartData]);
  
//   const removeItem = useCallback((itemIndex) => {
//     const newCartData = [...cartData];
//     newCartData.splice(itemIndex, 1);
//     setCartData(newCartData);
//   }, [cartData, setCartData]);
  
//   const razorPayDisplay = useCallback(
//     async () => {
//       const options = {
//         key: "rzp_test_GsarvRJua8PiuL",
//         amount: total * 100,
//         currency: "INR",
//         name: "ecomers-Site",
//         description: "Gaming Transaction",
//         handler: (res) => {
//           console.log(res);
//         },
//         prefill: {
//           name: "Mayur",
//           email: "mayurmendhule03@gmail.com",
//           contact: "1234567890",
//         },
//         notes: {
//           address: "work address",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };
//       const rzp1 = new RazorPay(options);
//       rzp1.open();
//     },
//     [RazorPay, total]
//   );

//   useEffect(() => {
//     calculateTotal();
//   }, [cartData, calculateTotal]);
  
//   return (
//     <>
//       <section>
//         <section>
//           {cartData.map((cartItem, index) => {
//             return (
//               <article>
//                 <img
//                   src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`}
//                   alt=""
//                 />
//                 <article><h3>{cartItem.title}</h3></article>
//                 <article><h3>₹ {cartItem.price}</h3></article>
//                 <button onClick={() => removeItem(index)}>Remove from cart</button>
//               </article>
//             );
//           })}
//         </section>
//         <section>
//           <article><h4>Billing Information</h4></article>
//           {cartData.map((cart) => {
//             return (
//               <article>
//                 <span><h3>{cart.title}</h3></span>
//                 <span><h3>₹ {cart.price}</h3></span>
//               </article>
//             );
//           })}
//           <article>Total: ₹ {total}</article>
//           <button
//             onClick={() => {
//               razorPayDisplay();
//             }}
//           >
//             Checkout
//           </button>
//         </section>
//       </section>
//     </>
//   );
// };
// export default Cart;

import { useCallback, useContext, useState, useEffect} from "react";
import { CartContext } from "../../context/Cart-context";
import useRazorpay from "react-razorpay";
import "./Card.css"
const Cart = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const RazorPay = useRazorpay();
  
  const calculateTotal = useCallback(() => {
    let totalAmount = 0;
    cartData.forEach((item) => {
      totalAmount += item.price;
    });
    setTotal(totalAmount);
  }, [cartData]);
  
  const removeItem = useCallback((itemIndex) => {
    const newCartData = [...cartData];
    newCartData.splice(itemIndex, 1);
    setCartData(newCartData);
  }, [cartData, setCartData]);
  
  const razorPayDisplay = useCallback(
    async () => {
      const options = {
        key: "rzp_test_GsarvRJua8PiuL",
        amount: total * 100,
        currency: "INR",
        name: "ecomers-Site",
        description: "Gaming Transaction",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Mayur",
          email: "mayurmendhule03@gmail.com",
          contact: "1234567890",
        },
        notes: {
          address: "work address",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new RazorPay(options);
      rzp1.open();
    },
    [RazorPay, total]
  );

  useEffect(() => {
    calculateTotal();
  }, [cartData, calculateTotal]);
  
  return (
      <section>
        <section className="flex-box">
        <div className="buyitem">
          {cartData.map((cartItem, index) => {
            return ( 
              <article key={index}> 
              <img src = { `http://localhost:1337${cartItem?.image?.data?.attributes?.url}` } alt="image"/>
                <span><h3>{cartItem.title}</h3></span>
                <span><h3>₹ {cartItem.price}</h3></span>
                <button onClick={() => removeItem(index)}>Remove </button>
              </article>
            );
          })}
          </div>
        </section>
        <section className="bill">
          <h1>Billing Information</h1>
          {cartData.map((cart, index) => {
            return (
              <article key={index}>
                <span><h3>{cart.title}</h3> </span>
               <span> <h3>₹ {cart.price}</h3></span>
              </article>
            );
          })}
          <h2>Total: &nbsp; ₹ {total}</h2>
          <button
            onClick={() => {
              razorPayDisplay();
            }}
          >
            Checkout
          </button>
        </section>
      </section>
  );
};
export default Cart;
