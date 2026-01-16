import React from 'react';

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'white';
    text?: string;
    showText?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
                                             size = 'md',
                                             color = 'primary',
                                             text = 'Loading...',
                                             showText = true,
                                         }) => {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
    };

    const colorClasses = {
        default: 'border-gray-200 border-t-gray-600',
        primary: 'border-gray-200 border-t-blue-600',
        white: 'border-gray-300 border-t-white',
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative">
                <div
                    className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin`}
                />
            </div>
            {showText && (
                <p className={`mt-3 text-${color === 'white' ? 'white' : 'gray-600'}`}>
                    {text}
                </p>
            )}
        </div>
    );
};

export default Loading;