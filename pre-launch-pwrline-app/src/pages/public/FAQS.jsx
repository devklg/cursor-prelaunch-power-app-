import React, { useState } from 'react';

const FAQS = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Talk Fusion?",
            answer: "Talk Fusion is a revolutionary communication platform that combines video email, video conferencing, and video chat into one seamless experience."
        },
        {
            question: "When is the official launch?",
            answer: "Talk Fusion is scheduled to launch in April 2025. As a pre-launch promoter, you'll have exclusive access to the platform before the general public."
        },
        {
            question: "How do I become a pre-launch promoter?",
            answer: "Simply click the 'Join' button and complete the registration process. You'll be guided through the steps to become a pre-launch promoter."
        },
        {
            question: "What are the benefits of being a pre-launch promoter?",
            answer: "Pre-launch promoters receive exclusive access to the platform, special training, and the opportunity to build their team before the official launch."
        },
        {
            question: "Is there a cost to become a pre-launch promoter?",
            answer: "There is a one-time registration fee to become a pre-launch promoter. This fee includes your starter kit and access to training materials."
        },
        {
            question: "How does the compensation plan work?",
            answer: "Our compensation plan includes direct commissions, team bonuses, and leadership rewards. The more you grow your team, the more you can earn."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Frequently Asked Questions</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Everything you need to know
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Find answers to common questions about becoming a pre-launch promoter.
                    </p>
                </div>

                <div className="mt-12 max-w-3xl mx-auto">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white shadow rounded-lg">
                                <button
                                    className="w-full px-6 py-4 text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                        <span className="ml-6 flex-shrink-0">
                                            <svg
                                                className={`h-6 w-6 transform ${openIndex === index ? 'rotate-180' : ''}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-500">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <div className="bg-indigo-50 rounded-lg p-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                Still have questions?
                            </h3>
                            <p className="mt-4 text-lg text-gray-500">
                                Our team is here to help. Join our pre-launch team to get personalized support.
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

export default FAQS; 