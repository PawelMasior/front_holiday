import React from 'react';
import Layout from '../components/layout/Layout';

const datatext = {
    "Terms of Use": [
        "Welcome to Lotan Group. By using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree to these terms and conditions, you should not use our services.",
    ],
    "Acceptance of Terms": [
        "Your access to and use of our services is conditioned on your acceptance of and compliance with these terms. These terms apply to all visitors, users, and others who access or use our services.",
    ],
    "User Registration": [
        "To use our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
        "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account or password.",
    ],
    "Prohibited Activities": [
        "You may not access or use our services for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations applicable to your use of our services.",
        "You may not engage in any activity that interferes with or disrupts our services or the servers and networks connected to our services.",
    ],
    "Content and Intellectual Property": [
        "Our services may contain content owned or licensed by Lotan Group. This content is protected by copyright, trademark, and other laws. You may not modify, reproduce, or distribute this content without our written permission.",
    ],
    "Disclaimer": [
        "Our services are provided on an 'as-is' and 'as-available' basis. Lotan Group does not warrant that the services will be uninterrupted, error-free, or free of viruses or other harmful components.",
        "We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.",
    ],
    "Governing Law": [
        "These terms are governed by and construed in accordance with the laws of [Your Jurisdiction], and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].",
    ],
    "Changes to Terms": [
        "We may revise these terms from time to time. The most current version of these terms will be posted on our website. By continuing to use our services after any revisions become effective, you agree to be bound by the revised terms.",
    ],
    "Contact Us": [
        "If you have any questions or concerns about these terms, please feel free to contact us at [Contact Information].",
    ],
};

const Content = () => {

    return (
        <Layout>
            <section className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect_stone.svg')" }}>
                <div className="container mx-auto">
                    <div className="py-2"></div>
                </div>
            </section>

            <div className={"pt-10"}>
                <div className={"container mx-auto"}>
                    <div className={"flex flex-wrap lg:flex-nowrap"}>
                        <div className={"w-full lg:w-auto"}>
                            <div className={"lg:pl-32 px-2"}>
                                {Object.entries(datatext).map(([title, content], index) => (
                                    <div key={index} className="py-4 lg:px-20">
                                        <h3 className="mb-2 lg:text-xl text-lg text-stone-600 font-semibold text-center">
                                            {title}
                                        </h3>
                                        {Array.isArray(content) ? (
                                            content.map((paragraph, idx) => (
                                                <p key={idx} className={"py-1 text-stone-500 text-sm text-justify lg:text-lg font-medium leading-relaxed animate__animated animate__fadeIn"}>
                                                    {paragraph}
                                                </p>
                                            ))
                                        ) : (
                                            <ul className="list-disc pl-6">
                                                {Object.entries(content).map(([term, definition], idx) => (
                                                    <li key={idx} className={"py-1 text-stone-500 text-sm text-justify lg:text-lg font-medium leading-relaxed animate__animated animate__fadeIn"}>
                                                        <strong>{term}</strong>: {definition}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Content;
