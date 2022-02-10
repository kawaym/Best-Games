import { useState } from "react";
import Form from "../../components/form";
import { Button, Container } from "./style";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";


export default function PageLogin() {

    const navigate = useNavigate();
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
        const promise = api.login(userLogin);
        promise.then(res => {
            localStorage.setItem('userLogged', JSON.stringify(res.data));
            navigate('/home');
            window.location.reload();
        }).catch(err => {
            alert('E-mail e/ou senha invalidos!');
        });
    }

    function changeInputs(e) {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Form autoComplete='on' action={login}>
                <input type="email" autoComplete='username' placeholder="E-mail" name='email' value={userLogin.email} onChange={changeInputs} />
                <input type="password" autoComplete='current-password' placeholder="Senha" name='password' value={userLogin.password} onChange={changeInputs} />
                <button type="submit">
                    Entrar
                </button>
            </Form>

            <Button to='/register'>Ainda não tem uma conta? Cadastre-se</Button>
        </Container>
    );
}