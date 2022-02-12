import { useEffect, useState } from "react";
import Product from "../../components/product";
import { useAuth } from "../../providers/auth";
import { usePurchase } from "../../providers/purchase";
import api from "../../services/api";
import { Container, Title, Subtitle, Box, FinishButton } from "./style";

export default function Checkout() {

    const { user } = useAuth();
    const { purchase } = usePurchase();
    const [dataUser, setDataUser] = useState();

    useEffect(() => {
        if (user) {
            const promise = api.getUser(user);
            promise.then(response => {
                setDataUser(response.data);
            });
        }
    }, [user])

    function BuyCart() {
        const promise = api.deleteCart(user);
        promise.then(response => {
            console.log(response.data);
        })
    }


    return (
        <Container>
            {dataUser && (
                <>
                    <Title>Dados da compra</Title>
                    <Box>
                        <Subtitle>Comprador</Subtitle>
                        <span>Nome: {dataUser.name}</span>
                        <span>Email: {dataUser.email}</span>
                    </Box>
                    <Box>
                        <Subtitle>Produtos</Subtitle>
                        {purchase.itens.map(({ props }, index) => (
                            <Product
                                product={props.product}
                                key={index}
                                icon={false}
                            />
                        ))}
                    </Box>
                    <FinishButton onClick={BuyCart} >Finalizar compra</FinishButton>
                </>
            )}
        </Container>
    );
}