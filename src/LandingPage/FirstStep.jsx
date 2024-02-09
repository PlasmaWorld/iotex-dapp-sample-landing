import React from 'react'
import StepCard from './StepCard'

function FirstStep() {

    const data = [
        {
            title: 'Iotex Delegate, PlasmaWorld Production company',
            description: 'Instantly buy & sell tokens across Solana. We use Raydium for optimal swap routes.',
            image: '/swap.svg'

        },
        {
            title: 'Real Estate Investment, Agriculture to the Next Step',
            description: 'It’s as easy as typing your request and get the most optimal set of transactions.',
            image: '/ai.svg'

        },
        {
            title: 'PlasmaWorld Crowndfounding ',
            description: 'Instantly buy & sell tokens across Solana. We use Raydium for optimal swap routes.',
            image: '/sniper.svg'

        },
    ]


    return (
        <div className='max-w-7xl mx-auto mt-36'>
            <div className="">
                <div>
                    <h2 className='text-sky-500 text-2xl font-semibold text-center pt-20 pb-10'>The first Steps to build the Plasma World EcoSystem</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-7">
                    <StepCard data={data[0]} />
                    <StepCard data={data[1]} />
                    <StepCard data={data[2]} />

                </div>
            </div>
        </div>
    )
}

export default FirstStep