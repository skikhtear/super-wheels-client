import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://banner2.cleanpng.com/20180609/cok/kisspng-tesla-model-3-tesla-motors-car-electric-vehicle-tesla-model-3-5b1c6cb16be920.565542881528589489442.jpg?fbclid=IwAR28bZfK91zxxOeC-4oKmVwlJDHPHI1h3GPOX0C4IxnlJMbtIolE-NSyAA8" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;