import CartIcon from "./CartIcon";

function CartWidget(){
    return(
    <div className="CartWidget">
        <CartIcon Ancho={'30px'} Alto={'24px'}/>
        <span className="CantidadDeProductos">3</span>
        
    </div>

        );
        
    
};
export default CartWidget;