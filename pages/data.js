import React from 'react';
import Layout from '../components/layout/Layout';
import FormReport from '../components/FormReport'

const Data = () => {
    return (
        <>
            <Layout>

                <div className="pb-20 lg:pt-20  bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50 w-full h-full top-0 left-0">
                    <div className="max-w-3xl mx-auto flex justify-center">
                            <FormReport />
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default Data;