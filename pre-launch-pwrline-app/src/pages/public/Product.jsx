import React from 'react';

const Product = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Talk Fusion</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        The Future of Communication
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Join us in revolutionizing how people connect and communicate in the digital age.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="relative">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg font-medium text-gray-900">Video Email</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Send personalized video messages that stand out in any inbox.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="relative">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg font-medium text-gray-900">Video Conferencing</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Host professional video meetings with crystal-clear quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="relative">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg font-medium text-gray-900">Video Chat</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Connect face-to-face with anyone, anywhere in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="bg-indigo-50 rounded-lg p-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                Ready to be part of the future?
                            </h3>
                            <p className="mt-4 text-lg text-gray-500">
                                Join our pre-launch team and be among the first to experience the next generation of communication.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="/join"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Join the Pre-Launch Team
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product; 