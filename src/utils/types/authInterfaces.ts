export interface IAuthReq {
    email: string;
    password: string;
}

export interface IAuthRes {
    message: string;
    user: {
        _id: string;
        email: string;
    };
}
