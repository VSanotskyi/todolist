import React from 'react';
import { Link } from 'react-router';

import Button from '@components/UI/Button/Button.tsx';

interface IFormHeaderProps {
    title: string;
}

const FormHeader: React.FC<IFormHeaderProps> = ({ title }) => {
    return (
        <div className={'flex flex-col gap-2'}>
            <h3 className={'text-xl border-b border-acc-gray'}>{title}</h3>
        </div>
    );
};

interface IFormFooterProps {
    text: string;
    link: {
        text: string;
        path: string;
    };
}

interface IProps {
    title: string;
    children: React.ReactNode;
    onSubmit: () => void;
    buttonTitle: string;
    footer?: IFormFooterProps;
}

const FormFooter: React.FC<IFormFooterProps> = ({ text, link }) => {
    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex gap-1 p-space-sm'}>
                <p>{text}</p>
                <Link
                    to={link.path}
                    className={'underline hover:text-cl-hover'}
                >
                    {link.text}
                </Link>
            </div>
        </div>
    );
};

const Form: React.FC<IProps> = ({
    title,
    children,
    onSubmit,
    buttonTitle,
    footer,
}) => {
    return (
        <form
            onSubmit={onSubmit}
            className={
                'flex flex-col gap-4 p-space-md rounded shadow-acc-gray w-full max-w-96 border border-accentGray shadow-lg'
            }
        >
            <FormHeader title={title} />
            {children}
            <Button type={'submit'} mode={'primary'} className={'text-xl'}>
                {buttonTitle}
            </Button>
            {footer && <FormFooter text={footer.text} link={footer.link} />}
        </form>
    );
};

export default Form;
