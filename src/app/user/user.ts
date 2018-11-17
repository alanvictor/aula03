export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface APIUser {
    id?: number;
    nome: string;
    email: string;
    senha: string;
}

export const APIUserFactory = function(user: User): APIUser {
    return {
        id: user.id,
        nome: user.name,
        email: user.email,
        senha: user.password
    };
};
