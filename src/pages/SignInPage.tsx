import SignIn from '@components/Auth/SignIn.tsx';
import { useAppDispatch } from '../store/store.ts';
import { IAuthReq } from '@utils/types/authInterfaces.ts';
import { authThunk } from '../store/auth/thunk.ts';

const SignInPage = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = async (dto: IAuthReq): Promise<void> => {
        const res = await dispatch(authThunk.signInThunk(dto));

        if (authThunk.signInThunk.fulfilled.match(res)) {
            console.log('success');
        }
    };
    return <SignIn onSubmit={handleSubmit} />;
};

export default SignInPage;
