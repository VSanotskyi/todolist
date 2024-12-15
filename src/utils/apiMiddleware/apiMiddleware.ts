import axios, { AxiosError } from 'axios';

interface IAxiosErrorResponse {
    message: string;
}

const apiMiddleware = async <D, R>(dto: D, cb: (dto: D) => R): Promise<R> => {
    try {
        return cb(dto);
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const error = e as AxiosError<IAxiosErrorResponse>;
            const message = error.response?.data?.message as string;
            throw new Error(message);
        } else {
            throw new Error('Unknown error');
        }
    }
};

export { apiMiddleware };
