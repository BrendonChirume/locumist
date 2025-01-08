"use client";
import {Checkbox, CheckboxProps} from '@headlessui/react'
import React, {useState} from 'react'
import {cn} from "@/lib/utils";
import {IconCheck} from "@tabler/icons-react";

interface CheckBoxProps extends CheckboxProps {
    label?: string
}

function generateUniqueString(length = 16) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

export default function CheckBox(props: CheckBoxProps) {
    const {label, onChange, id, ...rest} = props;
    const [checked, setChecked] = useState<boolean>(false)
    const uniqueString = generateUniqueString()

    const handleChange = (isChecked: boolean) => {
        setChecked(isChecked)
        return onChange && onChange(isChecked)
    }

    return (
      <label
        htmlFor={id ?? uniqueString}
        className="text-sm flex flex-1 items-center gap-x-4 text-gray-600">
          <input
            className="sr-only"
            id={id ?? uniqueString}
            type="checkbox"
            checked={checked}
            onChange={(event) => handleChange(event.target.checked)}/>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            className={
                cn(
                  "group size-6 flex items-center justify-center rounded-[6px] p-1 ring-1 ring-gray-300",
                  "ring-inset data-[checked]:bg-primary-500 data-[checked]:ring-0"
                )
            }
            {...rest}
          >
              <IconCheck
                stroke={3}
                size={20}
                className="hidden group-data-[checked]:block text-white"/>
          </Checkbox>
          {label}
      </label>
    )
}
