import React from 'react';
import Button from '@components/UI/Button/Button.tsx';
import { useNavigate } from 'react-router';

const Logo: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <Button onClick={handleNavigate}>
            <div className="flex items-center space-x-2">
                {/* Іконка списку */}
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                        />
                    </svg>
                </div>
                {/* Назва логотипу */}
                <span className="text-2xl font-bold text-gray-800">
                    To<span className="text-blue-500">Do</span> List
                </span>
            </div>
        </Button>
    );
};

export default Logo;
