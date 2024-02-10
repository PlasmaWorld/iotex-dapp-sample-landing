import React from 'react'

function Part() {
    return (
        <div id="meet" data-aos="fade-up" data-aos-duration="2000" className=' pt-14 pb-36 bg-center'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <h1 className={`text-sky-500 text-2xl font-semibold text-center pt-20`}>Be a part of the team</h1>

                <p className=' mt-5 px-5 lg:text-xl pt-3 lg:pt-5 lg:w-2/3 mx-auto text-center'>Join the community and be a part of the team. Get the latest updates and news about the project.</p>

                <div className='lg:mt-12 mt-16 flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center items-center px-5 lg:px-0'>
                    <a href="https://iopay.me/" target="_blank">
                        <button className='bg-sky-500 hover:bg-gray-300 hover:text-gray-800 transition duration-200 text-white py-4 px-10 rounded-full'>Join our team</button>
                    </a>

                </div>



            </div>
        </div>
    )
}

export default Part