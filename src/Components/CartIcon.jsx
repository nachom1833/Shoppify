function CartIcon({Ancho,Alto} ) {
   
  return (
    <svg
      fill="#000000"
      height={Ancho}
      width={Alto}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 60 60"
      xml:space="preserve"
      className="cart-icon"
    >
      <path
        d="M60,42V12H7V2c0-0.553-0.448-1-1-1H1C0.448,1,0,1.447,0,2s0.448,1,1,1h4v9v1v28v1v7c0,0.553,0.448,1,1,1h7.031
   C11.806,50.912,11,52.359,11,54c0,2.757,2.243,5,5,5s5-2.243,5-5c0-1.641-0.806-3.088-2.031-4h21.062C38.806,50.912,38,52.359,38,54
   c0,2.757,2.243,5,5,5s5-2.243,5-5c0-1.641-0.806-3.088-2.031-4H52c0.552,0,1-0.447,1-1s-0.448-1-1-1H7v-6H60z"
      />
    </svg>
  );
}
export default CartIcon;
