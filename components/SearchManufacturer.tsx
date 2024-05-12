"use client";

import {
  Combobox,
  Transition,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption
} from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import {manufacturers} from '@/constants'



const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');




  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );


  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt="Car Logo"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder='Volkswagen...'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.length === 0 &&
                query !== '' && (
                  <ComboboxOption
                    value={query}
                    className="search-manufacturer__option"
                  >
                    Create "{query}"
                  </ComboboxOption>
                ): (
                  filteredManufacturers.map((item)=> (
                    <ComboboxOption
                    key={item}
                    className={({ activeOption }) =>
                      `relative search-manufacturer__option ${
                        activeOption ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}>

                    </ComboboxOption>
                  ))
                )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer