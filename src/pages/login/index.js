import { useState } from "react";
import Form from "../../components/form";
import { Container } from "./style";


export default function PageLogin() {

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    function login(e) {
        e.preventDefault();
        if (!userLogin.email || !userLogin.password) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
    }

    function changeInputs(e) {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Form autoComplete='on' onSubmit={login}>
                <input type="email" autoComplete='username' placeholder="E-mail" name='email' value={userLogin.email} onChange={changeInputs} />
                <input type="password" autoComplete='current-password' placeholder="Senha" name='password' value={userLogin.password} onChange={changeInputs} />
                <button type="submit">
                    Entrar
                </button>
            </Form>
        </Container>
    );
}