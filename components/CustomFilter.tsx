"use client"

import { CustomFilterProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, ListboxButton, Transition } from '@headlessui/react'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);


  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <ListboxButton className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt="chevron up down"

            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >

          </Transition>

        </div>

      </Listbox>


    </div>
  )
}

export default CustomFilter