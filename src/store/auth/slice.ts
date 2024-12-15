import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authThunk } from './thunk.ts';
import { strings } from '@utils/constants/strings.ts';

enum STATUS {
    IDLE = 'idle',
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

type Action = {
    IDLE: string;
    SIGN_UP: string;
    SIGN_IN: string;
    SIGN_OUT: string;
};

type ActionKey = keyof Action;

type ActionValue = Action[ActionKey];

interface IInitialState {
    action: ActionValue;
    status: STATUS;
    message: string | null;
    user: {
        _id: string;
        email: string;
    } | null;
}

const initialState: IInitialState = {
    status: STATUS.IDLE,
    action: 'IDLE',
    message: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authThunk.signUpThunk.fulfilled, (state, action) => {
                state.action = strings.ACTION_AUTH.SIGN_UP;
                state.status = STATUS.FULFILLED;
                state.message = action.payload.message;
                state.user = action.payload.user;
            })
            .addCase(authThunk.signInThunk.fulfilled, (state, action) => {
                state.action = strings.ACTION_AUTH.SIGN_IN;
                state.status = STATUS.FULFILLED;
                state.message = action.payload.message;
                state.user = action.payload.user;
            })
            .addCase(authThunk.signOutThunk.fulfilled, (state, action) => {
                state.action = strings.ACTION_AUTH.SIGN_OUT;
                state.status = STATUS.FULFILLED;
                state.message = action.payload;
                state.user = null;
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.status = STATUS.PENDING;
                    state.action = strings.ACTION_AUTH.SIGN_IN;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action: PayloadAction<string>) => {
                    state.status = STATUS.REJECTED;
                    state.message = action.payload;
                }
            );
    },
});

export const authReducer = authSlice.reducer;
