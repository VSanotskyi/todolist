import { createSlice } from '@reduxjs/toolkit';
import { MESSAGE, STATUS } from '@utils/enum/apiEnum.ts';

interface IInitialState {
    status: STATUS;
    message: MESSAGE;
    httpStatus: number | null;
}

const initialState: IInitialState = {
    status: STATUS.IDLE,
    message: MESSAGE.IDLE,
    httpStatus: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => action.type.endsWith('/pending'),
            (state) => {
                state.status = STATUS.LOADING;
                state.message = MESSAGE.IDLE;
            }
        );
        builder.addMatcher(
            (action) => action.type.endsWith('/fulfilled'),
            (state) => {
                state.status = STATUS.SUCCESS;
                state.message = MESSAGE.SUCCESS;
            }
        );
        builder.addMatcher(
            (action) => action.type.endsWith('/rejected'),
            (state) => {
                state.status = STATUS.ERROR;
                state.message = MESSAGE.ERROR;
            }
        );
    },
});

export const authReducer = authSlice.reducer;
