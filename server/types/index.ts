
export interface IUser {
    id: number,
    email: string,
    password: string,
    role: string,
}

export interface ICart {
    id: number,
    userId: number,
}

export interface IGenerateJWT {
    id: number,
    email: string,
    role: string,
}

