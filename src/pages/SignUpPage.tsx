import SignUp from '@components/Auth/SignUp.tsx';
import { useAppDispatch } from '../store/store.ts';
import { authThunk } from '../store/auth/thunk.ts';
import { IAuthReq } from '@utils/types/authInterfaces.ts';

const SignUpPage = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = async (dto: IAuthReq): Promise<void> => {
        const res = await dispatch(authThunk.signUpThunk(dto));
        if (authThunk.signUpThunk.fulfilled.match(res)) {
            console.log('success');
        }
    };

    return <SignUp onSubmit={handleSubmit} />;
};

export default SignUpPage;
