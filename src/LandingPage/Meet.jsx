import Link from 'next/link'
import React from 'react'

function Meet() {

    const components = [
        {
            name: '',
            description: '',
            image: '/images/1.png',
            linkText: 'Hydrogen the first batch 330 PlasmaW3bWorld Nft Release.',
            link: ''
        },
        {
            name: '',
            description: '',
            image: '/images/2.png',
            linkText: 'Deuterium the First batch 1110 PlasmaW3bWorld Release',
            link: ''
        },
        {
            name: '',
            description: '',
            image: '/images/3.png',
            linkText: 'Tritium the First batch 1860 PlasmaW3bWorld Nft Release.',
            link: ''
        },

    ]


    return (
        <div id="meet" data-aos="fade-up" data-aos-duration="2000" className=' pt-14 pb-36 bg-[url(/hero-bg3-wide-dark.png)] bg-center'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <h1 className={`text-sky-500 text-2xl font-semibold text-center pt-20`}>Meet the Plasma World Nfts</h1>
                <div className='lg:mt-12 mt-16 flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center items-center px-5 lg:px-0'>
                    <a href="https://iopay.me/" target="_blank">
                        <button className='bg-sky-500 hover:bg-white hover:text-gray-800 transition duration-200 text-white py-4 px-7 rounded-full'>Buy a PlasmaW3bWorld</button>
                    </a>
                    <button className='bg-white hover:bg-gray-800 hover:text-white transition duration-200 text-gray-600 py-4 px-7 rounded-full'>View full collection</button>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20 lg:w-4/5 mx-auto'>
                    {
                        components.map((component, index) => (
                            <div key={index} className='flex flex-col gap-5 p-5 border-sky-500 hover:bg-sky-500 hover:bg-opacity-5 border-opacity-40 border rounded-xl hover:translate-y-[-4px] transition duration-500 relative'>
                                <div className='flex flex-col items-center gap-5'>
                                    <img src={component.image} alt="" className='w-full rounded-md' />
                                    <div className=''>

                                        <Link href={component.link} target='_blank' className='  hover:text-sky-500 text-gray-200 transition duration-200 text-sm pt-3 text-left absolute mt-7 bottom-5'>
                                            {component.linkText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Meet