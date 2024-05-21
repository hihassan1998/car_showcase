"use client"

import { CustomFilterProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '@/utils'


const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    
    router.push(newPathName, { scroll: false });
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
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
          <ListboxOptions className='custom-filter__options'>
            {/* Map over the options and display them as listbox options */}
            {options.map((option) => (
              <ListboxOption
                key={option.title}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-green text-white" : "text-gray-900"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                      {option.title}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>

        </Transition>

      </div>

    </Listbox>


    </div >
  )
}

export default CustomFilter