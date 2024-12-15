import { IAuthReq, IAuthRes } from '@utils/types/authInterfaces.ts';
import { api } from './api.ts';
import { urls } from '@utils/constants/urls.ts';
import { apiMiddleware } from '@utils/apiMiddleware/apiMiddleware.ts';

const signUp = async (dto: IAuthReq): Promise<IAuthRes> => {
    return apiMiddleware(dto, async (dto: IAuthReq) => {
        const { data } = await api.post<IAuthRes>(urls.signUp, dto);
        return data;
    });
};

const signIn = async (dto: IAuthReq): Promise<IAuthRes> => {
    return apiMiddleware(dto, async (dto: IAuthReq) => {
        const { data } = await api.post<IAuthRes>(urls.signIn, dto);
        return data;
    });
};

const signOut = async (): Promise<string> => {
    return apiMiddleware(undefined, async () => {
        const { data } = await api.post(urls.signOut);
        return data;
    });
};

export const authApi = {
    signUp,
    signIn,
    signOut,
};
