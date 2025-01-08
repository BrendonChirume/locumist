import {IconArrowRight} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Banner() {
    return (
      <section className="bg-white bg-gradient-to-r from-[#334155]  to-[#0f172a]">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 space-y-8 text-gray-50">
                  <h1
                    className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6xl dark:text-white">
                      Embrace the Locum Lifestyle Today!</h1>
                  <p
                    className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Transforming
                      pharmacy workflows: Join pharmacists nation wide simplifying locum shifts!</p>
                  <Link href="#"
                     className="inline-flex items-center justify-center px-5 py-3 mr-3 gap-2 text-base font-medium text-center text-primary-700 duration-150 transition-all rounded-3xl bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      Post a job - $299
                      <IconArrowRight stroke={2} size={20}/>
                  </Link>
                  {/*<Link href="#"*/}
                  {/*   className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">*/}
                  {/*    Speak to Sales*/}
                  {/*</Link>*/}
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                  <Image width={350} height={300} src={'/Pharmacist-cuate.svg'} alt="mockup"/>
              </div>
          </div>
      </section>
    )
}