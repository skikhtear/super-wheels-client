import React from 'react';

const About = () => {
    return (
        <div className='my-10'>
            <div className="hero  bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.ccarprice.com/products/Honda_Civic_Sedan_2022_1.jpg?fbclid=IwAR1bYuj1SJOPSw9frd7hVceIH_AH_dGNW5aSdjtT1IJ-ZJ86cWThZBCMa-4" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Find The Car You Want</h1>
                        <p className="py-6">Super Wheels is the leading brand and most reliable online auto marketplace developed by Super Wheels Ventures Limited. Super Wheels was founded in 2021. Our headquarter is in Dhaka (Bangladesh). It’s mission is to bring ease and delight in car buying and selling process.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;