import carrito from "../assets/carrito.png";

export const CartWidget = () => {
    return (
        <div id="cart-widget">
            <img src={carrito} alt="Carrito de compras" width={30} />
            <span>10</span>
        </div>
    );
};