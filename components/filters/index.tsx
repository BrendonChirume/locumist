import React from 'react'
import {Disclosure, DisclosureButton, DisclosurePanel,} from '@headlessui/react'
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid'
import CheckBox from "@/components/ui/CheckBox";
import {Card, CardContent} from "@/components/ui/Card";


const filters = [
    {
        id: 'city',
        name: 'City',
        options: [
            {value: 'white', label: 'White', checked: false},
            {value: 'beige', label: 'Beige', checked: false},
            {value: 'blue', label: 'Blue', checked: true},
            {value: 'brown', label: 'Brown', checked: false},
            {value: 'green', label: 'Green', checked: false},
            {value: 'purple', label: 'Purple', checked: false},
        ],
    },
    {
        id: 'locum-rates',
        name: 'Locum rates',
        options: [
            {value: 'new-arrivals', label: 'New Arrivals', checked: false},
            {value: 'sale', label: 'Sale', checked: false},
            {value: 'travel', label: 'Travel', checked: true},
            {value: 'organization', label: 'Organization', checked: false},
            {value: 'accessories', label: 'Accessories', checked: false},
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
]

export default function Filters() {
    return (
      <Card className="sticky top-16 bg-gray-100 mx-auto w-4/5">
          <CardContent>
              <form className="mx-auto w-full">
                  <h3 className="font-semibold text-xl">Filters</h3>
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                        <h3 className="-my-3 flow-root">
                            <DisclosureButton
                              className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden"/>
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden"/>
                        </span>
                            </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                            <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex gap-3">
                                      <CheckBox id={`filter-${section.id}-${optionIdx}`} label={option.value}/>
                                  </div>
                                ))}
                            </div>
                        </DisclosurePanel>
                    </Disclosure>
                  ))}
              </form>
          </CardContent>
      </Card>
    )
}
