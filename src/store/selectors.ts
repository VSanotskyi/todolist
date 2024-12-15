import { RootState } from './store.ts';

const selectAuthAction = (state: RootState) => state.auth.action;
const selectAuthStatus = (state: RootState) => state.auth.status;
const selectAuthMessage = (state: RootState) => state.auth.message;
const selectAuthUser = (state: RootState) => state.auth.user;

export const authSelectors = {
    selectAuthAction,
    selectAuthStatus,
    selectAuthMessage,
    selectAuthUser,
};
