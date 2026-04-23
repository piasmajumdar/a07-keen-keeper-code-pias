import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
                <div className="text-center max-w-md">
                    {/* 404 Number */}
                    <h1 className="text-9xl font-extrabold text-primary">404</h1>

                    {/* Message */}
                    <h2 className="text-2xl md:text-3xl font-bold mt-4">
                        Page Not Found
                    </h2>
                    <p className="text-base-content/70 mt-2">
                        Oops! The page you are looking for doesn’t exist or has been moved.
                    </p>

                    {/* Button */}
                    <Link to="/" className="btn btn-primary mt-6">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;