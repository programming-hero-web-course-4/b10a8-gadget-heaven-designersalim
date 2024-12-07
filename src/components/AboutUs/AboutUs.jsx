import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="bg-purple-600">
                <div className="w-9/12 mx-auto py-8">
                    <h2 className="text-center font-bold text-3xl text-white">About Us</h2>
                    <p className="text-center text-lg w-7/12 text-white mx-auto py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div class="w-9/12 my-10 mx-auto items-center justify-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-center items-start gap-8 flex">
                        <div class="flex-col justify-start lg:items-start items-center gap-4 flex">

                            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    class="text-purple-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    The Tale of Our Achievement Story</h2>
                                <p
                                    class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Our achievement story is a testament to teamwork and perseverance. Together, we've
                                    overcome challenges, celebrated victories, and created a narrative of progress and
                                    success.</p>
                            </div>
                        </div>
                        <div class="w-full flex-col justify-center items-start gap-6 flex">
                            <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                                        Landscapes Together</p>
                                </div>
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                                    </h4>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                        Through Success</p>
                                </div>
                            </div>
                            <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                                        Innovation Wins Understanding</p>
                                </div>
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                                        Clients</h4>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                                        Client Satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:justify-start justify-center items-start flex">
                    <div
                        class="sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                        <img class="h-[400px] rounded-3xl object-cover"
                            src="../bg-image.jpg" alt="about Us image" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;