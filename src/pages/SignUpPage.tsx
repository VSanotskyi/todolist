import AuthForm from '@components/UI/Form/AuthForm.tsx';

const SignUpPage = () => {
    return (
        <div className={'flex justify-center items-center w-full h-full p-8'}>
            <AuthForm type={'sign-up'} title={'Join us!'} />
        </div>
    );
};

export default SignUpPage;
