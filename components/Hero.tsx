"use client";

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Hitta, Sök eller Hyra en bil — snabbt och enkelt!
                </h1>
                <p className='hero__subtitle'>
                    Ta din biluthyrning till nya nivåer med vår episka app - säg hejdå till tråkiga köer och välkomna den ultimata åkturen!
                </p>
                <CustomButton
                    title="Utforska bilar"
                    containerStyles='bg-primary-green text-white rounded-full mt-'
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/huum.png' alt="hero" fill className="object-contain" />
                </div>

                <div className='hero__image-overlay'>
                </div>
            </div>
        </div>
    )
}

export default Hero