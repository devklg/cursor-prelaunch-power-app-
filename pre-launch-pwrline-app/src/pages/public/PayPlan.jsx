import React from 'react';

const PayPlan = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Compensation Plan</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Unlimited Earning Potential
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Our compensation plan rewards your success with industry-leading commissions and bonuses.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Commission Structure */}
                        <div className="relative">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg font-medium text-gray-900">Direct Commissions</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Earn competitive commissions on every sale you make.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Bonuses */}
                        <div className="relative">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg font-medium text-gray-900">Team Bonuses</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Build your team and earn additional bonuses from their success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Rewards */}
                        <div className="relative">
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg font-medium text-gray-900">Leadership Rewards</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Unlock exclusive rewards as you grow your business.
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
                                Want to learn more about our compensation plan?
                            </h3>
                            <p className="mt-4 text-lg text-gray-500">
                                Join our pre-launch team to get detailed information about our compensation structure.
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

export default PayPlan; 