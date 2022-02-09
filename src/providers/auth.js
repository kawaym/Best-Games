import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (localStorange.getItem('user')) {
            let person = localStorange.getItem('user');
            person = JSON.parse(person);
            setUser(person);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);