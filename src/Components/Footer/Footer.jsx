import React from 'react';
import img from '../../assets/image/logo-footer.png';
import bgShadow from '../../assets/image/bg-shadow.png';

const Footer = () => {
    return (
        <div className="mt-50">
            <div className="relative">
                {/* news latter section */}
                <div className="relative">
                    {/* Glassmorphism Background Layer */}
                    <div
                        className="w-full absolute top-0 left-0 h-11/9 rounded-box shadow-md mx-2/3 -mt-5"
                        style={{
                            background: 'rgba(255, 255, 255, 0.2)', /* Adjust transparency here */
                            backdropFilter: 'blur(10px)', /* Adjust blur intensity here */
                            zIndex: 1,
                            border: '3px solid white'
                        }}
                    ></div>
                    {/* news latter section */}

                    <div
                        className="w-full justify-center enter flex relative z-2"
                        style={{ marginBottom: '-80px' }}
                    >
                        <div
                            className="bg-white w-2/3 rounded-box shadow-md p-10"
                            style={{
                                backgroundImage: `url(${bgShadow})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    Subscribe to our Newsletter
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Get the latest updates and news right in your inbox!
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full max-w-xs bg-white text-black placeholder-black"
                                />
                                <button
                                    className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold border-none hover:shadow-lg"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer section */}
                <footer className="bg-gray-900 text-gray-300 py-12 ">
                    <div className="flex justify-center mb-8 mt-20">
                        <img src={img} alt="" className="max-w-xs" />
                    </div>
                    <div className="container mx-auto px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="col-span-1 lg:col-span-1">
                            <h6 className="font-bold text-white mb-4">About Us</h6>
                            <p className="text-sm">
                                We are a passionate team dedicated to providing the best services to our
                                customers.
                            </p>
                        </div>
                        <div>
                            <h6 className="font-bold text-white mb-4">Quick Links</h6>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a href="#" className="hover:text-gray-500">Home</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-gray-500">Services</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:text-gray-500">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-500">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="justify-self-center md:justify-self-start lg:justify-self-start">
                            <h6 className="font-bold text-white mb-4">Subscribe</h6>
                            <p className="text-sm mb-2">
                                Subscribe to our newsletter for the latest updates.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full max-w-xs rounded-r-none bg-white text-black placeholder-black"
                                />
                                <button
                                    className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold border-none rounded-l-none hover:shadow-md"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-800 my-8" />
                    <div className="text-center mt-8">
                        <p className="text-xs text-gray-500">&copy; 2025 Your Company All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;