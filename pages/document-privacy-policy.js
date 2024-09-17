import React from 'react';
import Layout from '../components/layout/Layout';

const datatext = {
    "Privacy Policy": [
      "Lotan Group is committed to protecting your privacy and ensuring the security of your personal and financial information. This Privacy Policy outlines our practices regarding the collection, use, and protection of the data you provide to us.",
    ],
    "Information Collection": [
      "We only collect the necessary personal and financial data required for our services, and we do so with your explicit consent.",
      "All data collected is securely stored and is accessible only to authorized personnel. We treat sensitive financial information with the highest level of care and safeguard it using advanced security measures.",
    ],
    "Data Usage and Purpose": [
      "Your data is used exclusively to enhance our financial services, provide analysis and insights, and improve the overall user experience of our platform.",
      "We do not share your data with third parties without your explicit consent, except when required by applicable laws and regulations.",
    ],
    "Data Security": [
      "We employ rigorous security measures to protect your data from unauthorized access, data breaches, and cyber threats.",
      "Advanced encryption and access controls are in place to ensure the confidentiality and integrity of your information.",
    ],
    "User Rights": [
      "You have the right to access, correct, or delete your personal and financial information. You can also opt out of certain data processing activities.",
      "We respect your choices regarding data usage and provide mechanisms for you to exercise your rights.",
    ],
    "Cookies and Tracking": [
      "Our platform may use cookies and similar technologies to enhance your browsing experience and gather usage data.",
      "You can manage your preferences related to cookies and tracking in your browser settings.",
    ],
    "Changes to Policy": [
      "We may update our Privacy Policy periodically to reflect changes in our practices or legal requirements.",
      "Any updates will be communicated to you, and your continued use of our services implies your consent to the revised policy.",
    ],
    "Contact Us": [
      "If you have any questions or concerns about your privacy or data, please feel free to contact our dedicated privacy team.",
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
