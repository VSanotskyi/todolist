import AuthForm from '@components/UI/Form/AuthForm.tsx';

const SignInPage = () => {
    return (
        <div className={'flex justify-center items-center w-full h-full p-8'}>
            <AuthForm type={'sign-in'} title={'Welcome back!'} />
        </div>
    );
};

export default SignInPage;
