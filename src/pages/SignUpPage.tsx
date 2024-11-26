import AuthForm from '@components/UI/Form/AuthForm.tsx';

const SignUpPage = () => {
    const handleSubmit = () => {
        console.log('submit');
    };

    return (
        <div className={'flex justify-center items-center w-full h-full p-8'}>
            <AuthForm title={'Create account'} onSubmit={handleSubmit} />
        </div>
    );
};

export default SignUpPage;
