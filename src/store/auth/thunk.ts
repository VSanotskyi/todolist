import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth.ts';
import { IAuthReq, IAuthRes } from '@utils/types/authInterfaces.ts';

const signUpThunk = createAsyncThunk<
    IAuthRes,
    IAuthReq,
    { rejectValue: string }
>('auth/signUp', async (dto, { rejectWithValue }) => {
    try {
        return await authApi.signUp(dto);
    } catch (e) {
        const message = (e as Error).message;
        return rejectWithValue(message);
    }
});

const signInThunk = createAsyncThunk<
    IAuthRes,
    IAuthReq,
    { rejectValue: string }
>('auth/signIn', async (dto, { rejectWithValue }) => {
    try {
        return await authApi.signIn(dto);
    } catch (e) {
        const message = (e as Error).message;
        return rejectWithValue(message);
    }
});

const signOutThunk = createAsyncThunk<
    string,
    undefined,
    { rejectValue: string }
>('auth/signOut', async (_, { rejectWithValue }) => {
    try {
        return await authApi.signOut();
    } catch (e) {
        const message = (e as Error).message;
        return rejectWithValue(message);
    }
});

export const authThunk = {
    signUpThunk,
    signInThunk,
    signOutThunk,
};
