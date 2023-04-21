import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cart-context";
import "./Header.css"
const Header = ()=> {
    const {cartData} = useContext(CartContext);
    const navigate = useNavigate();
    return(
        <>
            <nav className="navbar">
                <section className="log">
                    Game-Zone
                </section>
                <section onClick={()=> {navigate('/cart')}}>
                    <span>{cartData.length}</span>
                    <i className="fa  fa-shopping-cart"></i>
                </section>
            </nav>
        </>
    )
}
export default Header;