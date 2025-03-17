import React from 'react';

const Join = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                        Join the Pre-Launch Powerline
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Be part of the Magnificent group's pre-launch team for Talk Fusion's April 2025 launch.
                    </p>
                </div>

                {/* Registration Form will go here */}
                <div className="mt-10 max-w-xl mx-auto">
                    <div className="bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Register as a Pre-Launch Promoter
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                                <p>Join our team of 1000 pre-launch promoters and be part of something extraordinary.</p>
                            </div>
                            {/* Form will be implemented here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join; 