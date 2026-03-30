import React from 'react';

const Get = () => {
    return (
        <div className='bg-gray-100'>

            <section class="py-16 text-center">

                {/* <!-- Title --> */}
                <h2 class="text-3xl font-bold text-gray-800">
                    Get Started In 3 Steps
                </h2>
                <p class="text-gray-500 mt-2">
                    Start using premium digital tools in minutes, not hours.
                </p>

                {/* <!-- Cards --> */}
                <div class="grid md:grid-cols-3 gap-6 mt-10 px-6 md:px-20">

                    {/* <!-- Card 1 --> */}
                    <div class="bg-white rounded-xl shadow-sm p-6 relative w-[380px] h-[380px] flex flex-col justify-center items-center text-center">
                        <span class="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                            01
                        </span>

                        <div class="flex justify-center mb-4">
                            <div class="bg-purple-100 p-4 rounded-full">

                                <img src="./user.png" class="w-[70px] h-[70px]" />
                            </div>
                        </div>

                        <h3 class="font-semibold text-lg text-gray-800">
                            Create Account
                        </h3>
                        <p class="text-gray-500 text-sm mt-2">
                            Sign up for free in seconds. No credit card <br />required to get started.
                        </p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div class="bg-white rounded-xl shadow-sm p-6 relative w-[380px] h-[380px] flex flex-col justify-center items-center text-center">
                        <span class="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                            02
                        </span>

                        <div class="flex justify-center mb-4">
                            <div class="bg-purple-100 p-4 rounded-full">
                                <img src="./package.png" class="w-[70px] h-[70px]" />
                            </div>
                        </div>

                        <h3 class="font-semibold text-lg text-gray-800">
                            Choose Products
                        </h3>
                        <p class="text-gray-500 text-sm mt-2">
                            Browse our catalog and select the tools <br />that fit your needs.
                        </p>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div class="bg-white rounded-xl shadow-sm p-6 relative w-[380px] h-[380px] flex flex-col justify-center items-center text-center">
                        <span class="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                            03
                        </span>

                        <div class="flex justify-center mb-4">
                            <div class="bg-purple-100 p-4 rounded-full">
                                <img src="./rocket.png" class="w-[70px] h-[70px]" />
                            </div>
                        </div>

                        <h3 class="font-semibold text-lg text-gray-800">
                            Start Creating
                        </h3>
                        <p class="text-gray-500 text-sm mt-2">
                            Download and start using your premium <br />tools immediately.
                        </p>
                    </div>

                </div>

            </section>


        </div>
    );
};

export default Get;