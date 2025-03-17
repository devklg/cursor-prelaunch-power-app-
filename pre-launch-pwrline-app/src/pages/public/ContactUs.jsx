import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Contact Us</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Get in Touch
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Have questions? We're here to help you succeed.
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto">
                    <div className="bg-white shadow rounded-lg p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">Email</h3>
                            <p className="mt-2 text-base text-gray-500">support@prelaunchpowerline.com</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                            <p className="mt-2 text-base text-gray-500">1-800-POWERLINE</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                            <p className="mt-2 text-base text-gray-500">Mon-Fri: 9am-6pm EST</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="bg-indigo-50 rounded-lg p-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                Ready to join our team?
                            </h3>
                            <p className="mt-4 text-lg text-gray-500">
                                Become a pre-launch promoter and be part of something extraordinary.
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

export default ContactUs; 