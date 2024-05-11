"use client" ;

import React from 'react'
import CustomButton from './CustomButton'

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
                    containerStyles='bg-primary-blue text-white rounded-full mt-'
                    handleClick={handleScroll}
                />
            </div>
        </div>
    )
}

export default Hero