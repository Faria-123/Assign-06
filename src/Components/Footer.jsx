import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#0f172a] text-gray-400 py-16 px-6'>
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7 mb-16">

                    <div class="lg:col-span-2">
                        <h2 class="text-white text-3xl font-bold mb-4">DigiTools</h2>
                        <p class="text-lg leading-relaxed max-w-sm">
                            Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-white font-semibold mb-6">Product</h3>
                        <ul class="space-y-4">
                            <li><a href="#" class="hover:text-white transition">Features</a></li>
                            <li><a href="#" class="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" class="hover:text-white transition">Templates</a></li>
                            <li><a href="#" class="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-white font-semibold mb-6">Company</h3>
                        <ul class="space-y-4">
                            <li><a href="#" class="hover:text-white transition">About</a></li>
                            <li><a href="#" class="hover:text-white transition">Blog</a></li>
                            <li><a href="#" class="hover:text-white transition">Careers</a></li>
                            <li><a href="#" class="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-white font-semibold mb-6">Resources</h3>
                        <ul class="space-y-4 mb-8">
                            <li><a href="#" class="hover:text-white transition">Documentation</a></li>
                            <li><a href="#" class="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" class="hover:text-white transition">Community</a></li>
                            <li><a href="#" class="hover:text-white transition">Contact</a></li>
                        </ul>


                    </div>
                    <div>
                        <h3 class="text-white font-semibold mb-4">Social Links</h3>
                        <div class="flex gap-4">
                            <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
                                <img src="./Instagram.png" alt="" />
                            </a>
                            <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
                                <img src="./Facebook.png" alt="" />
                            </a>
                            <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
                                <img src="./fi_5968958.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2026 Digitools. All rights reserved.</p>
                    <div class="flex gap-8 mt-4 md:mt-0">
                        <a href="#" class="hover:text-white transition">Privacy Policy</a>
                        <a href="#" class="hover:text-white transition">Terms of Service</a>
                        <a href="#" class="hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;