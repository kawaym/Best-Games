import { useEffect, useState } from "react";
import Header from "../../components/haeder";
import MenuBottom from "../../components/menu";
import Product from "../../components/product";
import { useAuth } from "../../providers/auth";
import api from "../../services/api";
import { Container } from "./style";


export default function FavoritesPage() {

    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const [favoritesId, setFavoritesId] = useState([]);


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
                setFavoritesId(response.data.map(item => (item.id)));
            })
            promise = api.getCart(user);
            promise.then(response => {
                setCart(response.data);
            });
        }
    }, [user]);

    const shows = products.filter(product => favoritesId.includes(product._id));

    return (
        <Container>
            <Header text={"Favoritos"} />
            {shows.map((product, index) => (
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