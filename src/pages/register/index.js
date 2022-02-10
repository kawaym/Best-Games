import { useState } from "react";
import Form from "../../components/form";
import { Button, Container } from "./style";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";


export default function PageLogin() {

    const navigate = useNavigate();
    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function registerUser(e) {
        e.preventDefault();
        if (!userRegister.email || !userRegister.password || !userRegister.confirmPassword || !userRegister.name) {
            alert('Todos os campos são obrigatórios!');
            return;
        } else if (userRegister.password !== userRegister.confirmPassword) {
            alert('As senhas devem ser iguais!');
            return;
        }
        const SendUser = userRegister;
        delete SendUser.confirmPassword;

        const promise = api.registerUser(SendUser);
        promise.then(res => {
            navigate('/');
        }).catch(() => {
            alert('Não foi possivel criar o usuário!');
        });
    }

    function changeInputs(e) {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Form autoComplete='on' action={registerUser}>
                <input type='text' placeholder='Nome' name='name' value={userRegister.name} onChange={changeInputs} />
                <input type='email' autoComplete='username' placeholder='E-mail' name='email' value={userRegister.email} onChange={changeInputs} />
                <input type='password' autoComplete='current-password' placeholder='Senha' name='password' value={userRegister.password} onChange={changeInputs} />
                <input type='password' autoComplete='new-password' placeholder='Confirme a senha' name='confirmPassword' value={userRegister.confirmPassword} onChange={changeInputs} />
                <button type="submit">
                    Cadastrar
                </button>

            </Form>

            <Button to='/'>Já possui uma conta? Faça login</Button>
        </Container>
    );
}