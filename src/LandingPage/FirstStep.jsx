import React, { useState } from 'react';
import StepCard from './StepCard';
import { Text, Avatar, Group } from '@mantine/core';
import Modal from './M/Modal'; // Import the Modal component

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
    ];

    // Array of logo URLs
    const logos = [
        '/logo1.png',
        '/logo2.png',
        '/logo3.png',
        // Add more logo URLs as needed
    ];

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => setIsModalOpen(true);

    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='max-w-7xl mx-auto mt-36'>
            <div className="">
                <div>
                    <h2 className='text-sky-500 text-2xl font-semibold text-center pt-20 pb-10'>The first Steps to build the Plasma World EcoSystem</h2>
                </div>

                {/* Include the Banner component */}
               

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-7">
                    {data.map((step, index) => (
                        <StepCard
                            key={index}
                            data={step}
                            onReadArticle={openModal} // Pass the openModal function as prop to StepCard
                        />
                    ))}
                </div>
            </div>

            {/* Render the modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {/* Content of the modal */}
                <div>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text size="sm">Jason von Schwartzenberg</Text>
          <Text size="xs" c="dimmed">
            11.02.2024
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        This is the news section where all the News from the Foundation will apear.
      </Text>
    </div>

            </Modal>
        </div>
    );
}

export default FirstStep;
