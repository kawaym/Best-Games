import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/haeder";
import api from "../../services/api";
import { Container } from "./style";
import Product from "../../components/product";
import { useAuth } from "../../providers/auth";
import MenuBottom from "../../components/menu";


export default function ProductsPage() {

    const { productType } = useParams();
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const promise = api.getProducts(productType);
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
            });
        }

    }, [user, productType]);

    return (
        <Container>
            <Header text={productType} />
            {products.map((product, index) => (
                <Product
                    product={product}
                    key={index}
                    favorites={favorites}
                    cart={cart}
                />
            ))}
            <MenuBottom />
        </Container>
    );
}