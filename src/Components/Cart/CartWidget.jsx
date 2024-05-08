import { useState } from "react";
import CartIcon from "./CartIcon";

function CartWidget(){
        const [cartItems,setCartItems]= useState(4);    
    return(
    <div className="CartWidget">
        <CartIcon Ancho={'30px'} Alto={'24px'}/>
        <span className="CantidadDeProductos">{cartItems}</span>
        
    </div>

        );
        
    
};
export default CartWidget;