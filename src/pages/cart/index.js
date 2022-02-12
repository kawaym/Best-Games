import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/haeder";
import MenuBottom from "../../components/menu";
import Product from "../../components/product";
import { useAuth } from "../../providers/auth";
import { usePurchase } from "../../providers/purchase";
import api from "../../services/api";
import { BuyButton, Container } from "./style";


export default function CartPage() {

    const { user } = useAuth();
    const { setPurchase } = usePurchase();
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const promise = api.getProducts("");
        promise.then(response => {
            setProducts(response.data);
        }).catch(err => {
            alert('Algo deu errado, por favor volte mais tarde!');
        });

        if (user) {
            let promise = api.getFavorites(user);
            promise.then(response => {
                setFavorites(response.data);
            })
            promise = api.getCart(user);
            promise.then(response => {
                setCart(response.data);
                setCartId(response.data.map(item => (item.id)));
            });
        }
    }, [user]);

    const shows = products.filter(product => cartId.includes(product._id));

    function finishParchase() {
        setPurchase({
            itens: shows.map((product, index) => (
                <Product
                    product={product}
                    key={index}
                    favorites={favorites}
                    cart={cart}
                />
            ))
        });
        navigate('/checkout');
    }


    return (
        <Container>
            <Header text={'Carrinho'} />
            {shows.map((product, index) => (
                <Product
                    product={product}
                    key={index}
                    favorites={favorites}
                    cart={cart}
                />
            ))}
            <MenuBottom />
            <BuyButton onClick={finishParchase} >Continuar compra</BuyButton>
        </Container>
    );
}