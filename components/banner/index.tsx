import {IconArrowRight} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

export default function Banner() {
    return (
      <div
        className="grid max-w-screen-xl px-4 sm:px-8 w-full pb-8 pt-4 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:pt-8 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-8 space-y-8 text-gray-50">
              <h1
                className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6xl dark:text-gray-50">
                  Embrace the Locum Lifestyle Today!</h1>
              <p
                className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
                  Empowering professionals world wide with flexible locum opportunities to thrive and make an impact!
              </p>
              <Link href="#"
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 gap-2 text-base font-medium text-center text-gray-700 duration-150 transition-all rounded-3xl bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  Post a job - $299
                  <IconArrowRight stroke={2} size={20}/>
              </Link>
          </div>
      </div>
    )
}