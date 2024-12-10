const Main = () => {
    return (
        <section
            className={
                'flex justify-center items-center bg-acc-blue text-white text-center py-16 px-6 md:py-24 md:px-12'
            }
        >
            <div className={'max-w-[50%]'}>
                <h1
                    className={'text-4xl md:text-5xl font-bold text-white mb-4'}
                >
                    Your Productivity, Simplified
                </h1>
                <p className={'text-lg md:text-xl font-light text-acc-gray'}>
                    Stay organized, focused, and productive with a simple,
                    easy-to-use to-do list app. Keep track of your tasks and
                    boost
                </p>
            </div>
        </section>
    );
};

export default Main;
