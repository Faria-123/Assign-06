import React from 'react';

const Pricing = () => {
    return (
        <div className='bg-gray-100 py-16'>
            {/* start */}


            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800">
                    Simple, Transparent Pricing
                </h2>
                <p class="text-gray-500 mt-2">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* <!-- Cards --> */}
            <div class="flex flex-wrap justify-center gap-6 container mx-auto">


                <div class="w-[380px] bg-white rounded-xl shadow-sm p-6">
                    <h3 class="font-semibold text-lg text-gray-800">Starter</h3>
                    <p class="text-gray-400 text-sm mb-4">Perfect for getting started</p>

                    <h2 class="text-3xl font-bold">$0<span class="text-sm text-gray-400"> /Month</span></h2>

                    <ul class="mt-4 space-y-2 text-sm text-gray-600">
                        <li>✔ Access to 10 free tools</li>
                        <li>✔ Basic templates</li>
                        <li>✔ Community support</li>
                        <li>✔ 1 project per month</li>
                    </ul>

                    <button class="mt-20 w-full py-2 rounded-full 
                    bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
                     text-white font-semibold">
                        Get Started Free
                    </button>
                </div>


                <div class="w-[380px] rounded-xl p-6 text-white relative
                bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-lg">

                    <span class="absolute -top-3 left-1/2 -translate-x-1/2 
                   bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
                        Most Popular
                    </span>

                    <h3 class="font-semibold text-lg">Pro</h3>
                    <p class="text-sm opacity-80 mb-4">Best for professionals</p>

                    <h2 class="text-3xl font-bold">$29<span class="text-sm opacity-80"> /Month</span></h2>

                    <ul class="mt-4 space-y-2 text-sm">
                        <li>✔ Access to all premium tools</li>
                        <li>✔ Unlimited templates</li>
                        <li>✔ Priority support</li>
                        <li>✔ Unlimited projects</li>
                        <li>✔ Cloud sync</li>
                        <li>✔ Advanced analytics</li>
                    </ul>

                    <button class="mt-6 w-full py-2 rounded-full bg-white text-purple-600 font-semibold">
                        Start Pro Trial
                    </button>
                </div>


                <div class="w-[380px] bg-white rounded-xl shadow-sm p-6">
                    <h3 class="font-semibold text-lg text-gray-800">Enterprise</h3>
                    <p class="text-gray-400 text-sm mb-4">For teams and businesses</p>

                    <h2 class="text-3xl font-bold">$99<span class="text-sm text-gray-400"> /Month</span></h2>

                    <ul class="mt-4 space-y-2 text-sm text-gray-600">
                        <li>✔ Everything in Pro</li>
                        <li>✔ Team collaboration</li>
                        <li>✔ Custom integrations</li>
                        <li>✔ Dedicated support</li>
                        <li>✔ SLA guarantee</li>
                        <li>✔ Custom branding</li>
                    </ul>

                    <button class="mt-6 w-full py-2 rounded-full 
                     bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
                     text-white font-semibold">
                        Contact Sales
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Pricing;